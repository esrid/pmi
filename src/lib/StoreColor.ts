import { writable } from "svelte/store";
interface StoreColorsType {
  text: string;
  background: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}
export type { StoreColorsType };
export const storeColor = writable<StoreColorsType>({
  text: "#1D1111",
  background: "#FFFFFF",
  color1: "#F7F7F7",
  color2: "#5DA5D2",
  color3: "#094074",
  color4: "#EE6352",
});
