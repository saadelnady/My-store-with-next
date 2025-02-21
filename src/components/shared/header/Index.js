import React, { useState, useEffect, useRef } from "react";

import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import nookies from "nookies";
import { parseCookies, setCookie } from "nookies";

import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { postUserLogOut } from "@/store/actions";

import logo from "./assets/logo.png";
import IcUser from "./assets/ic-user.svg";
import IcArrow from "./assets/arrow.svg";
import IcOrders from "./assets/ic-orders.svg";
import IcLoggout from "./assets/ic-logout.svg";
import styles from "./styles/styles.module.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const { locale, push, pathname, asPath } = useRouter();

  const { isLoggedIn } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const products = cart?.products || [];

  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const intl = useIntl();

  const dir = locale === "ar" ? "rtl" : "ltr";
  const isCurrentPath = (path) => asPath === path;
  const [dataTheme, setDataTheme] = useState("light");

  // Initialize theme from cookies
  useEffect(() => {
    const cookies = parseCookies();
    const savedTheme = cookies["data-theme"] || "light";
    setDataTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = dataTheme === "light" ? "dark" : "light";
    setDataTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setCookie(null, "data-theme", newTheme, { path: "/" });
  };
  const handleLanguageChange = (lang) => {
    nookies.set(null, "locale", lang, { path: "/" });
    push(pathname, asPath, { locale: lang });
    setLanguageDropdownVisible(false);
  };
  const userDropDownHandler = () => {
    setUserDropdownOpen(!userDropdownOpen);
    setLanguageDropdownVisible(false);
  };
  const showSidebarHandler = () => {
    setIsActive(!isActive);
  };
  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible((prev) => !prev);
    setUserDropdownOpen(false);
  };

  const handleLogout = () => {
    dispatch(postUserLogOut({ intl }));
  };

  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        {/* desktop header */}
        <div className="desktop-header">
          <Link href={"/"}>
            <a>
              <Image src={logo} alt="Logo" className="logo" />
            </a>
          </Link>

          <ul className="links">
            <li>
              <Link href="/">
                <a
                  className={isCurrentPath("/") ? "active" : ""}
                  onClick={showSidebarHandler}
                >
                  <FormattedMessage id="home" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a
                  className={isCurrentPath("/products") ? "active" : ""}
                  onClick={showSidebarHandler}
                >
                  <FormattedMessage id="products" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/brands">
                <a
                  className={isCurrentPath("/brands") ? "active" : ""}
                  onClick={showSidebarHandler}
                >
                  <FormattedMessage id="brands" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="/categories">
                <a
                  className={isCurrentPath("/categories") ? "active" : ""}
                  onClick={showSidebarHandler}
                >
                  <FormattedMessage id="categories" />
                </a>
              </Link>
            </li>

            {!isLoggedIn && (
              <li>
                <Link href="/login">
                  <a
                    className={isCurrentPath("/login") ? "active" : ""}
                    onClick={showSidebarHandler}
                  >
                    <FormattedMessage id="login" />
                  </a>
                </Link>
              </li>
            )}

            {isLoggedIn && (
              <ul className="icons">
                <li>
                  <Link href="/wishlist">
                    <a onClick={showSidebarHandler}>
                      <i className="bi bi-heart"></i>
                      <span className="count">{wishlist?.length} </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/cart">
                    <a onClick={showSidebarHandler}>
                      <i className="bi bi-cart3"></i>
                      <span className="count">{products?.length}</span>
                    </a>
                  </Link>
                </li>
              </ul>
            )}

            <div className="languages">
              <button className="btn-link" onClick={toggleLanguageDropdown}>
                <div className="ic-earth"></div>
                <span className="me-2">{locale.toLocaleUpperCase()}</span>
                <div className="ic-arrow">
                  <IcArrow />
                </div>
              </button>

              {languageDropdownVisible && (
                <ul className="languages-list">
                  <li>
                    <button
                      className={`${locale === "ar" ? "active" : ""}`}
                      onClick={() => {
                        handleLanguageChange("ar");
                      }}
                    >
                      AR
                    </button>
                  </li>
                  <li>
                    <button
                      className={` ${locale === "en" ? "active" : ""}`}
                      onClick={() => {
                        handleLanguageChange("en");
                      }}
                    >
                      EN
                    </button>
                  </li>
                </ul>
              )}
            </div>
            <div
              className="d-flex align-items-center justify-content-center dark-mode-toggle"
              onClick={toggleDarkMode}
              style={{
                width: "75px",
                height: "40px",
                borderRadius: "25px",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div
                className="toggle-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: dataTheme === "dark" ? "#343a40" : "#f8f9fa",
                  color: dataTheme === "dark" ? "#ffc107" : "#0d6efd",
                  position: "absolute",
                  transition: "all 0.4s ease",
                  left: dataTheme === "dark" ? "40px" : "5px",
                }}
              >
                <i
                  className={`bi ${
                    dataTheme === "dark" ? "bi-moon-fill" : "bi-sun-fill"
                  }`}
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </div>
            </div>
            {isLoggedIn && (
              <div className="user">
                <button
                  onClick={userDropDownHandler}
                  className="border-0 bg-transparent"
                >
                  <IcUser className="user-img" />
                </button>

                {userDropdownOpen && (
                  <ul className="user-dropdown">
                    <li>
                      <Link href="/orders">
                        <a className=" ">
                          <IcOrders />
                          <FormattedMessage id="orders" />
                        </a>
                      </Link>
                    </li>

                    <li>
                      <button onClick={handleLogout}>
                        <IcLoggout className="logout-icon" />
                        <FormattedMessage id="logout" />
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </ul>
        </div>

        {/* Mobile header */}
        <div className="mobile-header">
          <Link href={"/"}>
            <a>
              <Image src={logo} alt="Logo" className="logo" />
            </a>
          </Link>

          <div
            className={`overlay ${isActive ? "active" : ""}`}
            onClick={() => {
              showSidebarHandler();
            }}
            dir={dir}
          ></div>

          {isLoggedIn && (
            <ul className="icons">
              <li>
                <Link href="/wishlist">
                  <a onClick={showSidebarHandler}>
                    <i className="bi bi-heart"></i>
                    <span className="count">{wishlist?.length} </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <a onClick={showSidebarHandler}>
                    <i className="bi bi-cart3"></i>
                    <span className="count">{products?.length}</span>
                  </a>
                </Link>
              </li>
              <div className="user">
                <button
                  onClick={userDropDownHandler}
                  className="border-0 bg-transparent"
                >
                  <IcUser className="user-img" />
                </button>

                {userDropdownOpen && (
                  <ul className="user-dropdown">
                    <li>
                      <Link href="/orders">
                        <a className=" ">
                          <IcOrders />
                          <FormattedMessage id="orders" />
                        </a>
                      </Link>
                    </li>

                    <li>
                      <button onClick={handleLogout}>
                        <IcLoggout className="logout-icon" />
                        <FormattedMessage id="logout" />
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </ul>
          )}
          <i
            className="bi bi-list burger-icon"
            onClick={showSidebarHandler}
          ></i>

          <ul className={`links ${isActive ? "active" : ""}`} dir={dir}>
            <Link href={"/"}>
              <a onClick={showSidebarHandler}>
                <Image src={logo} alt="Logo" className="logo" />
              </a>
            </Link>
            <li>
              <Link href="/">
                <a
                  className={isCurrentPath("/") ? "active" : ""}
                  onClick={showSidebarHandler}
                >
                  <FormattedMessage id="home" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a
                  className={isCurrentPath("/products") ? "active" : ""}
                  onClick={showSidebarHandler}
                >
                  <FormattedMessage id="products" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/brands">
                <a
                  className={isCurrentPath("/brands") ? "active" : ""}
                  onClick={showSidebarHandler}
                >
                  <FormattedMessage id="brands" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="/categories">
                <a
                  className={isCurrentPath("/categories") ? "active" : ""}
                  onClick={showSidebarHandler}
                >
                  <FormattedMessage id="categories" />
                </a>
              </Link>
            </li>
            {!isLoggedIn && (
              <li>
                <Link href="/login">
                  <a
                    className={isCurrentPath("/login") ? "active" : ""}
                    onClick={showSidebarHandler}
                  >
                    <FormattedMessage id="login" />
                  </a>
                </Link>
              </li>
            )}

            <div className="d-flex align-items-center justify-content-between">
              <div
                className="d-flex align-items-center justify-content-center dark-mode-toggle"
                onClick={toggleDarkMode}
                style={{
                  width: "75px",
                  height: "40px",
                  borderRadius: "25px",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <div
                  className="toggle-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor:
                      dataTheme === "dark" ? "#343a40" : "#f8f9fa",
                    color: dataTheme === "dark" ? "#ffc107" : "#0d6efd",
                    position: "absolute",
                    transition: "all 0.4s ease",
                    left: dataTheme === "dark" ? "40px" : "5px",
                  }}
                >
                  <i
                    className={`bi ${
                      dataTheme === "dark" ? "bi-moon-fill" : "bi-sun-fill"
                    }`}
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                </div>
              </div>
              <div className="languages">
                <button className="btn-link" onClick={toggleLanguageDropdown}>
                  <div className="ic-earth"></div>
                  <span className="me-2">{locale.toLocaleUpperCase()}</span>
                  <div className="ic-arrow">
                    <IcArrow />
                  </div>
                </button>

                {languageDropdownVisible && (
                  <ul className="languages-list">
                    <li>
                      <button
                        className={` ${locale === "ar" ? "active" : ""}`}
                        onClick={() => handleLanguageChange("ar")}
                      >
                        AR
                      </button>
                    </li>
                    <li>
                      <button
                        className={` ${locale === "en" ? "active" : ""}`}
                        onClick={() => handleLanguageChange("en")}
                      >
                        EN
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
