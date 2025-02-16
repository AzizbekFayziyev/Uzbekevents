<template>
  <div class="h-[1px] w-full bg-white my-12 relative universal-bg">
    <i
      :style="`background: ${profile?.bg_color}`"
      :class="`${iconName} text-xl absolute left-[50%] top-[50%] p-3 universal-text`"
    ></i>
  </div>
</template>

<script setup>
const { iconName } = defineProps(["iconName"]);
const profileStore = useProfileStore();
// Refs
const { profileData: profile } = storeToRefs(profileStore);
</script>

<style scoped>
i {
  transform: translate(-50%, -50%);
}
</style>
