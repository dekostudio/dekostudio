<script lang="ts">
export default defineComponent({
  data() {
    return {
      active: false,
      navItems: [
        {
          name: "UX/UI",
          link: "#",
          description:
            "Адаптивный веб-дизайн, создание сайтов, одинаково эффективных как для доступа с компьютеров, " +
            "так и с мобильных устройств от 50 тысяч рублей",
          img: "/_nuxt/src/assets/mockPics/mockPick.png",
        },
        {
          name: "Разработка платформы",
          link: "#",
          description:
            "Платформы, создание приложении для телефона разного вида платформы ios, android и десктоп. " +
            "От 250 тысяч рублей шабланного плана, " +
            "и от 2 миллионов рублей за оригинального и сложного проекта",
          img: "/_nuxt/src/assets/mockPics/mockPick.png",
        },
        {
          name: "Разработка сайтов",
          link: "#",
          description:
            "Интернет магазин. От 100 тысяч рублей шабланного плана, и от миллиона рублей за оригинального " +
            "и сложного проекта .Обновление старых корпоративных сайтов, придание им современного вида, " +
            "свойств и технических возможностей от 45 тысячи рублей",
          img: "/_nuxt/src/assets/mockPics/mockPick.png",
        },
        {
          name: "Разработка чат-ботов",
          link: "#",
          description:
            "Pазработка и поддерживаем средние и крупные проекты, " +
            "держа руку на пульсе современных технологий.",
          img: "/_nuxt/src/assets/mockPics/mockPick.png",
        },
      ],
      data: {},
      hoveredData: false,
    };
  },
  methods: {
    CheckId(id: number): void {
      this.data = this.navItems[id];
      this.hoveredData = true;
    },
  },
});
</script>

<template>
  <header>
    <div class="navbar">
      <div class="nav-items">
        <div class="logo-item">
          <h1>DEKO</h1>
        </div>
        <div class="menu-item">
          <button @click="active = true">
            <img src="../assets/icons/burgermenu.svg" />
          </button>
        </div>
        <div class="contact-item">
          <button>Связаться</button>
        </div>
      </div>
    </div>
    <transition name="navMenuAppear">
      <div class="navMenu" v-if="active">
        <div class="navMenu-components">
          <div class="navMenu-btnContainer">
            <button @click="(active = false), (hoveredData = false)">
              <img src="../assets/icons/eixt.svg" />
            </button>
          </div>
          <div class="navMenu-item" v-for="(elem, key) in navItems" :key="key">
            <a :href="elem.link" @mouseover="CheckId(key)">
              {{ elem.name }}
            </a>
          </div>

          <div class="showcase" v-if="!hoveredData">
            <img src="../assets/gifs/ezgif.com-gif-maker%20(3).gif" />
          </div>
          <div class="additionalInfo" v-if="hoveredData">
            <transition name="dataShowUp" appear>
              <div class="infoComponents" v-show="data">
                <div v-if="hoveredData" class="infoText-wrapper">
                  <h1>
                    {{ data.name }}
                  </h1>
                  <p>{{ data.description }}</p>
                </div>
                <div class="infoImg-wrapper">
                  <img :src="data.img" alt="imgMock" />
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #ffffff;
  font-family: Roboto;
  z-index: 2;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.navbar {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-items {
  display: flex;
  gap: 40rem;
}

.menu-item {
  display: flex;
  padding-top: 0.2rem;
  margin-left: 3.25rem;
  & button {
    border: none;
    background: #ffffff;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    padding-top: 0.3rem;
    &:hover {
      transition: all 300ms ease-out;
      transform: scale(110%);
    }
  }
  & button img {
    background: none;
  }
}

.contact-item {
  display: flex;
  padding-top: 0.2rem;
  & button {
    border: 1px solid white;
    width: 12rem;
    font-size: 1.1rem;
    height: 2.7rem;
    &:hover {
      transition: all 300ms ease-out;
      transform: scale(110%);
    }
  }
}

.logo-item {
  font-size: 1.22rem;
}

.navMenu {
  position: absolute;
  background: #ffffff;
  top: 0;
  left: 0;
  overflow-x: hidden;
  width: 100%;
}

.navMenu-components {
  position: relative;
  background: none;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  height: auto;
  overflow-x: hidden;
  padding-bottom: 4rem;

  & .navMenu-btnContainer {
    padding-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;

    & button {
      border: none;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
    }
  }
}

.navMenu-item {
  background: none;
  width: 420px;
  margin-left: 3rem;
  padding-bottom: 1rem;
  border-right: solid #363636 1px;
  height: auto;
  &.navMenu-item a {
    background: none;
    color: black;

    text-decoration: none;
    font-size: 1.7rem;

    &:hover {
      color: #7a7a7a;
    }
  }
}

.showcase {
  position: absolute;
  background: none;
  left: 40%;
  top: 30%;
  & img {
    background: none;
    width: 450px;
    height: px;
  }
}

.additionalInfo {
  position: absolute;
  left: 30%;
  background: none;
  top: 30%;
}

.infoComponents {
  display: flex;
  background: none;
  & .infoText-wrapper {
    padding-left: 1rem;
    padding-bottom: 2rem;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
    & h1 {
      padding-top: 1rem;
    }
    & p {
      background: none;
      color: white;
      font-size: 1.2rem;
      width: 700px;
      padding-top: 7rem;
      height: auto;
      line-height: 2rem;
    }
  }

  & .infoImg-wrapper {
    background: none;
    margin-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;

    & img {
      background: none;
      max-width: 520px;
    }
  }
}

.navMenuAppear-enter-active {
  animation: EnterActive 0.3s ease-in-out;
}

.navMenuAppear-leave-active {
  animation: LeaveActive 0.3s ease-in-out;
}

@keyframes EnterActive {
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes LeaveActive {
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(-100%);
  }
}

.dataShowUp-enter-active {
  animation: EnterShowUp 0.3s ease-in-out;
}

.dataShowUp-leave-to {
  animation: LeaveShowUp 0.3s ease-in-out;
}

@keyframes EnterShowUp {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes LeaveShowUp {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
