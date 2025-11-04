import Breadcrumbs from "../../ui/BreadCrumb";
import Badges from "./badges";
import Trusted from "../home-page/trust-badges/Trusted";
import Employees from "./employees";

export default function About() {
  return (
    <section>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
        ]}
      />
      <div className="flex">
        <div>
          <h1 className="text-[54px] font-semibold">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src="/about.jpg" />
      </div>
      <Badges />
      <Employees />
      <Trusted />
    </section>
  );
}
