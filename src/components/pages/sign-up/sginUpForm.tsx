import Button from "../../ui/Button";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

export default function SginUpForm() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
  };
  return (
    <form onSubmit={handelSubmit} className="flex flex-col gap-10 mb-4 [&>input]:border-b [&>input]:border-b-gray-400 md:text-base text-sm">
      <input
        type="text"
        placeholder="Name"
        required
        pattern="[A-Za-z\s]+"
        title="Name must only contain letters and spaces."
      />
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <Button type="submit">Create Account</Button>
      {success && (
        <p className="font-semibold text-green-400">
          Account Created Successfuly
        </p>
      )}
    </form>
  );
}
