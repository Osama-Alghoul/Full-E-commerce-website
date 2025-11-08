import Breadcrumbs from "../../ui/BreadCrumb";
import { useAuthContext } from "../../../utils/AuthContext";
import Login from "../log-in/Login";
import Form from "./Form";

export default function CheckOut() {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "View Cart", path: "/cart" },
          { label: "CheckOut", path: "/cart/checkout" },
        ]}
      />
      <section className="px-6 lg:px-32 m-auto pb-36">
        <h2 className="font-medium text-4xl mb-20">Billing Details</h2>
        <Form />
      </section>
    </>
  );
}
