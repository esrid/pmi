<script lang="ts">
  import "highlight.js/styles/lightfair.css";
  import hljs from "highlight.js/lib/core";
  import css from "highlight.js/lib/languages/css";
  import scss from "highlight.js/lib/languages/scss";
  import javascript from "highlight.js/lib/languages/javascript";
  import { storeColor } from "./StoreColor";
  import Code from "./Code.svelte";
  import TabAnchor from "./TabAnchor.svelte";
  hljs.registerLanguage("css", css);
  hljs.registerLanguage("scss", scss);
  hljs.registerLanguage("javascript", javascript);
  let state = "css";
  let highlightCss = "";
  let highlightScss = "";
  let highlightTailwind = "";
  let cssCode = "";
  let scssCode = "";
  let Tailwind = "";

  $: {
    cssCode = `
    :root {
      --text:${$storeColor.text};
      --background:${$storeColor.background};
      --color1:${$storeColor.color1};
      --color2:${$storeColor.color2};
      --color3:${$storeColor.color3};
      --color4:${$storeColor.color4};
    }`;
    highlightCss = hljs.highlight(cssCode, { language: "css" }).value;
  }

  $: {
    scssCode = `
      $text:${$storeColor.text};
      $background: ${$storeColor.background};
      $color1:${$storeColor.color1};
      $color2:${$storeColor.color2};
      $color3:${$storeColor.color3};
      $color4:${$storeColor.color4};
    `;
    highlightScss = hljs.highlight(scssCode, { language: "scss" }).value;
  }

  $: {
    Tailwind = `
    colors: {
      text:'${$storeColor.text}',
      background:'${$storeColor.background}',
      color1:'${$storeColor.color1}',
      color2:'${$storeColor.color2}',
      color3:'${$storeColor.color3}',
      color4:'${$storeColor.color4}',
    },`;
    highlightTailwind = hljs.highlight(Tailwind, {
      language: "javascript",
    }).value;
  }
  async function Copy() {
    let textcopy = "";
    switch (state) {
      case "css":
        textcopy = cssCode;
        break;
      case "scss":
        textcopy = scssCode;
        break;
      case "tailwind":
        textcopy = Tailwind;
        break;

      default:
        break;
    }
    await navigator.clipboard.writeText(textcopy);
  }
</script>

<div class="">
  <div class="sm:hidden">
    <label for="Tab" class="sr-only">Tab</label>
    <select id="Tab" class="w-full rounded-md border-gray-200">
      <option selected>css</option>
      <option>scss</option>
      <option>tailwind</option>
    </select>
  </div>

  <div class="hidden sm:block">
    <div class="border-b border-gray-200">
      <nav
        class="-mb-px flex gap-6 justify-center items-center"
        aria-label="Tabs"
      >
        <TabAnchor
          on:click={() => (state = "css")}
          content="Css"
          aria={state === "css" ? "page" : undefined}
        />
        <TabAnchor
          on:click={() => (state = "scss")}
          content="Scss"
          aria={state === "scss" ? "page" : undefined}
        />
        <TabAnchor
          on:click={() => (state = "tailwind")}
          content="Tailwind"
          aria={state === "tailwind" ? "page" : undefined}
        />
      </nav>
    </div>
  </div>
  {#if state === "css"}
    <Code content={highlightCss} on:click={Copy} />
  {:else if state === "scss"}
    <Code content={highlightScss} on:click={Copy} />
  {:else if state === "tailwind"}
    <Code content={highlightTailwind} on:click={Copy} />
  {/if}
</div>
