import type { PlateColor } from "./types";

export enum PlateVariant {
  Red = "40",
  Silver = "60",
  Gold = "80",
  Black = "120",
}

export const plateColors: Record<PlateVariant, PlateColor> = {
  [PlateVariant.Red]: {
    outer: "bg-rose-700",
    inner: "bg-rose-600",
  },
  [PlateVariant.Silver]: {
    outer: "bg-slate-400",
    inner: "bg-slate-300",
  },
  [PlateVariant.Gold]: {
    outer: "bg-yellow-600",
    inner: "bg-yellow-500",
  },
  [PlateVariant.Black]: {
    outer: "bg-slate-800",
    inner: "bg-slate-700",
  },
};
