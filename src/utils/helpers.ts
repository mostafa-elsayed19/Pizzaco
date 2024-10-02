export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr: string | undefined): string {
  if (!dateStr) {
    return "Invalid date"; // Handle undefined or null case
  }

  const date = new Date(dateStr);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid date"; // Return a default message for invalid dates
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric", // Include year for better context
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Optional: if you want 12-hour format with AM/PM
  }).format(date);
}

export function generateRandomId(length: number) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function generateRandomNumericId() {
  return Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit number
}
// export function formatCurrency(value) {
//   return new Intl.NumberFormat("en", {
//     style: "currency",
//     currency: "EUR",
//   }).format(value);
// }

// export function formatDate(dateStr) {
//   return new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "short",
//     hour: "2-digit",
//     minute: "2-digit",
//   }).format(new Date(dateStr));
// }

// export function calcMinutesLeft(dateStr) {
//   const d1 = new Date().getTime();
//   const d2 = new Date(dateStr).getTime();
//   return Math.round((d2 - d1) / 60000);
// }
