import { useLoaderData, useParams } from "react-router-dom";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import OrderItem from "./OrderItem";
import { formatCurrency, formatDate } from "./../../utils/helpers";
import { OrderData } from "../../types/orderTypes";

const date = "2024-09-26T03:07:11.152Z";

const orderPrice = 67;
const priorityPrice = 20;
const priority = true;

function Order() {
  const { orderId } = useParams();
  const { cart } = useLoaderData() as OrderData;
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
        <span className="text-xs">
          (Estimated delivery: {formatDate(date)})
        </span>
      </section>

      <section>
        <ul className="mx-auto flex flex-col divide-y-2">
          {cart.map((item) => (
            <OrderItem item={item} key={item.pizzaId} />
          ))}
        </ul>
      </section>

      <section className="space-y-2 bg-stone-200/70 px-6 py-5 text-secondary-color dark:bg-main-color">
        <p className="text-sm font-medium">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold text-text-color">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </section>

      <section className="self-end">
        <Button type="primary">Make Priority</Button>
      </section>
    </Container>
  );
}

export default Order;
