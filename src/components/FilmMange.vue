<template>
    <div class="formHeader bg-blue-grey-1 text-blue-grey-9">
        <h4>Add a Film</h4>
    </div>
    <div class="formBody">
        <div class="row">
            <div class="row no-wrap col-12">
                <q-input dense v-model="filmTitle" class="search" bg-color="blue-grey-1" standout="bg-blue-grey-8" placeholder="Enter a film title...">
                <q-icon name="search" color="blue-grey-1" style="font-size:25px;margin-top:7px"/></q-input>
                <q-btn color="blue-grey-1" text-color="blue-grey-9" style="height:25px;" @click="getFilm()">Search</q-btn>
            </div>
            <q-form>
            <div class="row input">
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <label>Title:</label>
                    <q-input dense v-model="film.title" bg-color="blue-grey-1" standout="bg-blue-grey-8" class="inputTitle"/>
                </div>
                <div class="col-md-2">
                    <label>Year:</label>
                    <q-input dense v-model="film.year" bg-color="blue-grey-1" standout="bg-blue-grey-8" class="inputOthers"/>
                </div>
                <div class="row col-12">
                    <div class="col-6">
                        <div>
                            <label>Released:</label>
                            <q-input dense v-model="film.released" bg-color="blue-grey-1" standout="bg-blue-grey-8" class="inputOthers"/>
                        </div>
                        <div>
                            <label>Runtime (min):</label>
                            <q-input dense v-model="film.runtime" bg-color="blue-grey-1" standout="bg-blue-grey-8" class="inputOthers"/>
                        </div>
                        <div>
                            <label>Language:</label>
                            <q-input dense v-model="film.language" bg-color="blue-grey-1" standout="bg-blue-grey-8" class="inputOthers"/>
                        </div>
                        <div>
                            <label>Genre:</label>
                            <q-input dense v-model="film.genre" bg-color="blue-grey-1" standout="bg-blue-grey-8" class="inputOthers"/>
                        </div>
                        <div>
                            <label>Director:</label>
                            <q-input dense v-model="film.director" bg-color="blue-grey-1" standout="bg-blue-grey-8" class="inputOthers"/>
                        </div>
                    </div>
                    <div class="col-6">
                        <img class="shadow-8" style="width:170px; margin-top:25px" :src="film.poster"/>
                    </div>
                </div>
            </div>
            <div class="btnSubmit">
                <q-btn label="Submit" type="submit" color="blue-grey-8" @click="onSubmit"/>
                <q-btn label="Reset" type="reset" color="blue-grey-9" flat class="q-ml-sm" @click="onReset()"/>
            </div>
            </q-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'FilmMange',
    data() {
        return {
            filmTitle:'',
            film: {
                title: '',
                year: '',
                released: '',
                runtime: '',
                language: '',
                genre: '',
                director: '',
                poster: ''               
            },
        }
    },
    beforeMount() {
        if(this.$store.getters.getSession == null) {
        this.$router.push('/login')
        }
    },     
    methods: {
        getFilm() {
            axios.get(`infofilm/${this.filmTitle}`)
            .then((response) => {
                this.film = {
                    title: response.data.title,
                    year: response.data.year,
                    released: response.data.released,
                    runtime: Number(response.data.runtime.match(/\d+/g)),
                    language: response.data.language,
                    genre: response.data.genre,
                    director: response.data.director,
                    poster: response.data.poster
                }
            })
            .catch((error) => {
                console.log(error)
                alert('No film found!')
            }) 
        },
        onReset() {
            this.film = {}
        },
        onSubmit() {
            const body = {
                s:this.$store.getters.getSession.s,
                film:this.film
            }
            axios.post('imfilm', body)
            .then(res => {
                console.log(res)
                alert('Submited')
                this.film = {}
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style>
.formHeader {
    height: 80px;
    padding-top:20px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
}

.formBody {
    margin: 20px 20px;
}
.search {
    margin:0 15px;
    width: 470px;
}

.inputTitle{
    min-width:200px;
    margin-right: 15px;
}

.inputOthers{
    min-width:120px;
    margin-right: 15px;
}

.input {
    margin:15px;
}

.btnSubmit {
    margin: 15px;
}

</style>