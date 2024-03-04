<script setup>
import AboutSection from '../components/about/AboutSection.vue';
import ProjectsSection from '../components/projects/ProjectsSection.vue';
import ContactSection from '../components/contact/ContactSection.vue';
</script>

<template>
  <main class="main_wrapper flex flex-col lg:flex-row h-full w-full overflow-hidden gap-8 mt-2 2xl:mt-4 p-2 2xl:max-w-[80%] xl:mx-auto">
    <section class="about-contact-wrapper flex flex-col gap-4 2xl:gap-6 w-full h-full">
      <AboutSection />

      <ContactSection />
    </section>

    <ProjectsSection />
  </main>
</template>
