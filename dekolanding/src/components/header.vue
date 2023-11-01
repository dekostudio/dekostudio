<script lang="ts">
 export default defineComponent( {
   data(){
     return{
        active:false,
        navItems:[
          {
           name:"UX/UI",
           link:"#",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "
                +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru"
          },
          {
            name:"Разработка платформы",
            link:"#",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "
                +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru"
          },
          {
            name:"Разработка сайтов",
            link:"#",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "
                +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru"
          },
          {
            name:"Разработка чат-ботов",
            link:"#",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "
                +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru"
          }
        ],
       data:{},
       hoveredData:false,
     }
   },
   methods:{
     CheckId(id:number):void{
       console.log(id);
       this.data = this.navItems[id];
       console.log(this.data);
       this.hoveredData=true;
     },
   },

 })
</script>

<template>
  <header>
    <div class="navbar">
    <div class="nav-items">
      <div class="logo-item">
        <h1>
          DEKO
        </h1>
      </div>
      <div class="menu-item">
        <button @click="active=true"><img src="../assets/icons/burgermenu.svg"></button>
      </div>
      <div class="contact-item">
        <button>Связаться</button>
      </div>
    </div>
    </div>
    <transition-group tag="section" name="navMenuAppear" >
    <div class="navMenu" v-if="active">
      <div class="navMenu-components">
        <div class="navMenu-item" v-for="(elem,key) in navItems" :key="key" >
          <a :href="key" @mouseover="CheckId(key)" @mouseleave="hoveredData=false">
            {{elem.name}}
          </a>
        </div>
        <div v-if="hoveredData" v-show="data">
          <p >{{data.description}}</p>
        </div>
      </div>
    </div>
    </transition-group>
  </header>
</template>
<style scoped>
 *{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   color: #FFFFFF;
   font-family: Roboto;
 }
 .navbar{
   margin-top: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;
 }

 .nav-items{
   display: flex;
   gap: 40rem;
 }


 .menu-item{
   display: flex;
   padding-top: 0.2rem;
   margin-left: 1rem;
   &.menu-item button{
     border: none;
     background: #FFFFFF;
     border-radius: 50%;
     width: 3rem;
     height: 3rem;
     padding-top: 0.3rem;
     &:hover{
       transition: all 300ms ease-out;
       transform: scale(110%);
     }
   }
   &.menu-item button img{
     background: none;
   }
 }

.contact-item{
  display: flex;
  padding-top: 0.2rem;
  &.contact-item button{
    border:1px solid white;
    width: 12rem;
    font-size: 1.1rem;
    height: 2.7rem;
    &:hover{
      transition: all 300ms ease-out;
      transform: scale(110%);
    }
  }
}

 .logo-item {
   font-size: 1.22rem;
 }

.navMenu{
  position: absolute;
  background: #FFFFFF;
  top: 0;
  left: 0;
}
.navMenu-components{
  background: none;
  display: flex;
  flex-direction: column;
  gap:5rem;
  width: 100vw;
  height: auto;
  padding-top:4rem;
  padding-bottom: 4rem;
  padding-left: 3rem;
}
.navMenu-item{
  background: none;
  &.navMenu-item a{
    background: none;
    color: black;
    text-decoration: none;
    font-size: 1.7rem;
    &:hover{
      color: #7a7a7a;
    }
  }
}
.navMenuAppear-enter-active{
  animation:EnterActive 0.3s ease-in-out ;
}
@keyframes EnterActive {
   from{
   opacity: 0;
   transform:translateY(-10%);
   }
  to{
  opacity: 1;
    transform: translateY(0);
  }
}

</style>