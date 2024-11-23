import Head from "next/head";
import HomePage from "../src/components/home";
import { NextSeo } from "next-seo";
import { wrapper } from "../src/store";
import { END } from "redux-saga";
import { getAllCategories } from "@/store/categories/actions";
export default function Home() {
  return (
    <>
      <Head>
        <title>My store</title>
        <meta name="description" content="ecommerce website using next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo-2.png" />
      </Head>
      <HomePage />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => {
  return async () => {
    store.dispatch(getAllCategories({ cookies: {} }));
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
      revalidate: 1,
    };
  };
});
