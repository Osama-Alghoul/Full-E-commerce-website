import React from "react";
import AdsHeader from "./layout/header/AdsHeader";
import Header from "./layout/header/MainHeader";
import Footer from "./layout/footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdsHeader>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </AdsHeader>
      <Header />
      <div className="max-w-[1170px] m-auto">
        {children}
      </div>
      <Footer />
    </>
  );
}
