<script>
  import FiveHundred from "./FiveHundred.svelte";
  import { storeColor } from "./StoreColor";
  import Forme from "./svg/Forme.svelte";
</script>

<section class="h-4/5 w-full mt-2">
  <div class="flex flex-wrap">
    <div class="grow flex flex-col p-4 gap-y-3">
      <h1
        class="text-7xl font-bold text-center lg:max-w-128 lg:text-left lg:ml-12"
        style="color : {$storeColor.text}"
      >
        Nous vous aidons à construire vos <span
          style="color : {$storeColor.color2}"
        >
          projects ambitieux
        </span>
      </h1>
      <p
        class="text-xl text-center lg:text-left lg:max-w-sm lg:ml-12 lg:mt-2"
        style="color : {$storeColor.text}"
      >
        Agency provide full service range including technicalls skills, design
        skills, busness understanting. Agency provide full service range
        including
      </p>
    </div>
    <div class="grow flex justify-center items-center p-2">
      <Forme
        cerclered={$storeColor.color4}
        cercleMarine={$storeColor.color3}
        cercleBleu={$storeColor.color2}
      />
    </div>
  </div>
  <div
    class="flex flex-col text-center justify-center items-center py-2 lg:flex-row lg:justify-start lg:gap-x-16 px-16 lg:text-left lg:mt-2"
  >
    <FiveHundred
      styleP="color : {$storeColor.text}"
      styleSpan="color : {$storeColor.color3}"
    />
    <FiveHundred
      styleP="color : {$storeColor.text}"
      styleSpan="color : {$storeColor.color2}"
    />
    <FiveHundred
      styleP="color : {$storeColor.text}"
      styleSpan="color : {$storeColor.color4}"
    />
  </div>
</section>
