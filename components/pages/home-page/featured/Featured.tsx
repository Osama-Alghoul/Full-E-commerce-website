import SectionTitle from "../../../ui/SectionTitle";

export default function Featured() {
  return (
    <section className="px-3.5 md:px-0">
      <SectionTitle title="Featured" bigTitle="New Arrival" />
      <div className="flex gap-[30px] justify-center">
        <div className="bg-black"><img src="/playstation.png" alt="Playstation 5" /></div>
        <div className="flex flex-col gap-[30px]">
            <div className="bg-black"><img src="/woman.png" alt="Woman" /></div>
            <div className="flex gap-[30px]">
                <div className="bg-black"><img src="/speakers.png" alt="Speaker" /></div>
                <div className="bg-black"><img src="/perfume.png" alt="Perfume" /></div>
            </div>
        </div>
      </div>
    </section>
  );
}
