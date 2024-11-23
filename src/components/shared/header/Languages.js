import React from "react";
import { useState, useEffect, useRef } from "react";
// import IcEarth from "./assets/ic-earth.svg";
// import IcArrow from "./assets/arrow.svg";
import { useRouter } from "next/router";
import nookies from "nookies";

const Languages = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const { locale, push, pathname, asPath } = useRouter();

  const handleLanguageChange = (lang) => {
    nookies.set(null, "locale", lang, { path: "/" });
    push(pathname, asPath, { locale: lang });
    setDropdownVisible(false);
  };

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="languages" ref={dropdownRef}>
      <button className="btn-link" onClick={toggleDropdown}>
        <div className="ic-earth">
          {/* <IcEarth className="img" width={14} height={14} /> */}
        </div>
        <span className="me-2">{locale.toLocaleUpperCase()}</span>
        <div className="ic-arrow">
          {/* <IcArrow className="img" width={14} height={14} /> */}
        </div>
      </button>

      {dropdownVisible && (
        <ul className="dropdown-menu show position-absolute languages-list">
          <li>
            <button
              className={`dropdown-item ${locale === "ar" ? "active" : ""}`}
              onClick={() => handleLanguageChange("ar")}
            >
              AR
            </button>
          </li>
          <li>
            <button
              className={`dropdown-item ${locale === "en" ? "active" : ""}`}
              onClick={() => handleLanguageChange("en")}
            >
              EN
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Languages;
