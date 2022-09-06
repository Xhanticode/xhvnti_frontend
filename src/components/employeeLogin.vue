<template>
    <div v-if="!employee" class="login-section" id="employee-login">
  <div id="logout" v-if="isSignedIn">
    <button @click='handleSignOut' class="sign-out-button">Sign Out</button>
  </div>
      <!-- Normal sign-in  -->
    <div id="normal-sign-in" v-if="!isSignedIn">
    <!-- Login Form  -->
    <form @submit.prevent="employeeLogin" class="login-form">
      <input required v-model="email" name="email" type="email" placeholder="Email" />
      <input
        type="password"
        placeholder="Password"
        required
        v-model="password"
        name="password"
      />
      <button type="submit" class="login-button" value="employeeLogin">Login</button>
      <router-link v-if="isSignedIn" to="/admin">
        <button>Shop</button>
      </router-link>
      
      <!-- Google sign-in  -->
    <div id="google-sign-in" v-if="!isSignedIn">
    <button @click="handleSignInGoogle">
    <span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_82_98)">
<path d="M5.2662 9.76453C6.19879 6.93863 8.85445 4.90909 12 4.90909C13.6909 4.90909 15.2182 5.50909 16.4182 6.49091L19.9091 3C17.7818 1.14545 15.0545 0 12 0C7.27007 0 3.19775 2.6983 1.23999 6.65002L5.2662 9.76453Z" fill="#EA4335"/>
<path d="M16.0407 18.0126C14.9509 18.7163 13.5661 19.0909 12 19.0909C8.86648 19.0909 6.21911 17.0769 5.27698 14.2679L1.23746 17.335C3.19279 21.2936 7.265 24 12 24C14.9328 24 17.7353 22.9574 19.8342 20.9996L16.0407 18.0126Z" fill="#34A853"/>
<path d="M19.8342 20.9996C22.0292 18.9521 23.4545 15.9037 23.4545 12C23.4545 11.2909 23.3455 10.5273 23.1818 9.81818H12V14.4545H18.4364C18.1188 16.0136 17.2663 17.2212 16.0407 18.0126L19.8342 20.9996Z" fill="#4A90E2"/>
<path d="M5.27698 14.2679C5.03833 13.5563 4.90909 12.7938 4.90909 12C4.90909 11.2183 5.03444 10.4668 5.2662 9.76453L1.23999 6.65002C0.436587 8.26043 0 10.0754 0 12C0 13.9195 0.444781 15.7302 1.23746 17.335L5.27698 14.2679Z" fill="#FBBC05"/>
</g>
<defs>
<clipPath id="clip0_82_98">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
</span>Sign-in with Google
</button>
</div>
      <p>
        Don't have an account?
        <button @click="toggleForm" class="register-button">register</button>
      </p>
      <div v-if="employee"><p>Welcome {{ employee.name }}</p></div>
    </form>

    <!-- Register Form -->
     <form @submit.prevent="registerEmployee" class="register-form">
          <div>
            <label for="name">Name:</label>
            <input type="text" name="name" required v-model="name" />
          </div>
          <div>
            <label for="surname">Surname:</label>
            <input type="text" name="surname" required v-model="surname" />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="text" name="email" required v-model="email" />
          </div>
          <div>
            <label for="phone">Phone:</label>
            <input type="text" name="phone" required v-model="phone" />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" name="password" required v-model="password" />
          </div>
          <div>
            <label for="role">Role:</label>
            <input type="text" name="role" v-model="role" />
          </div>
          <button type="submit" value="registerEmployee">Submit</button>
          <p>
        have an account?
        <button @click="toggleForm" class="register-button">login</button>
      </p>
      <div v-if="employee">
      <p>Welcome {{ employee.name }}, Your sign up was successsul!</p>
    </div>
        </form>
    </div>
    </div>
  </template>
  
  <script>

  import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
  import firebaseConfig from '../firebaseConfig';

  firebaseConfig

  const provider = new GoogleAuthProvider();
  const auth = getAuth();


  export default {
    name: 'employeeLogin',
    props: ['employees'],
  computed: {
    employee() {
      return this.$store.state.employee;
    },
  },
    data() {
      return {
        employee: '',
        isSignedIn: false,
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        role: '',
      }
    },
    computed: {
      employee(){
      return this.$store.state.employee;
    },
    },
    methods: {
      async handleSignInGoogle() {
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    // // The signed-in user info.
    // const user = result.user;
    console.log(result.user);
    this.user = result.user.displayName;
    this.email = result.user.email;
    this.isSignedIn = true;
    this.$store.dispatch("login", {
        email: this.email,
        password: this.token,
    })
    // ...
  }).catch((error) => {
    console.log(error);
    // // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // // ...
  });
      },
      async handleSignOut() {
        signOut(auth).then(() => {
  // Sign-out successful.
  this.user = '';
  this.isSignedIn = false;
}).catch((error) => {
  // An error happened.
  console.log(error);
});
      },

    //   Normal login 

      // Employee login 
      employeeLogin() {
      this.$store.dispatch("employeeLogin", {
        email: this.email,
        password: this.password,
      });
      // this.isSignedIn = true;
      
    },

    // Register employee 
     registerEmployee() {
      let employee = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        phone: this.phone,
        role: this.role,
      };
      this.$store.dispatch("registerEmployee", employee);
    },

    // Toggle login/register form 
    toggleForm() {
        let loginForm = document.querySelector('.login-form')
        let registerForm = document.querySelector('.register-form')
        if (loginForm.style.display === "flex") {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
        } else {
          loginForm.style.display = "flex";
          registerForm.style.display = "none";
        };
          },
          },
          // setup() {
          //   const Vue3GoogleOauth = inject('Vue3GoogleOauth');
          //   return {
          //     Vue3GoogleOauth,
          //   };
          // }
        }
  </script>

<style lang="scss">
.login-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    transition: 1s;

    h2 {
    position: fixed;
    top: 2rem;
    left: 2rem;
    }
    .sign-out-button {
    position: fixed;
    top: 4rem;
    left: 2rem;  
    }
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  background: var(--dark);
  padding: 2rem;
  width: 20rem;
  height: 26rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 5px 5px 16px 5px #3f3f3f;
  box-shadow: 5px 5px 16px 5px #3f3f3f;
  font-family: var(--font);
  opacity: 0.5;
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
  p {
    margin-inline: auto;
    a {
      color: var(--light);
    }
  }
  #google-sign-in {
    display: flex;
    justify-content: center;

    button {
        font-family: var(--font);
        width: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;

       span {
        padding: 0 0.6rem 0 0;
       } 
    }
  }
}
.register-form {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  background: var(--dark);
  padding: 2rem;
  width: 20rem;
  height: 26rem;
  border-radius: 0.5rem;
  -webkit-box-shadow: 5px 5px 16px 5px #3f3f3f;
  box-shadow: 5px 5px 16px 5px #3f3f3f;
  font-family: var(--font);
  opacity: 0.5;
  input {
    border: none;
    border-bottom: 0.05rem solid var(--light);
    background: transparent;
    color: var(--light);
    font-family: var(--font);
    &:focus {
      border: none;
      outline: none;
      border-bottom: 0.05rem solid var(--light);
      background: transparent;
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
  p {
    margin-inline: auto;
    a {
      color: var(--light);
    }
  }
}
.register-button {
  border: none;
}
}
</style>