<template>
    <!-- Social links -->
    <div class="flex justify-evenly items-center flex-wrap gap-8">
        <NuxtLink href="mailto:office@zanzir.uz" target="_blank"
            class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-solid fa-envelope text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Email</h5>
        </NuxtLink>

        <NuxtLink href="tel:+998998009696" target="_blank" class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-solid fa-phone text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Call</h5>
        </NuxtLink>

        <NuxtLink href="sms:+998998009696" target="_blank" class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-regular fa-comments text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Text</h5>
        </NuxtLink>

        <NuxtLink
            href="sms:+998998009696?&body=Hey%20there,%20it%27s%20Davron%20Khusanov.%20Please%20click%20the%20link%20below%20so%20we%20can%20share%20contact%20info.%20Talk%20soon!%20https://onetapconnect.com/uzbekevents-davronkhusanov/"
            target="_blank" class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-regular fa-handshake text-2xl bg-hoverColor hover:bg-primary text-black hover:text-white transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Connect</h5>
        </NuxtLink>
    </div>

    <div class="flex justify-evenly items-center flex-wrap mt-8">
        <NuxtLink href="https://www.linkedin.com/in/uzbektraveller/?originalSubdomain=uz" target="_blank"
            class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-brands fa-linkedin-in text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Linkedin</h5>
        </NuxtLink>

        <NuxtLink href="https://www.instagram.com/zanziruz/" target="_blank"
            class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-brands fa-instagram text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Instagram</h5>
        </NuxtLink>

        <NuxtLink href="https://www.youtube.com/channel/UC1l2RaKs8qiVX2JXJBHFTLg" target="_blank"
            class="flex flex-col gap-3 items-center cursor-pointer">
            <i
                class="fa-brands fa-youtube text-2xl bg-primary hover:bg-hoverColor transition-colors rounded-full w-[55px] h-[55px] grid place-content-center"></i>

            <h5>Youtube</h5>
        </NuxtLink>
    </div>

    <div class="mt-8">
        <div class="flex gap-[2px] mb-5">
            <a href="/contact.vcf" class="btn w-[70%] rounded-r-none bg-hoverColor hover:bg-primary text-black"><i
                    class="fa-solid fa-address-book"></i> ADD TO CONTACTS
            </a>
            <button @click="toggleCard" class="btn w-[40%] rounded-l-none hover:text-black"><i
                    class="fa-solid fa-share-nodes"></i>
                SHARE</button>
        </div>

        <NuxtLink href="https://zanzir.uz/" target="_blank" class="btn">
            Website
        </NuxtLink>
    </div>
</template>

<script setup>
const { toggleCard } = defineProps(["toggleCard"]);
</script>

<style scoped></style>