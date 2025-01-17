import Profile from "@/components/profile";
import { wrapper } from "@/store";
import { END } from "redux-saga";

const ProfilePage = () => {
  return <Profile />;
};

export default ProfilePage;

export const getStaticPaths = async () => {
  const paths = [
    { params: { profile: ["orders"] } },
    { params: { profile: ["account-details"] } },
  ];

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = wrapper.getStaticProps((store) => {
  return async (context) => {
    const { profile } = context.params;
    const view = profile?.[0] || null;
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {
        view,
      },
      revalidate: 1,
    };
  };
});
