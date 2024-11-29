import Head from "next/head";
import HomePage from "../src/components/home";
import { NextSeo } from "next-seo";
import { wrapper } from "../src/store";
import { END } from "redux-saga";
import {
  getAllBrands,
  getAllCategories,
  getAllProducts,
} from "@/store/actions";
export default function Home() {
  return (
    <>
      <Head>
        <title>My store</title>
        <meta name="description" content="ecommerce website using next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => {
  return async () => {
    store.dispatch(getAllCategories({ cookies: {} }));
    store.dispatch(getAllProducts({ cookies: {} }));
    store.dispatch(getAllBrands({ cookies: {} }));
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
      revalidate: 1,
    };
  };
});
