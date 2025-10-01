import Button from "../../../ui/Button";
import Timer from "../../../ui/Timer";

export default function BestSellingItem() {
  return (
    <div className="bg-black w-full flex gap-7">
      <div>
        <div className="flex flex-col items-start gap-8 pl-14 py-[69px]">
          <div className="text-button1 font-semibold">Categories</div>
          <div className="text-white font-semibold text-5xl">
            Enhance Your Music Experience
          </div>
          <div><Timer targetDate="2025-10-31T23:59:59Z" /></div>
          <Button variant="green">Buy now</Button>
        </div>
      </div>
      <div className="bg-[url('/ellipse.svg')] bg-contain bg-center pr-11 py-10">
        <img src="/music-box.png" />
      </div>
    </div>
  );
}
