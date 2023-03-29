import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';


createApp(App).use(router).mount('#app')

// let navside = document.getElementById("mySidenav")

// let btn_open = document.getElementById('btn-open')

// btn_open.addEventListener('click', function(){
//     navside.classList.add('active-block')
// })

// let btn_close = document.getElementById('btn-close')

// btn_close.addEventListener('click', function(){
//     navside.classList.remove('active-block')
// })