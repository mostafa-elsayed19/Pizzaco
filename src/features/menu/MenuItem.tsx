import { useAppDispatch, useAppSelector } from "../../hooks/useReduxMethods";
import { Pizza } from "../../types/pizzaTypes";
import Button from "../../ui/Button";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteCartItem from "../cart/DeleteCartItem";
import UpdateCartItem from "../cart/UpdateCartItem";

function MenuItem({ pizza }: { pizza: Pizza }) {
  const {
    id: pizzaId,
    name,
    imageUrl,
    soldOut,
    ingredients,
    unitPrice,
  } = pizza;

  const currentQuantity = useAppSelector(getCurrentQuantityById(pizzaId));

  const isInCart = currentQuantity > 0;

  const dispatch = useAppDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: pizzaId,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
      ingredients,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-6 py-6 text-text-color">
      <img
        src={`${imageUrl}`}
        className={`w-28 ${pizza.soldOut && "opacity-80 grayscale"}`}
      />

      <div className="flex grow flex-col">
        <p className="text-lg font-medium">{name}</p>

        <p className="text-sm capitalize italic text-secondary-color">
          {ingredients.join(", ")}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 text-sm uppercase">
          <span
            className={`font-medium ${soldOut && "text-secondary-color line-through"}`}
          >
            {unitPrice}
          </span>

          <div className="flex items-center gap-2">
            {isInCart ? (
              <>
                <UpdateCartItem
                  pizzaId={pizzaId}
                  currentQuantity={currentQuantity}
                />
                <DeleteCartItem pizzaId={pizzaId} />
              </>
            ) : soldOut ? (
              <span className="font-bold">Sold Out</span>
            ) : (
              <Button
                type="small"
                disabled={soldOut || isInCart}
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
