import SectionTitle from "../../../ui/SectionTitle";
import Timer from "../../../ui/Timer";

export default function Sales() {
  return (
    <div>
      <div className="rounded-lg shadow-md mt-12 flex gap-20 items-end">
        <SectionTitle title="Today's" bigTitle="Flash Sales" />
        <Timer targetDate="2025-12-25T00:00:00" />
      </div>
    </div>
  );
}
