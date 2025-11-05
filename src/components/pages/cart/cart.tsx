import { Link } from "react-router";
import Breadcrumbs from "../../ui/BreadCrumb";
import CartTable from "./cartTable";
import Button from "../../ui/Button";
import CartBill from "./cartBill";
import { useCartContext } from "../../../utils/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
  const { cartItems } = useCartContext();
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Cart", path: "/cart" },
        ]}
      />
      <section className="px-6 lg:px-32 m-auto">
        <div className="pb-36">
          {cartItems.length === 0 ? (
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex text-4xl gap-4">
                <ShoppingCart className="size-10" /> Your Cart is empty
              </div>
              <Link to={"/"}>
                <Button>Return To Shop</Button>
              </Link>
            </div>
          ) : (
            <>
              <CartTable />
              <div className="flex justify-between">
                <Link to={"/"}>
                  <Button variant="outline">Return To Shop</Button>
                </Link>
                <Link to={"/cart/#"}>
                  <Button variant="outline">Upgrade Cart</Button>
                </Link>
              </div>
              <div className="flex justify-between items-start pt-20 flex-wrap">
                <form className="flex gap-4 flex-wrap mb-4">
                  <input
                    type="text"
                    required
                    placeholder="Coupon Code"
                    className="border rounded-sm py-4 px-6"
                  />
                  <Button type="submit">Apply Coupon</Button>
                </form>
                <div className="border rounded-sm px-6 py-8 w-[470px]">
                  <div className="font-medium text-xl">Cart Total</div>
                  <CartBill />
                  <Link to={"/cart/checkout"} className="m-auto">
                    <Button>Procees to checkout</Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
