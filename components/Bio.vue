<template>
    <!-- header logo -->
    <img class="w-full h-[200px] object-cover" :src="bio.background_image" alt="logo" />

    <!-- Bio -->
    <div class="flex flex-col items-center gap-2">
        <viewer :images="'/hero.jpg'">
            <div class="-mt-20 relative">
                <img class="w-[155px] h-[155px] rounded-full border-[3px] border-white object-cover bg-black"
                    :src="bio?.profile_image" alt="" />

                <a v-if="bio?.map" :href="bio?.map" target="_blank" style="transform: translateY(-50%)"
                    class="absolute top-[60%] right-[-90px] flex flex-col items-center gap-2 cursor-pointer">
                    <div
                        class="bg-primary hover:bg-hoverColor transition-colors min-w-10 h-10 grid place-content-center max-w-max rounded-full">
                        <i class="fa-solid fa-location-dot text-xl"></i>
                    </div>
                    <span class="text-sm">Location</span>
                </a>
            </div>
        </viewer>

        <h1 class="font-bold text-3xl text-center">{{ bio.name }}</h1>

        <NuxtLink class="text-secondary font-medium" :href="bio.company_url" target="_blank">{{ bio.company_name }}
        </NuxtLink>

        <p class="font-bold mt-2 text-sm">{{ bio.job_title }}</p>
    </div>
</template>

<script setup>
// Stores
const appStore = useAppStore();
const profileStore = useProfileStore();
// Actions
const { toggleCard } = appStore;

// Refs
const { profileData: bio } = storeToRefs(profileStore);
</script>