<template>
    <div class="q-pa-lg">
        <div class="row q-gutter-lg justify-center" v-if="newfilms.length <= 0">
            <q-card
                v-ripple
                @click="$router.push(`/film/${film._id}`)" 
                class="my-card"
                v-for="film in $store.getters.getFilms"
                :key="film.id"
            >
                <q-img style="height:350px" :src="film.poster" :alt="film.title"/>
                <q-card-section style="height: 100px">
                    <div class="text-h7"><strong>{{ film.title }}</strong></div>
                    <div class="text-subtitle2">{{ film.year }}</div>
                </q-card-section>
            </q-card>
        </div>
        <div class="row q-gutter-lg justify-center" v-if="newfilms.length >= 0">
            <q-card
                v-ripple
                @click="$router.push(`/film/${film._id}`)" 
                class="my-card"
                v-for="film in newfilms"
                :key="film.id"
            >
                <q-img style="height:350px" :src="film.poster" :alt="film.title"/>
                <q-card-section style="height: 100px">
                    <div class="text-h7"><strong>{{ film.title }}</strong></div>
                    <div class="text-subtitle2">{{ film.year }}</div>
                </q-card-section>
            </q-card>
        </div>        
    </div>
</template>

<script>

export default {
    name:'FilmItem',
    props:[
        'newfilms',
    ],
}

</script>

<style>
.my-card {
  width: 100%;
  height: 450px;
  max-width: 250px;
  margin-top: 20px;
  cursor: pointer;
}

</style>