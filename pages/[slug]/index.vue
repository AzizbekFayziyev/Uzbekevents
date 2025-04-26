<template>
  <div v-if="htmlData !== null" v-html="htmlData"></div>

  <div
    :style="`background: ${profile?.bg_color}`"
    v-else
    class="cnt universal-cnt"
  >
    <!-- Header -->
    <Bio />

    <div class="p-5">
      <!-- Social media -->
      <Social />

      <!-- About section -->
      <div v-if="profile.about_event">
        <Divider icon-name="fa-solid fa-building" />
        <About />
      </div>

      <!-- Clients section -->
      <div v-if="profile.clients_title">
        <Divider icon-name="fa-solid fa-medal" />
        <Clients />
      </div>

      <!-- Works section -->
      <div v-if="profile.our_projects_title">
        <Divider icon-name="fa-solid fa-video" />
        <Works />
      </div>

      <!-- About-person section -->
      <div v-if="profile.about_person">
        <Divider icon-name="fa-solid fa-user" />
        <AboutPerson />
      </div>

      <!-- Gallery section -->
      <div v-if="profile.gallery_title">
        <Divider icon-name="fa-solid fa-images" />
        <Gallery />
      </div>

      <!-- Share -->
      <Divider icon-name="fa-solid fa-share-from-square" />
      <button @click="toggleCard" class="btn w-full">SHARE MY INFO</button>
      <NuxtLink
        href="https://uzbekbusinessconnect.com"
        class="rounded-xl py-2 px-4 mx-auto block border mt-5 text-base max-w-max universal-text"
        target="_blank"
        >Get Your Connect Card</NuxtLink
      >
    </div>

    <!-- QR CODE -->
    <QRCode />
  </div>
</template>

<script setup>
import { Fragment } from "vue/jsx-runtime";

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

// Update text color based on background color
function updateTextColor() {
  const bgElement = document.querySelector(".universal-cnt");
  if (!bgElement) return;

  const bgColor = window.getComputedStyle(bgElement).backgroundColor;

  if (!bgColor || bgColor === "rgba(0, 0, 0, 0)") {
    return;
  }

  const rgb = bgColor.match(/\d+/g).map(Number);
  const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  // uniersal text colors
  document.querySelectorAll(".universal-text").forEach((element) => {
    element.style.color = brightness > 128 ? "black" : "white";
    element.style.borderColor = brightness > 128 ? "black" : "white";
  });

  // universal bg colors
  document.querySelectorAll(".universal-bg").forEach((element) => {
    element.style.background = brightness > 128 ? "black" : "white";
  });
}

onMounted(() => {
  updateTextColor();
  window.addEventListener("resize", updateTextColor);

  document.documentElement.style.setProperty("--primary", colors.value.primary);
  document.documentElement.style.setProperty(
    "--hoverColor",
    colors.value.hoverColor
  );
});

console.log(profile.value);

// Seo
useHead({
  title:
    `${profile?.value?.name} - ${profile?.value?.company_name} | UzbekBusinessConnect` ||
    "UzbekBusinessConnect",
  meta: [
    {
      name: "description",
      content: profile?.value?.about_event.replace(/<[^>]+>/g, "") || "",
    },
    {
      name: "og:title",
      content:
        `${profile?.value?.name} - ${profile?.value?.company_name} | UzbekBusinessConnect` ||
        "UzbekBusinessConnect",
    },
    {
      name: "og:description",
      content: profile?.value?.about_event.replace(/<[^>]+>/g, "") || "",
    },
    { name: "og:image", content: profile?.value?.profile_image || "/logo.png" },
    { name: "og:image:width", content: "1200" },
    { name: "og:image:height", content: "630" },
    { name: "og:type", content: "website" },
    {
      name: "og:url",
      content: `https://uzbekbusinessconnect.com/${profile?.value?.slug}`,
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image",
      content: profile?.value?.profile_image || "/logo.png",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: profile?.value?.profile_image || "/default-favicon.ico",
    },
  ],
});
</script>

<style></style>
