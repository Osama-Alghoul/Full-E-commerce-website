interface SelectProps {
  options: string[];
  option: string;
  className?: string;
}

export default function SelectMenu({ options, className }: SelectProps) {
  return (
    <select className={className}>
      {options.map((option: string) => (
        <option key={option} className="text-black">{option}</option>
      ))}
    </select>
  );
}
