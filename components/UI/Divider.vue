<template>
    <div class="h-[1px] w-full bg-white my-12 relative">
        <i :class="`${iconName} text-xl absolute left-[50%] top-[50%] bg-black p-3`"></i>
    </div>
</template>

<script setup>
const { iconName } = defineProps(["iconName"])
</script>

<style scoped>
i {
    transform: translate(-50%, -50%);
}
</style>