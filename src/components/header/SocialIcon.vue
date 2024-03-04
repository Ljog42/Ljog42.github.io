<script setup>
const props = defineProps({
  faClass: String,
  link: String,
})

const link = props.link;
const faClass = props.faClass;
</script>

<template>
  <a class="social-icon" :href="link" target="_blank">
    <i :class="faClass"
      class="fa-brands block text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl ease-in-out transition-all duration-500 hover:duration-200 hover:-translate-y-1 hover:text-utOrange"></i></a>
</template>
