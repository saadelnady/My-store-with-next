import React from "react";
import styles from "./styles/styles.module.scss";
import Link from "next/link";
import { Container } from "react-bootstrap";
const BreadCrumb = ({ items }) => {
  return (
    <div className={styles.breadCrumb}>
      <Container>
        <div className="inner">
          {items.map((item, index) => (
            <div key={index}>
              {item.url ? (
                <Link href={item.url}>
                  <a className="breadCrumb-link"> {item.title}</a>
                </Link>
              ) : (
                <span className="current-page">
                  {item?.title?.slice(0, 100)}
                </span>
              )}
              {index < items.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumb;
