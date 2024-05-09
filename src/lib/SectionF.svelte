<script>
  import Subtitle from "./Subtitle.svelte";
  import SmallText from "./SmallText.svelte";
</script>
  <section class="bg-emerald-200">
    <div class="flex">
      <div class="grow">
        <span>FAQs</span>
        <div>
          <p>Une pub</p>
        </div>
      </div>
      <div class="grow flex flex-col">
        <p class="flex justify-between px-2">
          Question1 <span> +</span>
        </p>
        <p class="flex justify-between px-2">
          Question1 <span> +</span>
        </p>
        <p class="flex justify-between px-2">
          Question1 <span> +</span>
        </p>
        <p class="flex justify-between px-2">
          Question1 <span> +</span>
        </p>
        <p class="flex justify-between px-2">
          Question1 <span> +</span>
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <Subtitle content="Les articles" />
      <div class="flex flex-col justify-center items-center">
        <span class="font-bold"></span>
        <p>Choissez des couleurs pour les differentes options</p>
      </div>
    </div>
    <div class="bg-yellow-200 flex flex-col justify-center items-center">
      <p class="font-bold text-4xl max-w-80 text-center">
        Ce n'est pas tout, <span class="text-red-200">vous allez aussi aimer.
        </span>
      </p>
      <SmallText content="Nous avons d'autres outils que vous pourriez aimer" />
      <a href="/" class="bg-blue-700 text-white rounded-md p-2">Décrouvrir</a>
    </div>
  </section>
