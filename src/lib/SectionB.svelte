<script>
  import Subtitle from "./Subtitle.svelte";
  import { storeColor } from "./StoreColor";
</script>

<section class="bg-gray-200 w-full">
  <Subtitle content=" Pourquoi utiliser un simulateur ?" />
  <div
    class="h-52 aspect-square shadow-md rounded-md flex flex-col gap-2 p-3 justify-center items-center"
    style="background: {$storeColor.background};"
  >
    <div>Imahe</div>
    <h4 class="text-md font-extrabold" style="color : {$storeColor.color3}">
      Gain de temps
    </h4>
    <p class="text-sm max-w-48 font-bold text-balance text-center">
      Choissez des couleurs pour les differentes options
    </p>
  </div>
</section>
