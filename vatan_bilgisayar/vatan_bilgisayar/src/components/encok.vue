<template>
    <div class="anadiv" v-if="visibleone">
        <header><Headers/></header>
        <div class="sonuc" style="margin-left:30px">
           <p> Cep Telefonu</p> <br/>

        </div>
        <div class = "altpage">
            <div class="kategori" style="margin-left:50px">
               <span class="aksesuar"><a href=""> Aksesuar Ürünleri(1)</a></span>
                <div class="menu">
                        <div>
                                        <span> <a href="">Çantalar ve Kılıflar(1)</a></span>
                                        <button v-on:click="show = !show" style="border:none; outline:none; background:transparent;">
                                            <img src="../assets/asagı.png">
                                        </button>
                                        <div name="fade">
                                            <div v-if="show">
                                                 <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Notebook Çantaları (1)</a></span>
                                              
                                            </div>

                                        </div>
                                         <div>
                                            <img src="../assets/div.png" style="margin-right: 30px;">
                                         </div>
                         </div>
                         </div>
                        <div>
                           <span style="margin-right:45px;"> <a href="">Bilgisayar(1)</a></span>
                        </div>
                        <div>
                           <span style="margin-right:66px;"> <a href="">Tablet(1)</a></span>
                           <div>
                               <img src="../assets/div.png">
                            </div>
                         </div>
                        <div>
                            <span style="margin-right:36px;"> <a href="">Çevre Bilimleri(9)</a></span>
                        </div>
                        
                         <div style="margin-left: 36px;">
                                        <span> <a href="">Hoparlör ve Speaker(9)</a></span>
                                        <button v-on:click="open = !open" style="border:none; outline:none; background:transparent;">
                                            <img src="../assets/asagı.png">
                                        </button>
                                        <div name="fade">
                                            <div v-if="open">
                                                 <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Bluetooth Hoparlör(9)</a></span>
                                            </div>
                                            <div style="margin-right:35px;">
                                              <img src="../assets/div.png">
                                            </div>
                                        </div>
                         </div>
                         <div>
                           <span style="margin-right:22px;"> <a href="">Network Ürünleri(2)</a></span>
                        </div>
                        <div style="margin-left: 26px;">
                                        <span> <a href="">Akıllı Ev Sistemleri(2)</a></span>
                                        <button v-on:click="op = !op" style="border:none; outline:none; background:transparent;">
                                            <img src="../assets/asagı.png">
                                        </button>
                                        <div name="fade">
                                            <div v-if="op">
                                                 <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Kameralar (2)</a></span>
                                              
                                            </div>

                                        </div>
                                         <div>
                                            <img src="../assets/div.png" style="margin-right: 30px;">
                                         </div>
                         </div>
                          <div>
                           <span style="margin-right:22px;"> <a href="">OEM ÜRÜNLERİ(7)</a></span>
                        </div>
                        <div style="margin-right: 16px;">
                                        <span> <a href="">Monitörler (1)</a></span>
                                        <button v-on:click="monitor = !monitor" style="border:none; outline:none; background:transparent;">
                                            <img src="../assets/asagı.png">
                                        </button>
                                        <div name="fade">
                                            <div v-if="monitor">
                                                 <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Oyuncu Monitörü(1)</a></span>
                                              
                                            </div>

                                        </div>
                                         <div>
                                            <img src="../assets/div.png" style="margin-right: 10px;">
                                         </div>
                        </div>
                         <div style="margin-left:35px;">
                                        <span> <a href="">OEM HAZIR SİSTEMLER (6)</a></span>
                                        <button v-on:click="toplama = !toplama" style="border:none; outline:none; background:transparent;">
                                            <img src="../assets/asagı.png">
                                        </button>
                                        <div name="fade">
                                            <div v-if="toplama">
                                                 <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">TOPLAMA(6)</a></span>
                                              
                                            </div>

                                        </div>
                                         <div>
                                            <img src="../assets/div.png" style="margin-right: 50px;">
                                         </div>
                                         <div>
                                            <span style="margin-right:55px;"> <a href="">Tüketici Elektroniği(59)</a></span>
                                         </div>
                                    <div style="margin-right: 16px;">
                                        <span> <a href="">Fotoğraf Makinesi (15)</a></span>
                                        <button v-on:click="kamera = !kamera" style="border:none; outline:none; background:transparent;">
                                            <img src="../assets/asagı.png">
                                        </button>
                                        <div name="fade">
                                            <div v-if="kamera">
                                                 <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Aynasız Sistem SLR(1)</a></span>
                                               <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Dijital Kompakt(5)</a></span>
                                               <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Dijital SLR(9)</a></span>
                                              
                                              
                                            </div>

                                        </div>
                                         <div>
                                            <img src="../assets/div.png" style="margin-right: 30px;">
                                         </div>
                            </div>
                             <div style="margin-left:15px">
                                        <span> <a href="">Fotoğraf Makinesi Lensleri(7)</a></span>
                                        <button v-on:click="lens = !lens" style="border:none; outline:none; background:transparent;">
                                            <img src="../assets/asagı.png">
                                        </button>
                                        <div name="fade">
                                            <div v-if="lens">
                                                 <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Lens(6)</a></span>
                                               <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Tripot(1)</a></span>
                                              
                                              
                                            </div>

                                        </div>
                                         <div>
                                            <img src="../assets/div.png" style="margin-right: 55px;">
                                         </div>
                        </div>
                        <div style="margin-right:40px">
                                        <span> <a href="">Hafıza Kartı(29)</a></span>
                                        <button v-on:click="hafıza = !hafıza" style="border:none; outline:none; background:transparent;">
                                            <img src="../assets/asagı.png">
                                        </button>
                                        <div name="fade">
                                            <div v-if="hafıza">
                                                 <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Micro SD(21)</a></span>
                                               <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">SDHC(8)</a></span>
                                              
                                              
                                            </div>

                                        </div>
                                         <div>
                                            <img src="../assets/div.png" style="">
                                         </div>
                        </div>
                         <div style="margin-right:40px">
                                        <span> <a href="">MP3 Çalar (5)</a></span>
                                        <button v-on:click="mp3 = !mp3" style="border:none; outline:none; background:transparent;">
                                            <img src="../assets/asagı.png">
                                        </button>
                                        <div name="fade">
                                            <div v-if="mp3">
                                                 <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Mp3 Çalar(4)</a></span>
                                               <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Su Geçirmez / Giyilebilir</a></span>
                                              
                                              
                                            </div>

                                        </div>
                                          <div>
                                               <span style="padding-right: 50px;"> <a href="">WALKMAN(1)</a></span>
                                              
                                            </div>
                                         <div>
                                            <img src="../assets/div.png" style="">
                                         </div>
                        </div>
                         <div style="margin-left:40px">
                                        <span> <a href="">Video Ve Aksiyon Kameralar(3)</a></span>
                                        <button v-on:click="video = !video" style="border:none; outline:none; background:transparent;">
                                            <img src="../assets/asagı.png">
                                        </button>
                                        <div name="fade">
                                            <div v-if="video">
                                                 <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Aksiyon ve Outdoor Kamera(2)</a></span>
                                               <div class="check">
                                                    <label class="container"> 
                                                        <input type="checkbox" >
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    
                                                  </div>
                                               <span style="padding-left: 10px;"> <a href="">Handycam(1)</a></span>
                                              
                                              
                                            </div>

                                        </div>
                                         <div>
                                            <img src="../assets/div.png" style=" margin-right:100px">
                                         </div>
                        </div>
                         </div>
                                                
               </div>
            </div>
            <div class="products">
                 <div class="list-prob">
                     <ul style="float:left;">
                     <li style="float:left; list-style:none"> <div class="dropdown selectlist">
                    <button class="btn btn-secondary dropdown-toggle" style="background:transparent; border:none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ÜRÜNLER
                    </button>
                    <div class="dropdown-menu sıralamalist" aria-labelledby="dropdownMenuButton" id="ddselet">
                       <a class="dropdown-item" style="color:red">Son Eklenen Üstte</a>
                        <a class="dropdown-item" style="color:red">Fiyata Göre Artan</a> 
                         <a class="dropdown-item" style="color:red">Fiyata Göre Azalan</a> 
                         <a class="dropdown-item"  style="color:red">A dan Z ye</a> 
                          <a class="dropdown-item"  style="color:red">Z den A ya</a> 
                        <a class="dropdown-item" style="color:red">Değerlendirme Puanına Göre</a>
                       <a class="dropdown-item" style="color:red">Eskiden Yeniye</a> 
                        <a class="dropdown-item"  style="color:red">Yeniden Eskiye</a>
                        <a class="dropdown-item"  style="color:red">İndirime Göre Artan</a>
                         <a class="dropdown-item"  style="color:red">İndirime Göre Azalan</a> 
                      <router-link to="/encok"><a class="dropdown-item" style="color:red">En çok Satanlar</a> </router-link>
                      
                        </div>
                        </div>
                     </li>
                     <li style="float:left; list-style:none">
                        
                        <div class="check" style="float:left">
                            <label class="container"> 
                                <input type="checkbox" >
                                <span class="checkmark"></span>
                            </label>
                            
                        </div>
                          </li>
                          <li style="float:left; list-style:none">
                        <div class="stokta">
                          <button @click="stoktakiler" style="background:transparent;color:none;border:none" > <span class="stoktaki"> Stoktakiler</span> </button>
                        </div>
                        </li>
                   
                     </ul>
                     
            </div>
            <div>
                <div class="product-area col-md-3 col-md-offset-1" v-for="(urun,urunid) in urunler" :key="urunid">
         <router-link to="/urunsayfasi">    <img v-bind:src=urun.resim alt="" style="width:180px" > </router-link>
             <div class="product-name">
             {{urun.ad}}
             </div>
             
             <div class="product-price">
               ₺   {{urun.fiyat}}
             </div>
           </div>
            
            </div>
            <div class="list-paging ">
                <input name="ctl00$u28_ascUrunList$ascPagingDataAlt$hdnPageSize" type="hidden" id="ctl00_u28_ascUrunList_ascPagingDataAlt_hdnPageSize">
                <table border="0" cellpadding="0" style="width:100%">
                    <tbody>
                        <tr>
                            <td align="center" style="width:33%;">
                                <div class="pagination">
                                    <span id="pagination_list">
                                        <span class="paging" style="color:#fff">
                                            1
                                           
                                        </span>
                                        <button @click="sonraki" class="buttons" style="padding-left:50px;" >2</button>
                                        <button class="buttons">3</button>
                                        <button  class="buttons">4</button>
                                        <button  class="buttons">5</button>
                                    </Span>
                                     <button @click="sonraki" class="buttonss">Sonraki</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            

            </div>
             <a href="#"> <button style="margin-left:50px"> <img alt="Yukarı Çık" class="yukarikaydir" src="../assets/yukarı.png" style="display: block;"></button></a>
            <div >
                <img src="../assets/content.png" style="margin-left:-450px; margin-top:-24px;">
            </div>
        
        </div>

        
                </div>
      

  
  


</template>
<script>
import Headers from './Headers.vue'

export default {
  name:'telefon',
     components:{
     Headers,
 
   },
    data(){
        return{
            urunler:"",
            visibleone:false,
           
        }
        
    },
    methods:{
        stoktakiler(){

        fetch('http://vatancomp.herokuapp.com/getstoktakiler')
        .then(response => response.json())
        .then(data => {
          console.log(data)
            this.urunler=data;
            this.visibleone=true;
            console.log(this.visibleone)
            
          }); 
       


        },
       
        
 


    },
    created(){
   fetch('http://vatancomp.herokuapp.com/getstoktakiler')
        .then(response => response.json())
        .then(data => {
          console.log(data)
            this.urunler=data;
            this.visibleone=true;
            console.log(this.visibleone)
          }); 
 }
 
};
</script>
<style scoped>
.anadiv{
    margin-top: 80px;
}
  
.sonuc{
  
     margin: 15px 0 10px 0;
     margin-right: 1100px;
     
}
.kategori{
    width:25%;
   
}
.kategori a{
    color: #757575;
    font-size:12px;
}
.kategori a:hover{
    color: #2196f3;
    text-decoration: none;
}
.menu{
    color: #757575;
    font-size:12px;
    margin-left:40px;
    
   
}
.menu a:hover{
     color: #2196f3;
    text-decoration: none;
    
 
   
}
.check{
      max-width: 35%;
}

.container {
  display: block;
  font-size: 22px;

}
.container input {
  position: absolute;
  opacity: 1;
  margin-left: 37px;

}
.checkmark {
  position: absolute;
  height: 15px;
  width: 15px;
  background-color: #fff;
  border: solid #A9A9A9;
  margin-left: 37px;

}
.container input:checked ~ .checkmark {
  background-color: #ccc;
}
.products{
    margin-left:10px;
    float:right;
    width:73%;
    margin-top:-730px;


}
.list-prob{
 background: #eee;
 height: 50px;
 margin-bottom: 17px;
 border-radius: 3px;
 margin-top: 5px;
 margin-right:100px;
 width: 96%;
}
.sıralamalist{
    background-color: transparent;
    border:none;
    outline: none;
    text-align: center;
    float:left;
    padding: 17px 15px;
    font-size: 14px;
    color: #757575;
    background: 0;
     height: 100%;

}
.check{
      max-width: 35%;
}

.container {
  display: block;
  font-size: 22px;

}
.container input {
  position: absolute;
  opacity: 1;
  margin-top:18px;
}
.checkmark {
  position: absolute;
  height: 15px;
  width: 15px;
  background-color: #fff;
  margin-top:18px;
}
.container input:checked ~ .checkmark {
  background-color: #ccc;
}
.container .checkmark:after {
  border: solid white;
}
.stoktaki{
    font-size: 14px;
    color: #757575;
    margin-top:16px;
    float:left;
    margin-left:128px;
    
}
    div.product-area{
    margin: 0;
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: #e0e0e0;
    overflow: hidden;
    position: relative;
    margin-left:0px;
    float:left;

    }

    div.product-area:hover{
      border-color:#0153a6;
      transition:  .32s;
    }

    div.product-area *{
      display: block;
      margin: 0 auto;
      text-align: center;
    }

    div.product-area img{
  
     padding: 50px 20px 10px 10px;
     width:100%
    }

    div.product-price{
      margin-top: 12px;
      color: #0153a6;
      line-height: 1;
      height: 45px;
      padding: 0 20px;
      font-weight: 700;
      font-size: 26px;
    }
    div.product-name{
        width:100%;
        color: #424242;
        font-size: 12px;
    }
    .kontrol{
        margin-top:-650px;
    }
    .input{
        font:inherit;
        margin:0;
        overflow: visible;
        display: none;
        background-color: initial;
        cursor: default;
        padding: initial;
        border: initial;
}
table {
    display: table;
    width: 100%;
    margin-left:300px;
        font-weight: 700;
    
}
.buttons{
    padding-right: 50px;
    background: #fff;
    border: none;
    outline:none;
    text-align: center;
    color: #424242!important;
     font-weight: 700;
    
}
.buttonss{
    padding-right: 20px;
    color: #0153a6;
    font-weight:bold;
    background: #fff;
    border: none;
    outline:none;
    text-align: center;
}
.pagination{
    position: relative;
    width: 100%;
    padding: 40px 0 20px 0;
    text-align: center;
        font-weight: 700;
}
#pagination_list{
        display: inline-block!important;
        text-align: center;
              font-weight: 700;
}
.pagination span.paging{
    text-decoration: none;
    display: inline-block;
    margin: 0 20px;
    font-size: 14x;
    font-family: "medium";
    color: #757575;
    border-radius: 100%;
    text-align: center;
   font-weight: 700;
}


.paging{
    background: #0153a6;
    color: #fff;
    width: 25px;
    height: 25px;
    position: relative;
    text-align: center;
     font-weight: 700;
     
}


</style>