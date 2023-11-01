<script lang="ts">
 export default {
 }
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
        <button><img src="../assets/icons/burgermenu.svg"></button>
      </div>
      <div class="contact-item">
        <button>Связаться</button>
      </div>
    </div>
    </div>
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
   margin-top: 1rem;
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

  }
}

 .logo-item{
   font-size: 1.22rem;
 }
 
</style>