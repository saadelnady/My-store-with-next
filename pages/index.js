import Head from "next/head";
import HomePage from "../src/components/home";

import { wrapper } from "@/store";
import { getCategories } from "@/store/categories/categoriesActions";
import { endSaga } from "@/helpers/helpers";

export default function Home({ categories }) {
  return (
    <>
      <Head>
        <title>My store</title>
        <meta name="description" content="ecommerce website using next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo-2.png" />
      </Head>
      <HomePage categories={categories} />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getCategories());
  await endSaga(store);
  const state = store.getState();
  const categories = state?.categoriesReducer?.categories;

  return {
    props: { categories },
    revalidate: 10,
  };
});
