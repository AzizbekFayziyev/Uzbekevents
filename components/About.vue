<template>
    <section>

        <UI-Title>About Uzbek Events</UI-Title>


        <iframe class="w-full h-[240px] rounded-2xl" src="https://www.youtube.com/embed/hZ3jIRpU8AI?si=KLdBlc8FZ0WAYDHx"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


        <p class="mt-4 text-lg">
            {{ isFullText ? aboutText : aboutText.slice(0, 212) + "..." }}
        </p>

        <button @click="isFullText = !isFullText" class="text-lg font-semibold mt-4">
            {{ toggleText }}
        </button>

    </section>
</template>

<script setup>
const aboutText = "Uzbek Events – Это команда event-специалистов с общим стажем работы более 100 лет. Мы – профессионалы, специализирующиеся на бизнес - мероприятиях высокого класса.Наши принципы просты, но проверены временем, наши решения дерзки, но выверены до малейших деталей.";
const isFullText = ref(false);

const toggleText = computed(() => isFullText.value ? "Read less" : "Read more");
</script>