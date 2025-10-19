interface props {
  color: string;
  index: number;
  productColor: number;
  setProductColor: (value: number) => void;
}

export default function ColorSelect({
  color,
  index,
  productColor,
  setProductColor,
}: props) {
  function handleColorChange(index: number) {
    setProductColor(index);
  }
  return (
    <div
      key={index}
      className={`rounded-full w-5 h-5 inline-block mr-2 mt-2 transition-all cursor-pointer hover:scale-110 ${
        productColor === index ? "border-2" : ""
      }`}
      style={{ backgroundColor: `${color}` }}
      onClick={() => handleColorChange(index)}
    ></div>
  );
}