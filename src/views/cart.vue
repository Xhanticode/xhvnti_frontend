<template>
  <div class="cart">
   <div class="graphic-section">
<img src="../assets/xhvnti_print.png" alt="xhvnti-print">
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
mounted() {

let yocoSDK = document.createElement('script')
      yocoSDK.setAttribute('src', 'https://js.yoco.com/sdk/v1/yoco-sdk-web.js')
      document.head.appendChild(yocoSDK)

  // // Replace the supplied `publicKey` with your own.
  // // Ensure that in production you use a production public_key.
  // var sdk = new window.YocoSDK({
  //   publicKey: 'pk_test_4b6e19908owEqWW75c04'
  // });

  // // Create a new dropin form instance
  // var inline = sdk.inline({
  //   layout: 'field',
  //   amountInCents: 2499,
  //   currency: 'ZAR'
  // });
  // // this ID matches the id of the element we created earlier.
  // inline.mount('#card-frame');
},
methods() {

  let yocoSDK = document.createElement('script')
      yocoSDK.setAttribute('src', 'https://js.yoco.com/sdk/v1/yoco-sdk-web.js')
      document.head.appendChild(yocoSDK)
      
  var sdk = new window.YocoSDK({
    publicKey: 'pk_test_4b6e19908owEqWW75c04'
  });

  // Create a new dropin form instance
  var inline = sdk.inline({
    layout: 'field',
    amountInCents: 2499,
    currency: 'ZAR'
  });
  // this ID matches the id of the element we created earlier.
  inline.mount('#card-frame');
   // Run our code when your form is submitted
  var form = document.getElementById('payment-form');
  var submitButton = document.getElementById('pay-button');
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    // Disable the button to prevent multiple clicks while processing
    submitButton.disabled = true;
    // This is the inline object we created earlier with the sdk
    inline.createToken().then(function (result) {
      // Re-enable button now that request is complete
      // (i.e. on success, on error and when auth is cancelled)
      submitButton.disabled = false;
      if (result.error) {
        const errorMessage = result.error.message;
        errorMessage && alert("error occured: " + errorMessage);
      } else {
        const token = result;
        alert("card successfully tokenised: " + token.id);
      }
    }).catch(function (error) {
      // Re-enable button now that request is complete
      submitButton.disabled = false;
      alert("error occured: " + error);
    });
  });
  // Any additional form data you want to submit to your backend should be done here, or in another event listener
},
}
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