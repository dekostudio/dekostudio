<script lang="ts">
import {fetch} from "ofetch";
import emailjs from '@emailjs/browser';
type Items = {
  name: string;
};
type formOfWork = {
  name: string;
};
type budget = {
  name: string;
};
type info = {
  name: string;
};

interface items {
  Items: Array<Items>;
  formOFWork: Array<formOfWork>;
  budget: Array<budget>;
  info: Array<info>;
}

interface item {
  item: string[];
  workForm: string[];
  budgetItem: string[];
  infoItem: string[];
}

interface formController {
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
  formOFWork: [
    {
      name: "T&M по часам",
    },
    {
      name: "Проект под ключ",
    },
    {
      name: "Годовое сопровождение",
    },
  ],
  budget: [
    {
      name: "менее 500 тыс.₽",
    },
    {
      name: "500тыс-1,5 млн ₽",
    },
    {
      name: "1,5 млн-3млн ₽",
    },
    {
      name: "3млн-5млн ₽",
    },
    {
      name: "более 5млн ₽",
    },
  ],
  info: [
    {
      name: "Рейтинг",
    },
    {
      name: "Рекомендации",
    },
    {
      name: "CМИ",
    },
    {
      name: "Cоциальные сети",
    },
    {
      name: "Другое",
    },
  ],
});
export const item = (): item => ({
  item: [],
  workForm: [],
  budgetItem: [],
  infoItem: [],
});
export const formController = (): formController => ({});
export default defineComponent({
  data() {
    return {
      Items: items().Items,
      item: item().item,
      formOFWork: items().formOFWork,
      workForm: item().workForm,
      budget: items().budget,
      budgetItem: item().budgetItem,
      info: items().info,
      infoItem: item().infoItem,
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
      if (!fileInput.files) return;
      fileChosen.textContent = fileInput.files[0].name;
      fileChosen.style.backgroundColor = "black";
    },
    workFormStore: function (id: number): void {
      const fromWork = this.$refs.workForm as Array<HTMLButtonElement>;
      fromWork[id].style.backgroundColor = "black";
      fromWork[id].style.color = "white";
      this.workForm.push(this.formOFWork[id].name);
      localStorage.setItem("FormatOFWork", JSON.stringify(this.workForm));
    },
    workFormUnStore: function (id: number): void {
      const fromWork = this.$refs.workForm as Array<HTMLButtonElement>;
      fromWork[id].style.backgroundColor = "white";
      fromWork[id].style.color = "black";
      const storedForm = localStorage.getItem("FormatOFWork");

      if (storedForm) {
        let form = JSON.parse(storedForm);
        const formName = this.formOFWork[id].name;

        const index = form.indexOf(formName);
        if (index !== -1) {
          form.splice(index, 1);
          localStorage.setItem("FormatOFWork", JSON.stringify(form));
        }
      }
    },
    formWorkToggle: function (id: number): void {
      const fromWork = this.$refs.workForm as Array<HTMLButtonElement>;

      if (
          Number.parseInt(fromWork[id].getAttribute("data-status") || " ") == 1
      ) {
        this.workFormUnStore(id);
        fromWork[id].setAttribute("data-status", "0");
      } else {
        this.workFormStore(id);
        fromWork[id].setAttribute("data-status", "1");
      }
    },
    formWorkHoverProperty(id: number) {
      const fromWork = this.$refs.workForm as Array<HTMLButtonElement>;
      if (
          Number.parseInt(fromWork[id].getAttribute("data-status") || " ") == 0
      ) {
        fromWork[id].style.backgroundColor = "black";
        fromWork[id].style.color = "white";
        fromWork[id].style.transition = "all 0.3s ";
      }
    },
    formWorkLeaveHoverState(id: number) {
      const fromWork = this.$refs.workForm as Array<HTMLButtonElement>;
      if (
          Number.parseInt(fromWork[id].getAttribute("data-status") || " ") == 0
      ) {
        fromWork[id].style.backgroundColor = "white";
        fromWork[id].style.color = "black";
        fromWork[id].style.transition = "all 0.3s ";
      }
    },
    budgetStore: function (id: number): void {
      const budgetArray = this.$refs.budgetArray as Array<HTMLButtonElement>;
      budgetArray[id].style.backgroundColor = "black";
      budgetArray[id].style.color = "white";
      this.budgetItem.push(this.budget[id].name);
      localStorage.setItem("budget", JSON.stringify(this.budgetItem));
    },
    budgetUnStore: function (id: number): void {
      const budgetArray = this.$refs.budgetArray as Array<HTMLButtonElement>;
      budgetArray[id].style.backgroundColor = "white";
      budgetArray[id].style.color = "black";
      const storedBudget = localStorage.getItem("budget");

      if (storedBudget) {
        let budg = JSON.parse(storedBudget);
        const budgName = this.budget[id].name;

        const index = budg.indexOf(budgName);
        if (index !== -1) {
          budg.splice(index, 1);
          localStorage.setItem("budget", JSON.stringify(budg));
        }
      }
    },
    budgetToggle: function (id: number): void {
      const budgetArray = this.$refs.budgetArray as Array<HTMLButtonElement>;

      if (
          Number.parseInt(budgetArray[id].getAttribute("data-status") || " ") == 1
      ) {
        this.budgetUnStore(id);
        budgetArray[id].setAttribute("data-status", "0");
      } else {
        this.budgetStore(id);
        budgetArray[id].setAttribute("data-status", "1");
      }
    },
    budgetHoverProperty: function (id: number): void {
      const budgetArray = this.$refs.budgetArray as Array<HTMLButtonElement>;
      if (
          Number.parseInt(budgetArray[id].getAttribute("data-status") || " ") == 0
      ) {
        budgetArray[id].style.backgroundColor = "black";
        budgetArray[id].style.color = "white";
        budgetArray[id].style.transition = "all 0.3s ";
      }
    },
    budgetLeaveHoverState: function (id: number): void {
      const budgetArray = this.$refs.budgetArray as Array<HTMLButtonElement>;
      if (
          Number.parseInt(budgetArray[id].getAttribute("data-status") || " ") == 0
      ) {
        budgetArray[id].style.backgroundColor = "white";
        budgetArray[id].style.color = "black";
        budgetArray[id].style.transition = "all 0.3s ";
      }
    },
    infoStore: function (id: number): void {
      const infoArray = this.$refs.infoArray as Array<HTMLButtonElement>;
      infoArray[id].style.backgroundColor = "black";
      infoArray[id].style.color = "white";
      this.infoItem.push(this.info[id].name);
      localStorage.setItem("info", JSON.stringify(this.infoItem));
    },
    infoUnStroe: function (id: number): void {
      const infoArray = this.$refs.infoArray as Array<HTMLButtonElement>;
      infoArray[id].style.backgroundColor = "white";
      infoArray[id].style.color = "black";
      const storedInfo = localStorage.getItem("info");

      if (storedInfo) {
        let inf = JSON.parse(storedInfo);
        const infName = this.info[id].name;

        const index = inf.indexOf(infName);
        if (index !== -1) {
          inf.splice(index, 1);
          localStorage.setItem("info", JSON.stringify(inf));
        }
      }
    },
    infoToggle: function (id: number): void {
      const infoArray = this.$refs.infoArray as Array<HTMLButtonElement>;

      if (
          Number.parseInt(infoArray[id].getAttribute("data-status") || " ") == 1
      ) {
        this.infoUnStroe(id);
        infoArray[id].setAttribute("data-status", "0");
      } else {
        this.infoStore(id);
        infoArray[id].setAttribute("data-status", "1");
      }
    },
    infoHoverProperty: function (id: number): void {
      const infoArray = this.$refs.infoArray as Array<HTMLButtonElement>;
      if (
          Number.parseInt(infoArray[id].getAttribute("data-status") || " ") == 0
      ) {
        infoArray[id].style.backgroundColor = "black";
        infoArray[id].style.color = "white";
        infoArray[id].style.transition = "all 0.3s ";
      }
    },
    infoLeaveHoverState: function (id: number): void {
      const infoArray = this.$refs.infoArray as Array<HTMLButtonElement>;
      if (
          Number.parseInt(infoArray[id].getAttribute("data-status") || " ") == 0
      ) {
        infoArray[id].style.backgroundColor = "white";
        infoArray[id].style.color = "black";
        infoArray[id].style.transition = "all 0.3s ";
      }
    },
    sendData: async function () {
      const dataArray = [];
      const storedCategory = localStorage.getItem("Category");
      if (storedCategory) {
        let Category = JSON.parse(storedCategory);
        dataArray.push(Category);
      }
      const workFormat = localStorage.getItem("FormatOFWork");
      if (workFormat) {
        let format = JSON.parse(workFormat);
        dataArray.push(format);
      }
      const budgets = localStorage.getItem("budget");
      if (budgets) {
        let budget = JSON.parse(budgets);
        dataArray.push(budget);
      }
      const storedInfo = localStorage.getItem("info");
      if (storedInfo) {
        let info = JSON.parse(storedInfo);
        dataArray.push(info);
      }
      const projectDescription = this.$refs.projectDescription as HTMLTextAreaElement;
      if (projectDescription) {
        dataArray.push(projectDescription.value);
      }

      // const briefForm = this.$refs.briefForm as HTMLFormElement;

      const greets = this.$refs.nameGreet as HTMLLabelElement;
      const name = this.$refs.name as HTMLInputElement;
      if (name) {
        dataArray.push(greets.textContent + " " + name.value);
      }
      const companyRepo = this.$refs.companyRepo as HTMLLabelElement;
      const company = this.$refs.company as HTMLInputElement;
      if (company) {
        dataArray.push(companyRepo.textContent + " " + company.value);
      }
      const myNumber = this.$refs.myNumber as HTMLLabelElement;
      const number = this.$refs.number as HTMLInputElement;
      if (number) {
        dataArray.push(myNumber.textContent + " " + number.value);
      }
      const myEmail = this.$refs.myEmail as HTMLLabelElement;
      const email = this.$refs.email as HTMLInputElement;
      if (email) {
        dataArray.push(myEmail + " " + email.value);
      }
      console.log(dataArray);
      const arr = {
        service_id: "service_dm86uh2",
        template_id: "template_5atatxw",
        user_id: "y9yhsp0A0W9VwUYgv",
        template_params: {
          from_name: "ka11den",
          from_email: "ka11denblin@gmail.com",
          to_name: "wgwr",
          messages: dataArray
        },
      }
      console.log(arr);

      try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(arr),
        });

        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    sendEmail() {
      const briefFrom=this.$refs.briefForm as HTMLFormElement;
      emailjs.sendForm('service_dm86uh2', 'template_5atatxw', briefFrom, 'y9yhsp0A0W9VwUYgv')
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
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
          <textarea placeholder="Введите сообщение..." ref="projectDescription"> </textarea>
        </div>
        <form enctype="multipart/form-data" ref="briefForm" @submit.prevent="sendEmail()">
        <div class="projectDescription-attachBrief">
          <div class="attachBrief-icon">
            <img src="../assets/icons/clip-2-svgrepo-com.svg"/>
          </div>
          <input
              @change="fileChosen()"
              id="brief"
              type="file"
              ref="input"
              size="60"
              hidden
              name="file"

          />
          <label for="brief">Прикрепить бриф или другой файл </label>
          <!--          доделать условие-->
          <span ref="file"></span>
        </div>
<!--          <input type="submit" :style="{background:'white',color:'black'}">-->
        </form>
      </div>
      <div class="contactWindow-formOfWork">
        <div class="formOfWork-header">
          <h4>Формат работы:</h4>
        </div>
        <div class="formOfWork-wrapper">
          <div
              class="formOfWork-items"
              v-for="(item, key) in formOFWork"
              :key="key"
          >
            <button
                :key="key"
                :data-id="key"
                :data-status="0"
                ref="workForm"
                @click="formWorkToggle(key)"
                @mouseover="formWorkHoverProperty(key)"
                @mouseleave="formWorkLeaveHoverState(key)"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
      <div class="contactWindow-budget">
        <div class="budget-header">
          <h4>Общий бюджет проекта:</h4>
        </div>
        <div class="budget-wrapper">
          <div class="budget-items" v-for="(item, key) in budget" :key="key">
            <button
                :key="key"
                :data-id="key"
                :data-status="0"
                ref="budgetArray"
                @click="budgetToggle(key)"
                @mouseover="budgetHoverProperty(key)"
                @mouseleave="budgetLeaveHoverState(key)"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
      <div class="contactWindow-customerInfo">
        <div class="customerInfo-header">
          <h1>Давайте познакомимся</h1>
        </div>
        <div class="customerInfo-form">
          <div class="form-name">
            <label ref="nameGreet">Привет меня зовут</label>
            <input type="text" ref="name"/>
          </div>
          <div class="form-companyName">
            <label ref="companyRepo">Я представляю компанию</label>
            <input type="text" ref="company"/>
          </div>
          <div class="form-numberEmail">
            <div class="form-number">
              <label ref="myNumber">Мой телефон</label>
              <input type="text" ref="number"/>
            </div>
            <div class="form-email">
              <label ref="myEmail">Моя почта</label>
              <input ref="email" type="text"/>
            </div>
          </div>
        </div>
      </div>
      <div class="contactWindow-info">
        <div class="info-header">
          <h4>Общий бюджет проекта:</h4>
        </div>
        <div class="info-wrapper">
          <div class="info-items" v-for="(item, key) in info" :key="key">
            <button
                :key="key"
                :data-id="key"
                :data-status="0"
                ref="infoArray"
                @click="infoToggle(key)"
                @mouseover="infoHoverProperty(key)"
                @mouseleave="infoLeaveHoverState(key)"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
      <div class="contactWindow-sendButton">
        <div class="sendButton">
          <button @click="sendData()">Отправить запрос</button>
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
  & form{
    background: none;
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
      background: none;
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

.contactWindow-formOfWork {
  background: none;

  & .formOfWork-header {
    background: none;
    margin-left: 28.5rem;
    margin-top: 3rem;

    & h4 {
      background: none;
      color: black;
    }
  }

  & .formOfWork-wrapper {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 320px 320px 320px;
    gap: 2rem;
    background: none;

    & .formOfWork-items {
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

.contactWindow-budget {
  background: none;

  & .budget-header {
    background: none;
    margin-left: 28.5rem;
    margin-top: 3rem;

    & h4 {
      background: none;
      color: black;
    }
  }

  & .budget-wrapper {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 320px 320px 320px;
    gap: 2rem;
    background: none;

    & .budget-items {
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

.contactWindow-customerInfo {
  background: none;
  margin-left: 28rem;
  margin-top: 2rem;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;

  & .customerInfo-header {
    background: none;

    & h1 {
      background: none;
    }
  }

  & .customerInfo-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: none;

    & .form-name {
      background: none;

      & label {
        background: none;

        font-size: 1.2rem;
      }

      & input[type="text"] {
        background: none;
        border-bottom: 2px solid black;
        border-top: none;
        border-left: none;
        border-right: none;
        width: 35rem;
        padding-left: 0.5rem;
        font-weight: bold;
        font-size: 1.2rem;

        &:focus {
          outline: none;
        }
      }
    }

    & .form-companyName {
      background: none;

      & label {
        background: none;

        font-size: 1.2rem;
      }

      & input[type="text"] {
        background: none;
        border-bottom: 2px solid black;
        border-top: none;
        border-left: none;
        border-right: none;
        width: 35rem;
        padding-left: 0.5rem;
        font-weight: bold;
        font-size: 1.2rem;

        &:focus {
          outline: none;
        }
      }
    }

    & .form-numberEmail {
      background: none;
      display: flex;

      & .form-number {
        background: none;

        & label {
          background: none;

          font-size: 1.2rem;
        }

        & input[type="text"] {
          background: none;
          border-bottom: 2px solid black;
          border-top: none;
          border-left: none;
          border-right: none;
          width: 20rem;
          padding-left: 0.5rem;
          font-weight: bold;
          font-size: 1.2rem;

          &:focus {
            outline: none;
          }
        }
      }

      & .form-email {
        background: none;

        & label {
          background: none;

          font-size: 1.2rem;
        }

        & input[type="text"] {
          background: none;
          border-bottom: 2px solid black;
          border-top: none;
          border-left: none;
          border-right: none;
          width: 20rem;
          padding-left: 0.5rem;
          font-weight: bold;
          font-size: 1.2rem;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}

.contactWindow-info {
  background: none;

  & .info-header {
    background: none;
    margin-left: 28.5rem;
    margin-top: 3rem;

    & h4 {
      background: none;
      color: black;
    }
  }

  & .info-wrapper {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 320px 320px 320px;
    gap: 2rem;
    background: none;

    & .info-items {
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

.contactWindow-sendButton {
  background: none;
  margin-left: 28rem;
  margin-top: 3rem;

  & .sendButton {
    background: none;

    & button {
      border: none;
      background: black;
      color: white;
      font-size: 1.5rem;
      padding: 1rem;

      &:hover {
        transition: all 0.3s;
        transform: scale(110%);
      }
    }
  }
}
</style>
