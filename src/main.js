import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import ceptelefonu from './components/ceptelefonu.vue'
import urunsayfasi from './components/urunsayfasi.vue'
import telefon from './components/telefon.vue'
import firsat from './components/firsat.vue'
import sepetim from './components/sepetim.vue'
import uyelik from './components/uyelik.vue'
import girisyap from './components/girisyap.vue'
import product from './components/product.vue'
import encok from './components/encok.vue'
import apple from './components/apple.vue'
import Bootstrapcss from 'bootstrap/dist/css/bootstrap.min.css'
import Bootstrap from 'bootstrap'

Vue.config.productionTip = false


Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
  
    },
    {
      path:'/urunsayfasi',
      component:urunsayfasi,
    },
    {
      path:'/ceptelefonu',
      component:ceptelefonu,
    },
    {
      path:'/telefon',
      component:telefon,
    },
    {
      path:'/firsat',
      component:firsat,
    },
    {
      path:'/sepetim',
      component:sepetim
    },
    {
      path:'/uyelik',
      component:uyelik
    },
    {
      path:'/girisyap',
      component:girisyap
    },
    {
      path:'/products',
      component:product
    },
    {
      path:'/encok',
      component:encok
    },
    {
      path:'/apple',
      component:apple
    }
    
  ]
  })
new Vue({
  el: '#app',
  router,
  
  render: h => h(App)
})