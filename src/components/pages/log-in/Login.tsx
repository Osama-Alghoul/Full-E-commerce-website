import { Link } from "react-router";
import Button from "../../ui/Button";

export default function Login() {
  return (
    <section className="flex justify-betweenm mt-14 mb-36">
      <img src="/AuthImage.png" className="hidden xl:block"/>
      <div className="m-auto">
        <h2 className="font-medium text-2xl md:text-4xl">Log in to Exclusive</h2>
        <h3 className="mb-12">Enter your details below</h3>
        <form className="flex flex-col gap-10 mb-4 [&>input]:border-b [&>input]:border-b-gray-400 text-sm md:text-base">
          <input type="text" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />
          <div className="flex justify-between items-center gap-2.5">
            <Button type="submit">login</Button>{" "}
            <Link to={"/auth/login/#"} className="text-primary">Forget Password?</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
