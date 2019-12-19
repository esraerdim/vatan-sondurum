<template>
    <div class="maindiv"  v-if="visibleone">
          <header><Headers/></header>
         <v-stepper :steps="steps" v-model="step" style="margin-left:450px;width:70%; margin-top:180px"></v-stepper>
        <div  style="float:left; margin-top:100px">
           
            <template v-if="step==1">
            <div class="row-2">
                
             </div>
             <div class="message" @click="kapat">
                 <span v-show="kapatır==true" class="ntf-1">250 TL Üstü Alışverişlerde Duracell Turbo Max 8+4 Kalem Pil Sadece<e style="font-size: 18px;"> 39,90 TL</e> <p style="margin-left:800px; margin-top:-55px;"> X</p></span>
             </div>
             <div class="urun">
                 <span>ÜRÜNLERİM</span>
            </div>
            <div class="kucuk">
                 <span>ÜRÜN</span>
            </div>
            <div class="cart">
            <div > 
            <span class="head">Sipariş Özeti </span>
            <div>
            <span class="ara">Ara Toplam </span>
            <span class="ara2">  ₺ {{toplamfiyat}}</span>
            </div>
            <div style="float:left;   margin-bottom: 60px;">
            <span class="kdv">KDV</span>
            <span class="kdv2">  ₺ 452</span>
           
            <div>
                 <span class="tutar">Tutar</span>
                 <span class="toplam">   ₺  {{toplamfiyat}}</span>

            </div>
            <div>
                <span id="indirim">İndirim kodum var</span>
            </div>
            <button class="devam" @click="uyelik" >DEVAM ET </button>
            </div>
          
        </div>
        </div>
            <ul v-for="(urun,index) in sepeturun" :key="index" style="list-style-type:none;float:left; margin-left:20px;width:60%">
              <li>
                <b-container class="bv-example-row table" >
                    <b-row>
                        <b-col class="col-md-1"><img v-bind:src=urun.resim alt="" style=" margin-top:15px; margin-left: 10px;"></b-col>
                        <b-col class="col-md-5"><p style="margin-top:50px;">   {{urun.ad}}</p></b-col>
                        <b-col class="cold-md-2">
                            <div id="counter1" class="counter">
                            <button class="tik" @click="incrementCounter(index)" ><img src="../assets/yukarı.png"></button>
                            <button class="tik2" @click="decrementCounter(index)" ><img src="../assets/asagı.png"></button>
                            </div>
                        </b-col>
                        <b-col class="cold-md-3" ><p style="margin-top:50px;">{{urun.fiyat * urun.birimadetsayisi}} </p> </b-col>
                        <b-col class="cold-md-1"><button  style="border-radius:3px; display:inline-block; padding:5px 10px; outline:none;color: #757575; font-size: 11px; margin-top:48px; margin-left:100px; ">Sil</button></b-col>
                    </b-row>
                </b-container>
              </li>
            </ul>
            <div style="margin-top:150px">
          
                    <button style="color: #0153a6; border:none; outline : none; background:transparent;float:left;margin-left:30px">Alışverişe Geri Dön </button>
                    <button style="color: #0153a6; border:none; outline : none ; background:transparent; margin-right:100px">Sepeti Boşalt </button>
                    <button  style="color: #0153a6; border:none; outline : none;  background:transparent; margin-right:150px">Sepeti Güncelle </button>
              
            </div>
           
            <div>
                <img src="../assets/reklam2.png" style="float:left; width:64%;margin-left:32px">
             <img src="../assets/reklam3.png" style="float:left; width:64%;margin-left:32px">
            </div>
            </template>
         <template v-if="step === 2">
             <div class="genel">
                 <div class="ems-message ems-message-error" id="plhAdresYokLabel"><span id="ctl00_frmMain_ascTeslimatBilgi_lbfGNL_KAYITYOK">Şimdi ilk adresinizi ekleyin.</span></div>
                 <div><span class="geri"> geri </span></div>
                 <span class="yeni">YENİ ADRES </span> <br> 
                 <div class="form">
                   <span style="tur"> Bireysel </span>  <span class="tur">Kurumsal </span> <br>
                   <div class="kayitismi">
                   <input type="text" placeholder="KAYIT İSMİ[Örnek:ev adresi]"> <br> <br>
                   <input type="text" placeholder="Firma Adı"> <br> <br>
                   <textarea rows="5" cols="50" placeholder="Adres"> </textarea> <br> <br>
                   <select>
                       <option value="Türkiye">TÜRKİYE</option>
                       </select> <br> <br>
                    <select placeholder="Şehir Seçiniz">
                        <option >istanbul </option>
                          <option >Ankara </option>
                            <option >İzmir </option>
                              <option >Bursa </option>
                                <option >Yalova </option>
                                  <option >Çanakkale </option>
                                    <option >Edirne </option>
                    </select> <br> <br>
                       <input type="text" placeholder="İlçe"> <br> <br>
                          <input type="text" placeholder="Posta Kodu"> <br> <br>
                             <input type="text" placeholder="Cep Telefon"> <br> <br>
                                <input type="text" placeholder="Telefon"> <br> <br>
                                   <input type="text" placeholder="Vergi Numarası"> <br> <br>
                                      <input type="text" placeholder="Vergi Dairesi"> <br> <br>
                                      <button style="border:none; outline none; background:#2cc66f;color:white; width:100%; height:30px;">Kaydet </button>



                   </div>
                 </div>
             </div>



         </template>
          <template v-if="step === 3">
              <div style="width:60%">
              <img src="../assets/ode.png" style="width:100%;margin-left:50px;"> <br> <br> <br>
              <div class="step3">
                  
                  <p> Kart Numarası</p> <br>
                   <input type="text"> <br> <br>
                    <p> Son Kullanma tarihi</p> <br>
                   <select> 
                       <option >01</option>
                          <option >02</option>
                             <option >03</option>
                                <option >04</option>
                                   <option >05</option>
                                      <option >06</option>
                                         <option >07</option>
                                            <option >08</option>
                       </select> <br> <br>
                    <select style="float:left;">
                        <option >2019</option>
                          <option >2020</option>
                            <option >2021 </option>
                              <option >2022 </option>
                                <option >2023 </option>
                                  <option >2024 </option>
                                    <option >2025 </option>
                    </select> <br> <br>
                    <p> Kart Üzerindeki İsim </p>
                    <input type="text"> <br> <br> <br>
                    <img src="../assets/onay.png" style="width:100%">
              </div>
              <div class="step4"> <p style="margin-top:530px;text-align:left"> Kredi kartı numaranızı girdiğinizde ödeme seçenekleri burada görünecektir.</p> </div>
              
              </div>
              <div class="sag">
                  <div class="carti" style="height:610px;">
            <div > 
            <span class="head">Sipariş Özeti </span>
            <div>
            <span class="ara">Ara Toplam </span>
            <span class="ara2">  ₺ {{toplamfiyat}}</span>
            </div>
            <div style="float:left;   margin-bottom: 60px;">
            <span class="kdv">KDV</span>
            <span class="kdv2">  ₺ 452</span> <br> <br>
           
            <div>
                 <span class="tutar" style="margin-left:-220px" >Tutar</span>
                 <span class="toplam" style="margin-right:45px">   ₺  {{toplamfiyat}}</span> 

            </div> <br> <br>
            <div>
                <span id="indirim">İndirim kodum var</span>
            </div> <br>
            <img src="../assets/ek.png" style="width:100%">
            </div>
          
        </div>
        </div>
              </div>
              <div>
              <img src="../assets/adres.png" style="width:78%; float:left;">
              </div>
              
              </template>        
        </div>
        
        <div>
         <img src="../assets/aa.png" style="margin-left:-50px;">
        </div>
        <div v-show="sepet == false">
            <div>
                <img src="../assets/üst.png" style="width:100%">
            </div>
             <div class="row-1">
                <div class="cart-logo">
                    <img src="../assets/vatanlogo.png" style="width:15%">
            </div>
        </div>
        <img src="../assets/urun.png" style="width:100%">
        <div>
            <button class="backhome" @click="anasayfa"> <a style="color:#fff"> ALIŞVERİŞE BAŞLA </a></button>
        </div>
        <div >
            <img src="../assets/bilgi.png" >
        </div>
    </div>

    </div>
    



  
</template>
<script>

import Headers from './Headers.vue'
import { VStepper } from 'vue-stepper-component'
export default {
     name:'sepetim',
     components:{
     Headers,
      VStepper

   },
   data(){
       return{
           visibleone:false,
           sepeturun:"",
           toplamfiyat: 0,
           title:"Counter",
          counter:1,
          sepet: true,
          kapatır:true
          
       }
   },
   methods:{
     
       sepetibosalt(){
           this.sepet=false;
       },
       kapat(){
         this.kapatır =false;
       },
       
     incrementCounter(id){
          this.sepeturun[id].birimadetsayisi++;
          this.toplamfiyat = this.toplamfiyat + this.urunler[id].fiyat
      },
      decrementCounter(id){
          if(this.sepeturun[id].birimadetsayisi > 1)
          {
              this.sepeturun[id].birimadetsayisi--;
              this.toplamfiyat = this.toplamfiyat - this.urunler[id].fiyat
          }
          
      },
     

   },
  
   created(){

        fetch('https://vatancomp.herokuapp.com/getstok')
        .then(response => response.json())
        .then(data => {
        
            this.sepeturun=data;
            this.visibleone=true;
           
          }); 

   },
    
  
}
    

</script>
<style  scoped>
 /*
.row{
    color: #424242;
 
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
    padding: 15px 0;

}
*/
.step3{
    margin:auto;
    margin-left:50px;
    display: inline-block;
    vertical-align: top;
    width: 60%;
    padding-top: 20px;
    padding-bottom: 20px;
    border: 2px solid #e0e0e0;
 
    clear: both;
}
.step4{
    display: inline-block;
    vertical-align: top;
    width: 60%;
    padding-top: 20px;
    padding-bottom: 20px;
    border: 2px solid #e0e0e0;
   margin-right:-200px;
   height:642px;
}
.kayitismi{
        text-align: center;
        display: inline-block;
        margin-top:10px;
        margin-right:35px;
        
}
.sag{
    float:right;
    width:30%;
    margin-right:-100px;
    margin-top: -645px;
    max-height: 600px;
    background-color: #757575;
}
.textarea {
    resize: none;
    height: auto;
    font-size: 18px;
    color: #424242;
}
input[type="text"], input[type="password"], input[type="file"], select, textarea, .dropdown>span {
    box-shadow: none;
    border: 0;
    outline: 0;
    padding: 15px;
    width: 100%;
    height: 50px;
    line-height: 30px;
    color: #9e9e9e;
    background: #f5f5f5;
    font-size: 14px;
    font-family: "regular";
    border: 0;
    border-radius: 3px;
}
.yeni{
    color: #424242;
    font-size: 18px;
    text-align: center;
}
.geri{
   float:left;
   margin-left:80px;
    color: #0153a6;
}
#plhAdresYokLabel {
    background:#2196f3;
    margin-bottom: 30px;
        padding: 15px;
    font-family: "regular";
    border-radius: 5px;
    color: #fff;
    width:900px;
    text-align: left;
    margin-left:80px;

    
    
    }
   
.cart{
    margin-top:180px;
    padding-left: 20px;
    margin-right: 50px;
    position: relative;
    padding-bottom: 80px;
    background: #f5f5f5;
    float:right;
    height: 1010px;
    width:22%;
}
.carti{
    background: #f5f5f5;
    float:right;
    width:100%;
}
.nft-1{
    line-height: 1.2;

}
.message{
    color: #fff;
    line-height: 55px;
    display: block;
    background: #2196f3;
    border-radius: 10px;
    display: inherit !important;
    width: 58%;
    margin-left: 50px;

}


.table{
    width: 20%;
    padding-left: 10px!important;
    display: table-cell;
   
}
.row{
    font-family: "regular";
    font-size: 14px;
    color: #424242;
    border-width: 1px ;
    border-style: solid;
    border-color: #e0e0e0;
    padding: 15px 0;

}
.counter{
    color: #9e9e9e;
    background:#fff;
    width:110px;
    height:50px;
    margin-left:30px;
    margin-top: 40px;
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
.cart-logo{
    margin-bottom: 30px;
    width: 100%;
    margin-top: 30px;
    text-align: center;
}
.row-1{
    border-bottom: 1px solid #e0e0e0;
    height: 100px;
}
.row-2{
    margin-bottom: 50px;
    text-align: center;
       border-bottom: 1px solid #e0e0e0;
}
.backhome{
    background: #0153a6;
    margin-top: 10px;
       border: none;
    outline:none;

}
.backhome a{
    position: relative;
    display: inline-block;
    padding: 17px 20px 16px 20px;
    text-transform: uppercase;
    font-size: 14px!important;
    color: #fff;
    font-family: "medium";
    text-align: center;
    font-weight: normal;
 
}
.backhome a:hover{
        background-color: #2196f3;
    color: #fff;

}
.urun{
        font-size: 18px;
    color: #0153a6;
    display: inline-block;
    padding-bottom: 15px;
    margin-right:1310px;
}
.kucuk{
    font-size: 12px;
    color: #9e9e9e;
    background: #fff;
    padding: 0 0 5px 0;
    text-align: center;
    margin-right: 1320px;
}
.head{

    display: block;
    padding: 0 0 30px 0;
    font-family: "medium";
    font-size: 18px;
    line-height: 1;
    text-align: center;
    position: relative;
    margin-top: 60px;
    font-weight: 600;

}
.tur{
    margin-left:10px;
    color:inherit;
    margin-right:100px;
}
.ara{
    font-size: 14px;
    color: #757575;
    font-weight: normal;
    float: left;
    margin-left: 15px;
}
.ara2{
    font-size: 14px;
    color: #757575;
    font-weight: normal;
    float: right;
    margin-right: 55px;
}
.kdv{
    margin-top:30px;
    font-size: 14px;
    color: #757575;
    font-weight: normal;
    float: left;
    margin-left:20px;
 

}
.kdv2{
       margin-top:30px;
    font-size: 14px;
    color: #757575;
    font-weight: normal;
    float: left;
    margin-left: 150px;
    
}
.tutar{
    font-size: 24px;
    color: #0153a6;
    font-weight: 600px;
    float: left;
    margin-top: 20px;
    margin-left:20px;
 
}
.toplam{
    color: #0153a6;
    font-size: 24px;
     font-weight: 600px;
     float:right;
     margin-top:20px;
    margin-right: -30px;
}
#indirim{
    font-family: "regular";
    color: #757575;
    cursor: pointer;
    float:left;
    margin-left:10px
   
}
.devam{
    display: block;
    background: #15c060;
    font-size: 18px;
    color: #fff;
    padding: 15px;
    text-align: center;
    padding: 14px 10px;
    position: relative;
    text-transform: uppercase;
    font-size: 14px!important;
    border-radius: 3px;
    margin-top:150px;
    outline:none;
    border-color:#15c060;
    width: 120%;
}
.yeni{
    text-align: center;
    color:#424242;
}


</style>