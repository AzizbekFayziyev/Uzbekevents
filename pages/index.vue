<template>
  <div class="cnt">
    <!-- Header -->
    <Bio />

    <div class="p-5">
      <!-- Social media -->
      <Social :toggleCard="toggleCard" />

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
    <UI-QRCode :show="isCardOpen" :close="toggleCard"/>
  </div>
</template>

<script setup>
const isCardOpen = ref(false);

const toggleCard = () => {
  isCardOpen.value = !isCardOpen.value
};

</script>

<style></style>