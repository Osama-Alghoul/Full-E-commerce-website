import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handelClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success("Profile Updated Successfully");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={handelClick}
        className="shadow-md max-w-[870px] lg:px-20 md:px-10 px-4 py-10"
      >
        <div className="text-primary font-medium">Edit Your Profile</div>
        <div className="flex gap-12 flex-wrap pb-5">
          <div className="flex gap-12 w-full flex-wrap">
            <Input placeholder="First name" required />
            <Input placeholder="Last name" required />
          </div>
          <div className="flex gap-12 w-full flex-wrap">
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Address" required />
          </div>
          <div className="flex flex-col w-full gap-7">
            <div>Password</div>
            <Input placeholder="Current Passwod" type="password" required />
            <Input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Passwod"
              type="password"
              required
            />
            <Input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Passwod"
              type="password"
              required
            />
          </div>
        </div>
        <div className="flex justify-end w-full">
          <Button variant="shadow">Cancel</Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </>
  );
}
