<script setup>
const props = defineProps({
  title: String,
})

const title = props.title;
</script>

<template>
  <h3 class="text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-display font-bold mb-2 2xl:mb-3">
    {{ title }}
  </h3>
</template>
