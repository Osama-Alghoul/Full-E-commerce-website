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

  const mockData = [
    {
      img: "",
      name: "LCD Monitor",
      price: 650,
    },
    { img: "", name: "H1 Gamepad", price: 650 },
  ];

  return (
    <section className="px-6 lg:px-32 m-auto pb-36">
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "My Account", path: "/account" },
          { label: "Product", path: "/product" },
          { label: "View Cart", path: "/cart" },
          { label: "CheckOut", path: "/cart/checkout" },
        ]}
      />
      <h2 className="font-medium text-4xl mb-20">Billing Details</h2>
      <form
        className="flex justify-between"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setFromData({
            name: "",
            companyName: "",
            street: "",
            apartment: "",
            city: "",
            phone: "",
            email: "",
          });
        }}
      >
        <div className="flex flex-col gap-16">
          <Input
            label="First Name"
            id="name"
            value={formData.name}
            name={"name"}
            onchange={() => {}} // TODO
            required
          />
          <Input
            label="Company Name"
            id="companyName"
            value={formData.companyName}
            name={"companyName"}
            onchange={() => {}} // TODO
          />
          <Input
            label="Street Address"
            id="street"
            value={formData.street}
            name={"street"}
            onchange={() => {}} // TODO
            required
          />
          <Input
            label="Apartment, floor, etc. (optional)"
            id="apartment"
            value={formData.apartment}
            name={"apartment"}
            onchange={() => {}} // TODO
            required
          />
          <Input
            label="Town/City"
            id="city"
            value={formData.city}
            name={"city"}
            onchange={() => {}} // TODO
            required
          />
          <Input
            label="Phone Number"
            id="phone"
            value={formData.phone}
            name={"phone"}
            onchange={() => {}} // TODO
            required
          />
          <div>
            <Input
              label="Email Address"
              id="email"
              value={formData.email}
              name={"email"}
              onchange={() => {}} // TODO
              required
            />
            <div>
              <input id="save-info" type="checkbox" />
              <label htmlFor="save-info">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            {mockData.map((prod) => {
              return (
                <div className="flex justify-between">
                  <div>
                    <img src={prod.img} alt="" />
                    <div>{prod.name}</div>
                  </div>
                  <div>${prod.price}</div>
                </div>
              );
            })}
          </div>
          <CartBill subTotal={1750} /> {/* TODO : Implement */}
          <div>
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <input
                  type="radio"
                  id="bank"
                  name="payment_method"
                  value="bank"
                  className="size-6"
                />
                <label htmlFor="bank">Bank</label>
              </div>
              <div className="flex [img>&]:flex-none [img>&]:">
                <img src="/bkash.png" alt="bkash" />
                <img src="/visa.png" alt="Visa" />
                <img src="/mastercard.png" alt="mastercard" />
                <img src="/huh.png" alt="huh" />
              </div>
            </div>

            <div className="flex gap-4">
              <input
                type="radio"
                id="cod"
                name="payment_method"
                value="cod"
                className="size-6"
              />
              <label htmlFor="cod">Cash on delivery</label>
            </div>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              required
              placeholder="Coupon Code"
              className="border rounded-sm py-4 px-6"
            />
            <Button type="button">Apply Coupon</Button>
          </div>
          <Button type="submit" className="self-start">
            Place Order
          </Button>
        </div>
      </form>
    </section>
  );
}
