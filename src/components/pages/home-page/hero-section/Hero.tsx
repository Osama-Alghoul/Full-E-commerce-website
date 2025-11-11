import CarouselSlides from "./Slides";
import PageAsideAside from "./Aside";
import BurgerMenu from "../../../ui/BurgerMenu";

export default function Hero() {
  return (
    <section className="px-5 lg:px-0">
      <BurgerMenu
        links={[
          { label: "Woman's Fashion", href: "products?category=womens-dresses" },
          { label: "Men's Fashion", href: "products?category=mens-shirts" },
          { label: "Electronics", href: "products?category=mobile-accessories" },
          { label: "Home & Lifestyle", href: "products?category=home-decoration" },
          { label: "Sports & Outdoor", href: "/products?category=sports-accessories" },
          { label: "Groceries", href: "products?category=groceries" },
          { label: "Beauty", href: "products?category=beauty" },
        ]}
      />
      <div className="flex justify-between gap-8">
        <PageAsideAside />
        <CarouselSlides />
      </div>
    </section>
  );
}
