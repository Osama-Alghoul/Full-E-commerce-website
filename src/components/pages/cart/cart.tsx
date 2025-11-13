import { Link } from "react-router";
import Breadcrumbs from "../../ui/BreadCrumb";
import CartTable from "./cartTable";
import Button from "../../ui/Button";
import CartBill from "./cartBill";
import { useCartContext } from "../../../utils/CartContext";
import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import CheckoutButton from "../../ui/CheckoutButton";
import Tip from "./tip";
import { useAuthContext } from "../../../utils/AuthContext";

export default function Cart() {
  const { cartItems } = useCartContext();
  const { isLoggedIn } = useAuthContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "My Account", path: "/account" },
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
              </div>
              <div className="flex justify-end pt-20">
                <div className="border rounded-sm px-6 py-8 w-[470px]">
                  <div className="font-medium text-xl">Cart Total</div>
                  <CartBill />
                  <Tip />
                  {isLoggedIn ? (
                    <CheckoutButton cart={cartItems} />
                  ) : (
                    <Link to="/auth/login">
                      <Button variant="outline">Login to checkout</Button>
                    </Link>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
