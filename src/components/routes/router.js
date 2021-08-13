import VueRouter from 'vue-router';
import Home from '../Home'

export default  new VueRouter({
    routes:[
       {
           path:'/Home',
           component: Home
       },


    ],

    mode:'history', 
})