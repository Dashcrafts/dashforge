import React from "react";
import { Link } from "react-router-dom";

// hooks
import { useViewPort } from "../hooks";

// components
import {
  CreateNew,
  LanguageDropdown,
  MaximizeScreen,
  MegaMenu,
  NotificationDropdown,
  ProfileDropDown,
  TopBarSearch,
  AppsDropDown,
} from "../components";

// assets
import profilePic from "../assets/images/users/user-1.jpg";
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";
import logoSm from "../assets/images/logo-sm.png";
import avatar3 from "../assets/images/users/avatar-3.jpg";
import avatar2 from "../assets/images/users/avatar-2.jpg";
import { useLayoutContext } from "@/context/useLayoutContext";
const createNewOptions = [
  {
    id: 1,
    label: "New Projects",
    icon: "fe-briefcase",
  },
  {
    id: 2,
    label: "Create Users",
    icon: "fe-user",
  },
  {
    id: 3,
    label: "Revenue Report",
    icon: "fe-bar-chart-line-",
  },
  {
    id: 4,
    label: "Settings",
    icon: "fe-settings",
  },
  {
    id: 4,
    label: "Help & Support",
    icon: "fe-headphones",
  },
];
// get mega-menu options
const megaMenuOptions = [
  {
    id: 1,
    title: "UI Components",
    menuItems: [
      "Widgets",
      "Nestable List",
      "Range Sliders",
      "Masonry Items",
      "Sweet Alerts",
      "Treeview Page",
      "Tour Page",
    ],
  },
  {
    id: 2,
    title: "Applications",
    menuItems: [
      "eCommerce Pages",
      "CRM Pages",
      "Email",
      "Calendar",
      "Team Contacts",
      "Task Board",
      "Email Templates",
    ],
  },
  {
    id: 3,
    title: "Extra Pages",
    menuItems: [
      "Left Sidebar with User",
      "Menu Collapsed",
      "Small Left Sidebar",
      "New Header Style",
      "Search Result",
      "Gallery Pages",
      "Maintenance & Coming Soon",
    ],
  },
];
/**
 * notification items
 */
const notificationOptions = [
  {
    id: 1,
    text: "Datacorp",
    subText: "Caleb Flakelar commented on Admin",
    icon: "ri-message-3-line fs-18",
    bgColor: "primary",
    createdAt: subtractHours(new Date(), 1),
  },
  {
    id: 2,
    text: "Admin",
    subText: "New user registered",
    icon: "ri-user-add-line fs-18",
    bgColor: "info",
    createdAt: subtractHours(new Date(), 60),
  },
  {
    id: 3,
    text: "Cristina Pride",
    subText: "Hi, How are you? What about our next meeting",
    avatar: avatar3,
    createdAt: subtractHours(new Date(), 1440),
  },
  {
    id: 4,
    text: "Datacorp",
    subText: "Caleb Flakelar commented on Admin",
    icon: "ri-discuss-line fs-18",
    bgColor: "primary",
    createdAt: subtractHours(new Date(), 2880),
  },
  {
    id: 5,
    text: "Karen Robinson",
    subText: "Wow ! this admin looks good and awesome design",
    avatar: avatar2,
    createdAt: subtractHours(new Date(), 2880),
  },
];

/**
 * profile menu items
 */
const profileMenus = [
  {
    label: "My Account",
    icon: "ri-account-circle-line",
    redirectTo: "/pages/profile",
  },
  {
    label: "Settings",
    icon: "ri-settings-4-line",
    redirectTo: "/pages/profile",
  },
  {
    label: "Support",
    icon: "ri-customer-service-2-line",
    redirectTo: "/pages/faq",
  },
  {
    label: "Lock Screen",
    icon: "ri-lock-password-line",
    redirectTo: "/auth/lock-screen",
  },
  {
    label: "Logout",
    icon: "ri-logout-box-line",
    redirectTo: "/auth/logout",
  },
];

/**
 * for subtraction minutes
 */
function subtractHours(date, minutes) {
  date.setMinutes(date.getMinutes() - minutes);
  return date;
}
const Topbar = () => {
  const { width } = useViewPort();
  const {
    menu,
    theme,
    orientation,
    changeTheme,
    changeMenuSize,
    themeCustomizer,
  } = useLayoutContext();

  /**
   * Toggle the leftmenu when having mobile screen
   */
  const handleLeftMenuCallBack = () => {
    if (width < 1140) {
      if (menu.size === "full") {
        showLeftSideBarBackdrop();
        document
          .getElementsByTagName("html")[0]
          .classList.add("sidebar-enable");
      } else {
        changeMenuSize("full");
      }
    } else if (menu.size === "condensed") {
      changeMenuSize("default");
    } else if (menu.size === "full") {
      showLeftSideBarBackdrop();
      document.getElementsByTagName("html")[0].classList.add("sidebar-enable");
    } else if (menu.size === "fullscreen") {
      changeMenuSize("default");
      document.getElementsByTagName("html")[0].classList.add("sidebar-enable");
    } else {
      changeMenuSize("condensed");
    }
  };

  /**
   * creates backdrop for leftsidebar
   */
  function showLeftSideBarBackdrop() {
    const backdrop = document.createElement("div");
    backdrop.id = "custom-backdrop";
    backdrop.className = "offcanvas-backdrop fade show";
    document.body.appendChild(backdrop);
    backdrop.addEventListener("click", function () {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("sidebar-enable");
      changeMenuSize("full");
      hideLeftSideBarBackdrop();
    });
  }
  function hideLeftSideBarBackdrop() {
    const backdrop = document.getElementById("custom-backdrop");
    if (backdrop) {
      document.body.removeChild(backdrop);
      document.body.style.removeProperty("overflow");
    }
  }

  /**
   * Toggle Dark Mode
   */
  const toggleDarkMode = () => {
    if (theme === "light") {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
  };
  return (
    <React.Fragment>
      <div className="navbar-custom">
        <div className="topbar container-fluid">
          <div className="d-flex align-items-center">
            <Link to="/" className="logo logo-light">
              <span className="logo-lg">
                <img src={logoLight} alt="logo" />
              </span>
              <span className="logo-sm">
                <img src={logoSm} alt="small logo" />
              </span>
            </Link>
            <Link to="/" className="logo logo-dark">
              <span className="logo-lg">
                <img src={logoDark} alt="dark logo" />
              </span>
              <span className="logo-sm">
                <img src={logoSm} alt="small logo" />
              </span>
            </Link>

            <ul className="topbar-menu d-flex align-items-center gap-1 p-0">
              <li className="waves-effect waves-light">
                <button
                  className="button-toggle-menu"
                  onClick={handleLeftMenuCallBack}
                >
                  <i className="fe-menu" />
                </button>
              </li>

              <li>
                <button
                  className="navbar-toggle"
                  data-bs-toggle="collapse"
                  data-bs-target="#topnav-menu-content"
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </li>

              <li className="dropdown d-none d-xl-block">
                <CreateNew otherOptions={createNewOptions} />
              </li>

              <li className="dropdown dropdown-mega d-none d-xl-block">
                <MegaMenu subMenus={megaMenuOptions} />
              </li>
            </ul>
          </div>

          <ul className="topbar-menu d-flex align-items-center gap-1">
            <li className="d-none d-lg-block">
              <TopBarSearch />
            </li>

            <li className="d-none d-sm-inline-block" onClick={toggleDarkMode}>
              <div
                className="nav-link waves-effect waves-light"
                id="light-dark-mode"
              >
                <i className="ri-moon-line font-22"></i>
              </div>
            </li>

            <li className="d-none d-md-inline-block">
              <MaximizeScreen />
            </li>

            <li className="dropdown">
              <LanguageDropdown />
            </li>

            <li className="dropdown notification-list">
              <NotificationDropdown notifications={notificationOptions} />
            </li>

            <li className="dropdown d-none d-sm-inline-block">
              <AppsDropDown />
            </li>

            <li className="dropdown">
              <ProfileDropDown
                profiliePic={profilePic}
                menuItems={profileMenus}
                username="Alice Dashforge"
              />
            </li>

            <li className="d-none d-sm-inline-block pe-2">
              <Link
                to="#"
                className="nav-link waves-effect waves-light"
                onClick={themeCustomizer.toggle}
              >
                <i className="fe-settings font-22"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Topbar;
