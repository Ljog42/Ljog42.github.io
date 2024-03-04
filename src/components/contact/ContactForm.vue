<script setup>
import FormField from "./FormField.vue";
import SendButton from "./SendButton.vue";
</script>

<template>
    <form class="contact_form flex flex-col w-full h-full gap-2 2xl:gap-3" action="https://formspree.io/f/mvonkgag"
        method="POST">
        <section class="poster-info flex flex-col sm:flex-row gap-2 xl:gap-3 w-full">
            <FormField :labelName="'Nom'" />

            <FormField :labelName="'Email'" />
        </section>

        <textarea id="textarea" name="message" placeholder="Rédigez votre message ici"
            class="resize-none rounded-lg bg-gray-200 text-gray-400 w-full h-32 lg:h-full grow shrink p-1 px-2 transition-colors focus-within:outline-1 focus-within:bg-gray-100 hover:bg-gray-100 shadow-inner"
            required></textarea>
        <SendButton />
    </form>
</template>