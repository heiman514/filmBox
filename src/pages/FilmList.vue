<template>
  <div class="bottomLine q-pa-lg q-gutter-sm">
    <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" label="HOME"/>
        <q-breadcrumbs-el label="FILM LIST" icon="movie" to="/films"/>
    </q-breadcrumbs>
  </div>
  <div>
    <Filters :filterFilms="filterFilms" :search="search"/>
  </div>
  <div>
    <FilmItem :newfilms="newfilms" :searchResult="searchResult"/>
  </div>
</template>

<script>
import axios from 'axios'
import FilmItem from '../components/FilmItem.vue'
import Filters from '../components/Filters.vue'
export default {
    name:'FilmList',
    components:{
      FilmItem,
      Filters
    },
    data() {
      return {
        newfilms:[]
      }
    },
    mounted() {
      this.getFilms()
    },
    methods: {
      getFilms () {
        axios.get('list')
        .then((response) => {
          this.$store.commit('updateFilmData', response.data)
        })
      },
      filterFilms (genreName) {
        if (genreName !== 'All') {
          this.newfilms = this.$store.getters.getFilms.filter((film) => {
            return film.genre.toLowerCase().includes(genreName.toLowerCase())
          })
          console.log(this.newfilms)
        } else {
          this.newfilms = []
        }        
      },
      search (searchTitle) {
        this.newfilms = this.$store.getters.getFilms.filter((film) => {
            return film.title.toLowerCase().includes(searchTitle.toLowerCase())
        })
      }
    },
}
</script>

<style>
.bottomLine {
    border-bottom: 1px solid #ddd;
}
</style>