import { Link } from "react-router";
import Button from "../../ui/Button";

export default function SignUp() {
  return (
    <section className="flex justify-between mt-14 mb-36 flex-wrap">
      <img src="/AuthImage.png" className="hidden xl:block" />
      <div className="m-auto">
        <h2 className="font-medium md:text-4xl text-2xl">Create an account</h2>
        <h3 className="mb-12">Enter your details below</h3>
        <form className="flex flex-col gap-10 mb-4 [&>input]:border-b [&>input]:border-b-gray-400 md:text-base text-sm">
          <input
            type="text"
            placeholder="Name"
            required
            pattern="[A-Za-z\s]+"
            title="Name must only contain letters and spaces."
          />
          <input type="text" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />
          <Button type="submit">Create Account</Button>
        </form>
        <div className="flex flex-col text-sm">
          <Button className="mb-8 flex gap-4 justify-center" variant="outline">
            <img src="/google-logo.svg" className="w-6" /> Sign up with google
          </Button>
          <div className="opacity-70 m-auto">
            Already have account?{" "}
            <Link to={"/auth/login"} className="underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
