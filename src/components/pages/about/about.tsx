import Breadcrumbs from "../../ui/BreadCrumb";
import Badges from "./badges";
import Trusted from "../home-page/trust-badges/Trusted";
import Employees from "./employees";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
        ]}
      />
      <section>
        <div className="flex gap-20 px-4 md:pl-[135px] md:px-0 md:pb-36 pb-16 flex-wrap lg:flex-nowrap">
          <div className="max-w-[525px]">
            <h1 className="md:text-[54px] text-4xl font-semibold pb-4">
              Our Story
            </h1>
            <p>
              Launced in 2015, Exclusive is South Asia's premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img src="/about.jpg" className="w-full" />
        </div>
        <div className="px-4 md:px-[135px] m-auto">
          <Badges />
          <Employees />
          <Trusted />
        </div>
      </section>
    </>
  );
}
