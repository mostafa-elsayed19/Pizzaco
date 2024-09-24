interface Pizza {
  imageUrl: string;
  name: string;
  soldOut: boolean;
  unitPrice: number;
  ingredients: [];
}

function MenuItem({ pizza }: { pizza: Pizza }) {
  return (
    <div className="flex flex-col gap-6 py-8 text-center text-text-color md:flex-row md:text-left">
      <img
        src={`${pizza.imageUrl}`}
        className={`mx-auto w-48 md:mx-0 md:h-24 md:w-auto ${pizza.soldOut && "opacity-80 grayscale"}`}
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
