<template>
    <section>
        <UITitle>{{ about.about_event_title }}</UITitle>

        <div class="content" v-html="about.about_event"></div>
    </section>
</template>

<script setup>
const profileStore = useProfileStore();
const { profileData: about } = storeToRefs(profileStore);
</script>

<style scoped>
.content,
.content *,
.content span {
    @apply !text-white !bg-transparent !text-lg;
}
</style>