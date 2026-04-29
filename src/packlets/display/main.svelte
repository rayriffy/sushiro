<script lang="ts">
  import { inputAtom } from '../price/inputAtom'
  import { inventoryAtom } from '../price/inventoryAtom'
  import { chargeAtom } from '../price/chargeAtom'
  import { calculate } from '../price/calculate'
  import { formatDigitString } from '../price/format'
</script>

<h1 class="text-7xl font-bold">
  {#if $inputAtom === null}
    {calculate($inventoryAtom, $chargeAtom)}
  {:else}
    {formatDigitString($inputAtom.value)}
  {/if}
</h1>
