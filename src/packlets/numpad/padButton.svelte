<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import Icon from '@iconify/svelte'

  import { ButtonValue } from './constants'
  import { InputStage } from '../price/constants'
  import { inputAtom } from '../price/inputAtom'
  import { latestActionAtom } from '../price/latestActionAtom'

  import './padButton.css'

  export let value: ButtonValue

  const dispatch = createEventDispatcher<{ input: ButtonValue }>()
</script>

<li class="mx-auto">
  <button
    class="pad-button"
    disabled={value === ButtonValue.ModeL && (
      $latestActionAtom?.mode !== InputStage.Price && $inputAtom === null
    )}
    on:click={() => dispatch('input', value)}
  >
    {#if value === ButtonValue.ModeL}
      {#if $inputAtom !== null}
        <Icon icon="lucide:check" width={24} />
      {:else}
        <Icon icon="lucide:binary" width={24} />
      {/if}
    {:else if value === ButtonValue.ModeR}
      {#if $inputAtom === null}
        <Icon icon="lucide:qr-code" width={24} />
      {:else}
        <Icon icon="lucide:delete" width={24} />
      {/if}
    {:else}
      {value}
    {/if}
  </button>
</li>
