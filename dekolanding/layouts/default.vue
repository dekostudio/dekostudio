<script lang="ts" setup>
import Header from "~/src/components/header.vue";
import Service from "~/src/components/Pages/layers/service.vue";
import Footer from "~/src/components/Pages/Footer.vue";
</script>

<template>
  <Header />
  <slot />
  <Footer/>
</template>

<style scoped></style>
