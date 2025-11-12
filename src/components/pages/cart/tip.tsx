import { AlertCircle, Check, Copy, Link as LucidLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Tip() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const handelCopy = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigator.clipboard.writeText("4242 4242 4242 4242");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="relative">
      <button className="text-amber-500 flex items-center gap-1.5 cursor-pointer" onClick={() => setOpen(!open)} >
        <AlertCircle className="h-5 w-5 " />
        Read me
      </button>

      {open && (
        <div
          className="absolute rounded-lg shadow-md px-4 py-2 text-sm border border-amber-500 bg-white text-foreground z-10"
          onClick={() => setOpen(!open)}
        >
          For a demo purposes the checkout session won't be created unless you
          choose only from these products:
          <ul className="text-primary">
            <Link to={"/products/100"}>
              <li className="flex gap-1 items-center">
                Apple Airpods <LucidLink className="size-3" />{" "}
              </li>
            </Link>
            <Link to={"/products/104"}>
              <li className="flex gap-1 items-center">
                Apple iPhone Charger <LucidLink className="size-3" />
              </li>
            </Link>
            <Link to={"/products/123"}>
              <li className="flex gap-1 items-center">
                iPhone 13 Pro <LucidLink className="size-3" />
              </li>
            </Link>
          </ul>
          Use{" "}
          <span
            className="bg-gray-300 rounded-sm shadow-md px-1 py-0.5 inline-flex gap-1 items-center w-fit cursor-pointer"
            onClick={handelCopy}
          >
            4242 4242 4242 4242
            {copied ? (
              <Check className="size-4" />
            ) : (
              <Copy className="size-4" />
            )}
          </span>{" "}
          as card number and fill the rest with any data
        </div>
      )}
    </div>
  );
}
