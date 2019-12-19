<template>
 <div>
 <Headers/>
    <div class="main-container" style="margin-top:100px">
        <div class="navigasyon">
            <div class="urunnavigasyon">
                <span class="computer">
                    <a class="seviye1" href="">Tüketici Elektroniği</a>
                    <a class="seviye2" href="">Cep Telefonu</a>
                    <a class="seviye3" href="">Akıllı Telefon</a>
                    <a class="seviye4" href="">XIAOMI</a>
        
                  </span>
            </div>
        </div>
        <b-container>
            <b-row style="width: 620px; height: 495px;">
                <b-col class="col-md-2 sol-kisim">
                    <ul style="margin-top: 10px; list-style-type: none;" >
                        <li style="margin-top: 10px;">
                            <b-row style="height: 55px; width: 55px;"><img @click="img = img1" :src="img1"  style="width: 100%; height: auto;"></b-row>
                        
                        </li>
                        <li style="margin-top: 10px;">
                            <b-row style="height: 55px; width: 55px;"><img @click="img = img2" :src="img2" style="width: 100%; height: auto;"></b-row>
                        
                        </li>
                        <li style="margin-top: 10px;">
                            <b-row style="height: 55px; width: 55px;"><img @click="img = img3" :src="img3" style="width: 100%; height: auto;"></b-row>
                        
                        </li>
                        <li style="margin-top: 10px;">
                            <b-row style="height: 55px; width: 55px;"><img @click="img = img4" :src="img4" style="width: 100%; height: auto;"></b-row>
                        
                        </li>
                        <li style="margin-top: 10px;">
                            <b-row style="height: 55px; width: 55px;"><img @click="img = img5" :src="img5" style="width: 100%; height: auto;"></b-row>
                        
                        </li>
                    </ul>
                </b-col>
                <b-col class="col-md-10 sag-kisim">
                  <button style="border:none; outline:none; background:transparent" v-b-modal.modal-center2>  <img  :src="img" alt="" style="width: 412px; height: 412px; padding: 10%; border: none !important;"> </button>
                  <b-modal id="modal-center2" >
                      <b-carousel
                        id="carousel-1"
                        v-model="slide"
                        :interval="4000"
                        controls
                        indicators
                        background="white"
                        img-width="1024"
                        img-height="480"
                        style="text-shadow: 1px 1px 2px #333; opacity:1;"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                        >
                       <b-carousel-slide>
                            <template v-slot:img>
                                 <img
                             class="d-block img-fluid w-100"
                             width="1024"
                             height="480"
                        src='https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/XIAOMI/thumb/TeoriV2-104892_medium.jpg'
            
                         >
                            </template>
                         </b-carousel-slide>
                          <b-carousel-slide>
                            <template v-slot:img>
                                 <img
                             class="d-block img-fluid w-100"
                             width="1024"
                             height="480"
                        src='https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/XIAOMI/thumb/TeoriV2-104892-2_medium.jpg'
            
                         >
                            </template>
                         </b-carousel-slide>
                          <b-carousel-slide>
                            <template v-slot:img>
                                 <img
                             class="d-block img-fluid w-100"
                             width="1024"
                             height="480"
                        src='https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/XIAOMI/thumb/TeoriV2-104892-3_medium.jpg'
            
                         >
                            </template>
                         </b-carousel-slide>
                          <b-carousel-slide>
                            <template v-slot:img>
                                 <img
                             class="d-block img-fluid w-100"
                             width="1024"
                             height="480"
                        src='https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/XIAOMI/thumb/TeoriV2-104892-4_medium.jpg'
            
                         >
                            </template>
                         </b-carousel-slide>
                         
                      </b-carousel>
                        
                  </b-modal>
                </b-col>
            </b-row>
        </b-container>
    </div>
    <div class="product">
        <div style="width:55px;float:left">
            <img src="../assets/ust.png" style="width:600px;">
        </div>
        <div  >
            <img src="../assets/secenek.png" style="width:600px; margin-top:258px; margin-left:-55px;">
        </div>
         <div >
             <ul style= "list-style-type:none;float:left">
            <a href="#urunozellik" style="border:none; outline:none"> <img src="../assets/ozellikler.png" style="width:100px; margin-top:30px;float:left;margin-left:-60px;"> </a>
            <a href="#urunozellik" style="border:none; outline:none"> <img src="../assets/dd.png" style="width:450px; margin-top:30px;float:left;margin-left:0px ; height:50px"> </a>
            </ul>
        </div>
        <a href="#yorumyap" style="border:none; outline:none; background:transparent;"> <img src="../assets/ilk.png" style="width:450px; margin-top:30px;float:left;margin-left:0px ; height:50px"> </a>
            
            
        </div>
        <div class="altnavigation" >
                <b-tabs content-class="mt-3" justified >
                <b-tab title="Genel Bakış" >
                    <img src="../assets/foto.png" style="width:100%;float:left">
                    <img src="../assets/a.png" style="width:70%;float:left;margin-left:250px">

                </b-tab>
                <b-tab title="Ürün Özellikleri" id="urunozellik" >
                    <div class="main-container" id="urunozellik">
        <b-container class="bv-example-row">
            <b-row class="text-center" style="background-color: #f5f5f5;">Teknik Özellikler</b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Isıtıcı Tipi</b-col>
                <b-col class="col-md-10" style ="margin-top:-47px;margin-left:189px">Radyatör</b-col>
            </b-row>
        </b-container>

        <b-container class="bv-example-row" style="margin-top: 18px;">
            <b-row style="background-color: #f5f5f5;;">Güç</b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Güç</b-col>
                <b-col class="col-md-10" style ="margin-top:-48px;margin-left:189px">2900W</b-col>
            </b-row>
        </b-container>

        <b-container class="bv-example-row" style="margin-top: 18px;">
            <b-row style="background-color: #f5f5f5;;">Diğer</b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Tekerlek</b-col>
                <b-col class="col-md-10" style ="margin-top:-47px;margin-left:189px">Var</b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Askılık nemlendirici</b-col>
                <b-col class="col-md-10" style ="margin-top:-47px;margin-left:189px">Var</b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Isı ayarlı termostat</b-col>
                <b-col class="col-md-10" style ="margin-top:-47px;margin-left:189px">var</b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Operasyon Işık</b-col>
                <b-col class="col-md-10" style ="margin-top:-47px;margin-left:189px">Var</b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Led Ekran</b-col>
                <b-col class="col-md-10" style ="margin-top:-47px;margin-left:189px">Yok</b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Devrilmeye Karşı Kapanma</b-col>
                <b-col class="col-md-10" style ="margin-top:-47px;margin-left:189px">Var</b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Ses Seviyesi</b-col>
                <b-col class="col-md-10" style ="margin-top:-47px;margin-left:189px">Düşük Ses Seviyesi</b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Fan Modu</b-col>
                <b-col class="col-md-10" style ="margin-top:-47px;margin-left:189px">Var</b-col>
            </b-row>
        </b-container>

        <b-container class="bv-example-row" style="margin-top: 18px;">
            <b-row style="background-color: #f5f5f5;;">Genel Özellikler</b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Menşei</b-col>
                <b-col class="col-md-10" style ="margin-top:-47px;margin-left:189px">Çin</b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-2" style="background-color: #f5f5f5;;">Garanti</b-col>
                <b-col class="col-md-10" style ="margin-top:-47px;margin-left:189px">24</b-col>
            </b-row>
        </b-container>
        </div>
                
</b-tab>
                <b-tab title="Yorumlar(0)">
                    <img src="../assets/yorum.png">


                </b-tab>
                <b-tab title="Ödeme Seeçnekleri">
                    <div>
                        <img src="../assets/odeme.png" style="width:70%">
                        <img src="../assets/odeme2.png" style="width:70%">
                        <img src="../assets/odeme3.png" style="width:70%">
                    </div>
                </b-tab>
                </b-tabs>
                </div>
         
                
  
                
 </div>
</template>

<script>
import Headers from './Headers.vue'
import altkisim from './altkisim.vue'
export default {
    name:'Urun Sayfasi',
     components:{
     Headers,
  
   },
    data(){
        return{
            img: 'https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/XIAOMI/thumb/TeoriV2-104892_medium.jpg',
            img1: 'https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/XIAOMI/thumb/TeoriV2-104892_medium.jpg',
            img2: 'https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/XIAOMI/thumb/TeoriV2-104892-1_medium.jpg',
            img3: 'https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/XIAOMI/thumb/TeoriV2-104892-2.jpg',
            img4: 'https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/XIAOMI/thumb/TeoriV2-104892-3_medium.jpg',
            img5: 'https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/XIAOMI/thumb/TeoriV2-104892-4_medium.jpg',
            slide: 0,
            sliding: null

        }
    },
     methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style scoped>
*{
    display: inline-block;
    vertical-align: top;
}

img{
    border: 1px solid #e0e0e0;
}
.urunnavigasyon{
    margin-left:0px;
    padding: 0;
    height: 30px;
    
    margin-right:750px;
}
.navigasyon a, .navigasyon h1,.navigasyon.computer a{

display: inline-block;
    margin-left: 10px;
    text-decoration: none;
    font-size: 12px;
    color: #9e9e9e;
    font-weight: normal;
    
}
.navigasyon a:first-child:before, .navigasyon h1:first-child:before, .navigasyon .computer:first-child:before {
    display: none;
}
.navigasyon a:before, .navigasyon h1:before, .navigasyon .computer:before {
    display: inline-block;
    content: "\e923";
    margin-right: 10px;
    font-family: 'icomoon';
    color: #9e9e9e;
    font-size: 6px;
    line-height: 6px;
    position: relative;
    top: -1px;
    height:700px;
}
.product{
    float:right;
    text-decoration: none;
    font-size: 12px;
    background: #f5f5f5;
    font-weight: normal;
    margin-top:-510px;
    margin-right: 20px;
 height:700px;
    width: 600px;
    margin-left:70px;
}
.yorum{
   width: 70%;
    background: #f5f5f5;
    padding: 20px;
    border-radius: 3px;
    display: inline-block;
    margin-left:24px;
}
.toplamyorum{
    font-size: 18px;
    font-family: "medium";
    line-height: 25px;
    float: left;
    margin-top:-15px;
    

}
.comment{

    display: block;
    font-size: 14px;
    font-family: "regular";
    font-weight: normal;
    float: left;
    margin-top:15px;
    margin-left:-130px;

}
.olumlu{
    color: #15c060;
    font-size: 14px;
    font-family: "medium";

}
.olumsuz{

    color: #ff1744;
     font-size: 14px;
    font-family: "medium";
}
.yorumyap{
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    font-family: "medium";
    text-align: center;
    font-weight: normal;
    background: #2196f3;
    border:none;
    height:50px;
    width:100px;
    float:right;
}
.yorumyap a{
    color:#fff;
}

.bulunamadı{
    margin-top:80px;
    padding: 10px 15px;
    font-size: 13px;
    color: #3e3f44;
}
#yorumyap{
    font-size: 17px;
    line-height: 25px;
    margin-top: 20px;
    }
.yorumekle{
    text-align: center;
    font-size: 18px;
    font-family: "medium";
    display: block;
    color:black;

}
.yorumyapmak{
font-size: 14px;
line-height: 25px;
text-align: center;
}
.magazabul{
    border-color: transparent;
    background:#fff;
    margin-top:30px;
    margin-right:300px;
    width:50px;
    height:50px;
}
.telefon{
  
    border-color: transparent;
    background:#fff;
    margin-top:10px;
    margin-right:350px;
    width:50px;
    height:50px;

}
#footer{
    margin-top:80px;
}


</style>