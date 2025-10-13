import { Link } from "react-router";
import Breadcrumbs from "../../ui/BreadCrumb";
import CartTable from "./cartTable";
import Button from "../../ui/Button";

export default function Cart() {
  const goods = [
    { name: "LCD Monitor", img: "", price: 650, quantity: 1 },
    { name: "LCD Monitor", img: "", price: 650, quantity: 2 },
  ];
  const subTotal = goods.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  return (
    <section className="px-6 lg:px-32 m-auto">
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Cart", path: "/cart" },
        ]}
      />
      <div className="pb-36">
        <CartTable goods={goods} />
        <div className="flex justify-between">
          <Link to={"/"}>
            <Button variant="outline">Return To Shop</Button>
          </Link>
          <Link to={"/cart/#"}>
            <Button variant="outline">Upgrade Cart</Button>
          </Link>
        </div>
        <div className="flex justify-between items-start pt-20">
          <form className="flex gap-4">
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
            <div className="flex justify-between border-b py-4 border-b-gray-300">
              <span>Subtotal</span>
              <span>${subTotal}</span>
            </div>
            <div className="flex justify-between border-b py-4 border-b-gray-300">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between py-4">
              <span>Total</span>
              <span>${subTotal}</span>
            </div>
            <Link to={"/cart/checkout"} className="m-auto">
              <Button>Procees to checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
