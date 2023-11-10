<script lang="ts">

type Items = {
  name: string,
  description: string,
  img: string,
}

interface Category {
  categoryItems: Array<Items>
}

export const NavItems = (): Category => ({
  categoryItems: [
    {
      name: "UX/UI",
      description:
          "Адаптивный веб-дизайн, создание сайтов, одинаково эффективных как для доступа с компьютеров, " +
          "так и с мобильных устройств от 50 тысяч рублей",
      img: "/_nuxt/src/assets/mockPics/mockPick.png",
    },
    {
      name: "Разработка платформы",
      description:
          "Платформы, создание приложении для телефона разного вида платформы ios, android и десктоп. " +
          "От 250 тысяч рублей шабланного плана, " +
          "и от 2 миллионов рублей за оригинального и сложного проекта",
      img: "/_nuxt/src/assets/mockPics/mockPick.png",
    },
    {
      name: "Разработка сайтов",
      description:
          "Интернет магазин. От 100 тысяч рублей шабланного плана, и от миллиона рублей за оригинального " +
          "и сложного проекта .Обновление старых корпоративных сайтов, придание им современного вида, " +
          "свойств и технических возможностей от 45 тысячи рублей",
      img: "/_nuxt/src/assets/mockPics/mockPick.png",
    },
    {
      name: "Разработка чат-ботов",
      description:
          "Pазработка и поддерживаем средние и крупные проекты, " +
          "держа руку на пульсе современных технологий.",
      img: "/_nuxt/src/assets/mockPics/mockPick.png",
    },
  ]
})
export default defineComponent({
  data() {
    return {
      category: NavItems().categoryItems,
    }
  },
  methods:{
    next:function():void{

    }
  }
})
</script>

<template>
  <section class="service-wrapper">
    <div class="service">
      <div class="service-header">
        <h1>Мы предлагаем <span>полный цикл разработки</span>,
          <br> начиная от концепции и дизайна до разработки и тестирования.</h1>
      </div>
      <div class="service-categories">
        <div class="categories" v-for="(item,key) in category" :key="key" v-motion-pop-visible>
           <div class="items" >
             <div class="items-header">
             <h1>
               {{item.name}}
             </h1>
               <p>
                 {{item.description}}
               </p>
             </div>
             <div class="items-pic">
               <img :src="item.img" alt="itemsImg"/>
             </div>
           </div>
        </div>
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

  & .service {
    padding-top: 10rem;
    display: flex;
    background: white;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;

    & .service-header {
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      padding-bottom: 2rem;

      & h1 {
        background: none;
        font-weight: normal;
        font-size: 2rem;

        text-align: center;

        & span {
          background: none;
          font-weight: bold;

        }
      }
    }
    & .service-categories{
      display: flex;

      flex-direction: column;
    & .categories{
      border-top: 1px solid black;
      height: 30rem;

       & .items{
         display: flex;
         flex-direction: row;
         & .items-header{
           padding-top: 5rem;
           width: 620px;
            & h1{
              width: 420px;
              padding-top: 2rem;
              font-size: 3rem;
            }
           & p{
             padding-top: 1rem;
             padding-bottom: 1rem;
             font-size: 1.2rem;
             width: 520px;
           }
         }
         & .items-pic{
           padding-top: 3.3rem;
         }
       }
    }
    }
  }
}
</style>