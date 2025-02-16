<template>
  <section>
    <UITitle>{{ about.about_event_title }}</UITitle>

    <div class="content universal-text" v-html="about.about_event"></div>
  </section>
</template>

<script setup>
const profileStore = useProfileStore();
const { profileData: about } = storeToRefs(profileStore);
</script>

<style scoped>
.content,
.content *,
.content span,
.content mark {
  @apply !bg-transparent !text-lg;
}
</style>
