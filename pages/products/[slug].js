import ProductComponent from "@/components/productPage";
import { endSaga } from "@/helpers/helpers";
import { wrapper } from "@/store";
import { getSingleProduct } from "@/store/actions";
import { END } from "redux-saga";

const ProductPage = () => {
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
export const getStaticProps = wrapper.getStaticProps((store) => {
  return async (context) => {
    const { params } = context;
    const { slug } = params;

    store.dispatch(getSingleProduct({ cookies: {}, slug }));

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
