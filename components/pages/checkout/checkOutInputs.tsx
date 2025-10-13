interface props {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string | number;
  required?: boolean;
  onchange: () => void;
}

export default function Input({
  id,
  name,
  label,
  required = false,
  type = "text",
  value,
  onchange,
}: props) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        {required ? <span className="text-red-500">*</span> : ""}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        name={name}
        onChange={onchange}
      />
    </>
  );
}
