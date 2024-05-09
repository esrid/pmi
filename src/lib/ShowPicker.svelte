<script lang="ts">
  import ColorPicker from "./ColorPicker.svelte";
  let hidden = true;
  export let id: string = "";
</script>

<div class=" flex flec-col-reverse">
  <span class="absolute bottom-4 left-0" class:hidden>
    <ColorPicker {id} />
  </span>
  <button on:click={() => (hidden = !hidden)}> color quelqconque</button>
</div>
