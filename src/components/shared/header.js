"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import { useState, useEffect, useRef } from "react";
import Links from "./Links";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const headerRef = useRef(null);

  const showSidebarHandler = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} alt="Logo" className="logo" />
        </Link>
        <i className="bi bi-list burger-icon" onClick={showSidebarHandler}></i>
        <Links isActive={isActive} showSidebarHandler={showSidebarHandler} />
      </div>
    </header>
  );
};

export default Header;
