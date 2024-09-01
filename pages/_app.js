import Header from "@/components/shared/header";
import { Provider } from "react-redux";
import { makeStore } from "@/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/main.css";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={makeStore()}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
