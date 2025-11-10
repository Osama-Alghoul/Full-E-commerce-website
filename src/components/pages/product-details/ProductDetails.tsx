import Breadcrumbs from "../../ui/BreadCrumb";
import SectionTitle from "../../ui/SectionTitle";
import ProductCard from "../home-page/products/ProductCard";
import Ratings from "../../ui/Ratings";
import ColorSelect from "../../ui/ColorSelect";
import { useEffect, useState } from "react";
import OutlineCard from "../../ui/OutlineCard";
import Button from "../../ui/Button";
import { ArrowLeftRightIcon, Check, Heart, Truck } from "lucide-react";
import type { Product } from "../../../types";
import { useParams } from "react-router";
import { useCartContext } from "../../../utils/CartContext";
import { BASE_API_URL } from "../../../content";
import { useFavContext } from "../../../utils/FavContext";
import Loading from "./loading";

export default function ProductDetails() {
  const [productColor, setProductColor] = useState(0);
  const [product, setProduct] = useState<Product>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const param = useParams();

  const { getItemQuantity, increaseCartQuantity } = useCartContext();
  const quantity = getItemQuantity(Number(param.id));
  const {
    removeFromCart,
    increaseCartQuantity: increaseFavQuantity,
    getItemQuantity: getFavQuantity,
  } = useFavContext();
  const isFav = getFavQuantity(Number(param.id)) > 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(`${BASE_API_URL}/products/${param.id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Faild to fetch products");
      }
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    fetchData();
  }, [param.id]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_API_URL}/products/category/${product?.category}?limit=4`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Faild to fetch products");
      }
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
  }, [product?.category]);

  if(loading) return <Loading />

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: `${product?.title}`, path: `/products/${param.id}` },
        ]}
      />

      <section className="px-6 lg:px-32 m-auto pb-36">
        <div className="md:pb-36 pb-20">
          <div className="flex xl:flex-row flex-col justify-between md:gap-[70px] gap-9">
            <div className="flex gap-4 flex-2/3">
              <div className="flex-3/4">
                <div className="md:w-[500px] w-full h-full bg-secondary flex justify-center items-center">
                  <img
                    src={`${product?.images[0]}`}
                    alt={product?.title}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold md:text-2xl text-xl">
                {product?.title}
              </h2>
              <div className="flex gap-4">
                <Ratings
                  stars={product?.rating || 0}
                  reviewCount={product?.reviews.length || 0}
                />
                <span className="opacity-50">|</span>
                {typeof product?.stock === "number" && product?.stock > 0 ? (
                  <span className="text-green-400">inStock</span>
                ) : (
                  <span className="text-red-400">outOfStock</span>
                )}
              </div>
              <div className="md:text-2xl text-xl">${product?.price}</div>
              <div className="text-sm">{product?.description}</div>
              <hr />
              <div className="md:text-xl text:lg flex gap-6 items-center">
                Colors:
                <span>
                  {["red", "green"].map((color, index) => {
                    return (
                      <ColorSelect
                        key={index}
                        color={color}
                        index={index}
                        setProductColor={setProductColor}
                        productColor={productColor}
                      />
                    );
                  })}
                </span>
              </div>
              <div className="flex gap-6 items-center md:text-xl text:lg">
                Sizes:
                <div className="flex gap-4">
                  <OutlineCard name="XS" small />
                  <OutlineCard name="S" small />
                  <OutlineCard name="M" small />
                  <OutlineCard name="L" small />
                  <OutlineCard name="XL" small />
                </div>
              </div>
              <div className="flex gap-4">
                {quantity === 0 ? (
                  <Button
                    onClick={() => increaseCartQuantity(Number(param.id))}
                  >
                    Buy Now
                  </Button>
                ) : (
                  <Button variant="outline" className="flex gap-4">
                    <Check className="mr-2" /> Added to Cart
                  </Button>
                )}
                {isFav ? (
                  <Button
                    variant="outline"
                    noPadding={true}
                    onClick={() => removeFromCart(Number(param.id))}
                  >
                    <Heart className="hover:text-primary" fill="red" />
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    noPadding={true}
                    onClick={() => increaseFavQuantity(Number(param.id))}
                  >
                    <Heart className="hover:text-primary" />
                  </Button>
                )}
              </div>
              <div className="rounded-sm border border-gray-400">
                <div className="flex gap-4 items-center p-4">
                  <div>
                    <Truck className="size-10" />
                  </div>
                  <div>
                    <div className="font-medium">Free Delivery</div>
                    <div className="font-medium text-xs">
                      Enter your postal code for Delivery Availability
                    </div>
                  </div>
                </div>
                <hr className="text-gray-400" />
                <div className="flex gap-4 items-center p-4">
                  <div>
                    <ArrowLeftRightIcon className="size-10" />
                  </div>
                  <div>
                    <div className="font-medium">Free Delivery</div>
                    <div className="font-medium text-xs">
                      Enter your postal code for Delivery Availability
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionTitle title="Related Item" />
          <div className="flex justify-around pt-12 flex-wrap md:gap-0 gap-6">
            {products.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
