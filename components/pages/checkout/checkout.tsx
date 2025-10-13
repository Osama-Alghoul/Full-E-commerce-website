import Breadcrumbs from "../../ui/BreadCrumb";

export default function CheckOut() {
  return (
    <section className="px-6 lg:px-32 m-auto">
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "My Account", path: "/account" },
          { label: "Product", path: "/product" },
          { label: "View Cart", path: "/cart" },
          { label: "CheckOut", path: "/cart/checkout" },
        ]}
      />
    </section>
  );
}
