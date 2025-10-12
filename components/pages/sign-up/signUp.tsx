import { Link } from "react-router";
import Button from "../../ui/Button";

export default function SignUp() {
  return (
    <section className="flex">
      <img src="/AuthImage.png" />
      <div>
        <h2>Create an account</h2>
        <h3>Enter your details below</h3>
        <form className="flex flex-col">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email or Phone Number"/>
          <input type="password" placeholder="Password"/>
          <Button type="submit">Sign Up</Button>
        </form>
        <Button>Sign up with google</Button>
        <div>Already have account? <Link to={"/auth/login"}>Log in</Link></div>
      </div>
    </section>
  );
}
