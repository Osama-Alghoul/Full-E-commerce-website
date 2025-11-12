import Breadcrumbs from "../../ui/BreadCrumb";
import { X } from "lucide-react";
import Button from "../../ui/Button";
import { useEffect } from "react";

export default function Cancel() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        className={`flex justify-center w-full gap-5 items-center pb-48`}
      >
        <div className="flex gap-5">
          <X className="size-10 text-red-400" />
          <h1 className="lg:text-5xl md:text-4xl text-3xl">Payment Canceled</h1>
        </div>
        <a href="/" className="pt-12">
          <Button>Back to Home</Button>
        </a>
      </section>
    </>
  );
}
