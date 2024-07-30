<template>
    <section>
        <UI-Title>Gallery</UI-Title>

        <viewer :images="images" class="grid grid-cols-2 gap-4">
            <img v-for="(src, id) in images"
                class="cursor-pointer object-cover hover:brightness-50 transition-all duration-500" :key="id" :src="src"
                alt="gallery image" />
        </viewer>
    </section>
</template>

<script setup>
const images = [
    "/gallery.jpg",
    "/gallery.jpg",
    "/gallery.jpg",
    "/gallery.jpg",
    "/gallery.jpg",
    "/gallery.jpg",
    "/gallery.jpg",
    "/gallery.jpg",
    "/gallery.jpg",
    "/gallery.jpg",
    "/gallery.jpg",
    "/gallery.jpg",
]
</script>