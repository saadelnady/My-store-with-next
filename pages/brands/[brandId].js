import SingleBrand from "@/components/singleBrand";
import { wrapper } from "@/store";
import { getAllBrands, getAllProducts, getSingleBrand } from "@/store/actions";
import React from "react";
import { END } from "redux-saga";

const SingleBrandPage = () => {
  return <SingleBrand />;
};

export default SingleBrandPage;

export const getStaticProps = wrapper.getStaticProps((store) => {
  return async ({ params }) => {
    const { brandId } = params;
 
    store.dispatch(getAllBrands({ cookies: {} }));
    store.dispatch(getAllProducts({ cookies: {} }));
    store.dispatch(getSingleBrand({ cookies: {}, brandId }));
    store.dispatch(END);
    await store.sagaTask.toPromise();
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
