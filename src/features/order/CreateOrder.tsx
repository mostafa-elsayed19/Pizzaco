import { Form, useActionData } from "react-router-dom";
import Container from "../../ui/Container";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { formatCurrency } from "./../../utils/helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxMethods";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { useState } from "react";
import { fetchAddress } from "../users/UserSlice";
import { OrderData } from "../../types/orderTypes";

import EmptyCart from "../cart/EmptyCart";

function CreateOrder() {
  const dispatch = useAppDispatch();

  // Form options
  const formErrors = useActionData() as OrderData;

  // Order Priority State
  const [priority, setPriority] = useState(false);

  // User Data
  const { name, position, address, addressStatus } = useAppSelector(
    (state) => state.user,
  );

  const loadingAddress = addressStatus === "loading";

  // Cart data
  const cart = useAppSelector(getCart);
  const totalCartPrice = useAppSelector(getTotalCartPrice);
  const priorityPrice = priority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <Container className="text-text-color">
      <h2 className="mb-6 py-8 text-xl font-semibold">
        Ready to order? let&apos;s go!
      </h2>
      <Form method="post" className="flex w-3/4 flex-col gap-4 text-text-color">
        <div className="flex flex-col items-baseline gap-2 md:flex-row md:gap-5">
          <label htmlFor="customer" className="min-w-20">
            Name
          </label>
          <div className="flex grow flex-col gap-2">
            <Input
              id="customer"
              type="text"
              placeholder="Your name..."
              className="w-full"
              defaultValue={name}
              required={true}
              name="customer"
            />
            {formErrors?.customer && (
              <p className="w-fit rounded-lg bg-red-100 px-4 py-1 text-sm font-normal text-red-600">
                {formErrors.customer}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-baseline gap-2 md:flex-row md:gap-5">
          <label htmlFor="phone" className="min-w-20">
            Phone
          </label>
          <div className="flex grow flex-col gap-2">
            <Input
              id="phone"
              type="tel"
              placeholder="Your phone..."
              className="w-full"
              required={true}
              name="phone"
            />
            {formErrors?.phone && (
              <p className="w-fit rounded-lg bg-red-100 px-4 py-1 text-sm font-normal text-red-600">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-baseline gap-2 md:flex-row md:gap-5">
          <label htmlFor="address" className="min-w-20">
            Address
          </label>
          <div className="relative flex grow flex-col gap-2">
            <Input
              id="address"
              type="text"
              placeholder="Your address..."
              className="w-full"
              disabled={loadingAddress}
              defaultValue={address}
              name="address"
              required={true}
            />
            <span className="absolute right-1 top-1 md:top-1.5">
              <Button
                disabled={loadingAddress}
                type="small"
                onClick={(e) => {
                  e?.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get Address
              </Button>
            </span>
            {formErrors?.address && (
              <p className="w-fit rounded-lg bg-red-100 px-4 py-1 text-sm font-normal text-red-600">
                {formErrors.address}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 text-lg">
          <Input
            type="checkbox"
            id="priority"
            className="h-4 w-4 cursor-pointer"
            name="priority"
            onChange={(e) => setPriority(e.target.checked)}
            checked={priority}
          />
          <label htmlFor="priority" className="cursor-pointer font-semibold">
            Want to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" value={JSON.stringify(cart)} name="cart" />
          <input
            type="hidden"
            value={JSON.stringify(priority)}
            name="priority"
          />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude}, ${position.longitude}`
                : ""
            }
          />
          <input type="hidden" value={totalPrice} name="totalPrice" />
        </div>

        <div>
          <Button type="round">
            Order now for {formatCurrency(totalPrice)}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default CreateOrder;
