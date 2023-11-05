<script lang="ts">
export default defineComponent({
  data() {
    return {
      Items: [
        {
          name: "UX/UI",
        },
        {
          name: "Разработка платформы",
        },
        {
          name: "Разработка сайтов",
        },
        {
          name: "Разработка чат-ботов",
        },
      ],
    };
  },
});
</script>

<template>
  <div class="contactWindow-wrapper">
    <div class="contactWindow">
      <div class="contactWindow-header">
        <h1>Заказать проект</h1>
        <p>
          Чтобы начать диалог о вашей задаче, нам нужно поговорить.Можно
          позвонить по телефону +34567876543 или коротко рассказать о проекте в
          форме
        </p>
      </div>
      <p>*Все Поля обязательные для заполнения</p>
      <div class="contactWindow-categoryToOrder">
        <div class="categoryToOrder-header">
          <h4>Какие услуги вам необходимы?</h4>
        </div>
        <div class="categoryToOrder-wrapper">
          <div
            class="categoryToOrder-items"
            v-for="(item, key) in Items"
            :key="key"
          >
            <button>
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.contactWindow-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  width: 100%;
  background: none;
}
.contactWindow {
  background: white;
  height: auto;
  padding-bottom: 2rem;
  & .contactWindow-header {
    display: flex;
    flex-direction: row;

    background: none;
    padding: 5rem 2rem 2rem;
    gap: 2rem;
    & h1 {
      background: none;
      color: black;
      padding-top: 1rem;
      font-size: 3rem;
    }
    & p {
      background: black;
      color: white;
      padding: 0.5rem 1rem;
      width: 520px;
      line-height: 1.5rem;
    }
  }
  & p {
    background: none;
    color: black;
    padding-left: 28rem;
  }
  & .contactWindow-categoryToOrder {
    background: none;
    & .categoryToOrder-header {
      background: none;
      margin-left: 28.5rem;
      margin-top: 3rem;
      & h4 {
        background: none;
        color: black;
      }
    }
  }
  & .categoryToOrder-wrapper {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 320px 320px 320px;
    gap: 2rem;
    background: none;
    & .categoryToOrder-items {
      margin-left: 28rem;

      background: none;
      & button {
        padding: 1rem;
        background: black;
        width: 20rem;
        font-size: 1.5rem;
        background: none;
        color: black;
        border: 1px solid black;
        &:hover {
          background: black;
          color: white;
        }
      }
    }
  }
}
</style>
