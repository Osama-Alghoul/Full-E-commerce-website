import Breadcrumbs from "../../ui/BreadCrumb";
import Form from "./Form";
import Info from "./Info";

export default function Contact() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />
      <section className="w-full flex justify-center gap-8 pb-36 flex-wrap">
        <Info />
        <Form />
      </section>
    </>
  );
}
