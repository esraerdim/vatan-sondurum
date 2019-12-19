<template>
<div>
<header><Headers/></header>
  <div style="height:30px"></div>
     <div class="products row">
              
           <div class="product-area col-md-2 col-md-offset-1" style="height:250px;">
             <router-link to="/telefon"> <img src="https://cdn.vatanbilgisayar.com/upload/banner/kategori-menu/ceptelefon.jpg" alt=""> </router-link>
             <div class="product-name">
               Cep Telefonları
             </div>
           </div>
           <div class="product-area col-md-2">
             <img src="https://cdn.vatanbilgisayar.com/upload/banner/kategori-menu/tabletler.jpg">
             <div class="product-name">
               Tabletler
             </div>
           </div>
           <div class="product-area col-md-2">
             <img src="https://cdn.vatanbilgisayar.com/upload/BANNER/kategori-menu/akillisaatler.jpg" alt="">
             <div class="product-name">
              Akıllı Saatler
             </div>
           </div>
           <div class="product-area col-md-2">
             <img src="https://cdn.vatanbilgisayar.com/upload/banner/kategori-menu/telefonkilif.jpg" alt="">
             <div class="product-name">
               Telefon Kılıfları
             </div>
           </div>
         
         </div>
         <div class="products row">
           <div class="product-area col-md-2 col-md-offset-1" style="height:250px">
             <img src="https://cdn.vatanbilgisayar.com/upload/BANNER/kategori-menu/tablet-kiliflari.jpg" alt="">
             <div class="product-name">
               Tablet Kılıfları
             </div>
            
           </div>
           <div class="product-area col-md-2">
             <img src="https://cdn.vatanbilgisayar.com/upload/banner/kategori-menu/bluetoothurun.jpg" alt="">
             <div class="product-name">
               Bleoutouth Ürünleri
             </div>
           </div>
           <div class="product-area col-md-2">
             <img src="https://cdn.vatanbilgisayar.com/upload/banner/kategori-menu/kablosuztelefon.jpg" alt="">
             <div class="product-name">
               Kablosuz Ev Telefonları
             </div>

           </div>
           <div class="product-area col-md-2">
             <img src="https://cdn.vatanbilgisayar.com/UPLOAD/BANNER/kategori-menu/tasinabilirsarj.jpg" alt="">
             <div class="product-name">
              Taşınabilir Batarya
             </div>
           </div>
         </div>
        <div class="paragraf">
          <h2>Telefon</h2>
          <p>En yeni <span style="font-weight: bold;"><em>telefon </em></span>modellerinden kablosuz
           <strong>telefon</strong> çeşitlerine kadar tüm ürünler bu kategoride yer almaktadır.&nbsp;
            Görüntülü konuşma yapılmasına olanak tanıyan <strong>telefon </strong>modellerini de kategori içerisinde bulabilirsiniz.
             Ayrıca telefonunuzu kişiselleştirmenizi sağlayan kılıflar, bluetooth ürünleri ve diğer aksesuarlar da zengin seçenek yelpazesi 
             ile beğeninize sunulmaktadır.</p>
             <p>Android ve iOs işletim sistemine sahip telefonlar için telefon kılıfları, bluetooth kulaklıklar gibi aksesuarlar Vatan Bilgisayar'da. Telefon modellerinde akıllı telefon veya çift hatlı telefon filtreleriyle ihtiyacınıza uygun cihazı bulabilirsiniz. Çeşitli aksesuarlar, ekran koruyucuları, kılıflar veya akıllı saatler ile telefonunuzu daha güvenli ve etkin kullanmak için sipariş verebilirsiniz. Akıllı telefonlar ile uyumlu Samsung ve Apple akıllı saatlere ulaşabilirsiniz.</p>
             <p>Ayrıca kablolu ve kablosuz ev telefonlarına da ulaşabilirsiniz. Eviniz için gerekli olan renkli ekran seçeneği de bulunan sabit telefonlar, duvar tipi veya masaüstü telefonlar ile tüm ihtiyaçlarınızı karşılayabilirsiniz. Yine evinizde kullanacağınız sabit hat ile belli bir alana kadar özgürlük sağlayan kablo sıkıntısı olmadan kullanabileceğiniz, duvara monteli veya masaüstü kablosuz ev telefonları ile dilediğiniz gibi hareket edebilirsiniz.</p>
             <p>İhtiyaçlarınıza göre en uygun ev telefonu, <span style="font-weight: bold;"><a href="/cep-telefonu-modelleri/" title="cep telefonu">cep telefonu</a></span>, akıllı telefonlar, kılıf ve koruyucular için tıklayın. Aradığınız ürünler, bir çok model, renk ve taksit seçenekleriyle en uygun fiyatlarla Vatan Bilgisayar'da.</p>

    </div> 
     <div style="height:600px;width:600px; margin-left:400px; margin-top:250px;" >
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ffff"
      video-width="300"
      video-height=""
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <div>
  <b-embed
    type="iframe"
     width="200" 
     height="200" 
     src="https://www.youtube.com/embed/24PkAov45_Y"
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
  ></b-embed>
</div>
        </template>
      </b-carousel-slide>
        <b-carousel-slide>
        <template v-slot:img>
          <div>
  <b-embed
   type="iframe"
     width="200" 
     height="200" 
     src="https://www.youtube.com/embed/GrPHfhS208I"
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
  >
   </b-embed>
</div>
        </template>
      </b-carousel-slide>
        <b-carousel-slide>
        <template v-slot:img>
          <div>
  <b-embed
  type="iframe"
     width="200" 
     height="200" 
     src="https://www.youtube.com/embed/zO24VSmOuVk"
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
 </b-embed>
</div>

        </template>
      </b-carousel-slide>
        <b-carousel-slide>
        <template v-slot:img>
          <div>
  <b-embed
  type="iframe"
     width="200" 
     height="200" 
     src="https://www.youtube.com/embed/yHwauxDek1Y"
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
  </b-embed>
</div>
        </template>
      </b-carousel-slide>
    </b-carousel>
        
    </div>
 
     <a href="#"> <button style="margin-left:50px"> <img alt="Yukarı Çık" class="yukarikaydir" src="../assets/yukarı.png" style="display: block;"></button></a>
    
 </div>


</template>
<script>
import Headers from './Headers.vue'

export default {
    name:'CepTelefonu',
     components:{
     Headers,

   },
    data () {
    return {};
  }
}
</script>
<style scoped>
div.product-area{
      border: 1px #e0e0e0 solid;
    }

    div.product-area:hover{
      border-color: #0153a6;
      transition: 1.2s;
    }

    div.product-area *{
      display: block;
      margin: 0 auto;
      text-align: center;
    }

    div.product-area img{
      width: 80%;
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
    .products{
      margin-left:250px;

    }
    .paragraf h2{
    
    color: #757575;
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    float:left;
    text-align:left;


    }
    .paragraf p {
    color: #9e9e9e;
    display: block;
    float:left;
     text-align:left;
     font-size: 12px;
}
.paragraf{
margin-top: 30px;
margin-left: 50px;
float:left;
 text-align:left;
     font-size: 12px;

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
.openfooter{

    border-radius: 3px;
    background: #2196f3;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,0.2);
    color: #fff;
    padding: 10px 50px 10px 20px;
    z-index: 1;
    cursor: pointer;
    width: 100%;
    max-width: 90%;
    pointer-events: all;
    
}
.open{
    display: inline-block;
    vertical-align: middle;
  
}
.opfooter{
     display: block;
    position: fixed;
    bottom: 20px;
    margin: 0 auto;
    width: 100%;
    max-width: 30%;
    max-height: 25%;
    padding: 0 20px;
    z-index: 1;
    pointer-events: none;
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
.footers{
    position:fixed;
    display: block;
    margin: o auto;
    width: 100%;
    z-index: 20;
    background: #fff;

}

</style>
<script>
import { eBus } from '../main'
export default {
  
    data() {
      return {
        slide: 0,
        sliding: null,
         footer:false,
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
       footeropen1(){
                this.footer=true;
            },
            kapatfooter(){
                this.footer=false;
            },
          telefona(){
                 eBus.$emit('girisYapma', 'ceptelefon')
          }
    }
}
</script>