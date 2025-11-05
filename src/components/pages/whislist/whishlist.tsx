import { useProducts } from "../../../hooks/useProducts";
import { useCartContext } from "../../../utils/CartContext";
import { useFavContext } from "../../../utils/FavContext";
import Button from "../../ui/Button";
import ProductCardLoading from "../../ui/productLoading";
import SectionTitle from "../../ui/SectionTitle";
import ProductCard from "../home-page/products/ProductCard";
import Item from "./Item";

export default function WishList() {
  const { favItems } = useFavContext();
  const { moveAllToCart } = useCartContext();
  const { products, loading } = useProducts();
  return (
    <section className="max-w-[1170px] m-auto pt-20 px-4">
      <div className="flex justify-between items-center">
        <div>
          Wishlist <span>({favItems.length})</span>
        </div>
        <Button variant="outline" onClick={() => moveAllToCart(favItems)}>
          Move All To Bag
        </Button>
      </div>
      <div>
        {favItems.length === 0 ? (
          <div className="py-20 text-center">Your wishlist is empty</div>
        ) : (
          <div className="flex flex-wrap gap-[30px] justify-center mb-36 px-3.5 md:px-0">
            {favItems.map((product) => {
              return <Item key={product.id} itemId={product.id} {...product} />;
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
            products
              .slice(0, 4)
              .map((product) => <ProductCard key={product.id} {...product} />)
          )}
        </div>
      </div>
    </section>
  );
}
