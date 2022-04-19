<template>
  <div class="q-pa-lg bg-blue-grey-1">
    <h5 class="text-blue-grey-9">Explore Movie and TV shows here</h5>
      <div class="row justify-center">
          <q-card
              v-ripple
              @click="$router.push(`/film/${film._id}`)" 
              class="my-card"
              v-for="(film,index) in films"
              :key="index"
          >
              <q-img style="height:345px" :src="film.poster" :alt="film.title"/>
              <q-card-section style="height: 100px">
                  <div class="text-h7"><strong>{{ film.title }}</strong></div>
                  <div class="text-subtitle2">{{ film.year }}</div>
              </q-card-section>
          </q-card>
      </div>      
    <router-link class="text-blue-grey-9" to="/films" style="font-size:18px">more...</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'

const films = ref(null)

export default {
  name:'FilmExplore',
  setup() {
    return {
      films
    }
  },
  mounted() {
    axios.get('list')
    .then((response) => {
      const randomArray = []
      const randomFilms = []
      for (let i = 0; i< 5; i++) {
        // Avoid duplicate film
        let randomIndex = Math.round(Math.random()*response.data.length)
        if(!randomArray.includes(randomIndex)) {
          randomArray.push(randomIndex)
          randomFilms.push(response.data[randomIndex])
        }
      }
      films.value = randomFilms
    })
  }
}
</script>

<style>
.my-card {
  width: 100%;
  height: 385px;
  max-width: 200px;
  margin: 50px 10px;
  cursor: pointer;
}

</style>