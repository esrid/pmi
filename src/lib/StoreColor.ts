import { writable } from "svelte/store";
interface colors {
  color1: string
  color2: string
  color3: string
  color4: string
}
export const storeColor = writable({} as colors)
