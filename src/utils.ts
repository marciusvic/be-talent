export function formatPhoneNumber(phone: string): string {
  const match = phone.match(/^55(\d{2})(\d{5})(\d{4})$/);

  if (!match) {
    throw new Error("Número inválido");
  }

  const [, ddd, firstPart, secondPart] = match;
  return `+55 (${ddd}) ${firstPart}-${secondPart}`;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return dateString;
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
