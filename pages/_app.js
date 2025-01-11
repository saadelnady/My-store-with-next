import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { END } from "redux-saga";
import nookies from "nookies";

import SSRProvider from "react-bootstrap/SSRProvider";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import "../styles/main.scss";

import TopBarProgress from "react-topbar-progress-indicator";

import Aos from "aos";

import { wrapper } from "@/store";
import Loading from "@/components/shared/loading/Loading";

import { Toaster } from "react-hot-toast"; // Import React Hot Toast
import { useDispatch, useSelector } from "react-redux";
import { getUserCart, postUserLoginSuccess } from "@/store/actions";

const languages = {
  ar: require("@/content/languages/ar.json"),
  en: require("@/content/languages/en.json"),
};

const Header = dynamic(() => import("@/components/shared/header/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/shared/footer/Footer"), {
  ssr: false,
});

function App({ Component, pageProps }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const { locale, defaultLocale, route } = useRouter();

  const messages = languages[locale];
  const dir = locale === "ar" ? "rtl" : "ltr";

  const [Progress, setProgress] = useState(false);
  const [loading, setLoading] = useState(false);
  TopBarProgress.config({
    barThickness: 3,
    barColors: {
      0: "#20c997",
      0.5: "#78b012",
      1.0: "#574a4add",
    },
  });

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", () => {
      setProgress(true);
      handleStart();
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(false);
      handleComplete();
    });
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  useEffect(() => {
    Aos.init({
      once: true,
      disable: "mobile",
    });
    document.documentElement.dir = dir;
    document.body.style.direction = dir;
    document.body.setAttribute("dir", dir);
  }, [dir]);
  useEffect(() => {
    const cookies = nookies.get(null);
    const token = cookies.token;

    if (token) {
      dispatch(postUserLoginSuccess({ token }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserCart({ cookies: {} }));
    }
  }, [dispatch, router, isLoggedIn]);
  return (
    <>
      <Head>
        <title>My store</title>
        <meta charSet="utf-8" />
        <meta name="description" content="E-commerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <SSRProvider>
        <IntlProvider
          messages={messages}
          defaultLocale={defaultLocale}
          locale={locale}
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </>
          )}
        </IntlProvider>
      </SSRProvider>
      {Progress && <TopBarProgress />}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async () => {
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return {};
});

export default wrapper.withRedux(App);
