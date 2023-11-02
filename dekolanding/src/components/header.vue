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
            "Разрабатываем и поддерживаем средние и крупные проекты, " +
            "держа руку на пульсе современных технологий.",
          img: "/_nuxt/src/assets/mockPics/mockPick.png",
        },
        {
          name: "Разработка платформы",
          link: "#",
          description:
            "LOrem и поддерживаем средние и крупные проекты, " +
            "держа руку на пульсе современных технологий.",
          img: "/_nuxt/src/assets/mockPics/mockPick.png",
        },
        {
          name: "Разработка сайтов",
          link: "#",
          description:
            "Разрабатываем и hyo средние и крупные проекты, " +
            "держа руку на пульсе современных технологий.",
          img: "/_nuxt/src/assets/mockPics/mockPick.png",
        },
        {
          name: "Разработка чат-ботов",
          link: "#",
          description:
            "gpod и поддерживаем средние и крупные проекты, " +
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
      console.log(id);
      this.data = this.navItems[id];
      console.log(this.data);
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
            <img src="../assets/gifs/ezgif.com-gif-maker.gif" />
          </div>
          <div class="additionalInfo" v-if="hoveredData">
            <transition name="dataShowUp" appear>
              <div class="infoComponents" v-show="data">
                <p>{{ data.description }}</p>
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
}

.navMenu-components {
  position: relative;
  background: none;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100vw;
  height: auto;

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
  border-right: solid #363636 1px;
  width: 420px;
  margin-left: 3rem;
  padding-bottom: 1rem;

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
    width: 720px;
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

  & p {
    background: none;
    color: black;
    font-size: 1.7rem;
    width: 620px;
    padding-top: 5rem;
    height: auto;
    line-height: 2.5rem;
  }

  & .infoImg-wrapper {
    background: none;
    margin-right: 1rem;

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
