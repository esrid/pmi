<script lang="ts">
  import Bar from "./lib/Bar.svelte";
  import Header from "./lib/Header.svelte";
  import SectionA from "./lib/SectionA.svelte";
  import { storeColor } from "./lib/StoreColor";
  import Tab from "./lib/tab.svelte";
  let hidden = true;
  function toggle() {
    hidden = !hidden;
  }
  function ClickOutside(node: Node) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node) && !hidden) {
        hidden = true;
        node.dispatchEvent(new CustomEvent("TABEVENT"));
        event.stopPropagation();
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

<main>
  <Header />
  <div
    class="flex Justify-center items-center flex-col relative"
    style="background: {$storeColor.background};"
  >
    <SectionA />
    <!-- <SectionB /> -->
    <!-- <SectionC /> -->
    <div
      class="fixed left-1/2 -translate-x-1/2 translate-y-1/2 w-max h-max bg-white rounded-md shadow-md px-3 py-2"
      class:hidden
      use:ClickOutside
    >
      <Tab />
    </div>
    <Bar on:click={toggle} />
  </div>
</main>
