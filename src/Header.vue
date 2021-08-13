<template>
  <div>
    <header>
      <div class="box1">
        <div class="bar" style="cursor:pointer">
          <lord-icon
            src="https://cdn.lordicon.com/jvucoldz.json"
            trigger="loop-on-hover"
            colors="primary:#ffefed,secondary:#ffef"
            style="width:90px;height:120px"
            class="log"
          >
          </lord-icon>
        </div>

        <div class="logo">
          <img src="./assets/or.png" alt="" />
        </div>

        <div class="sarlavha">
          <h6 class="text-center" style="color:orange">This app is developed by ozodsilver</h6>
        </div>
      </div>

      <div class="box2">
        <h5 class="text-center text-light" style="text-shadow:0 0 5px white; font-size:16px">
          {{ new Date().toString() }} {{ getWeek }}
        </h5>
      </div>

      <div class="box3"></div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getWeek: "",
      week: [
        "yakshanba",
        "seshanba",
        "chorshanba",
        "payshanba",
        "juma",
        "shanba",
      ],
    };
  },

  created() {
    let bugun = new Date();
    let hafta = bugun.getDay();

    switch (hafta) {
      case 0:
        this.getWeek = this.week[0];
        break;
      case 1:
        this.getWeek = this.week[1];
        break;
      case 2:
        this.getWeek = this.week[2];
        break;
      case 3:
        this.getWeek = this.week[3];
        break;
      case 4:
        this.getWeek = this.week[4];
        break;
      case 5:
        this.getWeek = this.week[5];
        break;
    }
  },
};
</script>




<style scoped>
header {
  width: 100%;
  height: 70px;
  background-color: rgb(16, 2, 66);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .box1 {
  display: flex;
  justify-content: space-around;
  width: 40%;
  flex-wrap: nowrap;
}

header .logo {
  display: flex;
  min-height: 100%;

  align-items: center;
}
header .logo img {
  width: 100px;
}

header .sarlavha {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

header .box2 {
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 100%;
}



@media  (max-width:768px){
  header{
    width: 100%;
  }


header .box1{

width: 100%;
left: 0;
}


header .sarlavha h6{
  font-size: 12px !important;
  margin-right: 4px !important;
}

header .box2 {
display: none !important;
}
  }

 .slot{
   margin-top: -50px !important;
 }



</style>
