<template>
    <div class="contact-section">
      <div id="graphic">
        <img src="../assets/xhvnti_print_light.png" alt="xhvnti print">
      </div>
      <div class="form">
        <h2>contact</h2>
        <form action="https://formspree.io/f/mnqrjpnr" method="POST">
            <input type="text" placeholder="name" name="name">
            <input type="email" placeholder="email" name="email">
            <input type="text" placeholder="phone" name="phone">
            <textarea placeholder="message" name="message"></textarea>
            <button type="submit">
                    send 
                    <span>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.65491 18.4519C6.65491 18.5717 6.72145 18.6816 6.82727 18.7376C6.93301 18.7936 7.06157 18.7864 7.1604 18.7187L9.38624 17.1989L6.65495 15.8971V18.4519H6.65491Z" fill="black"/>
                    <path d="M19.8961 1.31082C19.8349 1.25446 19.756 1.22496 19.6763 1.22496C19.6282 1.22496 19.5802 1.23563 19.5348 1.25793L0.319362 10.6837C0.122959 10.7802 -0.0013227 10.9807 1.06223e-05 11.2001C0.00134395 11.4192 0.127727 11.6184 0.325544 11.7128L5.38984 14.1259L15.5158 5.80311L6.64458 14.7237L12.9534 17.7297C13.0309 17.7669 13.1155 17.7853 13.1992 17.7853C13.2707 17.7853 13.3414 17.7723 13.4088 17.7459C13.5557 17.6878 13.6725 17.5714 13.7308 17.4244L19.9771 1.66694C20.0265 1.54294 19.9943 1.40116 19.8961 1.31082Z" fill="black"/>
                    </svg>
                    </span>
                </button>
        </form>
        <div class="social-icons">
        <a :href="instagram">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="black" stroke-width="1.5"/>
<path d="M17.5 6.51L17.51 6.49889" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </a>
        <a :href="facebook">
          <svg width="20" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5793 10.0583C12.5793 10.4236 12.5921 12.2105 12.5921 12.2105H11.0658V14.5L12.5793 14.4958L12.5921 21.75H15.6447V14.5L17.5998 14.4958C17.5998 14.4958 17.7475 13.4904 17.8388 12.2105C17.5765 12.2105 15.6447 12.2105 15.6447 12.2105C15.6447 12.2105 15.5951 10.6251 15.5951 10.3764C15.5951 10.127 15.9226 9.79135 16.2465 9.79135C16.5697 9.79135 17.2518 9.79135 17.8834 9.79135C17.8834 9.459 17.8834 8.3106 17.8834 7.25C17.0401 7.25 16.0808 7.25 15.6578 7.25C12.505 7.25 12.5793 9.6934 12.5793 10.0583Z" fill="black"/>
        </svg>
        </a>
        <a :href="twitter">
          <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_25_123)">
        <path d="M10.0575 21.0431C11.4827 21.0521 12.8955 20.778 14.214 20.2367C15.5324 19.6954 16.7303 18.8978 17.7381 17.89C18.7459 16.8822 19.5436 15.6843 20.0848 14.3659C20.6261 13.0474 20.9002 11.6346 20.8913 10.2094C20.8913 10.0406 20.8913 9.88031 20.8913 9.71156C21.63 9.17029 22.2695 8.50515 22.7812 7.74563C22.0856 8.04988 21.3495 8.25167 20.5959 8.34469C21.3949 7.86863 21.9944 7.11928 22.2834 6.23531C21.5388 6.68203 20.7223 6.99607 19.8703 7.16344C19.2965 6.55203 18.5372 6.14677 17.7099 6.01036C16.8825 5.87395 16.0333 6.014 15.2936 6.40884C14.5539 6.80367 13.9649 7.43129 13.6178 8.19457C13.2707 8.95785 13.1848 9.81425 13.3734 10.6313C11.8598 10.557 10.3787 10.1647 9.02674 9.47996C7.67475 8.79524 6.48214 7.83344 5.52656 6.65719C5.04472 7.49349 4.89867 8.48165 5.11798 9.42159C5.3373 10.3615 5.9056 11.183 6.70781 11.7197C6.11602 11.6969 5.53791 11.535 5.02031 11.2472V11.2894C5.01505 12.1634 5.30948 13.0128 5.85453 13.696C6.39958 14.3792 7.16232 14.855 8.01562 15.0441C7.46519 15.1921 6.88862 15.2152 6.32812 15.1116C6.57516 15.8569 7.04673 16.5076 7.67816 16.9744C8.3096 17.4412 9.06997 17.7012 9.855 17.7188C8.51277 18.7992 6.84458 19.3939 5.12156 19.4063C4.81946 19.3975 4.51807 19.3722 4.21875 19.3303C5.96274 20.4414 7.98964 21.0273 10.0575 21.0178" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_25_123">
        <rect width="27" height="27" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </a>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        instagram: "https://instagram.com/xhvnti",
        facebook: "https://facebook.com/xhvnti",
        twitter: "https://twitter.com/xhvnti"
      }
    }
  }
  </script>
  
  <style lang="scss">
  .contact-section {
    width: 100%;
    height: 100%;
    display: flex;
  
    #graphic {
  width: 50%;
  height: 100%;
  @media screen and (max-width: 500px)
 {
  // transform: rotateZ(45deg) translateX(-3rem) translateY(51rem);
  // position: absolute;
  //   top: 16rem;
  display: none;
}
  
  img {
  width: auto;
  height: 100%;
  transform: rotateZ(45deg) translateX(-6rem) translateY(33rem);
  background-color: var(--dark);
  }
    }
    .form {
      padding: 6rem 6rem 2rem 0rem;
      position: relative;

      @media screen and (max-width: 500px) {
        width: 100%;
        padding: 3rem;
        margin: auto;
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 1.5rem;
        width: 26rem;

        @media screen and (max-width: 500px) {
          width: inherit;
        }
        
        input, textarea {
            border: none;
            background: transparent;
            border-bottom: var(--line);
            padding: 0.5rem 0.5rem 0.5rem 0rem;
            font-weight: 200;
            letter-spacing: 0.05rem;
        }
        input {
            &::placeholder {
                font-size: 12px;
                font-family: var(--font);
                letter-spacing: 0.04rem;   
            }
        }
        textarea {
            border-right: var(--line);
            height: 6rem;
            &::placeholder {
                font-size: 12px;
                font-family: var(--font);
                letter-spacing: 0.04rem;
            }
        }
        button {
            border: none;
            background: none;
            align-self: end;
            span {
                padding-left: 0.4rem;
            }
        }
      }
  
      h2, p {
        color: var(--dark);
      }
      h2 {
        margin-bottom: 2rem;
      }
      p {
        line-height: 1.5rem;
      }
      .social-icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 4rem;
      }
    }
  }
  </style>