function OrderItem({
  item,
}: {
  item: {
    quantity: number;
    totalPrice: number;
    name: string;
    ingredients: string[];
  };
}) {
  const { quantity, totalPrice, name, ingredients } = item;
  return (
    <li className="space-y-2 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{totalPrice}</p>
      </div>
      <p className="text-sm capitalize italic text-secondary-color">
        {ingredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
