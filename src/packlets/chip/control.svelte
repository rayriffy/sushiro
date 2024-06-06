<script lang="ts">
  import { clsx } from 'clsx'

  import './control.css'
  import { removePrice } from '../price/removePrice'

  export let left: string | number
  export let right: string | number

  const handleClick = () => removePrice(Number(left))
</script>

<button class='chip-control group' on:click={handleClick}>
  <span class="price group-hover:bg-gray-800 group-active:bg-gray-700">
    {left}฿
  </span>
  <span class="amount group-hover:bg-gray-100 group-active:bg-gray-200">
    {right}
  </span>
</button>
