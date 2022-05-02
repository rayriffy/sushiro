import { createSignal, Accessor, createDeferred, createEffect } from 'solid-js'

export const useCalculate = (
  red: Accessor<string>,
  silver: Accessor<string>,
  gold: Accessor<string>,
  black: Accessor<string>
) => {
  const [total, setTotal] = createSignal<number>(0)

  const redDebounced = createDeferred(red, {
    timeoutMs: 500,
  })
  const silverDebounced = createDeferred(silver, {
    timeoutMs: 500,
  })
  const goldDebounced = createDeferred(gold, {
    timeoutMs: 500,
  })
  const blackDebounced = createDeferred(black, {
    timeoutMs: 500,
  })

  const calculate = (
    red: string,
    silver: string,
    gold: string,
    black: string
  ) => {
    if (
      Number.isSafeInteger(Number(red)) &&
      Number(red) >= 0 &&
      Number.isSafeInteger(Number(silver)) &&
      Number(silver) >= 0 &&
      Number.isSafeInteger(Number(gold)) &&
      Number(gold) >= 0 &&
      Number.isSafeInteger(Number(black)) &&
      Number(black) >= 0
    ) {
      setTotal(
        Number(red) * 40 +
          Number(silver) * 60 +
          Number(gold) * 80 +
          Number(black) * 120
      )
    }
  }

  createEffect(() => {
    calculate(
      redDebounced(),
      silverDebounced(),
      goldDebounced(),
      blackDebounced()
    )
  })

  return total
}
