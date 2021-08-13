<template>
  <div id="app">
         
<Header> </Header>
<Card :qiymat = 'mass'> </Card>




  </div>
</template>



<script>


import Header from './Header'
import Card from './components/Card'

export default {
  el: "#app",
  components:{
    Header,
    Card,
   
  },

 data(){

   return {
    mass:['yak', 'du','se', 'chor','pay','ju', 'shan'],
 
     

   }
 },

 

};
</script>





<style>
* {
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body{
background: rgb(63,94,251);
background: linear-gradient(350deg, rgba(63,94,251,0.8575805322128851) 30%, rgba(252,70,107,1) 100%);
min-height: 100vh;
}


body:after{

    content: '';
    position: absolute;
   top:0;
    width: 100%;
    height: 100%;
    background:red;
    z-index: -1;
   clip-path: circle(38.2% at 78% 46%);
   background: rgb(245,37,128);
background: radial-gradient(circle, rgba(245,37,128,1) 0%, rgba(163,148,233,1) 100%);
}
</style>


