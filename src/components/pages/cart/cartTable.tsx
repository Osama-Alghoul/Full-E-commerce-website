import { useCartContext } from "../../../utils/CartContext";
import CartItem from "./cartItem";

export default function CartTable() {
  const { cartItems, getItemQuantity } = useCartContext();
  return (
    <table className="w-full border-separate border-spacing-y-0">
      <tbody>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            itemId={item.id}
            quantity={getItemQuantity(item.id)}
          />
        ))}
      </tbody>
    </table>
  );
}
