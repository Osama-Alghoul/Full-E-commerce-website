import { Link } from "react-router";
import Button from "../../../ui/Button";
import Timer from "../../../ui/Timer";

export default function BestSellingItem() {
  return (
    <div className="bg-black w-full flex gap-7 flex-wrap lg:flex-nowrap">
      <div>
        <div className="flex flex-col items-start gap-8 p-5 md:pl-14 md:py-[69px]">
          <div className="text-button1 font-semibold">Categories</div>
          <div className="text-white font-semibold text-5xl">
            Enhance Your Music Experience
          </div>
          <div>
            <Timer targetDate="2026-05-31T23:59:59Z" />
          </div>
          <Link to="/products/99">
            <Button variant="green">Buy now</Button>
          </Link>
        </div>
      </div>
      <div className="lg:bg-[url('/ellipse.svg')] bg-contain bg-center md:pr-11 md:py-10 flex items-center justify-center pb-2.5 lg:pb:0">
        <img src="/music-box.png" />
      </div>
    </div>
  );
}
