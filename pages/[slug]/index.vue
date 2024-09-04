<template>
  <!-- Seo -->

  <Head>
    <Title>{{ profile?.slug ? profile?.name + " | UzbekBusinessConnect" : "UzbekBusinnessConnect" }}</Title>
    <Meta name="og:title"
      :content="profile?.slug ? profile?.name + ' | UzbekBusinessConnect' : 'UzbekBusinnessConnect'" />
  </Head>

  <div v-if="htmlData !== null" v-html="htmlData">

  </div>

  <div v-else class="cnt">
    <!-- Header -->
    <Bio />

    <div class="p-5">
      <!-- Social media -->
      <Social />

      <!-- About section -->
      <UI-Divider icon-name="fa-solid fa-building" />
      <About />

      <!-- Clients section -->
      <UI-Divider icon-name="fa-solid fa-medal" />
      <Clients />
      <!-- Works section -->
      <UI-Divider icon-name="fa-solid fa-video" />
      <Works />

      <!-- About-person section -->
      <UI-Divider icon-name="fa-solid fa-user" />
      <AboutPerson />

      <!-- Gallery section -->
      <UI-Divider icon-name="fa-solid fa-images" />
      <Gallery />

      <!-- Share -->
      <UI-Divider icon-name="fa-solid fa-share-from-square" />
      <button @click="toggleCard" class="btn w-full">SHARE MY INFO</button>
      <NuxtLink href="https://uzbekbusinessconnect.com"
        class="rounded-xl py-2 px-4 mx-auto block border mt-5 text-base max-w-max" target="_blank">Get Your Connect
        Card</NuxtLink>
    </div>

    <!-- QR CODE -->
    <UI-QRCode />
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
const res = await fetchData(params.slug);

onMounted(() => {
  document.documentElement.style.setProperty('--primary', colors.value.primary);
  document.documentElement.style.setProperty('--hoverColor', colors.value.hoverColor);
})

// Create error
if (!res) {
  throw createError({ statusCode: 404, statusMessage: "User not found!", fatal: true })
}


</script>

<style></style>