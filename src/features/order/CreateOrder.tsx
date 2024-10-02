import { Form } from "react-router-dom";
import Container from "../../ui/Container";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { formatCurrency } from "./../../utils/helpers";
import { getAddress as fetchAddress } from "../../services/apiLocation";
import { useAppSelector } from "../../hooks/useReduxMethods";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { useState } from "react";
import { useFormSubmission } from "../../hooks/useFormSubmission";
import EmptyCart from "../cart/EmptyCart";

function CreateOrder() {
  const cart = useAppSelector(getCart);
  const [position, setPosition] = useState({ latitude: "", longitude: "" });

  const [priority, setPriority] = useState(false);
  const {
    errors,
    formValues,
    handleInputChange,
    handleSubmit,
    setFormValues,
    setErrors,
  } = useFormSubmission();

  // const formErrors = useActionData() as {
  //   customer: string;
  //   phone: string;
  //   address: string;
  // };

  const totalCartPrice = useAppSelector(getTotalCartPrice);

  const priorityPrice = priority ? totalCartPrice * 0.2 : 0;

  const totalPrice = totalCartPrice + priorityPrice;

  async function handleFetchingAddress() {
    try {
      const { city, countryName, position } = await fetchAddress();
      const fullAddress = `${city}, ${countryName}`;
      setFormValues((prev) => ({ ...prev, address: fullAddress }));
      setErrors((prev) => ({ ...prev, address: "" }));
      setPosition(position);
    } catch (error) {
      console.log(error);
      setErrors((prev) => ({ ...prev, address: "Failed to get the address" }));
    }
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <Container className="text-text-color">
      <h2 className="mb-8 py-8 text-xl font-semibold">
        Ready to order? let&apos;s go!
      </h2>
      <Form
        method="post"
        className="flex flex-col gap-4 text-text-color"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-baseline gap-2 md:flex-row md:gap-5">
          <label htmlFor="customer" className="min-w-20">
            Name
          </label>
          <div className="flex w-3/4 flex-wrap items-baseline gap-4">
            <Input
              id="customer"
              type="text"
              placeholder="Your name..."
              className="w-full"
              // defaultValue="mostafa"
              required={true}
              name="customer"
              value={formValues.customer}
              onChange={handleInputChange}
            />
            {errors.customer && (
              <p className="text-sm font-normal text-red-700">
                {errors.customer}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-baseline gap-2 md:flex-row md:gap-5">
          <label htmlFor="phone" className="min-w-20">
            Phone
          </label>
          <div className="flex w-3/4 flex-wrap items-baseline gap-4">
            <Input
              id="phone"
              type="text"
              placeholder="Your phone..."
              className="grow"
              required={true}
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
            />
            {errors.phone && (
              <p className="text-sm font-normal text-red-700">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-baseline gap-2 md:flex-row md:gap-5">
          <label htmlFor="address" className="min-w-20">
            Address
          </label>
          <div className="relative flex w-3/4 flex-wrap items-baseline gap-4">
            <Input
              id="address"
              type="text"
              placeholder="Your address..."
              className="w-full"
              required={true}
              name="address"
              value={formValues.address}
              onChange={handleInputChange}
            />
            <span className="absolute right-1 top-1 md:top-1.5">
              <Button type="small" onClick={handleFetchingAddress}>
                Get Address
              </Button>
            </span>
            {errors.address && (
              <p className="text-sm font-normal text-red-700">
                {errors.address}
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
