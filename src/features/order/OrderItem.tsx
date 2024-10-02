import { formatCurrency } from "./../../utils/helpers";

function OrderItem({
  item,
}: {
  item: {
    quantity: number;
    totalPrice: number;
    name: string;
    addIngredients: string[];
  };
}) {
  const { quantity, totalPrice, name, addIngredients } = item;
  return (
    <li className="space-y-2 py-4">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-secondary-color">
        {addIngredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
