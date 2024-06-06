import { atom } from "nanostores";
import { InputStage } from "./constants";

export const inputAtom = atom<{
  mode: InputStage.Price | InputStage.Amount;
  value: string;
} | null>(null);
