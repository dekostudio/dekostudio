<script lang="ts">


export default defineComponent({
  name: "All",
  data() {
    return {}
  }
})
</script>

<template>
  <div class="all-wrapper" v-motion-slide-visible-bottom>
    <div class="all">
      <div class=" all-blocks  iteration1">
        <a href="#"> <img src="../../../assets/mockPics/unsplash_atBwiyYKTM8.png"/></a>
      </div>
      <div class=" all-blocks  iteration2">
        <a href="#"> <img src="../../../assets/mockPics/unsplash_atBwiyYKTM8.png"/></a>
      </div>
      <div class=" all-blocks  iteration3">
        <a href="#"> <img src="../../../assets/mockPics/unsplash_atBwiyYKTM8.png"/></a>
      </div>
      <div class=" all-blocks  iteration4">
        <a href="#"> <img src="../../../assets/mockPics/unsplash_atBwiyYKTM8.png"/></a>
      </div>
      <div class=" all-blocks  iteration5">
        <a href="#"> <img src="../../../assets/mockPics/unsplash_atBwiyYKTM8.png"/></a>
      </div>
      <div class=" all-blocks  iteration6">
        <a href="#"> <img src="../../../assets/mockPics/unsplash_atBwiyYKTM8.png"/></a>
      </div>
    </div>
  </div>
  <div class="all-b" v-motion-slide-visible-bottom >
    <div class="b">
      <div class="b-header">
        <p>Мы всегда готовы помочь вам реализовать ваши идеи и создать качественную работу,
          которая будет соответствовать всем вашим требованиям.</p>
        <div class="b-link">
          <NuxtLink to="/contact">Связаться</NuxtLink>
        </div>
      </div>
    </div>
  </div>
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

.all-wrapper {
  display: flex;
  margin-top: 10rem;
  height: 1200px;
  margin-left: 2rem;

  & .all {

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 5vw);
    height: auto;

    .all-blocks {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    & .iteration1 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;

      & a {
        & img {
          background: none;
        }
      }
    }

    & .iteration2 {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 3;

      & a {
        & img {
          background: none;
        }
      }
    }

    & .iteration3 {
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 6;

      & a {
        & img {
          background: none;

        }
      }
    }

    & .iteration4 {
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 6;

      & a {
        & img {
          background: none;
          width: 627px;
        }
      }
    }

    & .iteration5 {
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 6;
      grid-row-end: 9;

      & a {
        & img {
          background: none;

        }
      }
    }

    & .iteration6 {
      grid-column-start: 5;
      grid-column-end: 9;
      grid-row-start: 6;
      grid-row-end: 9;

      & a {
        & img {
        }
      }
    }
  }
}

.all-b {
  display: flex;
  margin-top: 20rem;
  margin-bottom: 5rem;
  align-items: center;
  justify-content: center;

  & .b {
    display: flex;

    & .b-header {
      border: 1px solid black;
      width: 1540px;

      & p {
        font-size: 2.6rem;
        text-align: center;
        padding: 2rem;
      }

      & .b-link {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4rem;

        & a {
          border: 1px solid black;
          text-decoration: none;
          font-size: 2rem;
          padding: 0.5rem;
          color: black;

          &:hover {
            transition: all .3s;
            transform: scale(110%);
          }
        }
      }
    }

  }
}
</style>