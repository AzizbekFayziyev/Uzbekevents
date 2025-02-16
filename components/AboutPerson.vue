<template>
  <section>
    <UITitle>{{ profile.about_person_title }}</UITitle>

    <div
      class="content universal-text"
      v-html="profile.about_person"
      :class="{ 'line-clamp-5': !isFullText }"
    ></div>

    <button
      @click="isFullText = !isFullText"
      class="text-lg font-semibold mt-3 universal-text"
    >
      {{ toggleText }}
    </button>
  </section>
</template>

<script setup>
const profileStore = useProfileStore();
const { profileData: profile } = storeToRefs(profileStore);

const isFullText = ref(false);

const toggleText = computed(() =>
  isFullText.value ? "Read less" : "Read more"
);
</script>

<style scoped>
.content,
.content *,
.content span,
.content mark {
  @apply !bg-transparent !text-lg;
}
</style>
