import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// constants

// helpers
import { findAllParent, findMenuItem } from "../../helpers/menu";

// hooks
import { useViewPort } from "../../hooks";
import { splitArray } from "../../utils";
import { Col, Row } from "react-bootstrap";
const MenuItemWithChildren = ({
  item,
  tag,
  linkClassName,
  className,
  subMenuClassNames,
  activeMenuItems,
  toggleMenu,
}) => {
  const Tag = tag;
  const { width } = useViewPort();
  const [open, setOpen] = useState(activeMenuItems.includes(item.key));
  const showMenu = width <= 768 && open;
  const hasChild =
    item.children &&
    (item.children || []).filter(
      (child) => child.children?.length && child.children
    );
  const hasGrandChildren =
    !(hasChild.length > 0 && hasChild) && item.children.length >= 15;
  let chunks = hasGrandChildren ? splitArray(item.children, 8) : [];
  useEffect(() => {
    setOpen(activeMenuItems.includes(item.key));
  }, [activeMenuItems, item]);

  /**
   * toggles the menu
   */
  const toggleMenuItem = (e) => {
    e.preventDefault();
    const status = !open;
    setOpen(status);
    if (toggleMenu) toggleMenu(item, status);
    return false;
  };
  return (
    <Tag
      className={`${className} ${
        activeMenuItems.includes(item.key) ? "active" : ""
      }`}
    >
      <Link
        to="/#"
        onClick={toggleMenuItem}
        data-menu-key={item.key}
        className={`${linkClassName} ${
          activeMenuItems.includes(item.key) ? "active" : ""
        }`}
        id={item.key}
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.icon && <i className={item.icon} />}
        {item.label}
        <div className="arrow-down" />
      </Link>

      {item.children &&
        (hasGrandChildren ? (
          <div
            className={`${subMenuClassNames} dropdown-mega-menu-lg dropdown-mega-menu-xl ${
              showMenu ? "show" : ""
            }`}
            aria-labelledby={item.key}
          >
            <Row>
              {(chunks || []).map((child, idx) => {
                return (
                  <Col key={idx} lg={4}>
                    <MegaMenu item={child} activeMenuItems={activeMenuItems} />
                  </Col>
                );
              })}
            </Row>
          </div>
        ) : (
          <ul
            className={`${subMenuClassNames} ${showMenu ? "show" : ""}`}
            aria-labelledby={item.key}
          >
            {(item.children || []).map((child, idx) => {
              return (
                <React.Fragment key={idx}>
                  {child.children ? (
                    <MenuItemWithChildren
                      item={child}
                      tag="li"
                      linkClassName={`dropdown-item ${
                        activeMenuItems.includes(child.key) ? "active" : ""
                      }`}
                      activeMenuItems={activeMenuItems}
                      className="dropdown"
                      subMenuClassNames="dropdown-menu"
                      toggleMenu={toggleMenu}
                    />
                  ) : (
                    <MenuItemLink
                      item={child}
                      className={`dropdown-item ${
                        activeMenuItems.includes(child.key) ? "active" : ""
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        ))}
    </Tag>
  );
};
const MenuItem = ({ item, className, linkClassName }) => {
  return (
    <li className={className}>
      <MenuItemLink item={item} className={linkClassName} />
    </li>
  );
};
const MenuItemLink = ({ item, className }) => {
  return (
    <Link
      className={`dropdown-item ${className}`}
      to={item.url}
      target={item.target}
      data-menu-key={item.key}
    >
      {item.icon && <i className={item.icon} />}
      {item.label}
    </Link>
  );
};
const MegaMenu = ({ item, activeMenuItems }) => {
  return (
    <>
      {item.map((child, i) => {
        return (
          <MenuItemLink
            key={i}
            item={child}
            className={`dropdown-item ${
              activeMenuItems.includes(child.key) ? "active" : ""
            }`}
          />
        );
      })}
    </>
  );
};

/**
 * Renders the application menu
 */

const AppMenu = ({ menuItems }) => {
  const [topNavMenuItems] = useState(menuItems);
  const [activeMenuItems, setActiveMenuItems] = useState([]);
  let location = useLocation();
  const menuRef = useRef(null);

  /**
   * toggle the menus
   */
  const toggleMenu = (menuItem, show) => {
    if (show) {
      setActiveMenuItems([
        menuItem.key,
        ...findAllParent(topNavMenuItems, menuItem),
      ]);
    }
  };

  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    const div = document.getElementById("main-side-menu");
    let matchingMenuItem = null;
    if (div) {
      let items = div.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        let trimmedURL = location?.pathname;
        if (trimmedURL === items[i]?.pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        const mid = matchingMenuItem.getAttribute("data-menu-key");
        const activeMt = findMenuItem(topNavMenuItems, mid);
        if (activeMt) {
          setActiveMenuItems([
            activeMt["key"],
            ...findAllParent(topNavMenuItems, activeMt),
          ]);
        }
      }
    }
  }, [location.pathname, topNavMenuItems]);
  useEffect(() => {
    if (topNavMenuItems && topNavMenuItems.length > 0) activeMenu();
  }, [activeMenu, topNavMenuItems]);
  return (
    <ul className="navbar-nav" ref={menuRef} id="main-side-menu">
      {(topNavMenuItems || []).map((item, idx) => {
        return (
          <React.Fragment key={idx}>
            {item.children ? (
              <MenuItemWithChildren
                item={item}
                tag="li"
                className="nav-item dropdown"
                subMenuClassNames="dropdown-menu"
                activeMenuItems={activeMenuItems}
                linkClassName="nav-link dropdown-toggle arrow-none"
                toggleMenu={toggleMenu}
              />
            ) : (
              <MenuItem
                item={item}
                className={
                  activeMenuItems.includes(item.key)
                    ? "nav-item active"
                    : "nav-item"
                }
                linkClassName={
                  activeMenuItems.includes(item.key)
                    ? "active nav-link"
                    : "nav-link"
                }
              />
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};
export default AppMenu;
