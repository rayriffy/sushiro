import { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'

export const useCalculate = (red: string, silver: string, gold: string, black: string) => {
  const redDebounced = useDebounce(red, 600)
  const silverDebounced = useDebounce(silver, 600)
  const goldDebounced = useDebounce(gold, 600)
  const blackDebounced = useDebounce(black, 600)

  const [total, setTotal] = useState<number>(0)
  useEffect(() => {
    if (
      (Number.isSafeInteger(Number(redDebounced)) && Number(redDebounced) >= 0) &&
      (Number.isSafeInteger(Number(silverDebounced)) && Number(silverDebounced) >= 0) &&
      (Number.isSafeInteger(Number(goldDebounced)) && Number(goldDebounced) >= 0) &&
      (Number.isSafeInteger(Number(blackDebounced)) && Number(blackDebounced) >= 0)
    ) {
      setTotal((Number(redDebounced) * 40) + (Number(silverDebounced) * 60) + (Number(goldDebounced) * 80) + (Number(blackDebounced) * 120))
    }
  }, [redDebounced, silverDebounced, goldDebounced, blackDebounced])

  return {
    total: total * 1.1,
    withoutCharge: total,
  }
}
