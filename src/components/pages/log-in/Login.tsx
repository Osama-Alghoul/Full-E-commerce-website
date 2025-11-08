import { useAuthContext } from "../../../utils/AuthContext";
import HomePage from "../../HomePage";
import LoginForm from "./LoginForm";

export default function Login() {
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn) {
    return <HomePage />;
  }

  return (
    <section className="flex justify-betweenm mt-14 mb-36">
      <img src="/AuthImage.png" className="hidden xl:block"/>
      <div className="m-auto">
        <h2 className="font-medium text-2xl md:text-4xl">Log in to Exclusive</h2>
        <h3 className="mb-12">Enter your details below</h3>
        <LoginForm />
      </div>
    </section>
  );
}
