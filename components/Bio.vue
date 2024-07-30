<template>
    <!-- header logo -->
    <NuxtImg class="w-full" src="/logo.jpg" alt="logo" />

    <!-- Bio -->
    <div class="flex flex-col items-center gap-2">
        <viewer :images="'/hero.jpg'">
            <NuxtImg class="w-[155px] h-[155px] rounded-full border-[3px] border-white -mt-20" src="/hero.jpg"
                alt="Davron Khusanov image" />
        </viewer>

        <h1 class="font-bold text-3xl">Davron Khusanov</h1>

        <NuxtLink class="text-secondary font-medium" href="https://zanzir.uz/" target="_blank">Uzbek Events</NuxtLink>

        <p class="font-bold mt-2 text-sm">CEO</p>
    </div>
</template>