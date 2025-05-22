<script lang="ts">
  import PadButton from './padButton.svelte';
  import { ButtonValue } from './constants';
  import { handlePadInput } from './handlePadInput'
</script>

<section class="numpad-container">
  <slot />
  <ul class="numpad-grid">
    {#each Object.values(ButtonValue) as value}
      <PadButton
        value={value}
        on:input={e => handlePadInput(e.detail)}
      />
    {/each}
  </ul>
  <footer>
    <p>&copy; 2024 - {new Date().getFullYear()} Phumrapee L. | <a href="https://rayriffy.com" target="_blank" rel="noopener noreferrer">Home</a> <a href="https://github.com/rayriffy/sushiro" target="_blank" rel="noopener noreferrer">GitHub</a></p>
  </footer>
</section>
