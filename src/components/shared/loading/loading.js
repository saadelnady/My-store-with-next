import Image from "next/future/image";
import logoImg from "../../../../public/images/logo.png";
import styles from "./styles/styles.module.scss";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <Image src={logoImg} alt="Loading" className="loading-img" />
    </div>
  );
};

export default Loading;
