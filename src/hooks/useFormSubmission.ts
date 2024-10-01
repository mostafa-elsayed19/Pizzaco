import { useState } from "react";

export function useFormSubmission() {
  const [formValues, setFormValues] = useState({
    customer: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    customer: "",
    phone: "",
    address: "",
  });

  // Validate Customer
  const validateCustomer = (value: string) => {
    const customerPattern = /^[A-Za-z\s]+$/;
    if (!value) {
      return "Customer name is required";
    } else if (value.length < 3) {
      return "Customer name must be at least 3 characters";
    } else if (!customerPattern.test(value)) {
      return "Customer name can only contain letters";
    }
    return "";
  };

  // Validate Phone
  const validatePhone = (value: string) => {
    const phonePattern = /^\+?[0-9]{4,15}$/;
    if (!value) {
      return "Phone number is required";
    } else if (!phonePattern.test(value)) {
      return 'Phone number must be valid and include only numbers and an optional "+" at the start';
    }
    return "";
  };

  // Validate Address
  const validateAddress = (value: string) => {
    if (!value) {
      return "Address is required";
    }
    const parts = value.split(",").map((part) => part.trim());
    if (parts.length !== 2 || parts.some((part) => part === "")) {
      return "Address must be in the format 'City, Country'";
    }
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    // Set validation for each field
    let error = "";
    if (name === "customer") error = validateCustomer(value);
    if (name === "phone") error = validatePhone(value);
    if (name === "address") error = validateAddress(value);

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    prevent?: boolean,
  ) => {
    if (prevent) e.preventDefault();

    // Validate fields before submission
    const customerError = validateCustomer(formValues.customer);
    const phoneError = validatePhone(formValues.phone);
    const addressError = validateAddress(formValues.address);

    if (customerError || phoneError || addressError) {
      setErrors({
        customer: customerError,
        phone: phoneError,
        address: addressError,
      });
      return;
    }
  };

  return {
    errors,
    formValues,
    handleInputChange,
    handleSubmit,
    setFormValues,
    setErrors,
  };
}
