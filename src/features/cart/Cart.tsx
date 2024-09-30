import { useAppDispatch, useAppSelector } from "../../hooks/useReduxMethods";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
// import { fakeData } from "../../utils/fakeData";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

// const cart = fakeData;

function Cart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(getCart);

  if (!cart.length) return <EmptyCart />;
  return (
    <Container display="flex flex-col gap-4">
      <Button type="link" to="/menu">
        &larr; back to menu
      </Button>

      <h2 className="text-xl font-semibold text-accent-color">Your cart, X</h2>

      <ul className="divide-y-2 divide-accent-color border-b-2 border-accent-color">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-4 space-x-2">
        <Button type="primary" to="/order/newOrder">
          Order pizza
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
