<template>
    <div class="q-pa-lg q-gutter-sm bottomLine">
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" label="HOME"/>
        </q-breadcrumbs>
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

export default {
    name:'Home',
    components:{
        Carousel,
        About,
        FilmExplore,
    }
}
</script>

<style>
.bottomLine {
    border-bottom: 1px solid #ddd;
}



</style>