import React, { useState } from "react";

// assets
import enFlag from "./flags/us.jpg";
import germanyFlag from "./flags/germany.jpg";
import italyFlag from "./flags/italy.jpg";
import spainFlag from "./flags/spain.jpg";
import russiaFlag from "./flags/russia.jpg";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// get the languages and flags
const Languages = [
  {
    name: "English",
    flag: enFlag,
  },
  {
    name: "German",
    flag: germanyFlag,
  },
  {
    name: "Italian",
    flag: italyFlag,
  },
  {
    name: "Spanish",
    flag: spainFlag,
  },
  {
    name: "Russian",
    flag: russiaFlag,
  },
];
const LanguageDropdown = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0]); // Default to English

  /**
   * toggle language dropdown
   */
  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  /**
   * handle language change
   */
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setDropDownOpen(false); // Close dropdown after selection
  };
  return (
    <>
      <Dropdown align="end" show={dropDownOpen} onToggle={toggleDropDown}>
        <Dropdown.Toggle
          className="nav-link dropdown-toggle arrow-none"
          as="a"
          role="button"
          onClick={toggleDropDown}
        >
          <img
            src={selectedLanguage.flag}
            alt={selectedLanguage.name}
            className="me-0 me-sm-1"
            height="12"
          />
          <span className="align-middle d-none d-lg-inline-block">
            {selectedLanguage.name}
          </span>
          <i className="ri-arrow-down-s-line d-none d-sm-inline-block align-middle" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-animated">
          {Languages.map((lang, idx) => (
            <Link
              to="#"
              className="dropdown-item"
              key={idx + "-lang"}
              onClick={() => handleLanguageChange(lang)}
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="me-1"
                height="12"
              />
              <span className="align-middle">{lang.name}</span>
            </Link>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
export default LanguageDropdown;
