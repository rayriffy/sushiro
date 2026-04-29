import { formatAmountDisplay } from "./format";

export const calculateRaw = (
  inventory: Record<number, number>,
  charge: boolean,
) => {
  return (
    Object.entries(inventory).reduce((acc, [price, stock]) => {
      return acc + Number(price) * stock;
    }, 0) * (charge ? 1.1 : 1)
  );
};

export const calculate = (
  inventory: Record<number, number>,
  charge: boolean,
) => {
  return formatAmountDisplay(calculateRaw(inventory, charge));
};
