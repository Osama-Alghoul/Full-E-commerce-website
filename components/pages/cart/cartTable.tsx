interface props {
  goods: {
    name: string;
    img: string;
    price: number;
    quantity: number;
  }[];
}

export default function CartTable({ goods }: props) {
  return (
    <table className="w-full border-separate border-spacing-y-0">
      <thead className="text-sm">
        <tr className="flex justify-between items-center px-4 pb-4">
          <th className="flex-1 text-left min-w-0">Product</th>
          <th className="w-1/5 text-left font-normal">Price</th>
          <th className="w-1/5 text-center font-normal">Quantity</th>
          <th className="w-1/5 text-right font-normal pr-4">Subtotal</th>
        </tr>
      </thead>
      
      <tbody>
        {goods.map((good) => (
          <tr 
            key={good.name} 
            className="flex justify-between items-center bg-white border-b border-gray-100 py-6"
          >
            <td className="flex-1 flex items-center gap-4 min-w-0 pl-4">
              <div className="relative">
                <span className="absolute -top-3 -left-3 text-red-500 text-lg">
                  &times;
                </span>
                <div className="w-12 h-12 flex items-center justify-center">
                    {good.img}
                </div>
              </div>
              <span className="font-medium text-sm">{good.name}</span>
            </td>
            
            <td className="w-1/5 text-left text-sm">
              ${good.price.toFixed(2)}
            </td>
            
            <td className="w-1/5 text-center">
              <input 
                type="number" 
                value={good.quantity} 
                readOnly 
                className="w-16 p-2 text-center rounded-sm border border-gray-300 appearance-none"
              />
            </td>
            
            <td className="w-1/5 text-right font-medium text-sm pr-4">
              ${(good.price * good.quantity).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}