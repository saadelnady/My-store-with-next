import Categories from "@/components/categoriesPage";
import { wrapper } from "@/store";
import { getAllCategories } from "@/store/actions";
import { END } from "redux-saga";

const CategoriesPage = () => {
  return <Categories />;
};

export default CategoriesPage;
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
