import ProductComponent from "@/components/productPage";
import { endSaga } from "@/helpers/helpers";
import { wrapper } from "@/store";
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
