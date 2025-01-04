import ProductsPage from "@/components/productsPage";
import { wrapper } from "@/store";
import { getAllProducts } from "@/store/actions";
import { END } from "redux-saga";

const products = () => {
  return <ProductsPage />;
};

export default products;

export const getStaticProps = wrapper.getStaticProps((store) => {
  return async () => {
    store.dispatch(getAllProducts({ cookies: {} }));
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
      revalidate: 1,
    };
  };
});
