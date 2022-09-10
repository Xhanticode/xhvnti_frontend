<template>
  <menubar />
  <socialbar />
  <router-view class="body"/>
  <footerbar />
</template>
<script>
import menubar from '@/components/menu.vue';
import footerbar from './components/footer.vue';
import socialbar from '@/components/social.vue';

export default {
  name: "App",
  components: {
    menubar,
    footerbar,
    socialbar
}
}
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

:root {
    --dark: #1D1E18;
    --light: #FFFFF3;
    --accent: #8C7A6B;
    --highlight: #D2691E;
    --shadow: #1D1E18;
    --font: 'Inter', sans-serif;
    --line: 0.06rem solid var(--dark);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1, h2, h3, h4, h5, p, input, label {
  color: var(--light);
  font-size: 12px;
  font-family: var(--font);
  letter-spacing: 0.04rem;
}
h2 {
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  
}
h3 {
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

}
p {
  font-weight: 200;
  letter-spacing: 0.05rem;
}
#app {
  background-color: var(--light);
  height: 100vh;
  overflow: hidden;
  font-family: var(--font);
  .menu-bar {
    height: 15vh;
  }
  .body {
    height: 80vh;
    overflow: hidden;
    overflow-x: scroll;
    @media screen and (max-width: 500px) {
      overflow-y: scroll;
    }
  }
  .footer {
    height: 5vh;
    @media screen and (max-width: 500px) {
      bottom: 0;
      z-index: 2;
      position: absolute;
      }
  }
}
</style>
