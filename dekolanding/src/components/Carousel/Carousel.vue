<script type="ts">
export default defineComponent( {
  name:"Carousel",

  methods:{
    next(){
    this.$emit('next')
    },
    prev(){
      this.$emit('prev')
    }
  }
})
</script>

<template>
  <div class="carousel-wrapper">
<div class="carousel">
<slot></slot>

  <button @click="next" class="next" >
    <img src="../../assets/icons/BtnNext.svg"  alt="btnNext" />
  </button>


  <button @click="prev" class="previous" >
    <img src="../../assets/icons/btnPrev.svg" alt="btnPrevious"/>
  </button>


</div>
  </div>
</template>

<style scoped>
.carousel-wrapper{
  position: absolute;
  overflow: hidden;
  padding-bottom: 15rem;
  padding-top: 5rem;

}

 .carousel{
   display: flex;
   width: 1164px;
   height:612px ;
   position: relative;

 }
 button{
   position: absolute;
   height: 100%;
   width: 50px;
   top:15%;
   border: none;
   background: none;
   cursor: pointer;

 }
 button:hover{
  scale:108%;
   transition:all 0.3s ease-out;
 }

 img{
   background: none;
 }


 .next{
   bottom: 0;
   right: 5%;

 }
 .previous{

   left: 0.1%;
 }

</style>