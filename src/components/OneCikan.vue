<template>
    <div v-if="visibleone">
        <h2 style="margin-left:120px"> Öne Çıkanlar </h2> <br/><br/>
        <div class="products row" style="width:60%; margin-left:30px">
            <ul id="example-1" style="list-style-type:none;float:left; margin-left:20px; text-align: center;" class="product-area">
                    <li v-for="(urun,urunid) in urunler" :key="urunid" style="float:left">
                    <b-container class="bv-example-row table" style="border:1px black">
                        <b-row class="col-md-2 col-md-offset-1"  >
                        <b-col class="col-md-2"> <router-link to="/products"><img v-bind:src=urun.resim alt="" style="width:180px;" ></router-link> </b-col> <br/>
                        <b-col class="col-md-3 productname"> <p class="productname"> {{urun.ad}} </p></b-col> <br/>
                        <b-col class="col-md-1 product-price"> <p class="product-price" style="color: #0153a6;"> {{urun.fiyat}} ₺ </p></b-col>
                        </b-row>
                    </b-container>
                    </li>
             </ul>
        </div>
        </div>
    
</template>
<script>
export default {
    name: 'OneCikan',
    data () {
    return {
        urunler:"",
        visibleone:false
    };
  },
  created(){
   fetch('https://vatancomp.herokuapp.com/getproducts')
        .then(response => response.json())
        .then(data => {
      
            this.urunler=data;
            this.visibleone=true;
            
          }); 
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
    .onecıkan{
        margin-left:120px;
        padding-top:100px;
    }
    h2{
        float:left;
        

    }

  
</style>