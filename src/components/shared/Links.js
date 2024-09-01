"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/images/logo.png";

const Links = ({ isActive, showSidebarHandler }) => {
  const pathname = usePathname();
  const isCurrentPath = (path) => pathname === path;
  return (
    <ul className={`links ${isActive ? "active" : ""}`}>
      <Link href={"/"} onClick={showSidebarHandler}>
        <Image src={logo} alt="Logo" className="logo" />
      </Link>

      <li>
        <Link
          href="/"
          className={isCurrentPath("/") ? "active" : ""}
          onClick={showSidebarHandler}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className={isCurrentPath("/products") ? "active" : ""}
          onClick={showSidebarHandler}
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href="/orders"
          className={isCurrentPath("/orders") ? "active" : ""}
          onClick={showSidebarHandler}
        >
          Orders
        </Link>
      </li>
      <li>
        <Link
          href="/categories"
          className={isCurrentPath("/categories") ? "active" : ""}
          onClick={showSidebarHandler}
        >
          Categories
        </Link>
      </li>
      <li>
        <Link
          href="/login"
          className={isCurrentPath("/login") ? "active" : ""}
          onClick={showSidebarHandler}
        >
          Login
        </Link>
      </li>
      <div className="icons">
        <li>
          <Link href="/wishlist" onClick={showSidebarHandler}>
            <i className="bi bi-heart"></i>
            <span className="count">10 </span>
          </Link>
        </li>
        <li>
          <Link href="/cart" onClick={showSidebarHandler}>
            <i className="bi bi-cart3"></i>
            <span className="count">100</span>
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default Links;
