<script lang="ts">
  import PadButton from './padButton.svelte';
  import { ButtonValue } from './constants';
  import { handlePadInput } from './handlePadInput'
</script>

<section class="fixed bottom-0 left-0 right-0 space-y-6 max-w-sm mx-auto">
  <slot />
  <ul class="grid grid-cols-3 gap-4 px-6 pb-6">
    {#each Object.values(ButtonValue) as value}
      <PadButton
        value={value}
        on:input={e => handlePadInput(e.detail)}
      />
    {/each}
  </ul>
</section>
