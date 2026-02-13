export const numberToBrl = (rawNumber: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "brl",
  }).format(rawNumber);
};
