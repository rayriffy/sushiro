<script lang="ts">
  import { PlateVariant, plateColors } from './constants'
  import { clsx } from 'clsx'

  import { submitPrice } from '../price/submitPrice'

  export let variant: PlateVariant

  const plateColor = plateColors[variant]

  const handleClick = () => submitPrice(Number(variant))
</script>

<button class='chip-input' on:click={handleClick}>
  <span class={clsx(plateColor.outer, 'plate')}>
    <span class={clsx(plateColor.inner, 'plate-inner')}></span>
  </span>
  <span>
    {variant}฿
  </span>
</button>
