import { atom, map } from "nanostores";
import { InputStage } from "./constants";

export const latestActionAtom = atom<{
  mode: InputStage.Price | InputStage.Amount;
  value: string;
} | null>(null);
