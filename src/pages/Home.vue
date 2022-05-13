<template>
    <div class="q-pa-lg q-gutter-sm bottomLine row justify-between items-center">
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" label="HOME"/>
        </q-breadcrumbs>
        <div class="row items-center q-gutter-x-sm">
            <img v-if="weather == 'Rain'" style="height:33px" src="../assets/rainy.svg" alt="Rain"/>
            <span style="font-size:17px">{{temp}}°</span>
            <span style="font-size:17px">{{date}}-{{month}}-{{year}} ( {{getday}} ) {{gettime}}</span>
        </div>
    </div>
    <Carousel />
    <div class="bg-blue-grey-4 text-white">
        <About />
    </div>
        <FilmExplore />
</template>

<script>
import Carousel from '../components/Carousel'
import About from '../components/About.vue'
import FilmExplore from '../components/FilmExplore.vue'
import axios from 'axios'

export default {
    name:'Home',
    components:{
        Carousel,
        About,
        FilmExplore,
    },
    data() {
        return {
            temp:'',
            weather:'',
            weatherImg:'',
            date:new Date().getDate(),
            month:new Date().getMonth()+1,
            year:new Date().getFullYear(),
        }
    },
    mounted() {
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=22.3193&lon=114.1694&appid=ea9c43672a0c105b1867a34529d8b7e6')
        .then((response) => {
            var temp = response.data.main.temp - 273.15
            this.temp = temp.toFixed(1)
            this.weather = response.data.weather[0].main
            console.log(this.weather)
        })
    },
    computed: {
        getday() {
            const weekday = new Array(7);
            weekday[0]="SUN";
            weekday[1]="MON";
            weekday[2]="TUE";
            weekday[3]="WED";
            weekday[4]="THU";
            weekday[5]="FRI";
            weekday[6]="SAT";

            return weekday[new Date().getDay()]; 
        },
        gettime() {
            var hrs = new Date().getHours()
            var mins = new Date().getMinutes()
            var time = hrs + ":" + mins
            return time;
        },
    }
}
</script>

<style scoped>

</style>