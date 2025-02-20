import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProfileDropDown = (props) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const profilePic = props.profiliePic;

  /**
   * Toggle Profile DropDown
   */
  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <Dropdown show={dropDownOpen} onToggle={toggleDropDown}>
      <Dropdown.Toggle
        as="a"
        className="nav-link arrow-none nav-user waves-effect waves-light"
        href="#"
        role="button"
        aria-haspopup="false"
        aria-expanded="false"
      >
        <span className="account-user-avatar">
          <img
            src={profilePic}
            alt="user-avatar"
            width="32"
            className="rounded-circle"
          />
        </span>
        <span className="d-lg-flex flex-column gap-1 d-none">
          <span className="my-0">
            {props.username}
            <span className="mdi mdi-chevron-down" />
          </span>
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-animated profile-dropdown">
        <div className="dropdown-header noti-title">
          <h6 className="text-overflow m-0">Welcome !</h6>
        </div>
        {(props.menuItems || []).map((item, idx) => {
          return (
            <Link to={item.redirectTo} className="dropdown-item" key={idx}>
              <i className={`${item.icon} fs-18 align-middle me-1`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default ProfileDropDown;
