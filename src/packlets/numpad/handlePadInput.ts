import { ButtonValue } from "./constants";
import { inputAtom } from "../price/inputAtom";
import { latestActionAtom } from "../price/latestActionAtom";
import { InputStage } from "../price/constants";
import { inventoryAtom } from "../price/inventoryAtom";
import { chargeAtom } from "../price/chargeAtom";
import { calculate } from "../price/calculate";

export const handlePadInput = (button: ButtonValue) => {
  const input = inputAtom.get();
  const latestAction = latestActionAtom.get();

  // if inputAtom === null, button === ModeR. do open ppqr
  if (input === null && button === ButtonValue.ModeR) {
    const inventory = inventoryAtom.get();
    const charge = chargeAtom.get();

    window
      .open(
        `https://ppqr.app/?amount=${calculate(inventory, charge).replace(/,/g, "")}`,
        "_blank",
      )
      ?.focus();
    return;
  }
  // if inputAtom === null, button === ModeL. does initiate amount mode
  // only allow when previous action is price mode
  else if (
    input === null &&
    button === ButtonValue.ModeL &&
    latestAction?.mode === InputStage.Price
  ) {
    inputAtom.set({
      mode: InputStage.Amount,
      value: "0",
    });
    return;
  }
  // if inputAtom !== null, button === ModeL. then do submit
  else if (input !== null && button === ButtonValue.ModeL) {
    const inventory = inventoryAtom.get();

    let targetPrice: number;
    let targetStock: number;

    // if submit amount mode, then check the previous input price
    if (input.mode === InputStage.Amount && latestAction !== null) {
      targetPrice = Number(latestAction.value);
      targetStock =
        (inventory[Number(targetPrice)] ?? 0) - 1 + Number(input.value);
    } else {
      targetPrice = Number(input.value);
      targetStock = (inventory[targetPrice] ?? 0) + 1;
    }

    // set to inventory
    inventoryAtom.setKey(targetPrice, targetStock);
    // update history
    latestActionAtom.set(input);
    // clear input
    inputAtom.set(null);
  }
  // if still inputAtom === null. then do price initiation
  else if (input === null) {
    inputAtom.set({
      mode: InputStage.Price,
      value: button,
    });
    return;
  } else if (button === ButtonValue.ModeR) {
    const trimmedValue = input.value.slice(0, -1);

    if (trimmedValue === "") inputAtom.set(null);
    else
      inputAtom.set({
        ...input,
        value: trimmedValue,
      });
  } else if (input !== null) {
    inputAtom.set({
      ...input,
      value: input.value + button,
    });
  }
};
