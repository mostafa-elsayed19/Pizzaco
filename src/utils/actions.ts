import { Params, redirect } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { createOrder, updateOrder } from "../services/apiRestaurant";
import { store } from "../store";
import { OrderData } from "../types/orderTypes";

function handleErrors(order: OrderData) {
  const errors = {
    customer: "",
    phone: "",
    address: "",
  };

  // Validate Customer
  const validateCustomer = (value: string) => {
    const customerPattern = /^[A-Za-z\s]+$/;
    if (!value) {
      return "Customer name is required";
    } else if (!customerPattern.test(value)) {
      return "Customer name can only contain letters";
    } else if (value.length < 3) {
      return "Customer name must be at least 3 characters";
    }
    return "";
  };

  // Validate Phone
  // https://uibakery.io/regex-library/phone-number
  const validatePhone = (str: string) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      str,
    );

  // Validate Address
  const validateAddress = (value: string) => {
    if (!value) {
      return "Address is required";
    }

    const parts = value.split(",").map((part) => part.trim());

    // Check if there are exactly 2 parts and both are non-empty
    if (parts.length < 2 || parts[0] === "" || parts[1] === "") {
      return "Address must be in the format 'City, Country'";
    }

    return "";
  };

  errors.customer = validateCustomer(order.customer);
  errors.phone = validatePhone(order.phone) ? "" : "Invalid phone number";
  errors.address = validateAddress(order.address);

  if (errors.customer || errors.phone || errors.address) {
    return errors;
  }
}

export async function createNewOrder({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order: OrderData = {
    customer: data.customer as string,
    phone: data.phone as string,
    address: data.address as string,
    position: data.position as string,
    cart: data.cart ? JSON.parse(data.cart as string) : [],
    priority: data.priority ? JSON.parse(data.priority as string) : false,
    totalPrice: data.totalPrice ? JSON.parse(data.totalPrice as string) : 0,
  };

  const errors = handleErrors(order);

  if (errors) {
    return errors;
  }

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder?.id}`);
}

export async function updateOrderAction({
  params,
}: {
  params: Params<string>;
}) {
  const id = Number(params.orderId);
  const data = { priority: true };
  await updateOrder(id, data);
  return null;
}
