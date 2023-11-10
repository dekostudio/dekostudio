<script  lang="ts">
export  default defineComponent({

})
</script>

<template>
  <section class="service-wrapper">
    <div class="service">
      <div class="service-header">
        <h1>Мы предлагаем <span>полный цикл разработки</span>,
          начиная от концепции и дизайна до разработки и тестирования.</h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
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
.service-wrapper {
  display: flex;
  position: relative;
  background: white;

  z-index: 200;
  & .service{
    padding-top: 4rem;
    display: flex;
    background: white;
    justify-content: center;
    align-items: center;
    width: 100%;
    & .service-header{
      display: flex;
      justify-content: center;
      align-items: center;
      background:none;
      padding-bottom: 2rem;
      & h1{
        background: none;
        font-weight: normal;
        & span{
          background: none;
          font-weight: bold;

        }
      }
    }

  }
}
</style>