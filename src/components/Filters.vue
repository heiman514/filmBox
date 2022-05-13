<template>
  <div class="q-pa-lg row">
    <h3 class="col-xs-12">Film List</h3>
    <div class="row" style="margin:20px 0px">
      <h5 style="font-size:20px; margin-right:10px">Genre:</h5>
      <q-btn
        class="filterBtn"
        :class="filter.toLowerCase() === selectedGenre.toLowerCase() ? 'active' : null"        
        flat
        v-for="(filter,index) in filters"
        :key="index"
        @click="filterFilms(filter)"
        :label="filter"
        />
    </div>
    <div class="col-xs-12 row no-wrap">
        <q-input v-model="searchTitle" class="col-11" style="font-size:16px;max-width:300px" placeholder="Search..."/>
        <q-btn class="col-1" flat icon="search" @click="search(searchTitle)"/>
    </div>
  </div>  
</template>

<script>
import {ref} from 'vue'
const filters = ref([
    'All',
    'Action',
    'Adventure',
    'Animation',
    'Crime',
    'Comedy',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Mystery',
    'Sci-Fi',
])

export default {
    name:'Filters',
    props: [
      'filterFilms',
      'search',
      'selectedGenre'
    ],
    setup() {
      return {
        filters,
      }
    },
}
</script>

<style scoped>
.filterBtn:hover, .filterBtn.active {
  background-color: rgb(19, 22, 44);
  color: #ddd;
}

.filterBtn {
  margin: 0 2px;
}


</style>