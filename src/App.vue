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
    --font: 'Inter', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1, h2, h3, h4, h5, p {
  color: var(--light);
  font-size: 12px;
  font-family: var(--font);
  letter-spacing: 0.04rem;
}
h2 {
  font-weight: 400;
  
}
h4 {
  font-weight: 100;
}
p {
  font-weight: 200;
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
  }
  .footer {
    height: 5vh;
  }
}
</style>
