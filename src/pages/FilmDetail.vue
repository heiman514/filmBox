<template>
    <div class="bottomLine q-pa-lg q-gutter-sm">
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" label="HOME"/>
            <q-breadcrumbs-el label="FILM LIST" icon="movie" to="/films"/>
            <q-breadcrumbs-el label="DETAIL" icon="info"/>
        </q-breadcrumbs>
    </div>
    <div class="title q-pa-lg bg-blue-grey-4 text-white">
        <h3 style="font-size:30px">{{ film.title }} ({{ film.year }})</h3>
    </div>
    <div class="row q-pa-lg q-gutter-md film justify-center">
        <q-img class="col-xs-12 col-sm-5 col-md-3 poster rounded-borders" style="max-height:450px; max-width:280px" :src="film.poster"></q-img>
        <ul class="col-xs-12 col-sm-5 col-md-3 detailList">
            <li>Released: {{ film.released }}</li>
            <li>Runtime: {{ film.runtime }} min</li>
            <li>Language: {{ film.language }}</li>
            <li>Genre: {{ film.genre }}</li>
            <li>Director: {{ film.director }}</li>
        </ul>
    </div>

</template>

<script>
import http from '../http-common'

export default {
    name:'filmDetail',
    data() {
        return {
            film:{}
        }
    },
    mounted() {
        http.get(`film/${this.$route.params.id}`)
        .then ((response)=> {
            this.film = response.data[0]
        })
        .catch((error)=> {
            console.log(error)
        })
    },
}
</script>

<style scoped>
.poster {
    width: 250px;
    height: 350px;
}
.detailList {
    font-size: 18px;
    list-style: none;
    margin-left: 30px;
}

.detailList li {
    padding: 5px 0;
}

.film {
    margin-top: 30px;
    margin-bottom: 40px;
    padding: 0 80px;
}


.title {
    padding-left: 80px;
    padding-right: 80px;
}
</style>