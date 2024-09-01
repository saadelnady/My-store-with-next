import Image from "next/image";
import errorImg from "../public/images/404.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found-page container">
      <Image src={errorImg} alt="not-found" />
      <button className="btn my-5 mx-auto d-block bg-danger">
        <Link href="/" className="text-light">
          Back to home page
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
