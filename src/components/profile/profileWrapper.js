import React from "react";
import { useRouter } from "next/router";

import Orders from "./orders";
import Details from "./details";

const ProfileWrapper = () => {
  const router = useRouter();
  const { query } = router;

  switch (query["profile"][1]) {
    case "orders":
      return <Orders />;
    case "account-details":
      return <Details />;
    default:
      return <Details />;
  }
};

export default ProfileWrapper;
