import styles from "./styles/styles.module.scss";

const CustomHeading = ({ title, subTitle }) => {
  return (
    <div className={styles.customHeading}>
      {title && <h2 className="title"> {title}</h2>}
      {subTitle && <p className="subtitle">{subTitle}</p>}
    </div>
  );
};

export default CustomHeading;
