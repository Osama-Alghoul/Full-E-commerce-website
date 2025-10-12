import { Link } from "react-router";
import Button from "../../ui/Button";

export default function Login() {
  return (
    <section className="flex">
      <img src="/AuthImage.png" />
      <div>
        <h2>Log in to Exclusive</h2>
        <h3>Enter your details below</h3>
        <form className="flex flex-col">
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <div>
            <Button type="submit">Log In</Button>
            <Link to={"/auth/login/#"}>Forget Password?</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
