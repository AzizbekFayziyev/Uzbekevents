<template>
  <!-- header image or video -->
  <div class="w-full h-[200px]">
    <div
      v-if="bio?.bg_video"
      id="videoPlayer"
      class="w-full h-full pointer-events-none select-none"
    ></div>

    <img
      v-else
      class="w-full h-full object-cover"
      :src="bio?.background_image"
      alt="background image"
    />
  </div>
  <!-- Bio -->
  <div class="flex flex-col items-center gap-2">
    <viewer :images="'/hero.jpg'">
      <div class="-mt-20 relative">
        <img
          class="w-[155px] h-[155px] rounded-full border-[3px] border-white object-cover bg-black"
          :src="bio?.profile_image"
          alt=""
        />

        <a
          v-if="bio?.map"
          :href="bio?.map"
          target="_blank"
          style="transform: translateY(-50%)"
          class="absolute top-[60%] right-[-90px] flex flex-col items-center gap-2 cursor-pointer"
        >
          <div
            class="bg-primary hover:bg-hoverColor transition-colors min-w-10 h-10 grid place-content-center max-w-max rounded-full"
          >
            <i class="fa-solid fa-location-dot text-xl"></i>
          </div>
          <span class="text-sm universal-text">Location</span>
        </a>
      </div>
    </viewer>

    <h1 class="font-bold text-3xl text-center px-1 universal-text">
      {{ bio?.name }}
    </h1>

    <NuxtLink
      class="text-secondary font-medium text-center px-1"
      :href="bio.company_url"
      target="_blank"
      >{{ bio?.company_name }}
    </NuxtLink>

    <p class="font-bold mt-2 text-sm text-center px-1 universal-text">
      {{ bio?.job_title }}
    </p>
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

let player = null;

const getVideoId = (url) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/)([^&?#]+))/
  );
  return match ? match[1] : null;
};

const waitForYouTubeAPI = () => {
  return new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve();
    } else {
      window.onYouTubeIframeAPIReady = resolve;
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }
  });
};

const createYouTubePlayer = async () => {
  await waitForYouTubeAPI();

  const videoId = getVideoId(bio.value?.bg_video);
  if (!videoId) return;

  player = new YT.Player("videoPlayer", {
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      loop: 1,
      modestbranding: 3,
      rel: 0,
      showinfo: 0,
      mute: 1,
      autohide: 1,
      playlist: videoId,
    },
    events: {
      onReady: (event) => {
        event.target.playVideo();
      },
    },
  });
};

onMounted(createYouTubePlayer);
</script>
