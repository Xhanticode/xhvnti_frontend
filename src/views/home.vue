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
    <p id="seven">fashion</p>
    <p id="eight">class</p>
    <p id="nine">luxury</p>
    <p id="ten">edgy</p>
    <p id="eleven">haute</p>
    <p id="twelve">couture</p>
    <p id="thirteen">androgynous</p>
    <p id="fourteen">elegant</p>
    <p id="fifteen">avant</p>
    <p id="sixteen">garde</p>
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
      tl.set("#seven", {opacity: 1, top: 260, right: 514, duration: 1, ease: "power2.out", delay: 1 });
      tl.set("#eight", {opacity: 1, top: 156, right: 490, rotation: -90, duration: 0.5, ease: "power2.out"}, "<1");
      tl.set("#nine", {opacity: 1, top: 320, right: 527, rotation: 90, duration: 0.2, ease: "power2.out"}, "<0.8");
      tl.set("#ten", {opacity: 1, top: 300, right: 460, duration: 1, ease: "power2.out"}, "<0.6");
      tl.set("#eleven", {opacity: 1, top: 216, right: 594, duration: 0.8, ease: "power2.out"}, "<0.5");
      tl.set("#twelve", {opacity: 1, top: 344, right: 564, rotate: -270, duration: 0.2, ease: "power2.out"}, "<0.4");
      tl.set("#thirteen", {opacity: 1, top: 208, right: 334, duration: 0.5, ease: "power2.out"}, "<0.35");
      tl.set("#fourteen", {opacity: 1, top: 172, right: 500, rotate: -90, duration: 0.6, ease: "power2.out"}, "<0.3");
      tl.set("#fifteen", {opacity: 1, top: 282, right: 546, rotate: 180, duration: 0.2, ease: "power2.out"}, "<0.28");
      tl.set("#sixteen", {opacity: 1, top: 238, right: 600, duration: 1, ease: "power2.out"}, "<0.26");
      // tl.fromTo("#overlay", {opacity: 0}, {opacity: 1});
      // tl.fromTo("#four", {opacity: 0, x: -300}, {opacity: 1, xPercent: 180, duration: 2, ease: "expo.out"}, "<0.8");
      // tl.fromTo("#five", {opacity: 0, x: -300}, {opacity: 1, xPercent: 80, yPercent: 20, duration: 2, ease: "expo.out"}, "<0.8");
  }
}
 }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Syne&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
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
#seven, #eight, #nine, #ten, #eleven, #twelve, #thirteen, #fourteen, #fifteen, #fifteen, #sixteen {
  position: absolute;
  opacity: 0;
}
#eight {
  font-family: 'Alumni Sans Pinstripe', sans-serif;
  font-size: 28px;
}
#nine {
  font-family: 'Italiana', serif;
  font-size: 20px;
}
font-family: 'Syne', sans-serif;
font-size: 36px;
#ten {
  font-family: 'Inter', sans-serif;
  font-size: 26px;
  text-transform: uppercase;
}
#eleven {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
#twelve {
  font-family: 'Raleway', sans-serif;
  font-size: 38px;
}
#thirteen {
  font-family: 'Belleza', sans-serif;
  font-size: 26px;
  text-transform: uppercase;
}
#fourteen {
  font-family: 'Cinzel', serif;
  font-size: 32px;
}
#fifteen {
  font-family: 'Cormorant', serif;
  font-size: 18px;
}
#sixteen {
  -webkit-transform: scale(-1);
  transform: scale(-1);
  font-family: 'Playfair Display', serif;
  font-size: 48px;
}
}
}
</style>