import { Outlet } from "react-router-dom";
import AdsHeader from "./layout/header/AdsHeader";
import Header from "./layout/header/MainHeader";
import Footer from "./layout/footer/Footer";

export default function Layout() { 
  return (
    <>
      <AdsHeader>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </AdsHeader>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}