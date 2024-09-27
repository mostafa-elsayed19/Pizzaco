import { CartOrder } from "../../types/pizzaTypes";
import { formatCurrency } from "../../utils/helpers";
import DeleteCartItem from "./DeleteCartItem";
import UpdateCartItem from "./UpdateCartItem";

function CartItem({ item }: { item: CartOrder }) {
  const { name, quantity, totalPrice } = item;
  return (
    <li className="flex justify-between gap-4 py-2 text-text-color">
      <div className="flex grow items-center justify-between">
        <p>
          {quantity}&times; {name}
        </p>
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <UpdateCartItem onClick={function () {}} />
        <DeleteCartItem onClick={function () {}} />
      </div>
    </li>
  );
}

export default CartItem;
