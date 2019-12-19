<template>
    <div  v-if="visibleone">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style="margin-top:130px; margin-left:450px" >
            <div class="carousel-inner" style="text-allign:center">
                <div class="carousel-item active">
                <img src="http://www.avmindirim.com/images/stories/2013/10/vatan-notebook-1-kasim.jpg" alt="...">
                </div>

                <div class="carousel-item" v-for="(image,imageid) in slider" :key="imageid">
                <img v-bind:src=image.resim alt=""  >
                </div>
               
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
    </div>
</template>
<script>
export default {
    name: 'Slider',
    data () {
    return {
      slider:"",
     visibleone:false,  
    };
  },
   created(){
   fetch('http://vatancomp.herokuapp.com/getslider')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.slider=data;
            this.visibleone=true;
          }); 
  }
}
</script>