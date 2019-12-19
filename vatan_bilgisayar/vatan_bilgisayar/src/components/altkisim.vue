<template>
    <footer>
    
    <div class="footer-top" v-if="footerstate" ><i class="icon-close" v-on:click="closefooter()"></i> 
        <div><img src="../assets/footer.png"></div>
        <div>
        <button class="buttons"> Mağaza Bul </button>
        <button class="buttons"> 0850 222 56 56 </button>
        </div> <br/> <br/>
        <div class="a">
          <a href="#">KATEGORİLER</a>
<ul>
	<li> <div><a href="/bilgisayar/" title="Bilgisayar">Bilgisayar</a> </div></li>
	<li><div><a href="/cep-telefonu-modelleri/" title="cep telefonu">Cep Telefonu</a></div></li>
	<li><a href="/notebook/" title="notebook">Notebook</a></li>
	<li><a href="/televizyon/" title="televizyon">Televizyon</a></li>
	<li><a href="/tabletler/" title="Tablet">Tablet PC</a></li>
	<li><a href="/akilli-saatler/" title="Akıllı Saatler">Akıllı Saat</a></li>
	<li><a href="/oyun-pc/" title="Oyun Bilgisayarı">Oyun Bilgisayarı</a></li>
	<li><a href="/kucuk-ev-aletleri/" title="Küçük Ev Aletleri">Küçük Ev Aletleri</a></li>
	<li><a href="/kisisel-bakim-urunleri/" title="Kişisel Bakım Ürünleri">Kişisel Bakım Ürünleri</a></li>
	<li><a href="/elektrikli-kuru-supurgeler/" title="Elektrikli Süpürge">Elektrikli Süpürge</a></li>
	<li><a href="/utuler/" title="Ütüler">Ütü</a></li>
	<li><a href="/masaustu-bilgisayarlar/" title="Masaüstü Bilgisayar">Masaüstü Bilgisayar</a></li>
	<li><a href="/hard-disk/" title="hard disk">Hard Disk</a></li>
	<li><a href="/tarayicilar/" title="tarayıcı">Tarayıcı</a></li>
	<li><a href="/klima/" title="klima">Klima</a></li>
</ul>
<a href="#">ÖZEL ÜRÜNLER</a>
<ul>
	<li><a href="/iphone-11-akilli-telefon.html" title="iphone 11">iPhone 11</a></li>
	<li><a href="/iphone-xs-akilli-telefon.html" title="iPhone XS">iPhone XS</a></li>
	<li><a href="/iphone-xs-max-akilli-telefon.html" alt="iPhone XS Max" title="iPhone XS Max">iPhone XS Max</a></li>
	<li><a href="/iphone-xr-akilli-telefon.html" alt="iPhone XR" title="iPhone XR">iPhone XR</a></li>
	<li><a href="/iphone-x-akilli-telefon.html" title="iphone x">iPhone X</a></li>
	<li><a href="/iphone-8-akilli-telefon.html" title="iphone 8">iPhone 8</a></li>
	<li><a href="/asus-zenfone-5-64-gb-akilli-telefon-meteor-gumus.html" title="asus zenfone 5">Asus Zenfone 5</a></li>
	<li><a href="/iphone-7-akilli-telefon.html" title="iPhone 7">iPhone 7</a></li>
	<li><a href="/iphone-6s-akilli-telefon.html" title="iPhone 6s">iPhone 6S</a></li>
	<li><a href="/huawei-p30-lite-128-gb-akilli-telefon-gece-siyahi.html">Huawei P30 Lite</a></li>
	<li><a href="/huawei-p20-lite-64-gb-akilli-telefon-pembe.html" title="Huawei P20 Lite">Huawei P20 Lite</a></li>
	<li><a href="/huawei-p-smart-2019-64-gb-akilli-telefon-siyah.html" title="Huawei P Smart 2019">Huawei P Smart 2019</a></li>
	<li><a href="/honor-8s-32-gb-akilli-telefon-siyah.html">Honor 8S</a></li>
	<li><a href="/huawei-mate-20-lite-64-gb-akilli-telefon-mavi.html">Huawei Mate 20 Lite</a></li>
	<li><a href="/general-mobile-gm8-akilli-telefon.html" title="General Mobile 8">General Mobile 8</a></li>
</ul>
<a href="#">KURUMSAL</a>
<ul>
	<div @click="hakkimizda"><li><div><a title="Samsung Galaxy S10">Hakkımızda</a> </div></li></div>
	<div  @click="iletisim"><li><div><a title="Samsung Galaxy S10 Plus">İletişim</a></div></li> </div>
	<div  @click="gizlilik"><li><div><a  title="Samsung Galaxy S10e">Gizlilik Politikamız</a></div></li> </div>
	<div  @click="musteri"><li><div><a  title="Samsung Galaxy A9">Müşteri Hizmetleri</a></div></li></div>
	<div  @click="insan"><li><div><a >İnsan Kaynakları</a></div></li></div>
	<div  @click="garanti"><li><div><a  title="oppo Ax7 4 Gb Ram">Keyifli Garanti</a></div></li></div>
	<div  @click="servis"><li><div><a  title="samsung galaxy s9 plus">Servis Takip Formu</a></div></li></div>
	<div  @click="magaza"><li><div><a  alt="samsung galaxy a70" title="samsung galaxy a70">Mağazalar</a> </div></li></div>
	<div  @click="sikca"><li><div><a  alt="samsung galaxy a50" title="samsung galaxy a50">Sıkça Sorulan Sorular</a></div></li></div>
	<div  @click="islem"><li><div><a  alt="xiaomi redmi note 7" title="xiaomi redmi note 7">İşlem Rehberi</a></div></li></div>
	<div  @click="earsiv"><li><div><a  title="pes 19">E-Arşiv Fatura</a> </div></li></div>
	<div  @click="bilgi"><li><div><a  title="fifa 19">Bilgi Toplum Hizmetleri</a> </div></li></div>
	<div  @click="kisisel"><li><div><a  title="49UK6470">Kişisel Veri Koruması</a></div></li></div>
	<div  @click="marka"><li><div><a  title="50PUS7303">Marka Haritası</a></div></li></div>
	<div  @click="site"><li><div><a  title="50NU7090">Site Haritası</a></div></li></div>
</ul>
</div>
     
       
     </div>
     <i class="icon-close" v-if="!footerstate" v-on:click="closefooter()"></i>
         
         </footer>
         
</template>
<script>
export default {
    name: 'altkisim',
    data () {
    return {
       footerstate:true,
    };
  },
  methods: {
     closefooter:function(){
      if(this.footerstate==true)
         this.footerstate=false;
         else
         this.footerstate=true;
     }
  },
}
</script>
<style>
.icon-close{
   background-color:black;
   padding: 1rem 1rem 1rem 1rem;
   border: 3px solid #FFB20D;
   border-radius: 2rem;
   font-size: 25px;
   font-weight: 100;
   float: right;
   margin-right: 8%;
}
.buttons{
    background: transparent;
    padding: 17px 0;
    border-color: #f5f5f5;
    width:200px;
    text-align:center;
    margin-left:350px;
    margin-top:50px;


}
a{
    color: #424242;
    float:left;
    margin-left:131px;
    margin-top:20px;

}
.a ul{
    line-height: 1;
    display: block;
    margin-right: 10px;
    margin-top: 50px;
    float:left;
    list-style: none;
    font-family: "regular";
    font-size: 14px;
    color: #424242;


}
a.ul.li{
font-size: 12px;
    line-height: 1;
    display: block;
    padding: 10px 10px 10px 0;
    float: left;
 

}

</style>