import React from "react";
import styles from "./styles/styles.module.scss";
import Link from "next/link";
const BreadCrumb = ({ items }) => {
  return (
    <div className={styles.breadCrumb}>
      {items.map((item, index) => (
        <div key={index}>
          {item.url ? (
            <Link href={item.url}>
              <a className="breadCrumb-link"> {item.title}</a>
            </Link>
          ) : (
            <span>{item.title}</span>
          )}
          {index < items.length - 1 && <span>/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
