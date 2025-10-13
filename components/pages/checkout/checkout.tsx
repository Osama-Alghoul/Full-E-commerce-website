import Breadcrumbs from "../../ui/BreadCrumb";
import Button from "../../ui/Button";
import CartBill from "../cart/cartBill";
import Input from "./checkOutInputs";
import { useState } from "react";

interface FormData {
  name: string;
  companyName: string;
  street: string;
  apartment: string;
  city: string;
  phone: string;
  email: string;
}

export default function CheckOut() {
  const [formData, setFromData] = useState<FormData>({
    name: "",
    companyName: "",
    street: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });
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
      <h2>Billing Details</h2>
      <form className="flex">
        <div>
          <Input
            label="First Name"
            id="name"
            value={formData.name}
            name={"name"}
            onchange={(e) => setFromData()} // TODO
          />
        </div>
        <div>
          <CartBill subTotal={1750} /> {/* TODO : Implement */}
          <input type="radio" id="bank" name="payment_method" value="bank" />
          <label htmlFor="bank">Bank</label>
          <div>
            {" "}
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />{" "}
          </div>
          <input type="radio" id="cod" name="payment_method" value="cod" />
          <label htmlFor="cod">Cash on delivery</label>
          <br />
          <div className="flex gap-4">
            <input
              type="text"
              required
              placeholder="Coupon Code"
              className="border rounded-sm py-4 px-6"
            />
            <Button type="button">Apply Coupon</Button>
          </div>
          <Button type="submit">Place Order</Button>
        </div>
      </form>
    </section>
  );
}
