<template>
  <div>
    <login v_if="!login"/>
    <div v-if="products && login">
        <div class="inventory">
        <template v-for="product of products"
        :key="product.id"
        :product="product">
        <img :src="product.img" alt="xhvnti clothes"/>
        </template>
        </div>
        <div class="stats">
            <p>sales</p>
            <p>profit</p>
            <p>inventory</p>
        </div>
        <div v-if="employee" class="profile">
<p>{{ employee.name }}</p>
<p>{{ employee.surname }}</p>
<p>{{ employee.email }}</p>
<p>{{ employee.phone }}</p>
<p>{{ employee.password }}</p>
<p>{{ employee.role }}</p>
        </div>
    </div>
    <!-- <div v-else>
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
      </div> -->
   
  </div>
</template>

<script>
    import login from '@/components/login.vue';

export default {
    props: ["id"],
components: {
    login,
},
data() {
    return {
        employee: "",
        products: "",
        login: "",
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
    employee(){
      return this.$store.state.employee;
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
}
</script>

<style lang="scss">

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
.inventory {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 60%;
  img {
    width: 12rem;
    height: 20rem;
    object-fit: cover;
  }
}

</style>