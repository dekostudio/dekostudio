<script lang="ts">


export default defineComponent({

});
</script>

<template>
    <section class="welcomeSection-wrapper">
      <div class="welcomeSection-backWords">
        <div class="D">
          <img src="../../../assets/mainSectionBackground/D.png" />
        </div>
        <div class="E">
          <img src="../../../assets/mainSectionBackground/E.png" />
        </div>
        <div class="K">
          <img src="../../../assets/mainSectionBackground/k.png" />
        </div>
        <div class="O">
          <img src="../../../assets/mainSectionBackground/o.png" />
        </div>
      </div>
      <div class="welcomeSection">
        <div class="welcomeSection-content">
          <div class="welcomeSection-content-text">
            <h1>Мы - креативная команда</h1>
            <p>разрабатываем то,что умножает Вашу прибыль</p>
          </div>
          <div class="welcomeSection-contentBtn">
            <NuxtLink to="/contact">ЗАКАЗАТЬ ПРОЕКТ</NuxtLink>
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
}
.welcomeSection-wrapper {
  overflow-x: hidden;
  position: relative;
  height: 1000px;
}
.welcomeSection {
  display: flex;
}
.welcomeSection-content {
  z-index: 1;
  background: none;
  display: flex;
  width: 1920px;
  padding-top: 17rem;
  padding-left: 6.5rem;
  padding-bottom: 2rem;
  flex-direction: column;
  gap: 3rem;
  & .welcomeSection-content-text {
    line-height: 5rem;
    background: none;
    & h1 {
      background: none;
      color: white;
      font-size: 4.8em;
      font-weight: 500;
    }
    & p {
      background: none;
      color: white;
      font-size: 2.5em;
    }
  }
  & .welcomeSection-contentBtn {
    background: none;
    & a {
      border: 1px solid white;
      background: none;
      color: white;
      width: 400px;
      height: 80px;
      font-size: 1.8em;
      text-decoration: none;
      padding: 1rem;
      &:hover {
        transition: all 300ms;
        transform: scale(110%);
      }
    }
  }
}
.welcomeSection-backWords {
  position: absolute;
  width: 1800px;
  height: 100%;
  background: none;

  & .D {
    height: 800px;
    background: none;
    position: absolute;
    top: 10%;
    left: 8%;

    & img {
      background: none;
      animation: 5s infinite alternate Danim;
      &:last-of-type {
        opacity: 0.7;
      }
    }
  }
  & .E {
    background: none;
    position: absolute;
    left: 60%;
    top: -5%;
    & img {
      background: none;
      animation: 5s infinite alternate Eanim;
    }
  }
  & .K {
    background: none;
    position: absolute;
    left: 80%;
    top: 35%;
    & img {
      background: none;
      animation: 5s infinite alternate Danim;
    }
  }
  & .O {
    background: none;
    position: absolute;
    left: 43%;
    top: 60%;
    & img {
      background: none;
      animation: 5s infinite alternate Oanim;
    }
  }
}
@keyframes Danim {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10%);
  }
}
@keyframes Oanim {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10%);
  }
}
@keyframes Eanim {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10%);
  }
}
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
