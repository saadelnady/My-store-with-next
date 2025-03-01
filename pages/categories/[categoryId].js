import React from "react";
import { wrapper } from "@/store";
import { getAllProducts, getSingleCategory } from "@/store/actions";
import { END } from "redux-saga";
import SingleCategory from "@/components/singleCategory";
const SingleCategoryPage = () => {
  return <SingleCategory />;
};

export default SingleCategoryPage;

export const getStaticProps = wrapper.getStaticProps((store) => {
  return async (context) => {
    const { params } = context;
    const { categoryId } = params;

    store.dispatch(getSingleCategory({ cookies: {}, categoryId }));
    store.dispatch(getAllProducts({ cookies: {} }));
    store.dispatch(END);
    await store.sagaTask.toPromise();
    const product = store.getState().products.product;

    if (!product) {
      return {
        notFound: true,
      };
    }
    return {
      props: {},
      revalidate: 1,
    };
  };
});

export async function getStaticPaths(context) {
  return {
    paths: [],
    fallback: "blocking",
  };
}
