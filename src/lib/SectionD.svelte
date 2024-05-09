<script>
  import Subtitle from "./Subtitle.svelte";
  import Star from "./Star.svelte";
  import SmallText from "./SmallText.svelte";
</script>

<section class="bg-gray-200">
  <Subtitle content="Les avis client" />
  <div class="bg-blue-300 max-w-fit p-4">
    <div class="h-10 w-10 rounded-full bg-white"></div>
    <div class="flex bg-yellow-400 h-6">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
    <SmallText content="Choissez des couleurs pour les differentes options" />
  </div>
</section>
