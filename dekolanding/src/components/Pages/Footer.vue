<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Footer"
})
</script>

<template>
<div class="footer-wrapper">
  <div class="footer-logo">
  <h1>DEKO</h1>
  </div>
</div>
</template>

<style scoped>
*{
  padding: 0;
  margin: 0;
  background: black;
  box-sizing: border-box;
  font-family: Roboto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: black;
}
.footer-wrapper{
  display: flex;
   & .footer-logo{
     padding-top: 10rem;
     padding-bottom: 5rem;
     padding-left: 10rem;
     display: flex;
     & h1{
       font-size: 5rem;
       color: white;

     }
   }
}

</style>