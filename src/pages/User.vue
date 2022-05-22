<template>
  <div class="bottomLine q-pa-lg q-gutter-sm">
    <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" label="HOME"/>
        <q-breadcrumbs-el label="ACCOUNT" icon="person" to="/user"/>
    </q-breadcrumbs>
  </div>
  <div class="user row justify-center content-center">
    <div class="userinfo bg-blue-grey-4 row justify-center items-center q-gutter-md text-center">
      <q-btn to="/user/profile" color="white" class="col-md-3 col-sm-3 col-xs-12" text-color="black" icon="account_circle" label="User Profile" style="height:40px; width:170px; margin-right:5px"/>
      <q-btn to="/user/mange" color="white" class="col-md-3 col-sm-3 col-xs-12" text-color="black" icon="video_settings" label="Film manage" style="height:40px; width:170px; margin-right:5px" />
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
    } else {
      this.$router.push('/user/profile')
    }
  },
}
</script>

<style scoped>
.user {
  margin:50px 0;
}

.userinfo {
  width: 75%;
  min-width: 350px;
  max-width: 800px;
  min-height: 100px;
  max-height: 250px;
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