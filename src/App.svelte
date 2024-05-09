<script>
  import ColorPicker from "./lib/ColorPicker.svelte";
  import Header from "./lib/Header.svelte";
  import SectionA from "./lib/SectionA.svelte";
  import SectionB from "./lib/SectionB.svelte";
  import SectionC from "./lib/SectionC.svelte";
  import ShowPicker from "./lib/ShowPicker.svelte";
</script>

<Header />
<main class="flex Justify-center items-center flex-col">
  <SectionA />
  <SectionB />
  <SectionC />
  <div class="bg-blue-500 fixed bottom-0 m-4tom-0 m-4">
    <div class=" relative flex justify-around">
      <div>
        <ShowPicker id="text" />
        <ShowPicker id="color1" />
        <ShowPicker id="color2" />
        <ShowPicker id="color3" />
        <ShowPicker id="color4" />
      </div>
      <div class="flex gap-1">
        <div>
          <span> arrow left </span>
          <span> arrow right </span>
        </div>
        <span> shift </span>
        <span> generer </span>
        <span> share </span>
        <span> exporter </span>
      </div>
    </div>
  </div>
  <ColorPicker />
</main>
