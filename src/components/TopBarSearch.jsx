import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, InputGroup } from "react-bootstrap";

// images
import avatar2 from "../assets/images/users/avatar-2.jpg";
import avatar5 from "../assets/images/users/avatar-5.jpg";
const searchData = {
  "recent searches": ["profile", "yarn"],
  options: [
    {
      icon: "fe-home me-1",
      option: "Analytics Report",
    },
    {
      icon: "fe-aperture me-1",
      option: "How can I help you?",
    },
    {
      icon: "fe-settings me-1",
      option: "User profile settings",
    },
  ],
  users: [
    {
      image: avatar2,
      name: "Erwin E. Brown",
      position: "UI Designer",
    },
    {
      image: avatar5,
      name: "Jacob Deo",
      position: "Developer",
    },
  ],
};
const TopBarSearch = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Dropdown className="app-search d-none d-lg-block">
      <form>
        <InputGroup>
          <input
            type="search"
            className="form-control rounded-pill"
            placeholder="Search..."
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          />
          <span className="mdi mdi-magnify search-icon" />
        </InputGroup>
      </form>

      <div
        className={`dropdown-menu dropdown-menu-animated dropdown-lg ${
          dropdownOpen ? "d-block" : ""
        }`}
      >
        {Object.keys(searchData).map((searchItem, idx) => {
          return (
            <Fragment key={idx}>
              <Dropdown.Header className="noti-title">
                <h6 className="text-overflow text-uppercase">
                  {searchItem.toUpperCase()}
                </h6>
              </Dropdown.Header>
              {searchItem === "recent searches" ? (
                <div className="g-3 px-2 pb-2 gap-1 d-flex">
                  {(searchData["recent searches"] || []).map((item, idx) => (
                    <Link
                      key={idx}
                      to=""
                      className="btn btn-sm rounded-pill btn-light"
                    >
                      {item} <i className="fe-search ms-1" />
                    </Link>
                  ))}
                </div>
              ) : searchItem === "options" ? (
                (searchData.options || []).map((item, idx) => (
                  <Dropdown.Item key={idx} as="a" className="notify-item">
                    <i className={item.icon} />
                    <span>{item.option}</span>
                  </Dropdown.Item>
                ))
              ) : searchItem === "users" ? (
                <div className="notification-list">
                  {(searchData.users || []).map((item, idx) => (
                    <Dropdown.Item key={idx} as="a" className="notify-item">
                      <div className="d-flex align-items-start">
                        <img
                          className="d-flex me-2 rounded-circle"
                          src={item.image}
                          alt="Generic placeholder"
                          height="32"
                        />
                        <div className="w-100">
                          <h5 className="m-0 font-14">{item.name}</h5>
                          <span className="font-12 mb-0">{item.position}</span>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </div>
              ) : null}
            </Fragment>
          );
        })}
      </div>
    </Dropdown>
  );
};
export default TopBarSearch;
