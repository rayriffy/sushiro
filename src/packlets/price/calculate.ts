export const calculate = (
  inventory: Record<number, number>,
  charge: boolean,
) => {
  const total = (
    Object.entries(inventory).reduce((acc, [price, stock]) => {
      return acc + Number(price) * stock;
    }, 0) * (charge ? 1.1 : 1)
  ).toLocaleString(undefined, { minimumFractionDigits: 2 });

  return total.endsWith(".00") ? total.slice(0, -3) : total;
};
