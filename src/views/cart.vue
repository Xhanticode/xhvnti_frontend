<template>
  <div class="cart">
  <div class="graphic-section">
    <h2><span>Cart Summary</span></h2>
    <div v-if="cart">
                  <div
                    v-for="product in cart"
                    :key="product"
                    :product="product"
                    class="row"
                  >
                    <div class="col-md-6">
                      <p>
                        <span class="">{{ product.name }}</span>
                      </p>
                    </div>
                    <div class="col-md-4">
                      <p>
                        <span>R{{ product.price }}.00</span>
                      </p>
                    </div>
                    <div class="col-md-2 mx-auto">
                      <!-- <p>
                      <span>R{{ product.price }}.00</span>
                    </p> -->
                      <a
                        class="btn"
                        @click="
                          this.$store.dispatch('deletecartItem', product.cartid)
                        "
                        ><i class="fa-solid fa-trash-can"></i
                      ></a>
                    </div>
                    <hr />
                  </div>
                  <button
                    class="btn"
                    @click="this.$store.dispatch('clearcart')"
                  >
                    Clear Cart
                  </button>
                  <p class="m-1">
                    <span class="fw-bolder">Total:</span>(
                    <span>{{ num }} product</span> )
                    <span>R{{ total }}.00</span>
                  </p>
                  <button
                    class="btn my-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#checkout"
                  >
                    Checkout
                  </button>
    </div>
    <div v-else>
      <h2>Cart Empty</h2>
    </div>
  </div>
  <div class="payment-section">
      <h4>cart</h4>
      <div class="cart-items">
        <!-- <div class="cart-items-image">
          <img :src="cartItem.img" alt="cart-items">
        </div>
        <div class="cart-items-info">
          <h2>{{cartItem.title}}</h2>
          <p><span id="price">price</span>{{cartItem.price}}<span id="currency">zar</span></p>
            <p><span id="colour">colour</span>{{cartItem.colour}}</p>
        </div> -->
      </div>

      <form id="payment-form" method="POST">
  <div class="one-liner">
    <div id="billing-name">
        <label for="billing-name">billing name</label>
        <input type="text" name="billing-name"/>
      </div>
      <div id="shipping-address">
        <label for="shipping-address">shipping address</label>
        <input type="text" name="shipping-address"/>
      </div>
    <div id="card-frame">
      <!-- Yoco Inline form will be added here -->
    </div>
    <button id="pay-button">
      2499
    </button>
  </div>
  <p class="success-payment-message" />
</form>
  </div>
  </div>
</template>

<script>
  export default {
    computed: {
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
    },
  };
  </script>

<style lang="scss">
.cart {
    display: flex;
    width: 100%;
    height: 100%;

    .graphic-section {
        width: 60%;
        background-color: var(--dark);
        object-fit: cover;
        position: relative;
        overflow: hidden;
        img {
          position:absolute;
          top: -1rem;
          height: 104%;
          width: auto;
        }
    }
    .payment-section {
        width: 40%;
        background-color: var(--light);
    }
}
</style>