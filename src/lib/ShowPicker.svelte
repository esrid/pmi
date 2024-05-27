<script lang="ts">
  export let c = "";
  import ColorPicker from "./ColorPicker.svelte";
  let hidden = true;
  export let id: string = "";
  export let key: string = "";
  export let color: string = "";
  export function ClickOutside(node: Node) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        hidden = true;
        node.dispatchEvent(new CustomEvent("clickOutside"));
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      },
    };
  }
</script>

<div class="flex flec-col-reverse" use:ClickOutside>
  <span class="absolute bottom-4" class:hidden>
    <ColorPicker {id} {key} {color} />
  </span>
  <button
    on:click={() => (hidden = !hidden)}
    class="h-14 w-24"
    style="background-color:{color}; {c}"
  >
  </button>
</div>
