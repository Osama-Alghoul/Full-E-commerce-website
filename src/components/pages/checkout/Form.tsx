import { useState } from "react";
import { useCartContext } from "../../../utils/CartContext";
import Input from "./checkOutInputs";
import Item from "./Item";
import CartBill from "../cart/cartBill";
import Button from "../../ui/Button";
interface FormData {
  name: string;
  companyName: string;
  street: string;
  apartment: string;
  city: string;
  phone: string;
  email: string;
}
export default function Form() {
  const { cartItems } = useCartContext();
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
    <form
      className="flex justify-between flex-wrap"
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
      <div className="flex flex-col md:gap-16 gap-10 lg:pb-0 pb-10">
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
          {cartItems.map((prod) => (
            <Item key={prod.id} itemId={prod.id} />
          ))}
        </div>
        <CartBill />
        <div>
          <div className="flex justify-between flex-wrap">
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
        <div className="flex gap-4 flex-wrap">
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
  );
}
