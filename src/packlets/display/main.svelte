<script lang="ts">
  import { inputAtom } from '../price/inputAtom'
  import { inventoryAtom } from '../price/inventoryAtom'
  import { chargeAtom } from '../price/chargeAtom'
  import { calculate } from '../price/calculate'
</script>

<h1 class="text-7xl font-bold">
  {#if $inputAtom === null}
    {calculate($inventoryAtom, $chargeAtom)}
  {:else}
    {Number($inputAtom.value).toLocaleString()}
  {/if}
</h1>
