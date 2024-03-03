<script setup>
import SocialIcon from "./SocialIcon.vue";

const github = {
    class: "fa-square-github",
    link: "https://github.com/LouisCoutel",
};

const linkedin = {
    class: "fa-linkedin",
    link: "https://www.linkedin.com/in/louis-coutel/",
};
</script>
<template>
    <section class="socials-section flex flex-row grow w-fit gap-1 lg:gap-2 justify-end items-end">
        <SocialIcon :faClass="linkedin.class" :link="linkedin.link" />

        <SocialIcon :faClass="github.class" :link="github.link" />
    </section>
</template>