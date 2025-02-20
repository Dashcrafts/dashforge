import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse } from "react-bootstrap";

// helpers
import {
  findAllParent,
  findMenuItem,
  getMenuItemFromURL,
} from "../helpers/menu";

// constants

const MenuItemWithChildren = ({
  item,
  linkClassName,
  subMenuClassNames,
  activeMenuItems,
  toggleMenu,
}) => {
  const [open, setOpen] = useState(activeMenuItems.includes(item.key));
  useEffect(() => {
    setOpen(activeMenuItems.includes(item.key));
  }, [activeMenuItems, item]);
  const toggleMenuItem = () => {
    const status = !open;
    setOpen(status);
    if (toggleMenu) toggleMenu(item, status);
    return false;
  };
  return (
    <li className={`side-nav-item ${open ? "menuitem-active" : ""}`}>
      <Link
        to="#"
        className={`${linkClassName}`}
        aria-expanded={open}
        data-menu-key={item.key}
        onClick={toggleMenuItem}
      >
        {item.icon && <i className={item.icon} />}
        {!item.badge ? (
          <span className="menu-arrow" />
        ) : (
          <span className={`badge bg-${item.badge.variant} float-end`}>
            {item.badge.text}
          </span>
        )}
        <span> {item.label}</span>
      </Link>
      <Collapse in={open}>
        <div>
          <ul className={`side-nav-second-level ${subMenuClassNames}`}>
            {(item.children || []).map((child, idx) => {
              return (
                <React.Fragment key={idx}>
                  {child.children ? (
                    <MenuItemWithChildren
                      item={child}
                      linkClassName={
                        activeMenuItems.includes(child.key) ? "active" : ""
                      }
                      activeMenuItems={activeMenuItems}
                      subMenuClassNames="sub-menu"
                      toggleMenu={toggleMenu}
                    />
                  ) : (
                    <MenuItem
                      item={child}
                      className={
                        activeMenuItems.includes(child.key)
                          ? "menuitem-active"
                          : ""
                      }
                      linkClassName={
                        activeMenuItems.includes(child.key) ? "active" : ""
                      }
                    />
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </Collapse>
    </li>
  );
};
const MenuItem = ({ item, className, linkClassName }) => {
  return (
    <li className={`${className}`}>
      <MenuItemLink item={item} className={linkClassName} />
    </li>
  );
};
const MenuItemLink = ({ item, className }) => {
  return (
    <Link
      to={item.url}
      target={item.target}
      className={`${className}`}
      data-menu-key={item.key}
      aria-expanded={true}
    >
      {item.icon && <i className={item.icon} />}
      <span> {item.label}</span>
      {item.badge && (
        <span className={`badge bg-${item.badge.variant} float-end`}>
          {item.badge.text}
        </span>
      )}
    </Link>
  );
};

/**
 * Renders the application menu
 */

const AppMenu = ({ menuItems }) => {
  const location = useLocation();
  const menuRef = useRef(null);
  const [activeMenuItems, setActiveMenuItems] = useState([]);
  const toggleMenu = (menuItem, show) => {
    if (show) {
      setActiveMenuItems([
        menuItem["key"],
        ...findAllParent(menuItems, menuItem),
      ]);
    }
  };
  const activeMenu = useCallback(() => {
    const trimmedURL = location.pathname;
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL);
    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key);
      if (activeMt) {
        setActiveMenuItems([
          activeMt["key"],
          ...findAllParent(menuItems, activeMt),
        ]);
      }

      // setTimeout(function () {
      //     const activatedItem: HTMLAnchorElement | null = document.querySelector(`#leftside-menu-container .simplebar-content a[href="${trimmedURL}"]`)

      //     if (activatedItem) {
      //         const simplebarContent = document.querySelector("#leftside-menu-container .simplebar-content-wrapper");

      //         if (simplebarContent) {
      //             const offset = activatedItem.offsetTop - window.innerHeight * 0.4
      //             scrollTo(simplebarContent, offset, 500)
      //         }
      //     }
      // }, 200);

      // // scrollTo (Left Side Bar Active Menu)
      // const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      //     t /= d / 2;
      //     if (t < 1) return (c / 2) * t * t + b;
      //     t--;
      //     return (-c / 2) * (t * (t - 2) - 1) + b;
      // };

      // const scrollTo = (element: any, to: any, duration: any) => {
      //     const start = element.scrollTop,
      //         change = to - start,
      //         increment = 20;
      //     let currentTime = 0;
      //     const animateScroll = function () {
      //         currentTime += increment;
      //         const val = easeInOutQuad(currentTime, start, change, duration);
      //         element.scrollTop = val;
      //         if (currentTime < duration) {
      //             setTimeout(animateScroll, increment);
      //         }
      //     };
      //     animateScroll();
      // };
    }
  }, [location.pathname, menuItems]);
  useEffect(() => {
    if (menuItems && menuItems.length > 0) activeMenu();
  }, [activeMenu, menuItems]);
  return (
    <>
      <ul className="side-nav" ref={menuRef} id="main-side-menu">
        {(menuItems || []).map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              {item.isTitle ? (
                <li className="side-nav-title">{item.label}</li>
              ) : (
                <>
                  {item.children ? (
                    <MenuItemWithChildren
                      item={item}
                      toggleMenu={toggleMenu}
                      subMenuClassNames=""
                      activeMenuItems={activeMenuItems}
                      // linkClassName='side-nav-link'
                      linkClassName={`side-nav-link ${
                        activeMenuItems.includes(item.key) ? "active" : ""
                      }`}
                    />
                  ) : (
                    <MenuItem
                      item={item}
                      toggleMenu={toggleMenu}
                      linkClassName={`side-nav-link ${
                        activeMenuItems.includes(item.key) ? "active" : ""
                      }`}
                      className={`side-nav-item ${
                        activeMenuItems.includes(item.key)
                          ? "menuitem-active"
                          : ""
                      }`}
                    />
                  )}
                </>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};
export default AppMenu;
