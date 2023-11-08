<script lang="ts">
type Items = {
  name: string;
};

interface items {
  Items: Array<Items>;
}

interface item {
  item: string[];
}
interface formController {
  chosen: boolean;
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
});
export const formController = (): formController => ({
  chosen: false,
});
export default defineComponent({
  data() {
    return {
      Items: items().Items,
      item: item().item,
      chosen: formController().chosen,
    };
  },
  methods: {
    ///adding to category
    categoryStore: function (id: number): void {
      const category = this.$refs.category as Array<HTMLButtonElement>;
      category[id].style.backgroundColor = "black";
      category[id].style.color = "white";

      this.item.push(this.Items[id].name);
      localStorage.setItem("Category", JSON.stringify(this.item));
    },

    ///deleting from category
    categoryUnstore: function (id: number): void {
      const category = this.$refs.category as Array<HTMLButtonElement>;
      category[id].style.backgroundColor = "white";
      category[id].style.color = "black";
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
    },

    ///toggles the logic for adding and deleting from local storage
    toggle: function (id: number): void {
      const category = this.$refs.category as Array<HTMLButtonElement>;

      if (
        Number.parseInt(category[id].getAttribute("data-status") || " ") == 1
      ) {
        this.categoryUnstore(id);
        category[id].setAttribute("data-status", "0");
      } else {
        this.categoryStore(id);
        category[id].setAttribute("data-status", "1");
      }
    },

    /// fixes hover bugs with css
    hoverProperty: function (id: number): void {
      const category = this.$refs.category as Array<HTMLButtonElement>;
      if (
        Number.parseInt(category[id].getAttribute("data-status") || " ") == 0
      ) {
        category[id].style.backgroundColor = "black";
        category[id].style.color = "white";
        category[id].style.transition = "all 0.3s ";
      }
    },
    leaveHoverState: function (id: number): void {
      const category = this.$refs.category as Array<HTMLButtonElement>;
      if (
        Number.parseInt(category[id].getAttribute("data-status") || " ") == 0
      ) {
        category[id].style.backgroundColor = "white";
        category[id].style.color = "black";
        category[id].style.transition = "all 0.3s ";
      }
    },
    fileChosen: function (): void {
      const fileInput = this.$refs.input as HTMLInputElement;
      const fileChosen = this.$refs.file as HTMLSpanElement;
      fileChosen.textContent = fileInput.files[0].name;
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
              @mouseover="hoverProperty(key)"
              @mouseleave="leaveHoverState(key)"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
      <div class="contactWindow-projectDescription">
        <div class="projectDescription-header">
          <h1>Опишите проект,не забудьте уточнить сроки</h1>
        </div>
        <div class="projectDescription-inputArea">
          <textarea placeholder="Введите сообщение..."> </textarea>
        </div>
        <div class="projectDescription-attachBrief">
          <div class="attachBrief-icon">
            <img src="../assets/icons/clip-2-svgrepo-com.svg" />
          </div>
          <input
            @change="fileChosen()"
            id="brief"
            type="file"
            ref="input"
            size="60"
            hidden
          />
          <label for="brief">Прикрепить бриф или другой файл </label>
          <!--          доделать условие-->
          <span v-if="this.chosen" ref="file"></span>
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
  font-family: Roboto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.contactWindow-wrapper {
  position: absolute;
  padding-top: 7rem;
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
      }
    }
  }
}

.contactWindow-projectDescription {
  background: none;
  margin-top: 2rem;

  & .projectDescription-header {
    background: none;
    padding-left: 28rem;

    & h1 {
      background: none;
      font-size: 1rem;
    }
  }

  & .projectDescription-inputArea {
    background: none;
    padding-left: 28rem;
    padding-top: 1rem;

    & textarea {
      background: none;
      resize: none;
      width: 64rem;
      height: 10rem;
      padding-left: 1rem;
      font-size: 1rem;
      font-weight: 600;
      padding-top: 1rem;

      &:focus {
        outline: none;
      }
    }
  }
  & .projectDescription-attachBrief {
    background: none;
    padding-left: 28rem;
    margin-top: 1rem;
    display: flex;

    & label {
      background: none;
      color: black;
      padding: 0.2rem;
      cursor: pointer;
      &:hover {
        background: black;
        color: white;
        transition: all 0.2s;
      }
    }
    & span {
      background: black;
      padding: 0.2rem;
      color: white;
      margin-left: 1rem;
    }
    & .attachBrief-icon {
      padding-top: 0.1rem;
      background: none;
      & img {
        background: none;
        width: 20px;
      }
    }
  }
}
</style>
