import { useFetcher, useLoaderData } from "react-router-dom";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import OrderItem from "./OrderItem";
import { formatCurrency, formatDate } from "./../../utils/helpers";
import { OrderData } from "../../types/orderTypes";
import { useEffect, useState } from "react";

const PRIORITY_PRICE = 0.2;
// const TIME_PER_PIZZA_MINUTES = 10; // Time per pizza in minutes
// const ORDER_PREPARATION_BUFFER_MINUTES = 15; // Optional buffer time
// const PRIORITY_REDUCTION_MINUTES = 10; // Time reduction for priority orders

function Order() {
  const order = useLoaderData() as OrderData;
  const fetcher = useFetcher();
  const {
    id: orderId,
    status,
    cart,
    totalPrice: orderPrice,
    priority,
    estimatedDelivery,
  } = order;

  // const totalQuantity = cart.reduce(
  //   (acc, item) => acc + (item.quantity || 1),
  //   0,
  // );
  // const totalPreparationTimeMinutes =
  //   totalQuantity * TIME_PER_PIZZA_MINUTES + ORDER_PREPARATION_BUFFER_MINUTES;

  // const effectivePreparationTimeMinutes = priority
  //   ? totalPreparationTimeMinutes - PRIORITY_REDUCTION_MINUTES
  //   : totalPreparationTimeMinutes;

  // const preparationTime = Math.max(effectivePreparationTimeMinutes, 0);

  const [minutesLeft, setMinutesLeft] = useState<number | null>(null);

  useEffect(() => {
    if (estimatedDelivery) {
      const now = new Date();
      const deliveryTime = new Date(estimatedDelivery);
      const timeDiff = deliveryTime.getTime() - now.getTime();

      // Calculate minutes left
      const minutes = Math.floor(timeDiff / (1000 * 60));
      setMinutesLeft(minutes >= 0 ? minutes : 0); // Set to 0 if negative
    }
  }, [estimatedDelivery]);

  const priorityPrice = !priority ? orderPrice * PRIORITY_PRICE : 0;

  // console.log(order);
  return (
    <Container display="flex flex-col gap-y-8 text-text-color py-10">
      <section className="flex flex-wrap items-center justify-between gap-y-4">
        <h1 className="text-xl font-semibold">Order #{orderId} Status</h1>
        <div className="space-x-2 text-sm uppercase text-white *:rounded-full *:px-3 *:py-1">
          <span className="bg-green-600">
            {status === "preparing" ? "Preparing order" : "Order delivered"}
          </span>
          {priority && <span className="bg-red-600">Priority</span>}
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-y-4 bg-stone-200/70 px-6 py-4 dark:bg-main-color">
        <h2 className="text-lg font-normal">
          {status === "preparing"
            ? `Order will take ${minutesLeft !== null ? minutesLeft : "calculating..."} minutes to arrive.`
            : "Order should've arrived"}
        </h2>
        <span className="text-xs">
          (Estimated delivery:{" "}
          {estimatedDelivery ? formatDate(estimatedDelivery) : "TBA"})
        </span>
      </section>

      <section>
        <ul className="flex flex-col divide-y-2">
          {cart.map((item) => (
            <OrderItem item={item} key={item.pizzaId} />
          ))}
        </ul>
      </section>

      <section className="space-y-2 bg-stone-200/70 px-6 py-5 text-secondary-color dark:bg-main-color">
        <p className="text-sm font-medium">
          Order price: {formatCurrency(orderPrice)}
        </p>
        {!priority && (
          <p className="text-sm font-medium">
            Priority Price: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold text-text-color">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </section>

      {!priority && (
        <section className="self-end">
          <fetcher.Form method="PATCH">
            <Button type="primary">Make Priority</Button>
          </fetcher.Form>
        </section>
      )}
    </Container>
  );
}

export default Order;
