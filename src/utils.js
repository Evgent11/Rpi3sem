export const formatPrice = (price, from = false) =>
  `${from ? "от " : ""}${price.toLocaleString("ru-RU")} ₽`;
