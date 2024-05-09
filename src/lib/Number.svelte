<script lang="ts">
    import SmallText from "./SmallText.svelte";
    export let content: string = "";
</script>

<div
    class="border-red-800 max-w-fit flex flex-col p-4 justify-center items-center gap-2"
>
    <span
        class="bg-orange-600 text-white rounded-full w-10 h-10 text-center flex justify-center items-center font-bold"
        >{content}</span
    >
    <span>Les couleurs</span>
  <SmallText content="Choissez des couleurs pour les differentes options" />
</div>
