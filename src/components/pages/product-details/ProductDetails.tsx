import Breadcrumbs from "../../ui/BreadCrumb";
import SectionTitle from "../../ui/SectionTitle";
import { mockData } from "../../../mock-data/productDetails";
import ProductCard from "../home-page/products/ProductCard";
import Ratings from "../../ui/Ratings";
import ColorSelect from "../../ui/ColorSelect";
import { useState } from "react";
import OutlineCard from "../../ui/OutlineCard";
import Adder from "../../ui/Adder";
import Button from "../../ui/Button";
import { ArrowLeftRightIcon, Heart, Truck } from "lucide-react";

export default function ProductDetails() {
  const [productColor, setProductColor] = useState(0);
  return (
    <section className="px-6 lg:px-32 m-auto pb-36">
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Gaming", path: "/gaming" }, // TODO : gaming -> dynamic category
          { label: "Product Name", path: "/gaming/product-name" }, // TODO : product-name -> dynamic real name
        ]}
      />
      <div className="md:pb-36 pb-20">
        <div className="flex xl:flex-row flex-col justify-between md:gap-[70px] gap-9">
          <div className="flex gap-4 flex-2/3">
            <div className="flex gap-4 flex-col">
              {mockData.imgs.map((image) => {
                return (
                  <div className="md:w-[170px] w-[85px] p-2.5 bg-secondary">
                    <img src={image} alt="joystick" />
                  </div>
                );
              })}
            </div>

            <div className="flex-3/4">
              <div className="md:w-[500px] w-full h-full bg-secondary flex justify-center items-center">
                <img src="/joy1.png" alt="joystick" className="w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold md:text-2xl text-xl">{mockData.name}</h2>
            <div className="flex gap-4">
              <Ratings stars={mockData.rating} reviewCount={mockData.reviews} />
              <span className="opacity-50">|</span>
              {mockData.inStock ? (
                <span className="text-green-400">inStock</span>
              ) : (
                <span className="text-red-400">Out of Stock</span>
              )}
            </div>
            <div className="md:text-2xl text-xl">${mockData.price}</div>
            <div className="text-sm">{mockData.description}</div>
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
              <Adder />
              <Button>Buy Now</Button>
              <Button variant="outline" noPadding={true}><Heart className="hover:text-primary" /></Button>
            </div>
            <div className="rounded-sm border border-gray-400">
                <div className="flex gap-4 items-center p-4">
                  <div><Truck className="size-10" /></div>
                  <div>
                    <div className="font-medium">Free Delivery</div>
                    <div className="font-medium text-xs">Enter your postal code for Delivery Availability</div>
                  </div>
                </div>
                <hr className="text-gray-400"/>
                <div className="flex gap-4 items-center p-4">
                  <div><ArrowLeftRightIcon className="size-10" /></div>
                  <div>
                    <div className="font-medium">Free Delivery</div>
                    <div className="font-medium text-xs">Enter your postal code for Delivery Availability</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SectionTitle title="Related Item" />
        <div className="flex justify-around pt-12 flex-wrap md:gap-0 gap-6">
          {mockData.related.map((product) => {
            return <ProductCard {...product} />;
          })}
        </div>
      </div>
    </section>
  );
}
