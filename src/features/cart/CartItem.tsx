import { useAppSelector } from "../../hooks/useReduxMethods";
import { Cart } from "../../types/cartTypes";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentQuantityById } from "./cartSlice";
import DeleteCartItem from "./DeleteCartItem";
import UpdateCartItem from "./UpdateCartItem";

function CartItem({ item }: { item: Cart }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useAppSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="flex justify-between gap-4 py-2 text-text-color">
      <div className="flex grow items-center justify-between">
        <p>
          {quantity}&times; {name}
        </p>
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <UpdateCartItem pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteCartItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
