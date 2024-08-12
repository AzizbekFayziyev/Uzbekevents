<template>
    <section>
        <UI-Title>{{ profile.about_person_title }}</UI-Title>

        <div class="content" v-html="profile.about_person"></div>
    </section>
</template>

<script setup>
const profileStore = useProfileStore();
const { profileData: profile } = storeToRefs(profileStore);
</script>

<style scoped>
.content,
.content * {
    @apply !text-white !bg-transparent !text-lg;
}
</style>