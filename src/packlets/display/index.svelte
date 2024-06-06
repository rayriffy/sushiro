<script lang="ts">
  import Inventory from './inventory.svelte'
  import Charge from './charge.svelte'
  import Main from './main.svelte'
  import Mode from './mode.svelte'
</script>

<section class="text-right space-y-4 py-6">
  <Inventory />
  <div class="px-6 space-y-4">
    <Mode />
    <Main />
    <Charge />
  </div>
</section>
