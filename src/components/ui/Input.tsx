export default function Input({
  placeholder = "",
  type,
  required = false,
  name,
  value,
  onChange,
  className,
}: {
  placeholder?: string;
  type?: string;
  required?: boolean;
  name?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  return (
    <input
      type={type}
      placeholder={required ? `${placeholder} *` : placeholder}
      required={required}
      name={name}
      value={value}
      onChange={onChange}
      className={`bg-secondary rounded-sm p-4 flex-grow ${className}`}
    />
  );
}
