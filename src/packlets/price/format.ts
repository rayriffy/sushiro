export const formatDigitString = (digits: string) => {
  if (digits === "") return "";

  const normalized = digits.replace(/^0+(?=\d)/, "");
  return normalized.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatFixedWithThousands = (value: number, fractionDigits: number) => {
  if (!Number.isFinite(value)) return "0";

  const negative = value < 0;
  const fixed = Math.abs(value).toFixed(fractionDigits);
  const [intPart, fracPart] = fixed.split(".");

  const intFormatted = formatDigitString(intPart);
  const signedInt = negative ? `-${intFormatted}` : intFormatted;

  if (fractionDigits === 0) return signedInt;
  return `${signedInt}.${fracPart ?? ""}`;
};

export const formatAmountDisplay = (value: number) => {
  if (Math.abs(value) >= 1_000_000)
    return value.toExponential(2);

  const fixed = formatFixedWithThousands(value, 2);

  return fixed.endsWith(".00") ? fixed.slice(0, -3) : fixed;
};

export const formatAmountParam = (value: number) => {
  if (!Number.isFinite(value)) return "0";

  const negative = value < 0;
  const fixed = Math.abs(value).toFixed(2);
  const signed = negative ? `-${fixed}` : fixed;

  return signed.replace(/\.00$/, "");
};
