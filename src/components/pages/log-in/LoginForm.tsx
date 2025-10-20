import { Link, redirect } from "react-router";
import Button from "../../ui/Button";
import { useState, type FormEvent } from "react";

export default function LoginForm() {
  const [failuire, setFailuire] = useState(false);
  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const username = formData.get("username");
    const password = formData.get("password");
    if (!username || !password) {
      setFailuire(true);
      return;
    }

    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      setFailuire(true);
      console.error("Login failed:", response.status);
    } else {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      redirect("/");
    }
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="flex flex-col gap-10 mb-4 [&>input]:border-b [&>input]:border-b-gray-400 text-sm md:text-base"
    >
      <input type="text" placeholder="Username" name="username" required />
      <input type="password" placeholder="Password" name="password" required />
      {failuire && (
        <p className="text-red-400 font-semibold">
          Failed to login, try again!
        </p>
      )}
      <div className="flex justify-between items-center gap-2.5">
        <Button type="submit">login</Button>
        <Link to={"/auth/login/#"} className="text-primary">
          Forget Password?
        </Link>
      </div>
    </form>
  );
}
