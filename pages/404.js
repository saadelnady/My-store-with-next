import { Container } from "react-bootstrap";
import ErrorImg from "../public/images/404.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container>
      <div className="not-found-page">
        <ErrorImg alt="not-found" />
        <Link href="/">
          <a className="btn my-5 bg-danger text-light">Back to home page</a>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
