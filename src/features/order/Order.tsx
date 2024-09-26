// order #PJO1QF
import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import OrderItem from "./OrderItem";

interface OrderItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  ingredients: string[];
}

const fakeData: OrderItem[] = [
  {
    pizzaId: 1,
    name: "Margherita",
    quantity: 3,
    unitPrice: 12,
    totalPrice: 36,
    ingredients: ["tomato", "mozzarella", "basil"],
  },
  {
    pizzaId: 3,
    name: "Romana",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
    ingredients: ["tomato", "mozzarella", "prosciutto"],
  },
  {
    pizzaId: 4,
    name: "Prosciutto e Rucola",
    quantity: 1,
    unitPrice: 16,
    totalPrice: 16,
    ingredients: ["tomato", "mozzarella", "prosciutto", "arugula"],
  },
];

const orderPrice = 67;
const priorityPrice = 20;
const priority = true;

function Order() {
  const { orderId } = useParams();
  return (
    <Container display="flex flex-col gap-y-8 text-text-color">
      <section className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Order #{orderId} Status</h1>
        <div className="space-x-2 text-sm uppercase text-white *:rounded-full *:px-3 *:py-1">
          <span className="bg-green-600">Preparing order</span>
          <span className="bg-red-600">Priority</span>
        </div>
      </section>

      <section className="flex items-center justify-between bg-stone-200/70 px-6 py-4 dark:bg-main-color">
        <h2 className="text-lg font-normal">Only 72 minutes left 😃</h2>
        <span className="text-xs">(Estimated delivery: Sep 26, 06:07 AM)</span>
      </section>

      <section>
        <ul className="mx-auto flex flex-col divide-y-2">
          {fakeData.map((item) => (
            <OrderItem item={item} key={item.pizzaId} />
          ))}
        </ul>
      </section>

      <section className="space-y-2 bg-stone-200/70 px-6 py-5 text-secondary-color dark:bg-main-color">
        <p className="text-sm font-medium">Price pizza: {orderPrice}</p>
        {priority && (
          <p className="text-sm font-medium">Price priority: {priorityPrice}</p>
        )}
        <p className="font-bold text-text-color">
          To pay on delivery: {orderPrice + priorityPrice}
        </p>
      </section>

      <section className="self-end">
        <Button type="primary">Make Priority</Button>
      </section>
    </Container>
  );
}

export default Order;
