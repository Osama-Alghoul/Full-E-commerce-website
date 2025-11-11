import { useCartContext } from "../../../utils/CartContext";
import { useFavContext } from "../../../utils/FavContext";
import Button from "../../ui/Button";
import ProductCardLoading from "../../ui/productLoading";
import SectionTitle from "../../ui/SectionTitle";
import ProductCard from "../home-page/products/ProductCard";
import Item from "./Item";
import { useProducts } from "../../../hooks/useProducts";
import Breadcrumbs from "../../ui/BreadCrumb";
import toast, { Toaster } from "react-hot-toast";
import type { CartItem } from "../../../types";

export default function WishList() {
  const { favItems } = useFavContext();
  const { moveAllToCart } = useCartContext();
  const { loading, products } = useProducts({ limit: 4, skip: 10 });
  const handelMoveAllItems = (e: CartItem[]) => {
    moveAllToCart(e);
    toast.success("All items moved to your cart successfuly");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "My Account", path: "/account" },
          { label: "Wishlist", path: "/wishlist" },
        ]}
      />
      <section className="max-w-[1170px] m-auto md:px-0 px-4">
        <div className="flex justify-between items-center">
          <div>
            Wishlist <span>({favItems.length})</span>
          </div>
          <Button
            variant="outline"
            onClick={() => handelMoveAllItems(favItems)}
          >
            Move All To Bag
          </Button>
        </div>
        <div>
          {favItems.length === 0 ? (
            <div className="py-20 text-center">Your wishlist is empty</div>
          ) : (
            <div className="flex flex-wrap gap-[30px] justify-center mb-36 px-3.5 md:px-0">
              {favItems.map((product) => {
                return (
                  <Item key={product.id} itemId={product.id} {...product} />
                );
              })}
            </div>
          )}

          <SectionTitle title="Just for you" />
          <div className="flex flex-wrap gap-[30px] justify-center mb-36 px-3.5 md:px-0">
            {loading ? (
              <>
                <ProductCardLoading />
                <ProductCardLoading />
                <ProductCardLoading />
                <ProductCardLoading />
              </>
            ) : (
              products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
