<script lang="ts">
  import { inputAtom } from '../price/inputAtom'
  import { InputStage } from '../price/constants'

  import './mode.css'

  $: selectMode = $inputAtom === null ? 'Result' : $inputAtom.mode === InputStage.Price ? 'Price' : 'Amount'
</script>

<div class="mode-container">
  {#each ['Result', 'Price', 'Amount'] as mode}
    <span class={selectMode !== mode ? 'text-gray-400' : undefined}>{mode}</span>
  {/each}
</div>
