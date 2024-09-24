interface Pizza {
  imageUrl: string;
  name: string;
  soldOut?: boolean;
  unitPrice: number;
  ingredients: [];
}

function MenuItem({ pizza }: { pizza: Pizza }) {
  return (
    <div className="flex gap-6 py-4 text-text-color">
      <img
        src={`${pizza.imageUrl}`}
        className={`h-24 ${pizza.soldOut && "opacity-80 grayscale"}`}
      />
      <div className="flex flex-col">
        <p className="text-lg font-medium">{pizza.name}</p>
        <p className="text-sm capitalize italic text-secondary-color">
          {pizza.ingredients.join(", ")}
        </p>
        <div className="mt-auto">
          <span
            className={`text-sm font-medium ${pizza.soldOut && "text-secondary-color"}`}
          >
            {pizza.soldOut ? "Sold Out" : `${pizza.unitPrice}`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
