import { Truck, Headphones, ShieldCheck } from "lucide-react";
import Badge from "./badge";

export default function Trusted() {
  return (
    <section className="flex justify-center gap-[88px] flex-wrap py-36">
      <Badge icon={Truck} title="FREE SHIPPING" description="Free Shipping" />
      <Badge icon={Headphones} title="24/7 CUSTOMER SERVICE" description="Friendly 24/7 customer support" />
      <Badge icon={ShieldCheck} title="MONEY BACK GUARANTEE" description="We reurn money within 30 days" />
    </section>
  );
}
