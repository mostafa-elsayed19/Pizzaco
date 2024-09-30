import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="px-4 py-8">
      <Button type="link" to="/menu">
        &larr; Back to menu
      </Button>

      <p className="mt-7 font-semibold text-text-color">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
