<script lang="ts">
  import Numpad from './packlets/numpad/index.svelte';
  import InputChip from './packlets/chip/input.svelte';
  import Display from './packlets/display/index.svelte';
  import ScrollContainer from './packlets/scroll/container.svelte';

  import { PlateVariant } from './packlets/chip/constants'
</script>

<main>
  <Display />
  <Numpad>
    <ScrollContainer>
      {#each Object.values(PlateVariant) as variant}
        <InputChip variant={variant} />
      {/each}
    </ScrollContainer>
  </Numpad>
</main>
