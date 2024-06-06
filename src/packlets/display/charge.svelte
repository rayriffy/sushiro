<script lang="ts">
  import { clsx } from 'clsx'

  import { inputAtom } from '../price/inputAtom'
  import { inventoryAtom } from '../price/inventoryAtom'
  import { chargeAtom } from '../price/chargeAtom'

  import { calculate } from '../price/calculate'

</script>

{#if $inputAtom === null}
  <button
    class={clsx("text-gray-500 font-semibold", !$chargeAtom ? 'line-through' : undefined)}
    on:click={() => chargeAtom.set(!$chargeAtom)}
  >
    {calculate($inventoryAtom, false)} w/o 10%
  </button>
{/if}
