<script lang="ts">
  export let content = "";
  export let style = "";
  export let aria: current;
  type current =
    | "page"
    | "step"
    | "location"
    | "date"
    | "time"
    | undefined
    | null;
</script>

<a
  href="#id"
  class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
  {style}
  on:click
  aria-current={aria}
>
  {content}
</a>
