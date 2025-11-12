import Breadcrumbs from "../../ui/BreadCrumb";
import { CheckCircleIcon } from "lucide-react";
import Button from "../../ui/Button";
import { useEffect } from "react";
import { useCartContext } from "../../../utils/CartContext";

export default function Success() {
  const { cleanCart } = useCartContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    cleanCart();
  }, [cleanCart]);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "View Cart", path: "/cart" },
          { label: "CheckOut", path: "/cart/checkout" },
          { label: "Payment Status", path: "/cart/checkout/status" },
        ]}
      />
      <section
        className={`flex flex-col justify-center w-full gap-5 items-center pb-48`}
      >
        <div className="flex gap-5">
          <CheckCircleIcon className="size-10 text-green-400" />
          <h1 className="lg:text-5xl md:text-4xl text-3xl">
            Payment completed successfully
          </h1>
        </div>
        <a href="/" className="pt-12">
          <Button>Back to Home</Button>
        </a>
      </section>
    </>
  );
}
