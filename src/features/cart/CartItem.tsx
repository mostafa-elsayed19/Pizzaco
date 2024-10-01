import { useAppDispatch, useAppSelector } from "../../hooks/useReduxMethods";
import { Cart } from "../../types/cartTypes";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentQuantityById, toggleIngredient } from "./cartSlice";
import DeleteCartItem from "./DeleteCartItem";
import UpdateCartItem from "./UpdateCartItem";

function CartItem({ item }: { item: Cart }) {
  const { pizzaId, name, quantity, totalPrice, ingredients, addIngredients } =
    item;
  const currentQuantity = useAppSelector(getCurrentQuantityById(pizzaId));

  const dispatch = useAppDispatch();
  function handleRemoveIngredient(
    e: React.ChangeEvent<HTMLInputElement>,
    ingredient: string,
  ) {
    const isChecked = e.target.checked;
    dispatch(toggleIngredient({ pizzaId, ingredient, checked: isChecked }));
  }

  return (
    <li className="py-4 text-text-color">
      <div className="flex justify-between gap-4">
        <div className="flex grow items-center justify-between">
          <p>
            <span className="text-accent-color">{quantity}&times;</span>{" "}
            <span className="font-bold">{name}</span>
          </p>
          <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <UpdateCartItem pizzaId={pizzaId} currentQuantity={currentQuantity} />
          <DeleteCartItem pizzaId={pizzaId} />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 text-secondary-color">
        <h2 className="text-sm font-semibold">Remove ingredients</h2>
        <div className="flex flex-col flex-wrap gap-2 px-8 text-sm md:flex-row md:gap-4">
          {ingredients.map((item, index) => {
            const isChecked = addIngredients.includes(item);
            return (
              <div className="flex gap-1" key={index}>
                <input
                  type="checkbox"
                  placeholder="none"
                  id={`${pizzaId}-${item}`}
                  className="bg-accent-color p-4"
                  onChange={(e) => handleRemoveIngredient(e, item)}
                  disabled={addIngredients.length === 1 && isChecked}
                />
                <label
                  htmlFor={`${pizzaId}-${item}`}
                  className="cursor-pointer"
                >
                  {item}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
}

export default CartItem;
