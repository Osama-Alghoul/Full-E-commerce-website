import Breadcrumbs from "../../ui/BreadCrumb";

export default function ProductDetails() {
  const mockData = {
    name: "Havic HV G-92 Gamepad",
    imgs: ["", "", "", ""],
    rating: 4,
    reviews: 150,
    inStock: true,
    price: 192.0,
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    colors: ["blue", "red"],
  };
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
          <div className="flex-2/3"></div>
          <div>
            <h2></h2>
          </div>
        </div>
      </div>
    </section>
  );
}
