import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import {createStore} from 'vuex'

axios.defaults.baseURL = 'http://pcpdfilm.starsknights.com:18888'

const store = createStore({
    state: { // storage location
        session:null,
        filmData:[],
    },
    getters: { // read storage
        getSession: state => {
            return state.session
        },
        getFilms: state => {
            return state.filmData
        },
    },
    mutations: {
        updateSession(state, keyRole) { // Use commit to call function to store data
            state.session = keyRole
        },
        updateFilmData(state, films) {
            state.filmData = films
        },
    }
})


const app = createApp(App)
app.use(Quasar)
app.use(router)
app.use(store)
app.mount('#app')


