<template>
  <div>
    <a href="">
    <div class="back">
     
      <lord-icon
        src="https://cdn.lordicon.com/iiueiwdd.json"
        trigger="hover"
        colors="primary:#efefef,secondary:#08a88a"
        style="width:60px;height:90px;cursor:pointer"
        class="qayt"
      >
      </lord-icon> 


  
      
      <p style="font-size:20px;letter-spacing:3px" class="text-white qaytish">back</p>
    </div>
    </a>

         <router-link tag = 'a' to="'/Home'"> </router-link>
           
    <div class="row med p-sm-0">
      <div class="col-12 " style="padding-right:4px">
        <div class="card  w-75 m-auto mt-5" :class="{cloud:cloudly, clear:clearSky,rain:yomgir}">
          <div class="card-header d-flex justify-content-between">
            <div class="header-left">

              <h1  class="text-center text-light " style="font-size:7em;" :class="{show:show}">
                {{ currentTemp }}°
              </h1>



              <p
                class="text-center rang"
                style="font-size:25px;letter-spacing:3px;font-weight:lighter; margin-right:35px !important"
              >
                {{ sunrise }}
              </p>

              <div
                class="d-flex justify-content-center text-center "
                style="width:250px; font-size:20px;"
              >
                <div
                  class="namlik rang"
                  style="border-right:1px solid orange; width:120px;"
                >
                  <p>namlik</p>
                  <p style="color:red">{{ humidity }}</p>
                </div>

                <div class="shamol text-center rang" style="width:130px;">
                  <p>Shamol</p>
                  <p style="color:red">{{ wind }}</p>
                </div>
              </div>
            </div>




            <div class="header-right" style="margin-top:0px !important; position:relative">
              <label for="country">Viloyat:</label>
              <div class="d-flex position-relative">
 <input type="text" placeholder="yoki mamlakatingizni kiriting" class="w-100 py-1 px-1 border-0" id="country" style="outline:none; border-radius:5px;caret-color:tomato" 



 v-model= 'mamlakat'>



 <button class="position-absolute bg-secondary px-1" style="right:0; height:100%; color:white; width:80px border:1px !important;border-radius:5px;" @click="Get">Tekshiruv</button>

              </div>
             
              <h1 class="text-center pb-2" style="letter-spacing: 5px;border-bottom:2px solid #fff;">{{ countryName }} </h1>


              <p style="position:absolute; bottom:0; left:0">bugun "{{this.countryName}}" da O'rtacha harorat <span class="text-light badge bg-secondary"> {{this.currentTemp}}° </span> ni tashkil etmoqda</p>
             
            </div>
          </div>

          <div
            class="linea w-100"
            style="background: rgb(6,66,136);
background: rgb(2,36,75);
background: linear-gradient(0deg, rgba(2,36,75,1) 57%, rgba(2,14,73,0.8575805322128851) 100%); height:20px;border:none"
          ></div>


          <!-- card body -->
          
          <div
            class="card-body"
            style="background: rgb(211,222,222);
background: radial-gradient(circle, rgba(211,222,222,1) 0%, rgba(245,244,241,1) 100%);"
          >


          <div class="xabar" :class="{xabar2:messageDinamic}" @click="xabar" >
<h3 class="p-2 pt-5">Nima uchun  haftalik Natijalar ko'rinmayapti? <br> Chunki Haftalik malumotlarni ko'rsatuvchi API pullik</h3>

<div class="btn btn-dark text-white text-center m-auto">Yopish</div>
          
         
          
          </div>

<div class="row">
    <div class="col-sm-5 " style="border-right:1px solid grey">
<div class="d-flex align-items-center ">
    <lord-icon
    src="https://cdn.lordicon.com/zzcjjxew.json"
    trigger="loop"
    colors="primary:#121331,secondary:#08a88a"
    style="width:50px;height:50px; cursor:pointer"
    class="lord">
  
</lord-icon>

<h4>Location</h4>

 <h6 style="margin-left:10px !important; margin-top:5px !important">#Uzbekistan</h6>
</div>


<div class="d-flex align-items-center mt-3">
    <lord-icon
    src="https://cdn.lordicon.com/oyclgnwc.json"
    trigger="hover"
    colors="primary:#121331,secondary:#08a88a"
    style="width:50px;height:50px;cursor:pointer"
    class="lord">
</lord-icon>
<h6 class="text-center" style="font-size:15px">ertaga quyoshdan saqlovchi kremingizni unutmang</h6>
</div>



<div class="d-flex align-items-center mt-2">
<lord-icon
    src="https://cdn.lordicon.com/ssdupzsv.json"
    trigger="loop"
    colors="primary:#121331,secondary:#08a88a"
    style="width:50px;height:50px;cursor:pointer" class="lord">
</lord-icon>

<h6>O'zbekistonda Jazirama Yoz!</h6>
</div>

<div class="d-flex justify-content-center">
    <a href="">Next</a> 
    <lord-icon
    src="https://cdn.lordicon.com/gkditgni.json"
    trigger="hover"
    colors="primary:#3080e8,secondary:#08a88a"
    style="width:30px;height:30px">
</lord-icon>
</div>
    </div>

    <div class="col-sm-7 " style="position:relative">
        <div class="wrapper-info d-flex justify-content-between flex-wrap">
<div class="info  text-center">

<h6>{{qiymat[0]}} </h6>
<img :src="image[0]" alt="" style="width:90px"/>
<h6>undifined</h6>
<p>null</p>
</div>

<div class="info text-center">
<h6>{{qiymat[1]}} </h6>



<img :src="image[0]" alt="" style="width:90px"/>
<h6>undifined</h6>
<p>null</p>



</div>








<div class="info text-center">
<h6>{{qiymat[2]}} </h6>


<img :src="image[0]" alt="" style="width:90px">
<h6>undifined</h6>
<p>null</p>
</div>


<div class="info text-center">
<h6>{{qiymat[3]}} </h6>



<img :src="image[0]" alt="" style="width:90px"/>
<h6>undifined</h6>
<p>null</p>



</div>



<div class="info text-center">
<h6>{{qiymat[4]}} </h6>
<img :src="image[0]" alt="" style="width:90px"/>
<h6>undifined</h6>
<p>null</p>
</div>



<div class="info text-center">
<h6>{{qiymat[5]}} </h6>


<img :src="image[0]" alt="" style="width:90px"/>
<h6>undifined</h6>
<p>null</p>
</div>

        </div>



<button class="toltip text-center text-light p-1" @click="top" :class="{tepaga:down}">
 <lord-icon
    src="https://cdn.lordicon.com/bgywtgwo.json"
    trigger="hover"
    colors="primary:#121331,secondary:#08a88a"
    stroke="100"
    style="width:50px;height:50px;position:absolute; right:20px; bottom:20px">
</lord-icon>
<span>Nima uchun haftalik natijalar ko'rinmayapti?</span>

<span style="display:block">Chunki <a href="https://openweathermap.org/api" style="color:white">openweathermap.org</a> dan haftalik Ob havoni ko'rsatuvchi <span class="text-warning">API</span>  pullik <span class="display-6" > </span> </span>

</button>




    </div>
</div>


          </div>




        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import axios from "axios";

export default {
props:['qiymat'],
  data() {
      
    return {
        show: false,
      currentTemp: "",
      countryName: "",
      sunrise: "",
      sunset: "",
  mamlakat:"Samarkand",
      humidity: "",
      wind: "",
      API_KEY: "10606806b76e7897d0c2d13c2a3ca538",
      cloudly:false,
     clearSky:false,
     yomgir:false,
     down:false,
     messageDinamic:false,
// image massividagi 0 rasm quyosh  1 rasm yomg'ir 2 rasm quyosh bulutli
   image:["https://i.pinimg.com/originals/8c/85/37/8c85375c2c298aba67f0ef8572c2602b.png",
   "https://www.pinclipart.com/picdir/big/568-5683204_cloud-and-rain-png-clipart.png",
   "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/58594/sun-behind-cloud-emoji-clipart-md.png"]

    };
  },
  // https://api.openweathermap.org/data/2.5/onecall?lat=39.6542&lon=66.9597&exclude={part}&appid={API key}
// https://api.openweathermap.org/data/2.5/find?q=Samarkand&units=metric&appid=${this.API_KEY}&lang={ru}
created(){
axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${this.mamlakat}&units=metric&appid=${this.API_KEY}&lang={ru}`

      )
      .then((response) => {
 
        this.countryName = response.data.list[0].name;
        this.currentTemp = response.data.list[0].main.temp;
        this.humidity = response.data.list[0].main.humidity + "%";
        this.wind = response.data.list[0].wind.speed + " " + "K/M";
        this.sunrise = response.data.list[0].weather[0].description;


        
       
      })
      .catch((error) => {
        console.log(error);
      });
},

  methods:{
  
    Get(){
      this.show = !this.show
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${this.mamlakat}&units=metric&appid=${this.API_KEY}&lang={ru}`

      )
      .then((response) => {
 
        this.countryName = response.data.list[0].name;
        this.currentTemp = response.data.list[0].main.temp;
        this.humidity = response.data.list[0].main.humidity + "%";
        this.wind = response.data.list[0].wind.speed + " " + "K/M";
        this.sunrise = response.data.list[0].weather[0].description;
        this.mamlakat  = '';

         let  holat = response.data.list[0].weather[0].description;

switch(holat){
case 'broken clouds': this.cloudly = true; break;
case 'scattered clouds': this.cloudly = true; break;
case 'overcast clouds': this.cloudly = true;break;
case 'few clouds': this.cloudly = true; break;
case 'clear sky' :   this.clearSky = true; break;
case 'moderate rain' :   this.yomgir = true; break;
case 'light rain' : this.yomgir = true; break;
}

      })
      .catch((error) => {
        console.log(error);
      });


     
    },


    top(){
      this.down = !this.down
    },

    xabar(){
this.messageDinamic = !this.messageDinamic;
    }
  },


  

  

};
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.card {
  background: url(https://www.wallpapers4u.org/wp-content/uploads/tornado_lightning_category_field_bad_weather_constructions_wires_61189_1920x1080.jpg);
  background-size: cover;
  background-position: bottom;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 0 25px rgb(60, 60, 168);
  border: none;
}

.header-left {
  margin-top: 40px !important;
}

.header-left .rang {
  color: rgb(211, 211, 211);
}

.header-right {
  margin-top: 60px !important;

  width: 290px;
  padding-top: 20px;
  color: #fff;
}

.back {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: black;
  position: absolute;
  left: 4%;
  top: 23%;
}

.cloud{
  background:url('https://i.gifer.com/1jvw.gif');
  background-size: cover;
}

.clear{
    background:url('https://i.gifer.com/embedded/download/1k2f.gif');
  background-size: cover;
}

.rain{
  background:url('https://acegif.com/wp-content/uploads/rain-20.gif');
  background-size: cover;
}




.show{
  animation: bounce-in .5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.toltip{
  width: 100%;
  height: 38px;
  background: rgb(16, 150, 184);
  position: absolute;
  right: 0;
  bottom: 0;
clip-path: polygon(100% 27%, 100% 100%, 50% 100%, 0 100%, 0 28%, 47% 0);
  transition: 0.3s;
  overflow: hidden;
  border: none !important;
  font-size: 18px;
 

}

.tepaga{
clip-path: polygon(100% 0, 100% 100%, 50% 100%, 0 100%, 0 0, 47% 0);
  height: 100%;
  transition: 0.3s;
}

.xabar{
  display: none;
}


@media  (max-width:576px){
  .med{
    width: 98% !important; 
  }
.back{
  width: 30px;
  height: 30px;
 top:12%;
}
.qayt{
  top: -63%;
  position: relative;
  width: 30px !important;
  
}
  .qaytish{
display: none;

  }

  .card{
    width: 100% !important;
   margin:60px auto !important;
  }
 .card .card-header{
   flex-wrap: wrap;
 
  
 }
.header-left {
  margin: auto !important;
}
 .header-left h1{
   font-size: 4em !important;
   text-align: center !important;
   }

   .header-right{
     height: 260px !important;
   }

.wrapper-info .info{
margin-top: 20px !important;
}

.wrapper-info{
  z-index: 3;
  position: relative;
}
 
.toltip{
  display: none;
}
.card-body{
  position: relative;
}

.xabar{
  display: block;
  width: 5%;
  height: 150px;
  color: rgb(13, 148, 201);
  background: rgb(13, 148, 201);
  position: absolute;
  right: 0;
  top: 0;
clip-path: polygon(100% 0%, 100% 48%, 100% 100%, 72% 100%, 0% 50%, 72% 1%);
  cursor: pointer;
  overflow: hidden !important;

  text-align: center;
  transition: 0.4s;
}

.xabar2{
  width: 100%;
  height: 100%;
clip-path: polygon(100% 0, 100% 43%, 100% 100%, 0 100%, 0% 50%, 0 0);
z-index: 2;
color: white !important;

}

.lord{
  z-index: 0 !important;
}
}

</style>
