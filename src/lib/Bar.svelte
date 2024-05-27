<script lang="ts">
  import { storeColor, type StoreColorsType } from "./StoreColor";
  import ShowPicker from "./ShowPicker.svelte";
  import chroma from "chroma-js";
  import { get, type Writable } from "svelte/store";
  import Back from "./svg/Back.svelte";
  import Wandy from "./svg/Wandy.svelte";
  import Shared from "./svg/Shared.svelte";
  import Ownload from "./svg/Ownload.svelte";
  import Forward from "./svg/Forward.svelte";
  import AShuflle from "./svg/AShuffle.svelte";
  let unsubscribe;
  let position = 0;
  let maxcolorscheme = 20;
  let sauvegarde: StoreColorsType[] = [];
  function update(colors: StoreColorsType) {
    storeColor.set(colors);
  }

  function sauvegardePush(colors: StoreColorsType) {
    if (sauvegarde.length >= maxcolorscheme) {
      sauvegarde.shift();
      if (position > 0) {
        position--;
      }
    }
    sauvegarde.push(colors);
    position = sauvegarde.length;
  }

  function previous() {
    if (position > 0) {
      position--;
      update(sauvegarde[position]);
      return;
    }
  }

  function next() {
    if (position < sauvegarde.length - 1) {
      position++;
      update(sauvegarde[position]);
      return;
    }
  }
  function GenerateColor() {
    sauvegardePush(get(storeColor));
    unsubscribe = storeColor.update((current) => {
      return {
        ...current,
        color1: chroma.random().hex(),
        color2: chroma.random().hex(),
        color3: chroma.random().hex(),
        color4: chroma.random().hex(),
      };
    });
  }
  function shuffleStoreValues(
    store: Writable<StoreColorsType>,
    excludeKeys: Array<keyof StoreColorsType>,
  ) {
    store.update((obj) => {
      const entries = Object.entries(obj).filter(
        ([key]) => !excludeKeys.includes(key as keyof StoreColorsType),
      );
      let values = entries.map(([_, value]) => value);

      for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
      }

      let shuffledObj: StoreColorsType = { ...obj };
      entries.forEach(([key], index) => {
        shuffledObj[key as keyof StoreColorsType] = values[index];
      });

      return shuffledObj;
    });
  }
</script>

<div
  class="bg-white fixed bottom-0 m-0 w-full h-max py-4 flex items-center justify-between"
>
  <div class="relative flex w-full justify-between px-20 items-center">
    <div class="relative flex flex-wrap pr-10">
      <ShowPicker
        id="color1"
        key="color1"
        color={$storeColor.color1}
        c="border-radius : 8px 0 0 8px"
      />
      <ShowPicker id="color2" key="color2" color={$storeColor.color2} />
      <ShowPicker id="color3" key="color3" color={$storeColor.color3} />
      <ShowPicker
        id="color4"
        key="color4"
        color={$storeColor.color4}
        c="border-radius : 0px 8px 8px 0px; "
      />
    </div>
    <div class="flex">
      <div class="flex flex-nowrap">
        <button
          on:click={previous}
          class="bg-[#F7F7F7] h-14 w-16 border-r-2 flex items-center justify-center rounded-md"
          aria-roledescription="go to the oprevious generate colorscheme"
        >
          <Back />
        </button>
        <button
          on:click={next}
          aria-roledescription="go to the next generate colorscheme"
          class="bg-[#F7F7F7] h-14 w-16 flex items-center justify-center rounded-md"
        >
          <Forward />
        </button>
      </div>
      <div class="mx-4">
        <button
          class="bg-[#F7F7F7] h-14 w-16 flex items-center justify-center rounded-md"
          on:click={() =>
            shuffleStoreValues(storeColor, ["text", "background"])}
        >
          <AShuflle />
        </button>
      </div>
      <div class="mx-4">
        <button
          class="bg-[#F7F7F7] flex items-center justify-center px-3 h-14 rounded-md"
          on:click={GenerateColor}
        >
          <span class="block mr-2">
            <Wandy />
          </span>
          <p>Générer</p>
        </button>
      </div>
      <div class="mr-4">
        <button
          class=" bg-[#F7F7F7] h-14 w-16 flex items-center justify-center rounded-md"
        >
          <Shared /></button
        >
      </div>
      <button
        class="rounded-md flex gap-2 py-2 px-3 justify-around items-center"
        style="background-color : {$storeColor.color3}; color : {$storeColor.background}"
        on:click
      >
        <Ownload fill={$storeColor.background} /> Exporter
      </button>
    </div>
  </div>
</div>
