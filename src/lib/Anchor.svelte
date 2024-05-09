<script lang="ts">
  export let content: string;
  export let href: string;
  export let style: string = "";
</script>

<a {href} {style} class="px-3 py-2 font-medium">
  {content}
</a>
