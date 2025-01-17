import Image from "next/future/image";
import Link from "next/link";
import logo from "./assets/logo.png";
import { useRouter } from "next/router";
import Languages from "./Languages";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { postUserLogOut } from "@/store/actions";
import DropdownMenu from "./dropdownMenu";
import DarkModeToggle from "./darkModeToggle";

const Links = ({ isActive, showSidebarHandler }) => {
  const { asPath, locale } = useRouter();
  const intl = useIntl();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const isCurrentPath = (path) => asPath === path;
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const { products } = cart;

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(postUserLogOut({ intl }));
  };
  return (
    <>
      <div
        className={`overlay ${isActive ? "active" : ""}`}
        onClick={() => {
          showSidebarHandler();
        }}
        dir={dir}
      ></div>
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
        {!isLoggedIn && (
          <li>
            <Link href="/signUp">
              <a
                className={isCurrentPath("/signUp") ? "active" : ""}
                onClick={showSidebarHandler}
              >
                <FormattedMessage id="signup" />
              </a>
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <div className="icons">
            <li>
              <Link href="/wishlist">
                <a onClick={showSidebarHandler}>
                  <i className="bi bi-heart"></i>
                  <span className="count">10 </span>
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
          </div>
        )}

        <Languages />
        <DarkModeToggle />
        {isLoggedIn && <DropdownMenu />}
      </ul>
    </>
  );
};

export default Links;
