<template>
  <div class="bottomLine q-pa-lg q-gutter-sm">
    <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" label="HOME"/>
        <q-breadcrumbs-el label="ACCOUNT" icon="person" to="/user"/>
    </q-breadcrumbs>
  </div>
  <div class="user row justify-center content-center">
    <div class="userinfo bg-blue-grey-4 row justify-center items-center q-gutter-md text-center">
      <q-avatar style="height:80px;width:80px" class="col-md-4 col-sm-3 col-xs-6"><img src="https://cdn.quasar.dev/img/boy-avatar.png"></q-avatar>
      <h5 class="col-md-2 col-sm-3 col-xs-6">User name</h5>
      <q-btn to="/user/profile" color="white" class="col-md-3 col-sm-3 col-xs-12" text-color="black" icon="account_circle" label="User Profile" style="height:40px; width:170px"/>
      <q-btn to="/user/mange" color="white" class="col-md-3 col-sm-3 col-xs-12" text-color="black" icon="video_settings" label="Film manage" style="height:40px; width:170px" />
    </div>
    <div class="dashboard bg-blue-grey-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'

export default {
  name:'user',
  data() {
    return {
      
    }
  },
  beforeMount() {
    if(this.$store.getters.getSession == null) {
      this.$router.push('/login')
    }
  } 
}
</script>

<style>
.user {
  padding:50px 0;
}

.userinfo {
  width: 75%;
  min-width: 350px;
  max-width: 800px;
  border-radius: 8px;
  color: white;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.dashboard {
  width: 75%;
  min-width: 350px;
  max-width: 800px;
  border-radius: 8px;
  color: white;
}

</style>