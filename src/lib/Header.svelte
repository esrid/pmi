<script>
  import Anchor from "./Anchor.svelte";
  import AnchorB from "./AnchorB.svelte";
  import Open from "./Open.svelte";
  import Close from "./close.svelte";

  let open = false;
  function Toggle() {
    open = !open;
  }
</script>

<nav class="flex items-center justify-between flex-wrap p-6 bg-violet-300">
  <a
    class="flex items-center flex-shrink-0 mr-6 lg:mr-72 bg-orange-300"
    href="/"
  >
    LOGO
  </a>
  <div class="block lg:hidden">
    <button
      on:click={() => Toggle()}
      class="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
    >
      <Open className={open ? "block" : "hidden"} />
      <Close className={open ? "hidden" : "block"} />
    </button>
  </div>
  <div
    class="w-full block flex-grow lg:flex lg:items-center justify-center lg:w-auto {open
      ? 'block'
      : 'hidden'}"
  >
    <ul class="w-full flex justify-around bg-green-200">
      <Anchor content="Le concept" href="/" />
      <Anchor content="Outils" href="/" />
      <Anchor content="Blog" href="/" />
      <AnchorB content="Pourquoi ce simulateur ?" href="/" />
      <AnchorB content="Site Principal" href="/" style="background-color: blue; color: white;"/>
    </ul>
  </div>
</nav>
