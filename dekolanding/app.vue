<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
* {
  background: black;
}
.rout-enter-from,
.rout-leave-to {
  opacity: 0;
}
.rout-enter-active,
.rout-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
<script setup lang="ts"></script>
