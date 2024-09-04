<template>
    <!-- Social links -->
    <div class="flex justify-evenly items-center sm:gap-8 gap-6">
        <NuxtLink :href="`mailto:${social.email}`"
            :class="`flex flex-col gap-3 items-center cursor-pointer ${social.email === null && 'hidden'}`">
            <i
                class="fa-solid fa-envelope text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>
            <h5>Email</h5>
        </NuxtLink>

        <NuxtLink :href="`tel:${social.phone_number}`" class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-solid fa-phone text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Call</h5>
        </NuxtLink>

        <NuxtLink :href="`sms:${social.phone_number}`" class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-regular fa-comments text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Text</h5>
        </NuxtLink>

        <NuxtLink
            :href="`sms:${social.phone_number}?&body=Hey%20there,%20it%27s%20${social.name}.%20Please%20click%20the%20link%20below%20so%20we%20can%20share%20contact%20info.%20Talk%20soon!%20${siteUrl}`"
            class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-regular fa-handshake text-2xl bg-hoverColor hover:bg-primary text-black hover:text-white transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Connect</h5>
        </NuxtLink>
    </div>

    <div class="flex justify-evenly sm:gap-8 gap-4 items-center mt-8">
        <NuxtLink :href="social.linked_in" target="_blank" :class="{ hidden: social.linked_in.trim() == '' }"
            class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-brands fa-linkedin-in text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Linkedin</h5>
        </NuxtLink>

        <NuxtLink :href="social.instagram" target="_blank" :class="{ hidden: social.instagram.trim() == '' }"
            class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-brands fa-instagram text-3xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Instagram</h5>
        </NuxtLink>

        <NuxtLink :href="social.youtube" target="_blank" :class="{ hidden: social.youtube.trim() == '' }"
            class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-brands fa-youtube text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Youtube</h5>
        </NuxtLink>

        <NuxtLink :href="social.telegram" target="_blank" :class="{ hidden: social.telegram.trim() == '' }"
            class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-brands fa-telegram text-3xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Telegram</h5>
        </NuxtLink>
    </div>

    <div class="flex justify-center flex-wrap sm:gap-8 gap-6 items-center mt-8">
        <NuxtLink v-for="button in social?.buttons" :key="button.id" :href="button?.url" target="_blank"
            class="flex flex-col gap-3 items-center cursor-pointer">
            <img v-if="button?.image" class="w-14 h-14 rounded-full object-cover" :src="button?.image"
                :alt="button?.text + ' image'">
            <i v-else
                class="fa-solid fa-link text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>
            <h5>{{ button?.text }}</h5>
        </NuxtLink>
    </div>

    <div class="mt-8">
        <div class="flex gap-[2px] mb-5">
            <NuxtLink target="_blank"
                :href="social.contact_file !== null ? social.contact_file : `tel:${social.phone_number}`"
                class="btn w-[70%] rounded-r-none bg-hoverColor hover:bg-primary text-black">
                <i class="fa-solid fa-address-book"></i> ADD TO CONTACTS
            </NuxtLink>

            <button @click="toggleCard" class="btn w-[40%] rounded-l-none hover:text-black">
                <i class="fa-solid fa-share-nodes"></i>
                SHARE</button>
        </div>

        <NuxtLink :href="social.web_site" target="_blank" class="btn">
            Website
        </NuxtLink>
    </div>
</template>

<script setup>
let siteUrl = "";

// Stores
const appStore = useAppStore();
const profileStore = useProfileStore();
// Actions
const { toggleCard } = appStore;
// Refs
const { profileData: social } = storeToRefs(profileStore);

onMounted(() => {
    siteUrl = window.location.href;
});
</script>