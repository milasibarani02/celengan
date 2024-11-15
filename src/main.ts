// main.ts

// Import necessary plugins
import { createApp } from 'vue'
import router from './router'

// Import Vuetify and its styles
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // global styles

// Components
import App from './App.vue'

// Register Vuetify plugin
const vuetify = createVuetify()

// Create the Vue app instance
const app = createApp(App)

// Register plugins like Vuetify
app.use(vuetify)
app.use(router)

// Mount the app to the DOM
app.mount('#app')
