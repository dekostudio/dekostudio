<script lang="ts">
import {defineComponent} from 'vue'
import Main from "~/src/components/Pages/layers/main.vue";
import Service from "~/src/components/Pages/layers/service.vue";
export default defineComponent({
  name: "welcomePage",
  components: {Service, Main}
})
</script>

<template>
<div>
<Main/>
<Service/>
</div>

</template>

<style scoped>

</style>