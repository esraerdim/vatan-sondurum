<template>

<div class="sayfadisdiv">
<div>
    <header><Headers/></header>
</div>

<div class="navigasyon">
    <div class="urunnavigasyon">
    <span class="computer">
        <a class="seviye1" href="">Küçük Ev Aletleri</a>
        <a class="seviye2" href="">Elektrikli ev Aletleri</a>
        <a class="seviye3" href="">Isıtıcılar</a>
        <a class="seviye4" href="">FAKIR</a>
        <a class="seviye5" href="">RF11 TURBO PLUS</a>
        
    </span>
   
        <div class="urundetay">
            <button style="outline:none; border:none; background-color: white;" id="show-btn" @click="$bvModal.show('bv-modal-example')">
                <img src="https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/APPLE/thumb/v2-83636_medium.jpg">
            </button>
           
        </div>
        </div>
    </div> 
    <div class="productdetail">
        
            <a class="detail" style="color: #9e9e9e;" href="">RF11 TURBO PLUS </a>
            <a class="seviye3" style="color: #9e9e9e; font-size:12px;" href="">87965 </a>
            <h1 >FAKIR RF11 TURBO PLUS 11 DİLİM YAĞLI RADYATÖR</h1>
            <h3>*1000w/1500w/2500w/400w - 2900w *11 dilim yağlı radyatör *Turbo fan *Isı ayarlı termostat *Aşırı ısınma koruma fonksiyonu *Operasyon ışığı *Kolay manevra için 4 tekerlek *Çevre korumalı yağ
                 *Düşük ses seviyesi *Devrilme sonrası devre kesici fonksiyon *Kablo saklama yuvası *Elbise askılıklı nemlendirici </h3>
                 <ul >
             <li style="list-style=none"> <img src="../assets/fiyat.png" class="fiyat"> </li>
            
             <li style="margin-right:350px; text-decoration:underline ;list-style=none"> <a  style="color:#9e9e9e ;font-size:12px " href="">107,38 TL'den başlayan taksitlerle</a> </li>
             </ul>
             <div id="counter1" class="counter">
                 <button class="tik" @click="incrementCounter"  ><img src="../assets/yukarı.png"></button>
                 <button class="tik2" @click="decrementCounter" ><img src="../assets/asagı.png"></button>

                 <div class="adeet">{{counter}}adet</div>
                 
                 
                 </div>
                 <div style="margin-top:-90px" >
                     <div style="margin-left:180px;">
                <button STYLE="border:none; outline:none; background: #15c060;" @click="sepeteEkle(0)"><img src="../assets/sepeteekle.png" style="width:300px"></button>
                
               
                </div>
                
                     
                        

                 </div>
                 
                <div class="like">
                    <a > <img src="../assets/kalp.png" style="margin-top:15px"></a>

                </div>
                <div class="özellikler">
                    <div class="text-center my-3" style="float:left;">
                        <button v-b-popover.hover.bottom="'Bu ürüne kargo bedava.'" style="border:none ;width:85px;background: #2cc66f; float:left;">
                             <img src="../assets/kargob.png" >
                        </button>
                    </div>
                    <div class="text-center my-3" style="float:left;">
                        <button v-b-popover.hover.bottom="' siparişlerde geçerlidir. Bu ürünler için hafta içi 16:00’a kadar verilen siparişler aynı gün kargoya verilir. İlgili üründen 1 adetten fazla alımlarda, siparişinizde Bugün Kargoda ikonu olmayan başka bir ürün var ise veya sipariş 3D Secure ile verilmemişse bu hizmetten yararlanılamaz.'" style="border:none ;width:85px;background: #2cc66f; float:left; background:blue; height:57px;" >
                           <img src="../assets/magazateslim.png">
                            </button>
                    </div>
                    <div class="text-center my-3" style="float:left;">
                        <button v-b-popover.hover.bottom="'Sepetin teslimat aşamasında mağazadan teslimat seçeneğini ve size uygun teslim almak istediğiniz mağazayı seçerek sipariş verebilirsiniz. 1 saat içerisinde seçtiğiniz mağazadan ürününüzü teslim alabilirsiniz.'" style="border:none ;width:85px;background: #2cc66f; background-color:blue;">
                             <img src="../assets/garanti.png" >
                        </button>
                    </div>
                    
                </div>
                 <div class="sırala">
                    
                    <a href="#urunozellik"><img src="../assets/özellikler.png" style=""></a>
                     <a href> <img src="../assets/karsılastır.png" style=""></a>
                     <div >
                         <div style="margin-top:-50px; margin-left:50px;">
                            <button v-b-modal.modal-center style="background-color:#f5f5f5;border:none; margin-left:220px ">
                                 <img src="../assets/indirimbildir.png"> </button>
                           
                            
                     
                                     </div>
                                </div>
                                </div>
            
        
       <div style="">
        <button style="background-color:#f5f5f5;border:none; margin-left:350px; "> <img src="../assets/magazalarda.png" style="width:100%"> </button>
            </div>
            <div>
              <img src="../assets/garantisure.png" style="margin-top:50px"> <div class="d-style">
                 
                </div>
                

    </div>
                </div>



               

          
        </div>
        

    

</template>

<script>   
import Headers from './Headers.vue'

export default {
    component:{
        Headers,

    },
  data(){
      return{

          title:"Counter",
          counter:1
      };

  },
  methods:{
      incrementCounter(){
          this.counter++;
      },
      decrementCounter(){
          this.counter--;
      }
      
  }
};



</script>

<style scoped>
.sepetegit{

    float: right;
    background: #15c060!important;
    padding: 17px 30px 16px 30px;
    color:#fff;
    border:none;
    outline:none;
}
.d-style{
    margin-left:500px;
    margin-top:-50px;
}
.u-giris{
     font-size: 18px;
    color: #2196f3;
    font-family: 'medium';
}
.row{
    height: 46px;
    border: 1px solid gray;
}
.col{
    height: 46px;
    border: 1px solid gray;
}


.active-nav-item-class{
  color:blue;
}

.active-tab-class{
    color:blue;
}
.deneme{
    margin-top:150px;
}
div{
    display:block;
}
body{
    font-family: "regular";
    font-size: 14px;
    color: #424242;
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
}
.productcode{
    display: inline-block;
    margin-left: 10px;
    text-decoration: none;
    font-size: 12px;
    color: #9e9e9e;
    font-weight: normal;
}
.productcode:before{
    display: inline-block;
    margin-right: 10px;
    font-family: 'icomoon';
    color: #9e9e9e;
    font-size: 6px;
    line-height: 6px;
    position: relative;
    top: -1px;
}
.altnavigation{
    margin-top:530px;
    width: 100%;
    display: table;
    text-align: center;
    height:80px;
    padding-right:30px;
    
    
}
.urundetay{
 margin-top:50px;
 float:left;
 background:#fff;
 height:750px;
}
.kalorifer{
    margin-left:0px;
    float:left;

}
.productdetail{
    width: 600px;
    height:850px;
    float: right;
    background: #f5f5f5;
    margin-top:-25px;
    text-decoration:none;
    margin-right:70px

}
.detail{
    display: inline-block;
    margin-right: 400px;
    text-decoration: none;
    font-size: 12px;
    color: #9e9e9e;
    font-weight: normal;
}
.kod{
    display: inline-block;
    text-decoration: none;
    font-size: 12px;
    color: #9e9e9e;
    font-weight: normal;
}
.productdetail h1 {
    font-size: 18px;
    color: #424242;
    font-weight: 700;
    margin: 5px;
    text-align:left;
    margin-left:30px;
}
.productdetail h3 {

    margin: 0;
    margin-top:10px;
    padding: 10px;
    background: #f1f1f1;
    position: relative;
    border-radius: 3px;
    display: inline-block;
    font-weight: normal;
    font-family: "regular";
    font-size: 14px;
    line-height: 17px;
    color: #424242;
    text-align:left;
    width:90%;

}
.fiyat{
    margin-right:400px;
    margin-top:20px;
}
.taksit{
    text-decoration: underline;
    font-size: 12px;
  

}
.counter{
    color: #9e9e9e;
    background:#fff;
    width:110px;
    height:50px;
    margin-left:50px;
}
.adeet{
    font-size:15px;
    float:right;
    margin-top:10px;
   

}
.tik{
    border:none;
    background:transparent;
    float:right;
    margin-top:-2px;
 
}
.tik2{
    border:none;
    background:transparent;
    width:50px;
    float:right;
    margin-top:28px;
    margin-right:-55px;


}
.sepeteekle{
    border:none;
    background: #15c060;
    border-radius: 3px;
    float:right;
    margin-top:-48px;
    margin-right:110px;

  
}
.like{
   width: 50px;
    height: 50px;
    background: #e0e0e0;
    padding: 0;
    border-radius: 3px;
    margin-right: 40px;
    float:right;
    margin-top:-50px;
}
.like a{
    color:#e0e0e0;
}
.like a :hover{
   color:blue;
}
.özellikler{
    float:left;
    margin-top:10px;
    margin-left:50px;
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
.fotograf{
    float:left;
    width:50%;
    background-color: white;
}
.fotograf img{
    height:400px;
    margin-left:50px;
}
.bilgikalo{
    width:50%;
    float: right;
    margin-right:-250px;
    background-color: white;
}
.bilgikalo h1{
   font-size: 30px!important;
    line-height: 40px;
    color: #424242;
}
.urunack{
    font-size: 18px;
    color: #757575;
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
#altgiris{
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
.giris-uye{

font-size: 14px!important;
color: #fff;
font-family: "medium";
 text-align: center;
font-weight:normal;
background: #2196f3;
border:none;
width:22%;
height:40px;

}
.productdetail ul li {
    list-style: none;
}
.sırala{
   
    margin-top:50px;
    margin-right:250px;

}
.sırala ul li{
    list-style:none;
}
.form-inner{
    position:relative;
    margin-top:20px;
    margin-bottom: 20px;

}
.field{
    max-width: 375px;
    margin-bottom: 20px;
    position: relative;
}
.form-label{
    line-height: 15px;
    font-family: "regular";
    font-size: 14px;
    line-height: 30px;
    color: #9e9e9e;
    position: absolute;
    top: 12px;
    left: 0;
    padding-left: 15px;
    pointer-events: none;
    z-index: 1;

}

.uye_mail{
font: inherit;
margin-top:30;
overflow: visible;

}
.uye_sifre{
font: inherit;
margin-top:30;
overflow: visible;
}
input[type="text"],input[type="password"] {
    
    padding: 15px;
    width: 100%;
    height: 50px;
    line-height: 30px;
    color: black;
    background: #f5f5f5;
    font-size: 14px;
    font-family: "regular";
    border: 0;
    border-radius: 3px;
    margin-left:100px;
}
input{
    overflow: visible;
    font: inherit;
    margin: 0;
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 0px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
}
.inputuye{
    font-family: "dd";
    font-size: 12px;
    color: #000;
}
.mail{
    margin-left:90px;
    margin-top:-20px;
}
.sifre{
    margin-left:90px;
    margin-top:-20px;
}
</style>
