<template>
    <section>

        <UI-Title>{{ about.about_event_title }}</UI-Title>

        <div class="content" v-html="about.about_event" :class="{ 'line-clamp-5': !isFullText }"></div>

        <button @click="isFullText = !isFullText" class="text-lg font-semibold mt-4">
            {{ toggleText }}
        </button>

    </section>
</template>

<script setup>
const profileStore = useProfileStore();
const { profileData: about } = storeToRefs(profileStore);

const isFullText = ref(false);

const toggleText = computed(() => isFullText.value ? "Read less" : "Read more");
</script>

<style scoped>
.content,
.content *,
.content span {
    @apply !text-white !bg-transparent !text-lg;
}
</style>