import React from "react";
import Styles from "./styles/styles.module.scss";
const BreadCrumb = ({ items }) => {
  return (
    <div className={Styles.breadCrumb}>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          {index < items.length - 1 && <span>/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
