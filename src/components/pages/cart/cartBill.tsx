export default function CartBill({ subTotal }: { subTotal: number }) {
  return (
    <>
      <div className="flex justify-between border-b py-4 border-b-gray-300">
        <span>Subtotal</span>
        <span>${subTotal}</span>
      </div>
      <div className="flex justify-between border-b py-4 border-b-gray-300">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between py-4">
        <span>Total</span>
        <span>${subTotal}</span>
      </div>
    </>
  );
}
