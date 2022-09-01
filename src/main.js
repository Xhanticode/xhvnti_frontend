import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);

import vue3GoogleLogin from 'vue3-google-login'
import GAuth from 'vue3-google-oauth2'
import gAuthPlugin from 'vue3-google-oauth2'

let gauthClientId = '127238917335-sjj2jvvti2v9ch565nkkl42nhmujs5sl.apps.googleusercontent.com';
app.use(gAuthPlugin, {
    clientId: gauthClientId,
    scope: 'email',
    prompt: 'consent',
})
app.use(vue3GoogleLogin, {
    clientId: gauthClientId
  })

  const gAuthOptions = { clientId: gauthClientId, scope: 'email', prompt: 'consent', fetch_basic_profile: true }
app.use(GAuth, gAuthOptions)

app.use(store).use(router).mount('#app')
