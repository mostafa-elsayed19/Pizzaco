import { Form } from "react-router-dom";
import Container from "../../ui/Container";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { formatCurrency } from "./../../utils/helpers";
import { getAddress } from "../../services/apiLocation";

function CreateOrder() {
  return (
    <Container className="text-text-color">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? let&apos;s go!
      </h2>
      <Form className="flex flex-col gap-4">
        <div className="flex flex-col items-baseline gap-2 md:flex-row md:gap-5">
          <label htmlFor="name" className="min-w-20">
            Name
          </label>
          <div className="flex w-3/4 items-baseline gap-4">
            <Input
              id="name"
              type="text"
              placeholder="Your name..."
              className="grow"
              defaultValue="mostafa"
              required={true}
              name="customer"
            />
          </div>
          <p className="text-sm font-normal text-red-700">
            error will be shown here
          </p>
        </div>
        <div className="flex flex-col items-baseline gap-2 md:flex-row md:gap-5">
          <label htmlFor="phone" className="min-w-20">
            Phone
          </label>
          <div className="flex w-3/4 items-baseline gap-4">
            <Input
              id="phone"
              type="text"
              placeholder="Your phone..."
              className="grow"
              required={true}
              name="customer"
            />
          </div>
          <p className="text-sm font-normal text-red-700">
            error will be shown here
          </p>
        </div>
        <div className="flex flex-col items-baseline gap-2 md:flex-row md:gap-5">
          <label htmlFor="address" className="min-w-20">
            Address
          </label>
          <div className="relative flex w-3/4 items-baseline gap-4">
            <Input
              id="address"
              type="text"
              placeholder="Your address..."
              className="grow"
              required={true}
              name="customer"
            />
            <span className="absolute right-1 top-1 md:top-1.5">
              <Button type="small" onClick={() => getAddress()}>
                Get Address
              </Button>
            </span>
          </div>
          <p className="text-sm font-normal text-red-700">
            error will be shown here
          </p>
        </div>

        <div>
          <Button type="round">Order now for {formatCurrency(20)}</Button>
        </div>
      </Form>
    </Container>
  );
}

export default CreateOrder;
