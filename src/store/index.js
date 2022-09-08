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
    setUser: (state, user) => {
      state.user = user;
    },
    setUsers: (state, user) => {
      state.users = users;
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
    logout: (state) => {
      (state.user= ''), (state.users= ''), (state.employee= ''), (state.employees= ''), (state.token= '')
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
    getUsers: async (context) => {
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

    // Update employee 
    updateEmployee: async (context, employee) => {
      fetch("https://xhvnti.herokuapp.com/employees/update/" + employee.employee_id, {
        method: "PATCH",
        body: JSON.stringify(employee),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setEmployee", json));
    },
    // Delete employee 
    deleteEmployee: async (context, employee) => {
      fetch("https://xhvnti.herokuapp.com/employees/delete/" + employee.employee_id, {
        method: "DELETE",
        // body: JSON.stringify(employee),
        // headers: {
        //   "Content-type": "application/json; charset=UTF-8",
        // },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setEmployees", json));
    },

  // Update user 
    updateUser: async (context, user) => {
      fetch("https://xhvnti.herokuapp.com/users/update/" + user.user_id, {
        method: "PATCH",
        body: JSON.stringify(user),        
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },
  // Delete user 
    deleteUser: async (context, user) => {
      fetch("https://xhvnti.herokuapp.com/users/delete/" + user.user_id, {
        method: "DELETE",
        // body: JSON.stringify(user),        
        // headers: {
        //   "Content-type": "application/json; charset=UTF-8",
        // },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },

    // User cart

    getcart: (context, id) => {
      if (context.state.user === null) {
        alert("Please Login");
      } else {
        id = context.state.user.user_id;
        fetch("http://xhvnti.herokuapp.com/users/" + id + "/cart", {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            context.commit("setcart", data);
          });
      }
    },
    addToCart: async (context, product, id) => {
      console.log(product.product_id);
      id = context.state.user.user_id;
      // console.log(product);
      await fetch("http://xhvnti.herokuapp.com/users/" + id + "/cart", {
        method: "POST",
        body: JSON.stringify({
          product_id: product.product_id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getcart", id);
        });
    },
    clearCart: async (context, id) => {
      id = context.state.user.user_id;
      await fetch("http://xhvnti.herokuapp.com/users/" + id + "/cart", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getcart", id);
        });
    },
    deleteCartItem: async (context, list, id) => {
      id = context.state.user.id;
      await fetch("http://xhvnti.herokuapp.com/users/" + id + "/cart/" + list,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getcart", id);
        });
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
      fetch("https://xhvnti.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // "x-auth-token": context.state.jwt
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          context.commit("setProduct", data)
        });
    },

    // Edit product 
    editProduct: async(context, product) => {
      fetch("https://xhvnti.herokuapp.com/products/update/" + product.product_id, {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then((json) => context.commit("setProducts", json));
    },

    // Delete product 
    deleteProduct: async(context, product) => {
      fetch("https://xhvnti.herokuapp.com/products/delete/" + product.product_id, {
        method: "DELETE",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then((json) => context.commit("setProducts", json));
    },

    
  },

  modules: {},
});