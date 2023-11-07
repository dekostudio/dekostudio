<script lang="ts">
type Items = {
  name: string;
};

interface items {
  Items: Array<Items>;
}

interface item {
  item: string[];
  count: number;
}

export const items = (): items => ({
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
    {
      name: "Лендинг",
    },
    {
      name: "Интернет магазин",
    },
    {
      name: "Сервис",
    },
    {
      name: "Графический дизайн",
    },
  ],
});
export const item = (): item => ({
  item: [],
  count: 0,
});
export default defineComponent({
  data() {
    return {
      Items: items().Items,
      item: item().item,
      count: item().count,
    };
  },
  methods: {
    ///adding to category
    categoryStore: function (id: number): void {
      const category = this.$refs.category as HTMLButtonElement;
      this.item.push(this.Items[id].name);
      localStorage.setItem("Category", JSON.stringify(this.item));

      category[id].style.backgroundColor = "black";
      category[id].style.color = "white";
    },

    ///deleting from category
    categoryUnstore: function (id: number): void {
      const category = this.$refs.category as HTMLButtonElement;
      const storedItems = localStorage.getItem("Category");

      if (storedItems) {
        let co = JSON.parse(storedItems);
        const categoryName = this.Items[id].name;

        const index = co.indexOf(categoryName);
        if (index !== -1) {
          co.splice(index, 1);
          localStorage.setItem("Category", JSON.stringify(co));
        }
      }
      category[id].style.backgroundColor = "white";
      category[id].style.color = "black";
    },
    toggle: function (id: number): void {
      const category = this.$refs.category as HTMLButtonElement;

      if (Number.parseInt(category[id].getAttribute("data-status")) == 1) {
        this.categoryUnstore(id);
        category[id].setAttribute("data-status", "0");
      } else {
        this.categoryStore(id);
        category[id].setAttribute("data-status", "1");
      }
    },
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
            <button
              :key="key"
              :data-id="key"
              :data-status="0"
              @click="toggle(key)"
              ref="category"
            >
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
