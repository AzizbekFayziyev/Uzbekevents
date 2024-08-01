<template>
    <section>

        <UI-Title>{{ about.about_event_title }}</UI-Title>


        <iframe class="w-full h-[240px] rounded-2xl" src="https://www.youtube.com/embed/hZ3jIRpU8AI?si=KLdBlc8FZ0WAYDHx"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


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