export default function SectionTitle({
  title,
  bigTitle,
}: {
  title: string;
  bigTitle?: string;
}) {
  return (
    <div>
      <div className="relative">
        <span className="absolute h-10 w-5 bg-primary rounded-sm left-0 top-1/2 transform -translate-y-1/2"></span>
        <h2 className="font-semibold ml-9 text-primary md:text-base text-sm">{title}</h2>
      </div>
      <h1 className="md:text-4xl text-3xl mt-6">{bigTitle}</h1>
    </div>
  );
}
