<script  type="ts">
export default defineComponent({
  props:['visibleSlide','index','direction'],
  data(){
    return{
    }
  }
})
</script>

<template>
  <transition :name="direction" mode="in-out">
    <!--позволяет скрывать или отображать элементы по определенному условию:-->
  <div v-show="visibleSlide === index" class="carousel-slide">
   <slot></slot>
  </div>
  </transition>
</template>

<style scoped>

.carousel-slide{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.carousel-next-enter-active{
animation:EnterActive 0.5s ease-in-out ;
}
.carousel-next-leave-active{
animation:LeaveActive 0.5s ease-in-out ;
}
@keyframes EnterActive {
   from{
     transform: translateX(100%);

   }
  to{
    transform: translateX(0%);
  }
}@keyframes LeaveActive {
   from{
     transform: translateX(0%);

   }
   to{
     transform: translateX(-100%);
   }
 }
 .carousel-prev-enter-active{
   animation:PrevEnterActive 0.5s ease-in-out ;
 }
 .carousel-prev-leave-active{
   animation:PrevLeaveActive 0.5s ease-in-out
 }
@keyframes PrevEnterActive {
  from{
    transform: translateX(-100%);

  }
  to{
    transform: translateX(0%);
  }
}@keyframes PrevLeaveActive {
   from{
     transform: translateX(0%);

   }
   to{
     transform: translateX(100%);
   }
 }
</style>