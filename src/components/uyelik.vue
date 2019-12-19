<template>
    <div class="disdiv">
        <div v-if="visibleone" >
            <header><Headers/></header>
        </div>
        <div class="buton" style="margin-top:100px;margin-left:50px">
            <span id="uye">Üye Girişi </span> <br/><br/> <br/>
          <router-link to="/uyelik">   <button style="margin-left:100px;border:none;background:transparent;color:#0153a6;" >Üye ol </button> </router-link>
           <router-link to="/girisyap">  <button  style="margin-left:100px;border:none;background:transparent;color:#0153a6;"  >Giriş Yap</button> </router-link>
         
           
        </div> <br/>
         <section class="giristablo">
        <form>
          <!-- REQUİRED SAYESİNDE BOŞ KALINCA UYARI GELİYOR -->
          <div id="app">
            <input
              v-model="input.username"
              type="text"
              id="email"
              name="email"
              required
              autofocus="autofocus"
              class="uye_mail"
              placeholder="Eposta Adresiniz Yada Gsm No *"
              style="width:340px;height:50px"
            />
          </div> 
          <div id="app" class="form-inner">
            <input
              v-model="input.password"
              id="password"
              type="password"
              name="password"
              required
              class="uye_sifre"
              placeholder="Parolanız"
              style="width:340px;height:50px"
            />
          </div>
          </form>

          <div class="girisb">
       <button class="girisbutton" style="margin-left:30px" v-on:click="login()"> GİRİŞ YAP </button>
    </div>
    <div class="veya1" style="margin-left:50px">
      <img src="../assets/veya.png" >
    </div>
    <div class="facebookb">
        <button class="facebook" style="margin-left:50px"> FACEBOOK İLE BAĞLAN </button>
    </div>
    <div class="yeniuyelik">
        <button class="yeniuyelikbutton" style="margin-left:50px"> YENİ ÜYELİK OLUŞTUR  </button>
    </div>
    <div class="devamet">
        <button class="uyeolmadan" style="margin-left:50px"> ÜYE OLMADAN DEVAM ET </button>
        
    </div>
      </section>
        



    <div class="acıklama">
    <img src="../assets/acıklama.jpg" class="imgcontrol">
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
  data() {
    return {
      input: {
        username: "",
        password: ""
      },
      Uyeler: [],
    };
  },
  methods: {
    login() {
      for (let i = 0; i < this.Uyeler.length; i++) {
        if (this.input.username != "" && this.input.password != "") {
          if (
            this.input.username == this.Uyeler[i].e_mail &&
            this.input.password == this.Uyeler[i].sifre
          ) {
            alert("Giriş Başarılı Anasayfaya Yönlendiriliyorsunuz");
            this.$router.replace({ path: "/" });
         
          }
        }
      }
      if (this.input.username == "" && this.input.password == ""){
        /* eslint-disable no-console */
        alert("Kullanıcı Adı Veya Şifre Boş Bırakılamaz");
      }
      else{
          alert("Kullanıcı Adı Veya Şifre Yanlış");

      }
      
    }
  },
  created(){
   fetch('https://vatancomp.herokuapp.com/getproducts')
        .then(response => response.json())
        .then(data => {
            this.Uyeler=data;
            this.visibleone=true;
          }); 
 }
};
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
    margin-top: 70px;
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
    margin-right:300px;;
   

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