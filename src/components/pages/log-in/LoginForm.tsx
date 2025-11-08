import { Link } from "react-router";
import { type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import toast, { Toaster } from "react-hot-toast";
import { useAuthContext } from "../../../utils/AuthContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const { getUserData } = useAuthContext();

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const username = formData.get("username");
    const password = formData.get("password");

    if (!username || !password) {
      toast.error("Please enter both username and password.");
      return;
    }

    // This is a placeholder for your actual authentication logic (e.g., calling an API)
    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
      getUserData({ data: { username: username as string } });

      toast.success(`Welcome back, ${username}!`);

      // setTimeout(() => {
      //   navigate(-1);
      // }, 500);
    } else {
      toast.error("Login failed. Check your credentials and try again.");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <form
        onSubmit={handelSubmit}
        className="flex flex-col gap-10 mb-4 [&>input]:border-b [&>input]:border-b-gray-400 text-sm md:text-base"
      >
        <input type="text" placeholder="Username" name="username" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />

        <div className="flex justify-between items-center gap-2.5">
          <Button type="submit">login</Button>
          <Link to={"/auth/login/#"} className="text-primary">
            Forget Password?
          </Link>
        </div>
      </form>
    </>
  );
}
