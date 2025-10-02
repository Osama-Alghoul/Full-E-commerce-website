import CarouselSlides from "./Slides";
import PageAsideAside from "./Aside";
import BurgerMenu from "../../../ui/BurgerMenu";

export default function Hero() {
  return (
    <section className="px-5 md:px-0">
      <BurgerMenu
        links={[
          { label: "Woman's Fashion", href: "#" },
          { label: "Men's Fashion", href: "#" },
          { label: "Electronics", href: "#" },
          { label: "Home & Lifestyle", href: "#" },
          { label: "Medicine", href: "#" },
          { label: "Sports & Outdoor", href: "#" },
          { label: "Baby's & Toys", href: "#" },
          { label: "Groceries & Pets", href: "#" },
          { label: "Health & Beauty", href: "#" },
        ]}
      />
      <div className="flex justify-between gap-8">
        <PageAsideAside />
        <CarouselSlides />
      </div>
    </section>
  );
}
