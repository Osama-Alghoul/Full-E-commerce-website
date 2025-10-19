import Breadcrumbs from "../../ui/BreadCrumb";
import SectionTitle from "../../ui/SectionTitle";
import { mockData } from "../../../mock-data/productDetails";
import ProductCard from "../home-page/products/ProductCard";

export default function ProductDetails() {
  
  return (
    <section className="px-6 lg:px-32 m-auto pb-36">
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Gaming", path: "/gaming" }, // TODO : gaming -> dynamic category
          { label: "Product Name", path: "/gaming/product-name" }, // TODO : product-name -> dynamic real name
        ]}
      />
      <div className="pb-36">
        <div className="flex justify-between">
          <div className="flex gap-4 flex-2/3">
            <div>
              {mockData.imgs.map((image) => {
                return (
                  <div className="w-[170px] p-2.5 bg-secondary">
                    <img src={image} alt="joystick" />
                  </div>
                );
              })}
            </div>

            <div className="flex-3/4">
              <div className="w-[500px] bg-secondary">
                <img src="/joy1.png" alt="joystick" />
              </div>
            </div>
          </div>
          <div>
            <h2>{mockData.name}</h2>
            <div></div>
            <div className="text-2xl">${mockData.price}</div>
            <div className="text-sm">{mockData.description}</div>
            <hr />
            <div>Colors</div>
            <div>Sizes</div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <SectionTitle title="Related Item" />
            <div className="flex justify-around pt-12">
              {mockData.related.map((product) => {
                return(
                  <ProductCard {...product} />
                )
              })}
            </div>
      </div>
    </section>
  );
}
