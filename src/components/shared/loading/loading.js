import Image from "next/future/image";
import logoImg from "../../../../public/images/logo.png";
import Styles from "./styles/styles.module.scss";
const Loading = () => {
  return (
    <div className={Styles.loading}>
      <Image src={logoImg} alt="Loading" className="loading-img" />
    </div>
  );
};

export default Loading;
