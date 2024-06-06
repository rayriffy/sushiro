import { inventoryAtom } from "./inventoryAtom";
import { latestActionAtom } from "./latestActionAtom";
import { inputAtom } from "./inputAtom";

export const removePrice = (price: number) => {
  // @ts-expect-error - remove price from inventory
  inventoryAtom.setKey(price, undefined);

  latestActionAtom.set(null);
  inputAtom.set(null);
};
