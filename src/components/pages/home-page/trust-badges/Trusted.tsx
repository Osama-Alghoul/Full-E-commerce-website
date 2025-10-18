import { Truck, Headphones, ShieldCheck } from "lucide-react";

export default function Trusted() {
  return (
    <section className="flex justify-center gap-[88px] flex-wrap py-36">
      <div className="flex flex-col items-center gap-6 text-center">
        <Truck className="h-14 w-14 bg-black text-white rounded-full border-8 border-black outline-9 outline-gray-300 " />
        <div>
          <div className="font-semibold text-xl">FREE AND FAST DELIVERY</div>
          <div className="text-sm text-center">
            Free delivery for all orders over $140
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 text-center">
        <Headphones className="h-14 w-14 bg-black text-white rounded-full border-8 border-black outline-9 outline-gray-300 " />
        <div>
          <div className="font-semibold text-xl">24/7 CUSTOMER SERVICE</div>
          <div className="text-sm text-center">
            Friendly 24/7 customer support
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 text-center">
        <ShieldCheck className="h-14 w-14 bg-black text-white rounded-full border-8 border-black outline-9 outline-gray-300 " />
        <div>
          <div className="font-semibold text-xl">MONEY BACK GUARANTEE</div>
          <div className="text-sm">We reurn money within 30 days</div>
        </div>
      </div>
    </section>
  );
}
