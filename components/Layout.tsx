import React from "react";
import AdsHeader from "./layout/header/AdsHeader";
import Header from "./layout/header/MainHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdsHeader>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </AdsHeader>
      <Header />
      <div className="px-32">
        {children}
      </div>
    </>
  );
}
