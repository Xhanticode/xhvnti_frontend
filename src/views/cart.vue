<template>
  <div class="cart">
  <div class="graphic-section">
    <div class="profile">
          <div v-if="user" class="profile-info">
            <form @submit.prevent="updateUser">
              <h2>Profile</h2>
              <input v-model="user_id" :placeholder="user.user_id"/>
            <label>Name</label><input v-model="name" :placeholder="user.name"/>
            <label>Surname</label><input v-model="surname" :placeholder="user.surname"/>
            <label>Email</label><input v-model="email" :placeholder="user.email"/>
            <label>Phone</label><input v-model="phone" :placeholder="user.phone"/>
            <label>Password</label><input v-model="password" :placeholder="user.password"/>
            <label>Role</label><input v-model="role" :placeholder="user.role"/>
            <div>
              <button type="submit" value="updateUser">update</button>
              <button type="button" @click="deleteUser()">delete</button>
            </div>
            </form>
            </div>
        </div>
    <div class="cart-section">
      <h2>Cart Summary</h2>
      <div v-if="cart" class="buttons">
            <div
              v-for="product in cart"
              :key="product"
              :product="product"
            >
            <p>{{ product.name }}</p>
            <p>R{{ product.price }}.00</p>
            </div>
              <div>
                <button @click="this.$store.dispatch('deletecartItem', product.cartid)">
                  <svg width="20" height="20" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M52.5 6H38.456C38.346 4.75 37.961 2.642 36.643 1.289C35.809 0.434 34.751 0 33.499 0H23.5C22.248 0 21.19 0.434 20.356 1.289C19.038 2.642 18.653 4.75 18.543 6H6.5C5.948 6 5.5 6.447 5.5 7C5.5 7.553 5.948 8 6.5 8H52.5C53.052 8 53.5 7.553 53.5 7C53.5 6.447 53.052 6 52.5 6ZM21.792 2.681C22.24 2.223 22.799 2 23.5 2H33.499C34.2 2 34.759 2.223 35.207 2.681C36.012 3.504 36.335 4.952 36.447 6H20.553C20.665 4.952 20.988 3.504 21.792 2.681Z" fill="black"/>
                  <path d="M10.456 54.021C10.493 55.743 11.565 59 15.364 59H43.636C47.435 59 48.507 55.743 48.543 54.042L50.376 10H8.624L10.456 54.021ZM48.291 12L46.544 53.979C46.538 54.288 46.4 57 43.636 57H15.364C12.63 57 12.466 54.283 12.455 53.958L10.709 12H48.291Z" fill="black"/>
                  <path d="M17.5 54H41.5C42.052 54 42.5 53.553 42.5 53C42.5 52.447 42.052 52 41.5 52H17.5C16.948 52 16.5 52.447 16.5 53C16.5 53.553 16.948 54 17.5 54Z" fill="black"/>
                  <path d="M17.5 49H41.5C42.052 49 42.5 48.553 42.5 48C42.5 47.447 42.052 47 41.5 47H17.5C16.948 47 16.5 47.447 16.5 48C16.5 48.553 16.948 49 17.5 49Z" fill="black"/>
                  <path d="M17.5 44H41.5C42.052 44 42.5 43.553 42.5 43C42.5 42.447 42.052 42 41.5 42H17.5C16.948 42 16.5 42.447 16.5 43C16.5 43.553 16.948 44 17.5 44Z" fill="black"/>
                  </svg>
                </button>
              </div>
            
            <button @click="this.$store.dispatch('clearcart')">
              Clear
            </button>
            <p>
              <span >Total:</span>(
              <span>{{ num }} product</span> )
              <span>R{{ total }}.00</span>
            </p>
          </div>
          <div v-else>
            <h2>Cart Empty</h2>
          </div>
        </div>
        </div>
 
  </div>
</template>

<script>
  export default {
    data() {
return {
  user: '',
        user_id: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        shipping_address: '',
        cart: '',
        total: '',
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
}
    },
    computed: {
      products(){
      return this.$store.state.products;
    },
    product(){
      return this.$store.state.product;
    },
    user(){
      return this.$store.state.user;
    },
      cart() {
        return this.$store.state.cart;
      },
      total() {
        let prices = this.$store.state.cart;
        if (prices != null) {
          let sum = prices.reduce((x, cart) => {
            return x + cart.price;
          }, 0);
          return sum;
        }
      },
      num: function () {
        let Cnum = this.$store.state.cart;
        if (Cnum === null || Cnum === undefined) {
          Cnum = 0;
          return Cnum;
        } else {
          let i = Cnum.length;
          return i;
        }
      },
    },
    mounted() {
      this.$store.dispatch("getcart");
      this.$store.dispatch("updateEmployee");
    },
    methods: {
      updateUser() {
      let user = {
        user_id: this.user_id,
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        phone: this.phone,
        shipping_address: this.shipping_address
      };
      this.$store.dispatch("updateUser", user);
      },
      deleteUser(){
        let user = {
            user_id: this.user_id,
               };
      this.$store.dispatch("deleteUser", user)
    }, 
    }
  };
  </script>

<style lang="scss">
.cart {
    display: flex;
    width: 100%;
    height: 100%;

    .graphic-section {
        width: 100%;
        background-color: var(--dark);
        display: flex;
        position: relative;
        gap: 2rem;  

        .profile {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        gap: 1rem;
      &-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--dark);
        height: fit-content;
        padding: 1rem;
        border-radius: 10px;
        form {
          display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
          gap: 0.65rem;
          background-color: var(--dark);
      input {
          width: 100%;
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
          gap: 1rem;
          button {
            padding: 0.2rem;
            width: 6rem;
            align-self: center;
            background-color: transparent;
            color: var(--light);
            border: 0.05rem solid var(--light);
            border-radius: 0.2rem;
            font-family: var(--font);
            
          }
        } 
      }
      }
      }
      .cart-section {
        margin: 5rem 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 60%;
        h2 {
          padding-left: 6rem;
        }
        .buttons {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-top: 8rem;
          svg {
            fill: var(--light);
            path {
              fill: var(--light);
            }
          }
        }
        button {
          padding: 0.2rem;
          width: 6rem;
          align-self: center;
          background-color: transparent;
          color: var(--light);
          border: 0.05rem solid var(--light);
          border-radius: 0.2rem;
          font-family: var(--font);
            
          }
      }
    }
    .payment-section {
        width: 40%;
        background-color: var(--light);
    }
}
</style>