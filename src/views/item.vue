<template>
<div v-if="products" class="product">
        <div class="product-image">
            <img :src="products.img" />
            </div>
        <div class="product-info">
            <h2>{{products.title}}</h2>
            <p>{{products.description}}</p>
            <div class="price-box">
            <p><span id="price">price</span>{{products.price}}<span id="currency">zar</span></p>
            <p><span id="colour">colour</span>{{products.colour}}</p>
            </div>
            <router-link to="/shop">
              <svg id="close-button" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12L7 7M12 12L17 17M12 12L17 7M12 12L7 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
                <svg @click="add()" id="cart-button" width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.78667 8.66668L7.23133 5.33334H5.238C4.94067 4.18668 3.906 3.33334 2.66667 3.33334C1.196 3.33334 0 4.52934 0 6.00001C0 7.47068 1.196 8.66668 2.66667 8.66668C3.906 8.66668 4.94067 7.81334 5.23867 6.66668H6.10133L6.43467 8.66668H6.40933L9.85667 26.0107C8.21333 26.136 6.84467 27.4013 6.68333 28.9933C6.58867 29.93 6.89667 30.868 7.52867 31.5653C8.16133 32.2647 9.06267 32.6667 10 32.6667H11.3333C11.3333 34.8727 13.1273 36.6667 15.3333 36.6667C17.5393 36.6667 19.3333 34.8727 19.3333 32.6667H26.6667C26.6667 34.8727 28.4607 36.6667 30.6667 36.6667C32.8727 36.6667 34.6667 34.8727 34.6667 32.6667H37.3333C37.702 32.6667 38 32.3687 38 32C38 31.6313 37.702 31.3333 37.3333 31.3333H34.4333C33.8827 29.782 32.4047 28.6667 30.6667 28.6667C28.9287 28.6667 27.4507 29.782 26.9 31.3333H19.1C18.5493 29.782 17.0713 28.6667 15.3333 28.6667C13.5953 28.6667 12.1173 29.782 11.5667 31.3333H10C9.43867 31.3333 8.89867 31.092 8.51733 30.6713C8.13267 30.2453 7.952 29.6973 8.01 29.1273C8.11133 28.1213 9.04067 27.334 10.1253 27.334H10.6527C10.662 27.334 10.6693 27.334 10.6787 27.334H36.6747C38.5087 27.3333 40 25.842 40 24.0087V8.66668H7.78667ZM2.66667 7.33334C1.93133 7.33334 1.33333 6.73534 1.33333 6.00001C1.33333 5.26468 1.93133 4.66668 2.66667 4.66668C3.402 4.66668 4 5.26468 4 6.00001C4 6.73534 3.402 7.33334 2.66667 7.33334Z" fill="black"/>
              </svg>
            </div>
    </div>
</template>

<script>

// import axios from "axios";

export default {
computed: {
  data() {
return {
  product: null,
}
  },
  props:["id"],
    products() {
      return this.$store.state.product
    }
},
mounted(){
    this.$store.dispatch("getProduct",this.$route.params.id)

},
methods: {
  add() {
      this.$store.dispatch("addToCart", {
        product_id: this.$route.params.id,
      });
    },
}
}
</script>

<style lang="scss" scoped>
  .body {
    background-color: var(--dark);
  }
.product {
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 390px) {
    flex-direction: column;
  }

  .product-image {
    height: 100%;
    width: 40%;
    @media screen and (max-width: 390px) {
      width: 100%;
    }
    img {
      width: 26rem;
      height: 34rem;
      object-fit: cover;
      @media screen and (max-width: 390px) {
      width: 100%;
      height: 100%;
    }
    }
  }
.product-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 40%;
  padding: 2rem;
  position: relative;
  @media screen and (max-width: 390px) {
      width: 100%;
    }

  h2 {
    color: var(--light);
    margin: 4rem 0;
}
p {
  color: var(--light);
  #price, #colour {
    padding-right: 0.5rem;
    font-weight: 300;
  }
  #currency {
    padding-left: 0.2rem;
  }
}
.price-box {
  position: absolute;
  bottom: 2rem;
}
#close-button {
  position: absolute;
  right: 4rem;
  top: 6rem;
    path {
      fill: var(--light);
      stroke: var(--light);
    }
  }
#cart-button {
  position: absolute;
  right: 4rem;
  bottom: 2rem;
    path {
      fill: var(--light);
      stroke: var(--light);
    }
  }
}
}
</style>