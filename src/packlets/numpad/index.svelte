<script lang="ts">
  import PadButton from './padButton.svelte';
  import { ButtonValue } from './constants';
  import { handlePadInput } from './handlePadInput'
</script>

<section class="fixed bottom-0 left-0 right-0 max-w-sm mx-auto">
  <slot />
  <ul class="grid grid-cols-3 gap-4 px-6 pt-6">
    {#each Object.values(ButtonValue) as value}
      <PadButton
        value={value}
        on:input={e => handlePadInput(e.detail)}
      />
    {/each}
  </ul>
  <footer class="pt-4 pb-6 text-gray-400">
    <p class="text-center text-xs sm:text-sm">&copy; 2024 Phumrapee L. | <a href="https://rayriffy.com" class="underline" target="_blank" rel="noopener noreferrer">Home</a> <a href="https://github.com/rayriffy/sushiro" class="underline" target="_blank" rel="noopener noreferrer">GitHub</a></p>
  </footer>
</section>
