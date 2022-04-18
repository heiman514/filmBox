<template>
     <div class="q-pa-md row justify-center">
        <q-responsive :ratio="16/7.5" style="width: 950px;">
        <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        class="shadow-5"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        >
             <q-carousel-slide :name="1" img-src="https://collider.com/wp-content/uploads/inception_movie_poster_banner_04.jpg"/>
             <q-carousel-slide :name="2" img-src="https://www.comingsoon.net/assets/uploads/2018/12/Posters1.jpg" />
             <q-carousel-slide :name="3" img-src="https://collider.com/wp-content/uploads/avengers-character-poster-banner.jpeg" />
             <q-carousel-slide :name="4" img-src="https://m.media-amazon.com/images/M/MV5BNTQ4YzE5ZjgtNjdkOC00NmQ0LThhMGUtNzQ2ZGNkNjFhYTEyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" />
        </q-carousel>
        </q-responsive>
    </div> 
</template>

<script>
import { ref } from 'vue'

export default {
    name:'Carousel',
    setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>

<style>

</style>