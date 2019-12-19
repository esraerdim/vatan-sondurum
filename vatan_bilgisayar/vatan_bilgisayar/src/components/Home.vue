<template>
<div>
    <header> <Headers/></header>
    <div>
    <Slider/>
    </div> <br/>     
    <OneCikan/>
 
    <a href="#"> <button style="margin-left:50px"> <img alt="Yukarı Çık" class="yukarikaydir" src="../assets/yukarı.png" style="display: block;"></button></a>

</div>
</template>
<script>
import Headers from './Headers.vue'
import Slider from './Slider.vue'
import OneCikan from './OneCikan.vue'

export default {
   name:'Home',
   components:{
      Headers,
      Slider,
      OneCikan,
     
   },
  
 
}
</script>

