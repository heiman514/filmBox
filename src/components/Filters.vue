<template>
  <div class="q-pa-lg row">
    <h3 class="col-xs-12">Film List</h3>
    <div class="q-gutter-sm row" style="margin:20px 0px">
      <p style="font-size:20px">Genre:</p>
      <q-btn v-for="filter in filters" :key="filter" @click="() => filterFilms(filter)">{{ filter }}</q-btn>

    </div>
    <div class="col-xs-12 row no-wrap">
        <q-input v-model="searchTitle" class="col-11" style="font-size:16px;max-width:300px" placeholder="Search..."/>
        <q-btn class="col-1" flat icon="search" @click="search(searchTitle)"/>
    </div>
  </div>  
</template>

<script>
const filters = [
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
]
export default {
    name:'Filters',
    props: [
      'filterFilms',
      'search',
    ],
    data() {
      return {
        filters
      }
    },
}
</script>

<style>

</style>