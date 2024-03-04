<script setup>
import ProjectTile from "./ProjectTile.vue";
import { useProjects } from "../../stores/projects";
const projects = useProjects();
</script>

<template>
    <section
        class="flex flex-wrap lg:w-fit w-full lg:h-full h-fit gap-4 2xl:gap-6 items-start overflow-y-scroll p-4 2xl:p-6 rounded-lg scrollbar-none shadow-inner shadow-gray-400">
        <TransitionGroup name="projects">
            <ProjectTile v-for="project in projects.getAll" :key="project.index" :alt="project.alt" :name="project.name"
                :img="project.img" :href="project.href" />
        </TransitionGroup>
    </section>
</template>