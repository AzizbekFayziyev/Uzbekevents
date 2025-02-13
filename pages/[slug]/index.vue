<template>
  <div v-if="htmlData !== null" v-html="htmlData">

  </div>

  <div :style="`background: ${profile?.bg_color}`" v-else class="cnt">
    <!-- Header -->
    <Bio />

    <div class="p-5">
      <!-- Social media -->
      <Social />

      <!-- About section -->
      <Divider icon-name="fa-solid fa-building" />
      <About />

      <!-- Clients section -->
      <Divider icon-name="fa-solid fa-medal" />
      <Clients />
      <!-- Works section -->
      <Divider icon-name="fa-solid fa-video" />
      <Works />

      <!-- About-person section -->
      <Divider icon-name="fa-solid fa-user" />
      <AboutPerson />

      <!-- Gallery section -->
      <Divider icon-name="fa-solid fa-images" />
      <Gallery />

      <!-- Share -->
      <Divider icon-name="fa-solid fa-share-from-square" />
      <button @click="toggleCard" class="btn w-full">SHARE MY INFO</button>
      <NuxtLink href="https://uzbekbusinessconnect.com"
        class="rounded-xl py-2 px-4 mx-auto block border mt-5 text-base max-w-max" target="_blank">Get Your Connect
        Card</NuxtLink>
    </div>

    <!-- QR CODE -->
    <QRCode />
  </div>
</template>

<script setup>
const { params } = useRoute();

// Stores
const appStore = useAppStore();
const profileStore = useProfileStore();
// Refs
const { profileData: profile, colors, htmlData } = storeToRefs(profileStore);
// Actions
const { toggleCard } = appStore;
const { fetchData } = profileStore;

// Fetch data
await fetchData(params.slug);


onMounted(() => {
  document.documentElement.style.setProperty('--primary', colors.value.primary);
  document.documentElement.style.setProperty('--hoverColor', colors.value.hoverColor);
})

// Seo 
useHead({
  title: `${profile?.value?.name} - ${profile?.value?.company_name} | UzbekBusinessConnect` || 'UzbekBusinessConnect',
  meta: [
    { name: 'description', content: profile?.value?.about_person.replace(/<[^>]+>/g, '') || '' },
    { name: 'og:title', content: `${profile?.value?.name} - ${profile?.value?.company_name} | UzbekBusinessConnect` || 'UzbekBusinessConnect' },
    { name: 'og:description', content: profile?.value?.about_person.replace(/<[^>]+>/g, '') || '' },
    { name: 'og:image', content: profile?.value?.profile_image || '/logo.png' },
    { name: 'og:image:width', content: '1200' },
    { name: 'og:image:height', content: '630' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: `https://uzbekbusinessconnect.com/${profile?.value?.slug}` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: profile?.value?.profile_image || '/logo.png' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: profile?.value?.profile_image || '/default-favicon.ico' }
  ]
});
</script>

<style></style>