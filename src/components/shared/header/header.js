import Image from "next/future/image";
import Link from "next/link";
import logo from "./assets/logo.png";
import { useState, useEffect, useRef } from "react";
import Links from "./Links";
import styles from "./styles/styles.module.scss";
import { Container } from "react-bootstrap";
import Languages from "./Languages";
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
    <header className={styles.header} ref={headerRef}>
      <Container>
        <div className="inner">
          <Link href={"/"}>
            <a>
              <Image src={logo} alt="Logo" className="logo" />
            </a>
          </Link>

          <div className="wrapper">
            <Languages />
            <i
              className="bi bi-list burger-icon"
              onClick={showSidebarHandler}
            ></i>
          </div>
          <Links isActive={isActive} showSidebarHandler={showSidebarHandler} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
