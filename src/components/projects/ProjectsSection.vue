<script setup>
import SectionHeading from "../shared/SectionHeading.vue";
import ProjectsTileWrapper from "./ProjectsTileWrapper.vue";

</script>
<template>
  <section
    class="main_projects flex flex-col lg:w-fit lg:max-w-[33vw] w-full h-fit lg:h-full lg:overflow-auto overflow-hidden rounded-lg">
    <SectionHeading :title="'Projets'" class="w-fit" />
    <ProjectsTileWrapper />
  </section>
</template>
