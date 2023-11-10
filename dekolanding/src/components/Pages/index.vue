<script lang="ts">
import {defineComponent} from 'vue'
import Main from "~/src/components/Pages/layers/main.vue";
import Service from "~/src/components/Pages/layers/service.vue";
import OurWorks from "~/src/components/Pages/layers/ourWorks.vue";
import All from "~/src/components/Pages/layers/All.vue";


export default defineComponent({
  name: "welcomePage",
  components: { All, OurWorks, Service, Main},

  data() {
    return {}
  },
})
</script>

<template>
  <div>
    <Main/>
    <Service/>
    <our-works />
    <all/>


  </div>

</template>

<style scoped>

</style>