<template>
    <!-- header logo -->
    <img class="w-full h-[200px] object-cover" :src="bio.background_image" alt="logo" />

    <!-- Bio -->
    <div class="flex flex-col items-center gap-2">
        <viewer :images="'/hero.jpg'">
            <img class="w-[155px] h-[155px] rounded-full border-[3px] border-white -mt-20 object-cover" :src="bio.profile_image"
                :alt="bio.name + ' profile photo'" />
        </viewer>

        <h1 class="font-bold text-3xl">{{ bio.name }}</h1>

        <NuxtLink class="text-secondary font-medium" href="https://zanzir.uz/" target="_blank">{{ bio.company_name }}
        </NuxtLink>

        <p class="font-bold mt-2 text-sm">{{ bio.job_title }}</p>
    </div>
</template>

<script setup>
const profileStore = useProfileStore();

const { profileData: bio } = storeToRefs(profileStore);
</script>