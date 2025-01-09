import Brands from "@/components/brandsPage";
import { wrapper } from "@/store";
import { getAllBrands } from "@/store/actions";
import { END } from "redux-saga";

const BrandsPage = () => {
  return <Brands />;
};

export default BrandsPage;

export const getStaticProps = wrapper.getStaticProps((store) => {
  return async () => {
    store.dispatch(getAllBrands({ cookies: {} }));
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
      revalidate: 1,
    };
  };
});
