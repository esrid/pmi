<script lang="ts">
  export let content: string = "";
</script>

<div class="flex flex-col bg-gray-100 p-4">
  <pre>
      {@html content}
    </pre>
  <button class="border-black border-2 rounded-md" on:click>copy</button>
</div>
