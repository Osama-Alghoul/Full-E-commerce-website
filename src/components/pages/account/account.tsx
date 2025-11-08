import { useAuthContext } from "../../../utils/AuthContext";
import Breadcrumbs from "../../ui/BreadCrumb";
import Aside from "./aside";
import Form from "./Form";

export default function Account() {
  const { userData } = useAuthContext();
  return (
    <>
      <div className="flex items-center text-sm md:text-base justify-between pr-5 lg:pr-32">
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "My Account", path: "/account" },
          ]}
        />
        <h2>
          Welcome <span className="text-primary">{userData.username}</span>
        </h2>
      </div>
      <section className="w-full flex lg:justify-center justify-start gap-24 flex-wrap">
          <Aside />
          <Form />
      </section>
    </>
  );
}
