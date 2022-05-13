<template>
  <div class="bottomLine q-pa-lg q-gutter-sm">
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" label="HOME"/>
            <q-breadcrumbs-el label="LOGIN" icon="login" to="/login"/>
        </q-breadcrumbs>
  </div>
    <h4 style="margin-top:30px">LOGIN</h4>
    <div class="q-pa-md row justify-center items-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md col-md-6"
        style="max-width:400px"
      >
        <q-input
          filled
          color="blue-grey-6"
          v-model="name"
          label="Your user name *"
          hint="User name"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type your username']"
        />
        
        <q-input
          filled
          color="blue-grey-6"
          :type="isPwd ? 'password': 'text'"
          v-model="password"
          label="Your password *"
          hint="Password"
          lazy-rules
          :rules="[
            val => val && val.length > 0 || 'Please type your password',
          ]"
        >
        <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
        </template>
        </q-input>

        <div>
          <q-btn label="Login" type="submit" color="blue-grey-9"/>
          <q-btn label="Reset" type="reset" color="blue-grey-9" flat class="q-ml-sm" />
        </div>

        <div v-if="err" class="text-red">Login Failed</div>

      </q-form>
      <img src="../assets/register.png" style="width:400px" class="col-md-6">
    </div>
</template>

<script>
import { ref } from 'vue'
import http from '../http-common'

const auth = ref(false)
const name = ref(null)
const password = ref(null)
const err = ref(false)
const accept = ref(false)

export default {
  name:'Login',
  methods: {
    onSubmit () {
      console.log(name.value + '' + password.value)
      const store = this.$store
      const body = {
        "user": name.value,
        "pwd": password.value
      }
      http.post('/auth', body)
      .then((response) => {
        console.log(response.data)
        store.commit('updateSession', response.data)
        localStorage.setItem('user', name.value)
        localStorage.setItem('pwd', password.value)
        localStorage.setItem('token', response.data.s)
        localStorage.setItem('role', response.data.role)
      })
      .then(()=> {
        name.value = null
        password.value = null
        err.value = false
        auth.value = false
        this.$router.push('/')

      })
      .catch((error)=> {
        if(error.response) {
          console.log(error.response.data)
          err.value = true
        }
      })
    },

    onReset () {
      name.value = null
      password.value = null
      accept.value = false
    }
  },

  setup () {
    return {
      accept,
      name,
      password,
      isPwd: ref(true),
      err,
    }
  }
}
</script>

<style scoped>
h4 {
  text-align: center;
}

</style>