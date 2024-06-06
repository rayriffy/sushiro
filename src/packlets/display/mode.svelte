<script lang="ts">
  import { inputAtom } from '../price/inputAtom'
  import { InputStage } from '../price/constants'

  $: selectMode = $inputAtom === null ? 'Result' : $inputAtom.mode === InputStage.Price ? 'Price' : 'Amount'
</script>

<div class="flex space-x-4 uppercase font-bold text-sm justify-end">
  {#each ['Result', 'Price', 'Amount'] as mode}
    <span class={selectMode !== mode ? 'text-gray-400' : undefined}>{mode}</span>
  {/each}
</div>
