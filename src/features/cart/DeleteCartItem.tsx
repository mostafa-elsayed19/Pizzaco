import { useAppDispatch } from "../../hooks/useReduxMethods";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteCartItem({ pizzaId }: { pizzaId: number }) {
  const dispatch = useAppDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteCartItem;
