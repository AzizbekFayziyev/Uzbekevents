<template>
    <section>

        <UI-Title>{{ about.about_event_title }}</UI-Title>

        <p v-html="about.about_event" class="mt-4 text-lg" :class="{ 'line-clamp-5': !isFullText }"></p>

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