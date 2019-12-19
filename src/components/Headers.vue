<template>
    <div>
        <div class="üstheader" style="width:100%;" >
     
        </div>
        <div class="bigheader" >
            <div class="container df">
                <div class="ilkdörtlü row">
                    <ul class="col-md-6">
                        <li class="a" style="float: left;"> <a >WEB'E ÖZEL</a></li>
                      <li style="float: left; " >   <router-link to="/firsat"> <a style="  color:#0153a6!important;"  >●  FIRSAT</a>  </router-link></li>
                        <li style="float: left;"> <a>●   YENİ</a></li>
                         <li style="float: left;" > <a >●   OUTLET</a></li>
                    </ul>
                    <ul class="col-md-6">
                         <li  style="float:right;"> <a >İŞ FIRSATLARI</a></li>
                         <li style="float:right" > <a>MAĞAZALAR</a></li> 
                        <li  style="float:right"> <a >0850 222 56 56</a></li>
                         <li style="float:right; margin-float:50px"><img src="../assets/phone-icon.png" style="height:15px;width:15px;"></li>
                       
                     </ul>
                </div>
            </div>
        <div class="altheader">
            <ul class="altfixed">
            <router-link to="/"> <li> <button style="background-color: transparent; border:none; outline:none;" class="vatanimg"><img src="../assets/vatan.png" ></button> </li> </router-link>    
                 <li> <div > <a  style="margin-top:3px;float:left;"><img src="../assets/icon.png" ></a> </div> </li>
                 <li style="float:left; background-color: #0153a6; border: none; margin-top:15px; color:White">  
                 <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" style="background:transparent; border:none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ÜRÜNLER
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <router-link to="/ceptelefonu"><a class="dropdown-item" href="#">Cep Telefonu</a> </router-link>
                        <a class="dropdown-item" href="#">Bilgisayar</a>
                        <a class="dropdown-item" href="#">Bilgisayar Parçaları</a>
                </div>
                </div>
                    
                 
                  </li>
                  
                 <li> <div class="search-bar header-item input-group input-group-lg col-md-6">
                    <input type="text" class="form-control" v-model="arama">
                         <div class="input-group-append">
                      <button v-on:click="yonlendirme()" style="background-color:transparent;border-color:transparent;"><span class="input-group-text" id="basic-addon2"><img src="../assets/search.png"></span> </button>
                        </div>
                    </div>
                </li>
              <router-link to="/uyelik">    <button style="background-color : transparent; border:none; outline:none; color:#ffff" >
                <span  class="user btn-header ad"></span>
                <span >Üyelik</span>
                 <img src="../assets/usersicon.jpg" >
                 </button> </router-link>
                 <router-link to="/sepetim"> <button style="background-color : transparent; border:none; outline:none; color:#ffff">
                    <span class="sepetim btn-header ad" > </span>
                    <span >Sepetim</span>
                   <img src="../assets/sepetimicon.jpg"> 
                </button> </router-link>
            </ul>
        </div>
    </div>
    
    </div>
</template>
<script>
export default {
    name: 'Header',
    data () {
    return {
      arama:""

    };
  },

  methods:{
    yonlendirme(arama) {
      if(this.arama=="televizyon"){
        
          this.$router.replace({ path: "/" });
       
      }
       if(this.arama=="telefon"){
           this.$router.replace({ path: "/telefon" });
        
      }
       if(this.arama=="Apple"||this.arama=="apple"){
            this.$router.replace({ path: "/apple" });
       
      }
    
    }
  }
}
</script>
<style scoped>
.üstheader{
width:100%;
margin: 0px;
padding: 0px;
height: auto;
background-color:#0153a6!important;



}
.ad{
  color:white;
}
.ad a {
  color:white;
}
.ad a :hover{
  background-color: #0153a6;
  color:white;
}
.üstheader img{

  width: 100%;
  margin: 0 auto;
  display: block;
    z-index: 2;
  
 
}
.bigheader{
  height: 100px;
  background-color :white;
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 0;
    left: 0;
   

  
}
.altheader{

  width: 100%;
  height: 80px;
  background-color: #0153a6;

    
}
.alt{
    background-color: #0153a6;
    width: 100%;
    margin: auto; 
  
   
    

     
}
.altfixed{
  list-style: none;

 
}
.search-bar{
  width: 55%;
  margin: 0 auto;
  color: white;
  margin-top:10px;
  margin-left:25px;
  float:left;
  


}
.df{
  height:40px;
}


.search-bar input, .search-bar input:focus, .search-bar .input-group-text{
  background-color: rgba(255,255,225,0.2);
  color: white;
}

.btn-header:hover{
  background: white !important;
}

.search-bar input{
  border-right: 0;

}

.search-bar .input-group-text{
  border-left: 0;
}
.texts{

  font-size: 18px;
    color: white;
    font-family: "medium";
    float: left;
    margin-top: 18px;
}
.vatanimg{
  float:left;

}


.ilkdörtlü.row ul li{
  display: inline-block;
  margin-right: 15px;
  margin-top: 10px;
  list-style: '●';

}

.ilkdörtlü.row ul li:last-child{
  margin-right: 0;
}


.ilkdörtlü ul{
  font-size: 13px;
  list-style: '●';
  color:#0153a6!important;
  font-family:"medium";
  text-decoration: none;

  }
.phoneicon{

  margin-top:30px;
}
.a{
  list-style: none;
  
}

.sondörtlü ul{
    padding: 3px 5px;
    font-size: 13px;
    float:left;
    color: white;
    width: 33.333%;
    position:relative;
    font-family:"medium";
    text-decoration: none;



    }
.sondörtlü li{
      float:left;
      padding:20px;
      margin:  5px;
      text-align: center;




    }


.ilkdörtlü  a{

color: #0153a6;
text-decoration: none;
text-transform: uppercase;

}
.ilkdörtlü a :hover{
  color: black;
}
.sondörtlü a{
  color: #0153a6;
text-decoration: none;
text-transform: uppercase;
}
.sondörtlü a:hover{
    color: black;
}



</style>
