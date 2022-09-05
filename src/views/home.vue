<template>
  <div class="landing" id="landing">
  <img id="one" src="https://i.postimg.cc/t4dCMgfp/E5i51n-ZXEAEz-Yut.jpg" alt="xhvnti">
  <img id="two" src="https://i.postimg.cc/5yw2WN0B/E6-P6-WZFWEAE-8-ZW.jpg" alt="xhvnti">
  <img id="three" src="https://i.postimg.cc/C5Gyqx6P/IMG-5573.jpg" alt="xhvnti">
  <img id="four" src="https://i.postimg.cc/3w5gLrLC/IMG-5572.jpg" alt="xhvnti">
  <!-- <img id="" src="../assets/xhvnti_print_light.png" alt=""> -->
  </div>
</template>

<script>
  import gsap from "gsap";
 
 export default {
  mounted() {
this.landingAnimation()
  },
  methods: {
    landingAnimation: function() {
      var tl = gsap.timeline();
      tl.fromTo("#logo", {y: 330, x: 0, scale: 0, opacity: 0}, {y: 330, x: 0, scale:1.5, duration: 2, ease: "slow(0.7, 0.7, false)", opacity: 1});
      tl.fromTo("#logo", {y: 330, x: 0, scale: 1.5}, {y: 0, x: 0, scale: 1, duration: 1, ease: "power3.out"});
      tl.fromTo("#one", {opacity: 0, x: -10}, {opacity: 1, xPercent: 290, duration: 1.5, ease: "expo.out"});
      tl.fromTo("#two", {opacity: 0, x: -10}, {opacity: 1, xPercent: 50, duration: 1, ease: "expo.out"}, "<0.8");
      tl.fromTo("#three", {opacity: 0, x: -300}, {opacity: 1, xPercent: -100, duration: 1, ease: "expo.out"}, "<0.8");
      tl.fromTo("#four", {opacity: 0, x: -300}, {opacity: 1, xPercent: 110, duration: 2, ease: "expo.out"}, "<0.8");
      // tl.to("#landing", {scrollTo: {x: 50}});
      // tl.fromTo("#one", {scale: 1}, {duration: 1, scale: 3, ease: "expoScale(0.5, 3, power2.inOut)"});
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
  &::-webkit-scrollbar {
  display: none;
}
 iframe {
  width: 100vw;
  height: 100vh;
 }
}
</style>