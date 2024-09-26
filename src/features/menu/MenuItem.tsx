import { Pizza } from "../../types/pizzaTypes";
import Button from "../../ui/Button";

function MenuItem({ pizza }: { pizza: Pizza }) {
  return (
    <li className="flex gap-6 py-8 text-text-color">
      <img
        src={`${pizza.imageUrl}`}
        className={`w-28 ${pizza.soldOut && "opacity-80 grayscale"}`}
      />
      <div className="flex grow flex-col">
        <p className="text-lg font-medium">{pizza.name}</p>
        <p className="text-sm capitalize italic text-secondary-color">
          {pizza.ingredients.join(", ")}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 text-sm uppercase">
          <span
            className={`font-medium ${pizza.soldOut && "text-secondary-color"}`}
          >
            {pizza.soldOut ? "Sold Out" : `${pizza.unitPrice}`}
          </span>
          <div className="flex items-center gap-2">
            {/* <Button type="round">-</Button>
            <span>1</span>
            <Button type="round">+</Button> */}
            <Button type="small">Add to cart</Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
