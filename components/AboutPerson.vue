<template>
    <section>
        <UI-Title>{{profile.about_person_title}}</UI-Title>

        <p class="text-lg" v-html="profile.about_person"></p>
    </section>
</template>

<script setup>
const profileStore = useProfileStore();
const { profileData: profile } = storeToRefs(profileStore);
</script>