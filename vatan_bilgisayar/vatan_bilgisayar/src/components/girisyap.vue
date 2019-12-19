<template>
    <div class="disdiv">
        <div >
            <header><Headers/></header>
        </div>
        <div class="buton" style="margin-top:100px;margin-left:50px">
            <span id="uye">Üye Girişi </span> <br/><br/> <br/>
          <router-link to="/uyelik">   <button style="margin-left:100px;border:none;background:transparent;color:#0153a6;" >Üye ol </button> </router-link>
       <button  style="margin-left:100px;border:none;background:transparent;color:#0153a6;"  >Giriş Yap</button> 
         
           
        </div>
 
    <div class="acıklama">
    <img src="../assets/acıklama.jpg" class="imgcontrol">
    </div>
   <div class="uyeol">
             <div class="bilgi">
                <span>Vatan Bilgisayar’a kolayca üye olup avantajlarla dolu alışverişe hemen başlayabilirsin!</span>
             </div>
             <div class="form-inner">
                 <div class="field">
                     <div class="form-label">
                     <div class="ad">
                         <span class="yıldız">
                             *
                        </span>
                         <span >
                         Ad
                        </span>
                      </div>
                        </div>
                          <div class="inputad" >
                        <input name="ad" type="text" class="ad" style="height:50px;" >
                        </div>
                 </div>
                 <div class="field">
                     <div class="form-label">
                         <div class="ad">
                             <span class="yıldız">
                                 *
                              </span>
                              <span>
                                  Soyad
                               </span>
                            </div>
                        </div>
                        <div class="inputad">
                            <input name="soyad" type="text" class="ad" style="height:50px;">
                        </div>
                    </div>
             </div>
            <div class="field">
                     <div class="form-label">
                         <div class="ad">
                             <span class="yıldız">
                                 *
                              </span>
                              <span>
                                  E-mail adresi
                               </span>
                            </div>
                        </div>
                        <div class="inputad">
                            <input name="email" type="text" class="ad" style="height:50px;">
                        </div>
                    </div>
                    <div class="field">
                     <div class="form-label">
                         <div class="ad">
                             <span class="yıldız">
                                 *
                              </span>
                              <span>
                                  Şifre
                               </span>
                            </div>
                        </div>
                        <div class="inputad">
                            <input name="sifre" type="password" class="ad" style="height:50px;">
                        </div>
                    </div>
                    <div class="field">
                     <div class="form-label">
                         <div class="ad">
                             <span class="yıldız">
                                 *
                              </span>
                              <span>
                                  Şifre Tekrarı
                               </span>
                            </div>
                        </div>
                        <div class="inputad">
                            <input name="sifre" type="password" class="ad" style="height:50px;">
                        </div>
                    </div>
                    <div class="fieldtel">
                        <div class="inputtelefon">
                            <input name="CEPTELEFONALAN" type="text" maxlength="3" id="ctl00_frmMain_txtUYE_CEPTELEFONALAN" attribute="numeric" style="width:30px;height:50px; float:left;">
                            
                            <input name="ctl00$frmMain$txtUYE_CEPTELEFON" type="text" inner-text="cep telefonu" placeholder="Cep Telefonu" maxlength="7" id="ctl00_frmMain_txtUYE_CEPTELEFON" attribute="numeric" style="width:312px; ;height:50px; float: left; margin-top: -52px; margin-left: 149px;">

                        </div>
                        </div>
                        <div class="captcha">
                         <img alt="nocaptcha" width="600" height="150" data-src="https://webmaster.kitchen/wp-content/uploads/nocaptcha.gif" class="alignnone wp-image-3060 size-full lazyloaded" src="https://webmaster.kitchen/wp-content/uploads/nocaptcha.gif">
                        </div>
                        <div class="kosullar">
                            <div class="kampanya">
                                <span class="checkbox">
                                    <span class="c-style ">
                                        <input id="ctl00_frmMain_chkUYE_BULTEN_FL" type="checkbox" name="ctl00$frmMain$chkUYE_BULTEN_FL" class="sCheckbox" checked="checked" style="margin-left:80px">
                                </span>
                                <span class="style_k" style="margin-left:80px">Kampanyalar ile ilgili eposta mesajları almak istiyorum.</span>
                                </span>
                            </div>
                            
                            <div class="kampanya">
                                <span class="checkbox">
                                    <span class="c-style ">
                                        <input id="ctl00_frmMain_chkUYE_BULTEN_FL" type="checkbox" name="ctl00$frmMain$chkUYE_BULTEN_FL" class="sCheckbox" checked="checked">
                                </span>
                                <span class="style_k"  style="margin-left:80px">Sms ile özel indirimlerden haberdar olmak istiyorum.</span>
                                </span>
                            </div>
                            <span classs="kvk">
                            <p style="margin-left:60px  ; font-size:12px ; max-width:350px ;" >Kişisel Verilerin Korunması Kanunu hakında detaylı bilgi almak için <a href ="" class="buraya">buraya</a> tıklayabilirsiniz.</p>
                            </span> 
                            <div class="girisb2">
                                <button class="girisbutton2" style="margin-left:50px"> KAYDOL </button>
                            </div>
                            <span classs="kvk">
                            <p style="margin-left:90px ; max-width:350px ; font-size:12px "  >Kaydol butonuna basarak <a href ="" class="buraya"> açık rıza metnini</a> okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.</p>
                            </span>
                             <div class="veya">
                                <img src="../assets/veya2.jpg" >
                            </div>
                            <div class="konum">
                            <div class="zatenuye">
                             <router-link to="/uyelik">      <button class="zuye"> ZATEN ÜYE İSENİZ <u>GİRİŞ YAPIN</u> </button> </router-link>
        
                             </div>
                              </div>

                        </div>
             
             
        </div>

        
    </div>
</template>
<script>
import Headers from './Headers.vue'

export default {
     name:'Uyelik',
     components:{
     Headers,

   },
    data () {
    return {
        uye:false,
        girisyap:true,
    };
  },
  methods:{
      uyeol(){
          this.uye=true,
          this.girisyap=false
      },
      girisyap(){
          this.uye=false,
          this.girisyap=true
      }
  }
}
</script>
<style scoped>

.header{
    margin-top:0px;
    width:100%;
    color:red;
    border-color:red;
    height:100px;
}


#uye{
    font-family: "medium";
    font-size: 30px;
    padding: 0 0 20px 0;
    margin-top:1px;
    text-align:left;
    color: #424242;
    float:left;
    padding-left:130px;
}
.acıklama{
    display: table-cell;
    vertical-align: top;
    width: 50%;
    max-width: 620px;
    text-align: right;
    background: #f5f5f5;
    position: fixed;
    bottom: 0;
    right: 0;
    height: 100%;
    content: '';
    z-index: -1;
  
}
.uyegiris{
    width:50%;

}
.imgcontrol{
    margin-top:80px;

}
.secenekler{
    margin-top:20px;
    padding:0px;
    float:left;
}
.giris{
    font-family: "medium";
    color: #0153a6;
    padding-bottom: 10px;
    float: left;
    margin-top:50px;
    padding-left:20px;
    margin-left:-150px;
}
.uye{
      font-family: "medium";
    color: #0153a6;
    padding-bottom: 10px;
    float: left;
    margin-top:50px;
    padding-left:20px;
    margin-right:-50px;

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
    margin-top:0px;
    margin-left:90px;
}
.yıldız{
    color:red;
    
}
.sifre{
    margin-top:-15px;
    margin-left:90px;
}

.sifremiunuttum{
text-align: left;
 display: inline-block;
margin-top:10px;
padding-top: 0px;
}

.sfrunuttum{
    padding: 18px 0;
    display: block;
    color:#757575;
    text-decoration:underline;
    margin-left:350px;
    max-width:max-content;
    font-size:15px;
}
.sfrunuttum a {
    
    color: inherit;
    background-color: transparent;
}

.girisbutton{
    width: 145px;
    margin-top: 0;
    position: relative;
    display: inline-block;
    background: #2196f3;
    padding: 17px 20px 16px 20px;
    text-transform: uppercase;
    font-size: 14px!important;
    color: #fff;
    font-family: "medium";
    text-align: center;
    font-weight: normal;
    border-radius: 3px;
    border:none;
    margin-right:400px;;
   

}
.girisbutton2{

    width: 145px;
    margin-top: 0;
    position: relative;
    display: inline-block;
    background: #2196f3;
    padding: 17px 20px 16px 20px;
    text-transform: uppercase;
    font-size: 14px!important;
    color: #fff;
    font-family: "medium";
    text-align: center;
    font-weight: normal;
    border-radius: 3px;
    border:none;
    margin-right: 120px;

    
   


}
.veya1{
    margin-top:40px;
    margin-right:500px;

}
.facebookb{
    margin-right:500px;
}
.facebook{
  background: #0153a6;
  border:none;
  width: 445px;
  margin-top: 0;
 position: relative;
display: inline-block;
    padding: 17px 20px 16px 20px;
    text-transform: uppercase;
    font-size: 14px!important;
    color: #fff;
    font-family: "medium";
    text-align: center;
    font-weight: normal;
    border-radius: 3px;
   
}
.yeniuyelik{
    margin-right:500px;
    margin-top:50px;
}
.yeniuyelikbutton{
background: #e0e0e0;
  border:none;
  width: 445px;
  margin-top: 0;
 position: relative;
display: inline-block;
    padding: 17px 20px 16px 20px;
    text-transform: uppercase;
    font-size: 14px!important;
    color: #0153a6;
    font-family: "medium";
    text-align: center;
    font-weight: normal;
    border-radius: 3px;
}
.devamet{
    margin-right:500px;
    margin-top:50px;

}
.uyeolmadan{
background: #e0e0e0;
  border:none;
  width: 445px;
  margin-top: 0;
 position: relative;
display: inline-block;
padding: 17px 20px 16px 20px;
 text-transform: uppercase;
font-size: 14px!important;
color: #0153a6;
font-family: "medium";
text-align: center;
font-weight: normal;
border-radius: 3px;
}

.bilgi{
    padding-bottom:15px  !important;
    display: inline-block;
    max-width: 320px;
    margin-left:100px;
  
}
.uyeol{
    width:50%;
}
.acıklama{
    display: table-cell;
    vertical-align: top;
    width: 50%;
    max-width: 620px;
    text-align: right;
    background: #f5f5f5;
    position: fixed;
    bottom: 0;
    right: 0;
    height: 100%;
    content: '';
    z-index: -1;
   
}


.form-inner{
    position:relative;
    margin-top:10px;
    margin-bottom: 20px;

}
.field{
    max-width: 375px;
    margin-bottom: 20px;
    position: relative;
}
.fieldtel{
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
    margin:-5px;
    left: 0;
    pointer-events: none;
    z-index: 1;
   

}
input[type="text"],input[type="password"] {
    
    padding: 15px;
    width: 100%;
    height: 30px;
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
.inputad{
    font-family: "dd";
    font-size: 12px;
    color: #000;
}
.inputtelefon{
    font-family: "dd";
    font-size: 12px;
    color: #000;
    margin-right:200px;
}
.ad{
margin-top:0px;
margin-left:105px;
}
.captcha{
    margin-left:-50px;
}
.kosullar{
    margin-top:5px;
}
.kampanya{
    font-size: 12px;
    margin-left:-50px;
    margin-top:10px;
}
.c-style{
    width: 20px;
    height: 20px;
    border: 2px solid #888;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    background: #fff;
}
.c-style input:checked+span {
    background: #2196f3;
    border-color: #2196f3;
}
input.sCheckbox {
    display: none!important;
}
[type=checkbox], [type=radio], legend {
    box-sizing: border-box;
    padding: 0;
}

input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
    
}
.checked{
    color:blue;
}
.style_k{
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
}
.buraya{
    color: #2196f3;
    text-decoration:none;
    
}
.girisb{
    margin-top:-50px;
    margin-left:70px;

}
.girisb2{
    margin-left:90px;
}

.veya{
    margin-top:10px;
    margin-left:90px;

}
.zatenuye{
    margin-left:60px;
    margin-top:50px;
}
.zuye{
    background: #e0e0e0;
  border:none;
  width: 445px;
  margin-top: 0;
 position: relative;
display: inline-block;
padding: 17px 20px 16px 20px;
 text-transform: uppercase;
font-size: 14px!important;
color: #0153a6;
font-family: "medium";
text-align: center;
font-weight: normal;
border-radius: 3px;
}
.konum{
    margin-top:-50px;
    margin-left:15px;
}



</style>