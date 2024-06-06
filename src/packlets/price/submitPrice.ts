import { inventoryAtom } from "./inventoryAtom";
import { latestActionAtom } from "./latestActionAtom";
import { InputStage } from "./constants";
import { inputAtom } from "./inputAtom";

export const submitPrice = (price: number) => {
  const updatedStock = (inventoryAtom.get()[price] ?? 0) + 1;

  inventoryAtom.setKey(price, updatedStock);
  latestActionAtom.set({
    mode: InputStage.Price,
    value: price.toString(),
  });
  inputAtom.set(null);
};
