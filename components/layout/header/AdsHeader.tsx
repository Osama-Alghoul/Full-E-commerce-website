import React from "react";
import Link from "../../ui/Link";
import SelectMenu from "../../ui/SelectMenu";

export default function AdsHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white flex content-between lg:px-32 py-3">
      <div className="text-center grow-1 text-sm">
        {children} {" "}
        <Link href={"#"} variant={"white"}>
          ShopNow
        </Link>
      </div>
      <SelectMenu options={["English", "Arabic"]} option={""} className="content-end" />
    </div>
  );
}
