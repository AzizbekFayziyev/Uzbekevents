<template>
    <section>
        <UI-Title>{{profile.gallery_title}}</UI-Title>

        <viewer :images="gallery" class="grid grid-cols-2 gap-4">
            <img v-for="pic in gallery"
                class="cursor-pointer object-cover hover:brightness-50 transition-all duration-500" :key="pic.id" :src="pic.image"
                alt="gallery image" />
        </viewer>
    </section>
</template>

<script setup>
const profileStore = useProfileStore();

const { profileData: profile, galleryData: gallery } = storeToRefs(profileStore);
</script>