import SectionTitle from "../../../ui/SectionTitle";
import ProductCardLoading from "../../../ui/productLoading";
import ProductCard from "./ProductCard";
import Button from "../../../ui/Button";
import { useProducts } from "../../../../hooks/useProducts";
import { Link } from "react-router";

export default function Products() {
  const { loading, products } = useProducts({ limit: 8, skip: 0 });
  return (
    <section className="pt-[60px] pb-36 flex flex-col gap-[60px] items-center px-5 lg:px-0">
      <div>
        <div className="mb-[60px]">
          <SectionTitle title="Our Products" bigTitle="Explore Our Products" />
        </div>
        <div className="flex gap-[30px] flex-wrap justify-center">
          {loading ? (
            <>
              <ProductCardLoading />
              <ProductCardLoading />
              <ProductCardLoading />
              <ProductCardLoading />
            </>
          ) : (
            products
              .slice(0, 8)
              .map((product) => <ProductCard key={product.id} {...product} />)
          )}
        </div>
      </div>
      <Link to={"/products"}>
        <Button>View All Products</Button>
      </Link>
    </section>
  );
}
