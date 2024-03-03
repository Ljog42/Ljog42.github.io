<script setup>
import SectionHeading from "../shared/SectionHeading.vue"
import CVurl from "../../../public/CV_Louis_Coutel.pdf"
import AboutPara from "./AboutPara.vue";
</script>

<template>
  <section class="about-section inline-flex flex-col shrink min-w-[15ch] sm:min-w-[30ch]">
    <SectionHeading :title="'A propos'" />

    <AboutPara>
      Après un an de découverte en autodidacte du développement, j'ai rejoint
      <b>AdaTechSchool</b> afin de consolider mes compétences, participer à des
      projets de groupe et découvrir de nouvelles technos. Dans ce cadre, je
      recherche actuellement une <b>alternance</b>.
    </AboutPara>

    <AboutPara>
      Avant cela, j'ai accompagné le magazine <b>L'Express</b> pendant 4 ans en
      tant que <b>Réalisateur Podcast</b>. J'ai notamment participé à la
      création de <b>La Loupe</b>, le podcast quotidien de L'Express.
    </AboutPara>

    <a class="about-a lg:text-xl xl:text-2xl text-base underline transition-all w-fit font-medium hover:text-utOrange duration-100"
      :href="CVurl" target="_blank">MonCV.pdf</a>
  </section>
</template>
