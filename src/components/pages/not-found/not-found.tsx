import { Link } from "react-router";
import Breadcrumbs from "../../ui/BreadCrumb";
import Button from "../../ui/Button";

export default function NotFound() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "404 Not Found", path: "/not-found" },
        ]}
      />
      <section className="w-full flex flex-col justify-center items-center gap-11 pb-36 px-5">
        <h1 className="font-medium lg:text-8xl md:text-6xl text-4xl">404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to={"/"}>
          <Button>Back to home page</Button>
        </Link>
      </section>
    </>
  );
}
