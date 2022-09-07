<template>
  <div v-if="employee">
    <employeeLogin v-if="!employee"/>
    <div>
      <form @submit.prevent="addProduct" class="add-product-form">
              <h2>Add Product</h2>
              <label>Product ID</label><input v-model="product_id" placeholder="0"/>
            <label>Title</label><input v-model="title" placeholder="title"/>
            <label>Image link</label><input v-model="img" placeholder="http://image.com"/>
            <label>Price</label><input v-model="price" placeholder="price"/>
            <label>Quantity</label><input v-model="qty" placeholder="5"/>
            <label>Colour</label><input v-model="colour" placeholder="yellow"/>
            <textarea v-model="description" placeholder="description" />
            <button type="submit" value="addProduct">Add</button>
            </form>
    </div>
    <div v-if="products && employee" class="admin">
        <div class="inventory">
          <h2>Inventory</h2>
          <span @click="addProductModal">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_101_3)">
<path d="M30 17H19V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5C17.7348 5 17.4804 5.10536 17.2929 5.29289C17.1054 5.48043 17 5.73478 17 6V17H6C5.73478 17 5.48043 17.1054 5.29289 17.2929C5.10536 17.4804 5 17.7348 5 18C4.99506 18.13 5.01805 18.2595 5.06739 18.3798C5.11674 18.5001 5.19131 18.6085 5.28608 18.6976C5.38084 18.7867 5.4936 18.8544 5.61675 18.8962C5.7399 18.938 5.87059 18.953 6 18.94H17V30C17 30.2652 17.1054 30.5196 17.2929 30.7071C17.4804 30.8946 17.7348 31 18 31C18.2652 31 18.5196 30.8946 18.7071 30.7071C18.8946 30.5196 19 30.2652 19 30V19H30C30.2652 19 30.5196 18.8946 30.7071 18.7071C30.8946 18.5196 31 18.2652 31 18C31 17.7348 30.8946 17.4804 30.7071 17.2929C30.5196 17.1054 30.2652 17 30 17Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_101_3">
<rect width="36" height="36" fill="white"/>
</clipPath>
</defs>
</svg>
          </span>
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
            <form @submit.prevent="updateEmployee" class="profile-info">
              <h2>Profile</h2>
              <input v-model="employee_id" :placeholder="employee.employee_id"/>
            <label>Name</label><input v-model="name" :placeholder="employee.name"/>
            <label>Surname</label><input v-model="surname" :placeholder="employee.surname"/>
            <label>Email</label><input v-model="email" :placeholder="employee.email"/>
            <label>Phone</label><input v-model="phone" :placeholder="employee.phone"/>
            <label>Password</label><input v-model="password" :placeholder="employee.password"/>
            <label>Role</label><input v-model="role" :placeholder="employee.role"/>
            <button type="submit" value="updateEmployee">update profile</button>
            </form>
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
    import employeeLogin from '@/components/employeeLogin.vue';

export default {
    props: ["id",],
components: {
    employeeLogin,
},
data() {
    return {
        employee: "",
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        role: '',
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
    this.$store.dispatch("updateEmployee");
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
    },
    updateEmployee() {
      let employee = {
        employee_id: this.employee_id,
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        phone: this.phone,
        role: this.role
      };
      this.$store.dispatch("updateEmployee", employee);
      },
      addProductModal() {
          let addProductForm = document.querySelector(".add-product-form");
          addProductForm.style.display = "flex";
          },
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