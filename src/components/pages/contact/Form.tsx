import type { FormEvent } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message Sent Successfully");
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form className="shadow-[0_1px_13px_0px_#0000000D] flex flex-col p-9 gap-8" onSubmit={handelSubmit}>
        <div className="flex gap-4 flex-wrap">
          <Input required placeholder="Your Name" type="text" />
          <Input required placeholder="Your Email" type="text" />
          <Input required placeholder="Your Phone" type="text" />
        </div>
        <textarea
          className="bg-secondary rounded-sm h-52 p-4"
          placeholder="Yout message"
          name=""
          id=""
        ></textarea>
        <Button className="self-end">Submit</Button>
      </form>
    </>
  );
}
