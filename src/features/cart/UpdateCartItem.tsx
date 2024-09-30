import { useAppDispatch } from "../../hooks/useReduxMethods";
import Button from "../../ui/Button";
import { decreaseItemQtn, increaseItemQtn } from "./cartSlice";

function UpdateCartItem({
  pizzaId,
  currentQuantity,
}: {
  pizzaId: number;
  currentQuantity?: number;
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center gap-2">
      <Button type="round" onClick={() => dispatch(decreaseItemQtn(pizzaId))}>
        -
      </Button>

      <span className="text-sm font-normal text-text-color">
        {currentQuantity}
      </span>

      <Button type="round" onClick={() => dispatch(increaseItemQtn(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateCartItem;
