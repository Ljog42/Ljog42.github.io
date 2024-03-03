<script setup>
import NameJobSection from "./NameJobSection.vue";
import SocialsSection from "./SocialsSection.vue"

</script>

<template>
  <header class="header flex flex-col w-full h-fit box-border text-display self-start p-2">
    <div class="wrapper w-full flex h-fit justify-between">
      <NameJobSection />

      <SocialsSection />
    </div>

    <hr class="header-hr mt-2 lg:mt-4 w-full border-t-2 border-black" />
  </header>
</template>
