<script setup>
import SectionHeading from "../shared/SectionHeading.vue";
import ContactForm from "./ContactForm.vue";
</script>

<template>
  <section class="contact-section inline-flex grow flex-col">
    <SectionHeading :title="'Contact'" />

    <ContactForm />
  </section>
</template>
