import SectionTitle from "../../../ui/SectionTitle";

export default function Featured() {
  return (
    <div>
      <SectionTitle title="Featured" bigTitle="New Arrival" />
      <div className="flex">
        <div className="row-span-2 col-span-2 bg-red-500">1</div>
        <div className="col-span-2 bg-green-500">
            <div></div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
      </div>
    </div>
  );
}
