<template>
  <q-layout view="hHh Lpr fff">
      <q-header elevated>
          <q-toolbar class="bg-blue-grey-10 q-pa-md">
              <q-btn flat @click="drawerLeft =! drawerLeft" dense icon="menu" class="q-mr-sm"/>
              <router-link to="/">
              </router-link>
              <q-toolbar-title><strong>Film</strong>Box
                <q-avatar rounded><img src="./assets/filmBox.png"></q-avatar>
              </q-toolbar-title>
              <div class="q-gutter-sm marginTop-1" v-if="getSession == null">
                <router-link to="/register">
                  <q-btn color="white" text-color="black" label="Sing Up" />
                </router-link>
                <router-link to="/login">
                  <q-btn color="white" text-color="black" label="Login" />
                </router-link>
              </div>
              <div class="row items-center" v-if="getSession !== null">
                <q-btn @click="logout" color="white" text-color="black" label="Logout" style="margin-right:10px"/>
                <div style="font-size:18px">Hi, {{checkRole}}</div>
                <q-avatar size="45px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>      
              </div>
          </q-toolbar>
      </q-header>

      <q-footer elevated>
        <div class="bg-blue-grey-10 q-pa-md row">
          <div class="col-12 text-center">
            <p class="footerName"><strong>Film</strong>Box</p>
            <q-avatar rounded><img src="./assets/filmBox.png"></q-avatar>
          </div>
          <p class="col-12 text-center">Copyright <q-icon name="copyright"/> FilmBox. Inc.</p>
        </div>
      </q-footer>

      <q-page-container style="padding-top:20px">
        <router-view></router-view>
      </q-page-container>

      <q-drawer
        side="left"
        v-model="drawerLeft"
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/">
              <q-item-section avatar><q-icon name="home" /></q-item-section>
              <q-item-section>Home</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/about">
              <q-item-section avatar><q-icon name="info" /></q-item-section>
              <q-item-section>About</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/films">
              <q-item-section avatar><q-icon name="movie" /></q-item-section>
              <q-item-section>Film List</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/user">
              <q-item-section avatar><q-icon name="account_circle" /></q-item-section>
              <q-item-section>Account</q-item-section>
            </q-item>            
          </q-list>
        </q-scroll-area>

        <q-img id="userInfo" class="absolute-top" src="https://wallpaperaccess.com/full/2650957.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              <div class="text-weight-bold">Razvan Stoenescu</div>
              <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>
  </q-layout>  
</template>

<script>
import {ref} from 'vue'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  setup() {
    return {
      drawerLeft: ref(false),
    }
  },
  computed: {
    ...mapGetters(['getSession']),
    
    checkRole() {
      if(this.$store.getters.getSession.role == 1) {
        return 'Staff'
      } else {
        return 'Customer'
      }
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$store.commit('updateSession', null)
      this.$router.push('/')
    }
  },
}
</script>

<style>
* {
  margin:0;
  padding: 0;
}

a {
  text-decoration: none;
}
.marginTop-1 {
  margin-top: 1px;
}

.footerName {
  font-size:25px;
  display: inline-block;
  margin-right: 10px;
}

#userInfo {
  display: block;
}

</style>
