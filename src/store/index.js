import { createStore } from "vuex";
import { toRaw } from "vue";
export default createStore({
  state: {
    token:null,
    employee: null,
    employees: null,
    user: null,
    users: null,
    product: null,
    products: null,
    asc: true,
    jwt: null,
    cart: [],
    url: "https://xhvnti.herokuapp.com",
  },

  getters: {},

  mutations: {
    setJwt: (state, jwt) => {
      state.jwt = jwt;
    },
    setEmployee: (state, employee) => {
      state.employee = employee;

    },
     setToken: (state,token) => {
      state.token = token;
    },
    setEmployees: (state, employees) => {
      state.employees = employees;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    addNewCartItems: (state, product) => {
      state.cart.push(product);
    },
    clearCartItems: (state, cart) => {
      state.cart = cart;
    },

    sortProductsByTitle: (state) => {
      state.products = state.products.sort((a, b) => {
        // return a.number - b.number;
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
  },

  actions: {

    // Employee
    getEmployee: async (context, id) => {
      fetch("https://xhvnti.herokuapp.com/employees/:id" + id)
        .then((res) => res.json())
        .then((json) => context.commit("setEmployee", json))
        .catch((err) => console.log(err.message));
    },

    // User
    getUser: async (context, id) => {
      fetch("https://xhvnti.herokuapp.com/users/:id" + id)
        .then((res) => res.json())
        .then((json) => context.commit("setUser", json))
        .catch((err) => console.log(err.message));
    },

    // Employees
    getEmployees: async (context) => {
      fetch("https://xhvnti.herokuapp.com/employees")
        .then((response) => response.json())
        .then((json) => context.commit("setEmployees", json));
    },

    // Users
    getEmployees: async (context) => {
      fetch("https://xhvnti.herokuapp.com/users")
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },

    // Employee login
      employeeLogin: async (context, payload) => {
      let res = await fetch("https://xhvnti.herokuapp.com/employees/login", {
        method: 'POST',
        body: 
        JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let tokendata = await res.json()

      if(tokendata.token){
        context.commit('setToken', tokendata.token)
        const token = tokendata.token
        console.log(token)

        // Verify token
        fetch('https://xhvnti.herokuapp.com/employees/employees/verify', {
        
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token
          }
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit('setEmployee', data.employee)
          context.commit('setJwt', data.jwt)
        })
      }},

    // User login
      userLogin: async (context, payload) => {
      let res = await fetch("https://xhvnti.herokuapp.com/users/login", {
        method: 'POST',
        body: 
        JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let tokendata = await res.json()

      if(tokendata.token){
        context.commit('setToken', tokendata.token)
        const token = tokendata.token
        console.log(token)

        // Verify token
        fetch('https://xhvnti.herokuapp.com/users/users/verify', {
        
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token
          }
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit('setUser', data.user)
          context.commit('setJwt', data.jwt)
        })
      }},

    // Register employee
    registerEmployee: async (context, employee) => {
      fetch("https://xhvnti.herokuapp.com/employees/register", {
        method: "POST",
        body: JSON.stringify(employee),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit('setEmployee', data.employee)
          context.state.jwt = data.token;
        });
    },

    // Register user
    registerUser: async (context, user) => {
      fetch("https://xhvnti.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit('setUser', data.user)
          context.state.jwt = data.token;
        });
    },

     // Update employee 1
     updateEmployee: async (context, employee) => {
      fetch("https://xhvnti.herokuapp.com/employees/register" +id, {
        method: "PATCH",
        body: JSON.stringify(employee),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit('setEmployee', data.employee)
          context.state.jwt = data.token;
        });
    },

    // Update employee 
    // updateEmployee: async (context, employee) => {
    //   const { id, name, surname, email, phone, password, role } = employee;
    //   fetch("https://xhvnti.herokuapp.com/employees/update/" + id, {
    //     method: "PUT",
    //     body: JSON.stringify({
    //       name: name,
    //       surname: surname,
    //       email: email,
    //       phone: phone,
    //       password: password,
    //       role: role,
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => context.commit("setEmployee", json));
    // },

  // Update user 
    updateUser: async (context, user) => {
      const { id, name, surname, email, phone, password, shipping_address, cart } = user;
      fetch("https://xhvnti.herokuapp.com/users/update/" + id, {
        method: "PUT",
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          phone: phone,
          password: password,
          shipping_address: shipping_address,
          cart: cart
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },

    // User cart

    // Add to cart
    addCart: async (context, id, userid) => {
      userid = context.state.employee.id
       let cart = toRaw(context.state.cart);
       cart.push(id);
       console.log(context.state.cart);
       context.dispatch("updateUserCart", cart);
     },
     // Delete from cart
     detletCartItem: async (context, id) => {
       const cartCurrent = context.state.cart.filter(
         (product) => product.id != product.id
       );
       context.commit("clearCartItems", cartCurrent);
     },
 
     updateUserCart: async (context, cart, id) => {
       // const { id, email, password, fullname, phone, cart, role } = employee;
       id = context.state.employee.id;
       fetch("https://xhvnti.herokuapp.com/employees/" + id, {
         method: "PATCH",
         body: JSON.stringify({
           email: context.state.email,
           password: context.state.password,
           fullname: context.state.fullname,
           phone: context.state.phone,
           cart: context.state.cart,
           role: context.state.role,
         }),
         headers: {
           "Content-type": "application/json; charset=UTF-8",
         },
       })
         .then((response) => response.json())
         .then((json) => context.commit("setEmployee", json));
     },

    //  Products 

    // Show all products
    getProducts: async (context) => {
      fetch("https://xhvnti.herokuapp.com/products")
        .then((response) => response.json())
        .then((json) => context.commit("setProducts", json));
    },

    // Display one item
    getProduct: async (context, id) => {
      console.log(id);
      fetch("https://xhvnti.herokuapp.com/products/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log(data[0]);
          context.commit("setProduct", data[0]);
        });
    },

    // Add product 
    addProduct: async (context, product) => {
      console.log(context.state.jwt)
      fetch("https://xhvnti.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.jwt
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          context.commit("setProduct", data)
        });
    },

    editProduct: async(context, product) => {
      fetch("https://xhvnti.herokuapp.com/products", {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        });
    },

    
  },

  modules: {},
});