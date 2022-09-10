<template>
  <div v-if="employee">
    <employeeLogin v-if="!employee"/>
    <div class="add-product">
      <form @submit.prevent="addProduct" class="add-product-form">
        <div>
          <h2>Add Product</h2>
              <span>
              <svg @click="closeAddProductModal()" width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_101_3)">
              <path d="M30 17H19V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5C17.7348 5 17.4804 5.10536 17.2929 5.29289C17.1054 5.48043 17 5.73478 17 6V17H6C5.73478 17 5.48043 17.1054 5.29289 17.2929C5.10536 17.4804 5 17.7348 5 18C4.99506 18.13 5.01805 18.2595 5.06739 18.3798C5.11674 18.5001 5.19131 18.6085 5.28608 18.6976C5.38084 18.7867 5.4936 18.8544 5.61675 18.8962C5.7399 18.938 5.87059 18.953 6 18.94H17V30C17 30.2652 17.1054 30.5196 17.2929 30.7071C17.4804 30.8946 17.7348 31 18 31C18.2652 31 18.5196 30.8946 18.7071 30.7071C18.8946 30.5196 19 30.2652 19 30V19H30C30.2652 19 30.5196 18.8946 30.7071 18.7071C30.8946 18.5196 31 18.2652 31 18C31 17.7348 30.8946 17.4804 30.7071 17.2929C30.5196 17.1054 30.2652 17 30 17Z" fill="black" />
              </g>
              <defs>
              <clipPath id="clip0_101_3">
              <rect width="36" height="36" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </span>
        </div>
            <label>Product ID</label><input v-model="product_id" placeholder="product.product_id"/>
            <label>Title</label><input v-model="title" placeholder="title"/>
            <label>Image link</label><input v-model="img" placeholder="http://image.com"/>
            <label>Price</label><input v-model="price" placeholder="price"/>
            <label>Quantity</label><input v-model="qty" placeholder="5"/>
            <label>Colour</label><input v-model="colour" placeholder="yellow"/>
            <label>Collection</label><input v-model="collection" placeholder="spring"/>
            <textarea v-model="description" placeholder="description" />
            <button type="submit" value="addProduct">Add</button>
      </form>
    </div>
    <div class="edit-product">
      <form @submit.prevent="editProduct" class="edit-product-form">
        <div>
          <h2>Edit Product</h2>
              <span>
              <svg @click="closeEditProductModal()" width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
            <label>Product ID</label><input v-model="product_id" placeholder="0"/>
            <label>Title</label><input v-model="title" placeholder="title"/>
            <label>Image link</label><input v-model="img" placeholder="http://image.com"/>
            <label>Price</label><input v-model="price" placeholder="price"/>
            <label>Quantity</label><input v-model="qty" placeholder="5"/>
            <label>Colour</label><input v-model="colour" placeholder="yellow"/>
            <label>Collection</label><input v-model="collection" placeholder="spring"/>
            <textarea v-model="description" placeholder="description" />
            <button type="submit" value="addProduct">Edit</button>
            </form>
    </div>
    <div class="delete-product">
      <form @submit.prevent="deleteProduct" class="delete-product-form">
        <div>
          <h2>Delete Product</h2>
              <span>
              <svg @click="closeDeleteProductModal()" width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <p>If you would like to permanently delete product, please enter product id and press delete</p>
        <label>Product ID</label><input v-model="product_id" placeholder="0"/>
        <button type="submit" value="deleteProduct">Delete</button>
      </form>
    </div>
    <!-- <div class="delete-employee">
      <form @submit.prevent="deleteEmployee" class="delete-employee-form">
        <div>
          <h2>Delete Employee</h2>
              <span>
              <svg @click="closeAddProductModal()" width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <p>If you would like to permanently delete product, please enter product id and press delete</p>
        <label>Product ID</label><input v-model="product_id" placeholder="0"/>
        <button type="submit" value="deleteProduct">Delete</button>
      </form>
    </div> -->
    <div v-if="products && employee" class="admin">
        <div class="inventory">
          <div class="title-box">
            <h2>Inventory</h2>
            <span>
              <svg @click="showAddProductModal()" width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        
          <template v-for="product of products"
          :key="product.id"
          :product="product">
          <div class="product-box">
          <img :src="product.img" alt="xhvnti clothes"/>
          <div>
            <button @click="showEditProductModal">edit</button>
            <button @click="showDeleteProductModal">delete</button>
          </div>
        </div>
          </template>
        
        </div>
    <div class="dashboard">

      <h2>Dashboard</h2>
      <div class="dashboard-elements">
        <div class="dashboard-elements-sales">
        <p>sales</p>
        <h1>R54 000.00</h1>
      </div>  
      <div class="dashboard-elements-profit">
        <p>profit</p>
        <h1>R28 000.00</h1>
      </div>
       <div class="dashboard-elements-inventory">
        <p>inventory</p>
        <h1>16 items</h1>
       </div> 
      </div>
        </div>
        <div class="profile">
          <div v-if="employee" class="profile-info">
            <form @submit.prevent="updateEmployee">
              <h2>Profile</h2>
              <input v-model="employee_id" :placeholder="employee.employee_id"/>
            <label>Name</label><input v-model="name" :placeholder="employee.name"/>
            <label>Surname</label><input v-model="surname" :placeholder="employee.surname"/>
            <label>Email</label><input v-model="email" :placeholder="employee.email"/>
            <label>Phone</label><input v-model="phone" :placeholder="employee.phone"/>
            <label>Password</label><input v-model="password" :placeholder="employee.password"/>
            <label>Role</label><input v-model="role" :placeholder="employee.role"/>
            <div>
              <button type="submit" value="updateEmployee">update</button>
              <button type="button" @click="deleteEmployee()">delete</button>
            </div>
            </form>
            </div>
          <button @click="logout()">logout</button>
        </div>
    </div>
  </div>
</template>

<script>
    import employeeLogin from '@/components/employeeLogin.vue';

    import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
    props: ["id"],
components: {
    employeeLogin,
},
data() {
    return {
        employee: "",
        employee_id: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        role: '',
        products: "",
        product: '',
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

    // Charts 
    document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('myChart');
    const labels = ['suits', 'pants', 'jackets'];
    const data = {
    labels: labels,
    datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};
    const myChart = new Chart(ctx, {
      type: 'line',
      data: data,
    });
    // myChart;
  
  })},
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
    logout() {
        this.$store.commit("logout");
        this.$router.push("/");
        },
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
    editProduct(){
        let product = {
        product_id: this.product_id,
        title: this.title,
        img: this.img,
        price: this.price,
        colour: this.colour,
        description: this.description,
        qty: this.qty,
        collection: this.collection,
        
      };
      this.$store.dispatch("editProduct", product)
    }, 
    deleteProduct(){
        let product = {
            product_id: this.product_id,
               };
      this.$store.dispatch("deleteProduct", product)
    }, 
    deleteEmployee(){
        let employee = {
            employee_id: this.employee_id,
               };
      this.$store.dispatch("deleteEmployee", employee)
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
      showAddProductModal() {
          let addProductForm = document.querySelector(".add-product");
          addProductForm.style.display = "flex";
          },
      closeAddProductModal() {
          let addProductForm = document.querySelector(".add-product");
          addProductForm.style.display = "none";
          },
      showAddProductModal() {
          let addProductForm = document.querySelector(".add-product");
          addProductForm.style.display = "flex";
          },
      closeAddProductModal() {
          let addProductForm = document.querySelector(".add-product");
          addProductForm.style.display = "none";
          },
      showEditProductModal() {
          let editProductForm = document.querySelector(".edit-product");
          editProductForm.style.display = "flex";
          },
      closeEditProductModal() {
          let editProductForm = document.querySelector(".edit-product");
          editProductForm.style.display = "none";
          },
      showDeleteProductModal() {
          let deleteProductForm = document.querySelector(".delete-product");
          deleteProductForm.style.display = "flex";
          },
      closeDeleteProductModal() {
          let deleteProductForm = document.querySelector(".delete-product");
          deleteProductForm.style.display = "none";
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
.add-product, .edit-product, .delete-product {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  width: 22rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;

  &-form {
    color: var(--dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    background-color: var(--light);
    height: fit-content;
    padding: 1rem;
    border-radius: 10px;
    
    div:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      svg {
        transform: rotate(-45deg);
      }
    }
    h2, label, p {
      color: var(--dark);
      padding-top: 0.2rem;
    }
    input {
    width: 100%;
    border: none;
    border-bottom: 0.05rem solid var(--dark);
    background-color: transparent;
    padding: 0.4rem 1rem;
    &:focus {
      border: none;
      outline: none;
      border-bottom: 0.05rem solid var(--dark);
      background: transparent;
    }
  }
  textarea {
            border-right: var(--line);
            height: 4rem;
            background-color: transparent;
            margin-top: 0.2rem;
            &::placeholder {
                font-size: 12px;
                font-family: var(--font);
                letter-spacing: 0.04rem;
                padding: 0.5rem;
            }
        }
  button {
    background-color: var(--dark);
    color: var(--light);
    font-family: var(--font);
    margin-top: 0.5rem;
    border: none;
    border-radius: 10px;
    padding: 0.4rem 0;
    
  }
  }
}
.admin {
  display: flex;
  height: 100%;
  padding-right: 2rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 1rem;
  }
.inventory {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin: 2rem 0rem 2rem 4rem;
  background-color: var(--shadow);
  overflow: scroll;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
  .title-box {
    display: flex;
    justify-content: space-between;
    svg {
      fill: var(--light);
      fill: var(--light);
      path {
        fill: var(--light);
        fill: var(--light);
      }
    }
  }
  .product-box {
    position:relative;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      gap: 1rem;
    }
    button {
      background-color: var(--light);
      color: var(--dark);
      font-family: var(--font);
      border: none;
      border-radius: 5px;
      padding: 0.2rem 0.8rem;
    }
  }
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

    @media screen and (max-width: 500px) {
      display: flex;
      overflow-x:scroll;
    }
    &-sales, &-profit, &-inventory {
    min-width: 20rem;
    max-height: 60rem;
    border-radius: 10px;
    padding: 1rem;
    -webkit-box-shadow: inset 0px 0px 10px 1px rgba(255,255,243,0.63); 
    box-shadow: inset 0px 0px 10px 1px rgba(255,255,243,0.63);
    position: relative;
    @media screen and (max-width: 500px) {
      min-width: 15rem;
    }
    h1 {
    font-size: 32px;
    background: -webkit-linear-gradient(var(--light), var(--accent),var(--highlight));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
    }
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
  justify-content: center;
  gap: 1rem;
&-info {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  height: fit-content;
  padding: 1rem;
  border-radius: 10px;
  form {
    display: flex;
  flex-direction: column;
    gap: 0.65rem;
    background-color: var(--dark);
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
   div {
    display: flex;
    justify-content: space-around;
    button {
      background-color: var(--light);
      color: var(--dark);
      font-family: var(--font);
      margin-top: 0.5rem;
      border: none;
      border-radius: 10px;
      padding: 0.4rem 1rem;
      
    }
   } 
}
}
button {
    background-color: var(--dark);
    color: var(--light);
    font-family: var(--font);
    margin-top: 0.5rem;
    border: none;
    border-radius: 10px;
    padding: 0.4rem 0;
    
  }
}
}

</style>