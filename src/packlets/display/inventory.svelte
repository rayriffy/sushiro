<script lang="ts">
  import { scale } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  import ControlChip from '../chip/control.svelte'
  import ScrollContainer from '../scroll/container.svelte'

  import { inventoryAtom } from '../price/inventoryAtom'
</script>

<div class="h-7">
  <ScrollContainer>
    {#each Object.entries($inventoryAtom) as [key, value] (key)}
      <div animate:flip={{ duration: 250 }} in:scale={{ duration: 200 }} out:scale={{ duration: 200 }}>
        <ControlChip left={key} right={value} />
      </div>
    {/each}
  </ScrollContainer>
</div>
