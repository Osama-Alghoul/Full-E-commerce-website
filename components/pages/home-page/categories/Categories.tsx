import SectionTitle from "../../../ui/SectionTitle";
import CategoriesCards from "./CategoriesCards"

export default function Categories() {
  return (
    <section className="px-3.5 md:px-0">
      <SectionTitle title="Browse By Category" bigTitle="Categories" />
      <CategoriesCards />
    </section>
  );
}
