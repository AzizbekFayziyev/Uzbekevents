<template>
    <!-- Qr code card -->
    <Transition :duration="550" name="card">
        <div @click.stop="toggleCard" v-if="isCardOpen"
            class="bg-black/80 fixed left-0 top-0 w-full h-full z-50 transition-colors">

            <div @click.stop style="transform: translateX(-50%)" class="content bg-white max-w-[500px] w-full sm:h-auto h-full sm:rounded-t-2xl absolute bottom-0
                left-[50%] text-center">

                <button @click="toggleCard"><i
                        class="fa-solid fa-xmark text-3xl text-black absolute right-5"></i></button>

                <h4 class="text-black text-2xl my-6 font-medium">{{ profile.name }}</h4>

                <VueQrcode width="280" height="280" class="mx-auto block" :value="siteUrl" />

                <button @click="copyUrl" class="text-black mt-5 mb-8"><i class="fa-regular fa-copy"></i> copy
                    link</button>

                <div class="bg-[#F9F9F9] pb-8 pt-4 px-8 sm:px-14">

                    <h3 class="text-black text-2xl mb-8">Share card</h3>

                    <div class="flex justify-between">
                        <NuxtLink
                            :href="`sms:?&body=${profileData?.greeting_text ? profileData?.greeting_text : 'Hello! Visit the website: ' + siteUrl}`"
                            target="_blank" class="flex flex-col gap-3 items-center cursor-pointer">
                            <i
                                class="fa-regular fa-comments text-3xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[65px] h-[65px] grid place-content-center"></i>

                            <h5 class="text-black">By Text</h5>
                        </NuxtLink>

                        <NuxtLink :href="`mailto:${profile.email}`" target="_blank"
                            class="flex flex-col gap-3 items-center cursor-pointer">
                            <i
                                class="fa-solid fa-envelope text-3xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[65px] h-[65px] grid place-content-center"></i>

                            <h5 class="text-black">By Email</h5>
                        </NuxtLink>

                        <button @click="shareCurrentPage" class="flex flex-col gap-3 items-center cursor-pointer">
                            <i
                                class="fa-solid fa-share-nodes text-3xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[65px] h-[65px] grid place-content-center"></i>

                            <h5 class="text-black">Social Media</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
// Vue qrcode
import VueQrcode from 'vue-qrcode';
let siteUrl = "";
// Stores
const appStore = useAppStore();
const profileStore = useProfileStore();
// Resf
const { profileData: profile } = storeToRefs(profileStore);
const { isCardOpen } = storeToRefs(appStore);
// Actions
const { toggleCard } = appStore;

onMounted(() => {
    siteUrl = window.location.href;
});

// Copy url
const copyUrl = () => {
    navigator.clipboard.writeText(siteUrl).then(() => {
        alert('URL copied to clipboard');
    }).catch(err => {
        alert('Error copying URL: ', err.message);
    });
}

// Share url
const shareCurrentPage = () => {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'Check out this page:',
            url: siteUrl,
        }).then(() => {
            console.log('Page shared successfully');
        }).catch((error) => {
            console.error('Error sharing page:', error);
        });
    } else {
        console.error('Web Share API not supported in this browser.');
        // Fallback code to handle browsers that do not support the API
    }
}
</script>

<style scoped>
.card-enter-active .content,
.card-leave-active .content {
    transition: all 0.5s ease;
}

.card-enter-from .content,
.card-leave-to .content {
    bottom: -100%;
}
</style>