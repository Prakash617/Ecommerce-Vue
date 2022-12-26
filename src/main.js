import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router';
// import Pet from './components/pets/pet.vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'flowbite';
// import { applyStyles } from '@popperjs/core';
// import vue3GoogleLogin from 'vue3-google-login'
// import GAuth from 'vue-google-oauth2'
import { createPinia } from 'pinia'
// const gauthOption = {
//     clientId: '760892110025-hfqve1nuvl3906i32jrva6b1t4clc05q.apps.googleusercontent.com',
//     scope: 'profile email',
//     prompt: 'select_account'
// }


const app = createApp(App)
const pinia = createPinia()
    // app.use(vue3GoogleLogin, {
    //         clientId: '760892110025-hfqve1nuvl3906i32jrva6b1t4clc05q.apps.googleusercontent.com'
    //     })
    // Vue.use(GAuth, gauthOption)
app.use(pinia)
app.use(router)
app.mount('#app')