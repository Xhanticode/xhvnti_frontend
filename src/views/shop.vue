<template> 
<div>
  <div v-if="products" class="products-gallery">
<Items 
v-for="product of products"
:key="product.id"
:product="product"
/>
<p>scroll <span><svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8_92)">
<path d="M14.1364 9.45448L7.31825 0.363867C7.01692 -0.037828 6.44723 -0.119161 6.04553 0.182049C5.64384 0.48332 5.56245 1.05314 5.86372 1.45477L12.2728 9.99999L5.86372 18.5456C5.56245 18.9472 5.6439 19.5171 6.04553 19.8183C6.20905 19.941 6.40044 20.0002 6.59026 20.0002C6.86668 20.0002 7.13965 19.8746 7.31825 19.6365L14.1364 10.5454C14.3788 10.2222 14.3788 9.77769 14.1364 9.45448Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_8_92">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
</span></p>
</div>
<div v-else>
        <div class="loader loader--style2" title="1">
          <svg
            version="1.1"
            id="loader-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="40px"
            height="40px"
            viewBox="0 0 50 50"
            style="enable-background: new 0 0 50 50"
            xml:space="preserve"
          >
            <path
              fill="#000"
              d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>
</div>

</template>

<script>

import Items from '@/components/items.vue';
export default {
  props: ["product_id"],
  components: {
    Items
},
  data() {
    return {
        search:"",
        category:'',
        title: "",
        img: "",
        price: "",
        color: "",
        description: "",
        qty: "",
        collection: "",
    };
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    filteredProducts() {
      console.log(this.$store.state.products);
      return this.$store.state.products?.filter((product)=>{
        let isMatch = true;
        if (!product.title?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.category !== "all" && product.category !== this.category) isMatch = false;
        return isMatch;
      })
    },
  products(){
      return this.$store.state.products;
    },
    product(){
      return this.$store.state.product;
    },
  },
  methods:{
    addProduct(){
      let product = {
      title: this.title,
        img: this.img,
        price: this.price,
        color: this.color,
        description: this.description,
        qty: this.qty,
        collection: this.collection,
        
      };
      this.$store.dispatch("addProduct", product)
    }, 
    sortProducts(){
      this.$store.commit("sortProductsByTitle");
    }
  },
};
</script>  

<style lang="scss">
.products-gallery {
  display: flex;
  // gap: 2rem;
  overflow-x: scroll;
  position: relative;
&::-webkit-scrollbar {
  display: none;
}
  p {
    position: fixed;
    top: 43rem;
    right: 2rem;
    color: var(--dark);
  }
}
.loader {
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  top: 50%;
  left: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  svg path,
  svg rect {
    fill: var(--button-bg);
  }
}
</style>