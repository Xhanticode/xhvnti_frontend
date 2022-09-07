<template>
  <div class="landing" id="landing">
  <img id="one" src="https://i.postimg.cc/t4dCMgfp/E5i51n-ZXEAEz-Yut.jpg" alt="xhvnti">
  <img id="two" src="https://i.postimg.cc/5yw2WN0B/E6-P6-WZFWEAE-8-ZW.jpg" alt="xhvnti">
  <img id="three" src="https://i.postimg.cc/C5Gyqx6P/IMG-5573.jpg" alt="xhvnti">
  <!-- <img id="four" src="https://i.postimg.cc/3w5gLrLC/IMG-5572.jpg" alt="xhvnti"> -->
  <!-- <div id="five">
    <h1>DECONSTRUCTION</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aut exercitationem autem ab iusto quibusdam veritatis sapiente fugit consequuntur ducimus fugiat recusandae explicabo, est, laboriosam fuga sed incidunt, illo porro?</p>
  </div> -->
  <div v-if="!employee && !user" id="overlay">
    <div id="five"></div>
    <div id="six"></div>
  </div>
  
  </div>
</template>

<script>
  import gsap from "gsap";
 
 export default {
  data() {
    return {
      employee: '',
      user: ''
    }
  },
  mounted() {
this.landingAnimation()
  },
  computed: {
    employee(){
      return this.$store.state.employee;
    },
    user(){
      return this.$store.state.user;
    },
  },
  methods: {
    landingAnimation: function() {
      var tl = gsap.timeline();
      tl.fromTo("#logo", {y: 330, x: 0, scale: 0, opacity: 0}, {y: 330, x: 0, scale:1.5, duration: 2, ease: "slow(0.7, 0.7, false)", opacity: 1});
      tl.fromTo("#logo", {y: 330, x: 0, scale: 1.5}, {y: 0, x: 0, scale: 1, duration: 1, ease: "power3.out"});
      tl.fromTo("#one", {opacity: 0, x: -10}, {opacity: 1, xPercent: 250, duration: 1.5, ease: "expo.out"});
      tl.fromTo("#two", {opacity: 0, x: -10}, {opacity: 1, xPercent: 15, duration: 1, ease: "expo.out"}, "<0.8");
      tl.fromTo("#three", {opacity: 0, x: -300}, {opacity: 1, xPercent: -140, duration: 1, ease: "expo.out"}, "<0.8");
      tl.fromTo("#five", {scaleY: 0, opacity: 0}, {scaleY: 1.01, opacity: 1, duration: 1});
      tl.fromTo("#six", {scaleY: 0, opacity: 0}, {scaleY: 1.01, opacity: 1, duration: 1}, "<");
      // tl.fromTo("#overlay", {opacity: 0}, {opacity: 1});
      // tl.fromTo("#four", {opacity: 0, x: -300}, {opacity: 1, xPercent: 180, duration: 2, ease: "expo.out"}, "<0.8");
      // tl.fromTo("#five", {opacity: 0, x: -300}, {opacity: 1, xPercent: 80, yPercent: 20, duration: 2, ease: "expo.out"}, "<0.8");
  }
}
 }
</script>

<style lang="scss" scoped>
  .social-bar {
    a {
      svg {
        .eye {
          fill: var(--light);
          stroke: var(--light);
        }
        .eye-box {
          fill: none;
          stroke: var(--light);
        }
        path {
          fill: var(--light);
        }
      }
    }
  }
.landing {
  display: flex;
  background-color: var(--dark);
  overflow: scroll;
  padding-right: 2rem;
  position: relative;
  &::-webkit-scrollbar {
  display: none;
}
#overlay {
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 100%;
	pointer-events: none;
	grid-template-rows: repeat(2,1fr);
  // z-index: 10;
#five, #six {
  
  // h1 {
  //   font-size: large;
  //   font-weight: 300;
  // }
  // p {
  //   font-size: large;
  //   text-align: justify;
  //   width: 20rem;
  // }
  background-color: var(--dark);
	// will-change: transform;
  width: 100%;
  min-height: 100%;
  
}
#five {
  transform-origin: 0% 0%;
}
#six {
  transform-origin: 0% 100%;
}
}
}
</style>