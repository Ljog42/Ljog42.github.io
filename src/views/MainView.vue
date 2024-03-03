<script setup>
import AboutSection from '../components/about/AboutSection.vue';
import ProjectsSection from '../components/projects/ProjectsSection.vue';
import ContactSection from '../components/contact/ContactSection.vue';
</script>

<template>
  <main class="main_wrapper flex flex-col lg:flex-row h-full w-full overflow-hidden gap-8 lg:gap-16 mt-2 lg:mt-4 p-2">
    <section class="about-contact-wrapper flex flex-col gap-4 md:gap-8 w-full h-full">
      <AboutSection />

      <ContactSection />
    </section>

    <ProjectsSection />
  </main>
</template>
