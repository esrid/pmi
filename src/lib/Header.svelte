<script lang="ts">
  import Anchor from "./Anchor.svelte";
  import AnchorB from "./AnchorB.svelte";
  import Hamberger from "./svg/Hamberger.svelte";
  import { storeColor } from "./StoreColor";
  import Phare from "./svg/phare.svelte";
  import CP from "./svg/CP.svelte";
  import { invertColor } from "./utils";
  let open = false;
  function Toggle() {
    open = !open;
  }
</script>

<nav
  class="flex items-center justify-between flex-wrap px-5 py-6"
  style="background-color: {$storeColor.background};"
>
  <a class="flex items-center flex-shrink-0 mr-6 lg:ml-12" href="/">
    <div class="relative flex justify-center">
      <CP fill={$storeColor.color2} />
      <span class="absolute top-4">
        <Phare />
      </span>
    </div>
  </a>
  <div class="block lg:hidden">
    <button
      on:click={() => Toggle()}
      class="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
    >
      <Hamberger />
    </button>
  </div>
  <div
    class="w-full block flex-grow lg:flex lg:items-center justify-center lg:w-auto {open
      ? 'block'
      : 'hidden'}"
  >
    <ul
      class="w-full flex justify-around flex-col lg:flex-row gap-2 mt-2 md:mt-0"
    >
      <ul class="ml-auto flex gap-x-52">
        <Anchor
          content="Le concept"
          href="/"
          style="color: {$storeColor.text};"
        />
        <Anchor content="Outils" href="/" style="color: {$storeColor.text};" />
        <Anchor content="Blog" href="/" style="color: {$storeColor.text};" />
      </ul>
      <ul class="flex gap-x-4 flex-wrap ml-52">
        <AnchorB
          content="Pourquoi ce simulateur ?"
          href="/"
          style="background: {$storeColor.color1}; color : {invertColor(
            $storeColor.color1,
            true,
          )}"
        />
        <AnchorB
          content="Le site officiel"
          href="/"
          style="background:{$storeColor.color3}; color : {invertColor(
            $storeColor.color3,
            true,
          )}"
        />
      </ul>
    </ul>
  </div>
</nav>
