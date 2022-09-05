<template>
  <div>
    <login v-if="!employee"/>
    <div v-if="products && employee" class="admin">
        <div class="inventory">
          <h2>Inventory</h2>
        <template v-for="product of products"
        :key="product.id"
        :product="product">
        <img :src="product.img" alt="xhvnti clothes"/>
        </template>
        </div>
    <div class="dashboard">
      <h2>Dashboard</h2>
      <div class="dashboard-elements">
        <div class="dashboard-elements-sales">
        <p>sales</p>
      </div>  
      <div class="dashboard-elements-profit">
        <p>profit</p>
      </div>
       <div class="dashboard-elements-inventory">
        <p>inventory</p>
       </div> 
      </div>
        </div>
        <div class="profile">
          <div v-if="employee" class="profile-info">
            <h2>Profile</h2>
            <label>Name</label><input :placeholder="employee.name"/>
            <label>Surname</label><input :placeholder="employee.surname"/>
            <label>Email</label><input :placeholder="employee.email"/>
            <label>Phone</label><input :placeholder="employee.phone"/>
            <label>Password</label><input :placeholder="employee.password"/>
            <label>Role</label><input :placeholder="employee.role"/>
         </div>
          <button class="profile-button">logout</button>
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
.admin {
  display: flex;
  height: 100%;
.inventory {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 1rem;
  margin: 2rem 0rem 2rem 4rem;
  background-color: var(--shadow);
  overflow: scroll;
  border-radius: 10px;
  img {
    width: 12rem;
    height: 20rem;
    object-fit: cover;
    margin-inline: auto;
  }
}
.dashboard {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 2rem;
  background-color: var(--shadow);
  overflow: scroll;
  border-radius: 10px;
  &-elements {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    &-sales, &-profit, &-inventory {
    min-width: 20rem;
    max-height: 60rem;
    border-radius: 10px;
    padding: 1rem;
    -webkit-box-shadow: inset 0px 0px 10px 1px rgba(255,255,243,0.63); 
    box-shadow: inset 0px 0px 10px 1px rgba(255,255,243,0.63);
    }
&-sales {
  grid-row: 1 / span 4;
  min-height: 100%;
}
&-profit, &-inventory {
  min-height: 50%;
}
&-profit {
  grid-row: 1/ span 2;
}
&-inventory {
  grid-row: 3/ span 2;
}
  }
}
.profile {
  display: flex;
  flex-direction: column;
  gap: 1rem;
&-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--dark);
  height: fit-content;
  padding: 1rem;
  margin: 2rem 2rem 0 0;
  border-radius: 10px;
input {
    width: 12rem;
    border: none;
    border-bottom: 0.05rem solid var(--light);
    background-color: transparent;
    padding: 0.4rem 1rem;
    &:focus {
      border: none;
      outline: none;
      border-bottom: 0.05rem solid var(--light);
      background: transparent;
    }
  }
}
&-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0;
  border: none;
  margin-right: 2rem;
  background-color: var(--dark);
  border-radius: 10px;
  color: var(--light)
}
}
}

</style>