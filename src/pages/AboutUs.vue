<template>
  <div class="bottomLine q-pa-lg q-gutter-sm">
    <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" label="HOME"/>
        <q-breadcrumbs-el label="ABOUT" icon="info" to="/about"/>
    </q-breadcrumbs>
  </div>
  <About />
</template>

<script>
import About from '../components/About.vue'
export default {
    name:'AboutUs',
    components:{
      About
    }
}
</script>

<style>

</style>