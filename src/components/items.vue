<template>
<router-link :to="{name: 'item', params: {id: product.product_id}}">
  <div class="product-frame">
    <img :src="product.img"/>
  </div>
  </router-link>
</template>

<script>
export default {
name: "items",
props: ["product", "Product_id"]
}
</script>

<style lang="scss">
.product-frame {
  margin: 2rem;
  width: 24rem;
  height: 520px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>