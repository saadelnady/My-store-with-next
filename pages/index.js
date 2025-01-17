import Head from "next/head";

import { wrapper } from "@/store";
import { END } from "redux-saga";

import Hero from "@/components/hero";
import Brands from "@/components/brands";
import Products from "@/components/products";
import Categories from "@/components/categories";
import Banner from "@/components/banner/index";

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
      {/* <Banner /> */}
      <Hero />
      <Categories />
      <Products />
      <Brands />
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
