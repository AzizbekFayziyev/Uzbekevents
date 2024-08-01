<template>
  <!-- Seo -->

  <Head>
    <Title>{{ profile.length ? profile?.name + " | UzbekBusinessConnect" : "UzbekBusinessConnect" }}</Title>
    <Link rel="icon" :href="profile?.profile_image">
    </Link>
  </Head>

  <div v-if="!isLoading" class="cnt">
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
      <UI-Divider icon-name="fa-solid fa-video  " />
      <Works />

      <!-- About-person section -->
      <UI-Divider icon-name="fa-solid fa-user  " />
      <AboutPerson />

      <!-- Gallery section -->
      <UI-Divider icon-name="fa-solid fa-images" />
      <Gallery />

      <!-- Share -->
      <UI-Divider icon-name="fa-solid fa-share-from-square" />
      <button @click="toggleCard" class="btn w-full">SHARE MY INFO</button>
    </div>

    <!-- QR CODE -->
    <UI-QRCode />
  </div>

  <UI-Loading v-else />
</template>

<script setup>
const { params } = useRoute();

// Stores
const appStore = useAppStore();
const profileStore = useProfileStore();
// Refs
const { isLoading, profileData: profile } = storeToRefs(profileStore);
// Actions
const { toggleCard } = appStore;
const { fetchData } = profileStore;

// Fetch data
onMounted(() => {
  fetchData(params.slug);
});
</script>

<style></style>