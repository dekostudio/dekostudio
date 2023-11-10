<script lang="ts">
import {defineComponent} from 'vue'

import CarouselSlide from "~/src/components/Carousel/CarouselSlide.vue";
import Carousel from "~/src/components/Carousel/Carousel.vue";
type Items={
  img:string,
}
interface  Item{
  components:Array<Items>
}
export const Items=():Item=>({
  components:[
    {
      img:"/_nuxt/src/assets/mockPics/unsplash_atBwiyYKTM8.png"
    },
    {
      img:"/_nuxt/src/assets/mockPics/unsplash_atBwiyYKTM8.png"
    },
    {
      img:"/_nuxt/src/assets/mockPics/unsplash_atBwiyYKTM8.png"
    },
    {
      img:"/_nuxt/src/assets/mockPics/unsplash_atBwiyYKTM8.png"
    },
    {
      img:"/_nuxt/src/assets/mockPics/unsplash_atBwiyYKTM8.png"
    },
    {
      img:"/_nuxt/src/assets/mockPics/unsplash_atBwiyYKTM8.png"
    },
  ]
})
export default defineComponent({
  name: "ourWorks",
  components: {CarouselSlide,Carousel},
   data(){
    return{
      components:Items().components,
      visibleSlide: 0,
      slides:[],
      direction: "carousel-next",
    }
   },
  computed: {
    slidesLen() {
      return this.components.length;
    },
  },
methods: {
  next() {
    if (this.visibleSlide >= this.slidesLen - 1) {
      this.visibleSlide = 0;
    } else {
      this.visibleSlide++;
    }
    this.direction = "carousel-next"
  },
  prev() {
    if (this.visibleSlide <= 0) {
      this.visibleSlide = this.slidesLen - 1;
    } else {
      this.visibleSlide--;
    }
    this.direction = "carousel-prev"
  },
}
})
</script>

<template>
<div class="ourWorks-wrapper" >
  <div class="ourWorks">
    <div class="ourWorks-header">
      <h1>НАШИ
        РАБОТЫ</h1>
      <p>
        МЫ САМЫЕ КРЕАТИВНЫЕ НА РЫНКЕ
        ПРЕДСАТВЛЯКЕМ ИНДИВИДУАЛЬНЫЕ И ИННОВАЦИОННЫЕ ПРОЕКТЫ
      </p>
    </div>
  </div>

  <div class="ourWorks-carousel" v-motion-slide-visible-bottom>
    <Carousel @next="next" @prev="prev">
      <CarouselSlide v-for="(slide,index) in components"
                     :index="index"
                     :visibleSlide="visibleSlide"
                     :direction="direction"

      >
        <img :src="slide.img">
      </CarouselSlide>
    </Carousel>
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
  background: white;
}
.ourWorks-wrapper{
  display: flex;
  position: relative;
   & .ourWorks{
     margin-top: 15rem;
     display: flex;
     height: 40rem;
     & .ourWorks-header{
       z-index: 2;
       width: 670px;
       position: absolute;
       left: 10rem;
       padding-left: 10rem;
        & h1{
          padding-top: 1rem;
          font-size:6rem;
          padding-bottom: 4rem;
          width: 390px;

        }
        & p{
          font-size: 1.5rem;
          padding-bottom: 2rem;
          width: 390px;
        }
     }
   }
}
.ourWorks-carousel{
  display: flex;
  margin-left: 30rem;
}

</style>