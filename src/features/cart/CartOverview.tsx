import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useAppSelector } from "../../hooks/useReduxMethods";
import { getTotalCartQuantity } from "./cartSlice";
import Button from "../../ui/Button";
function CartOverview() {
  const cartItems = useAppSelector(getTotalCartQuantity);

  return (
    <Button type="link" to="/cart">
      <div className="relative cursor-pointer text-center text-2xl text-text-color">
        <HiOutlineShoppingCart />
        {cartItems > 0 && (
          <span className="absolute left-3 top-5 h-5 w-5 rounded-full bg-red-600 py-0.5 text-center text-xs text-white">
            {cartItems}
          </span>
        )}
      </div>
    </Button>
  );
}

export default CartOverview;
