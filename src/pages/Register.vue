<template>
  <div class="bottomLine q-pa-lg q-gutter-sm">
    <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" label="HOME"/>
        <q-breadcrumbs-el label="SING UP" icon="person" to="/register"/>
    </q-breadcrumbs>
  </div>
  <h4 style="margin-top:30px">Create Your New Account</h4>
    <div class="q-pa-md row items-center justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md col-md-6"
        style="max-width:400px"
      >

        <q-input
          filled
          color="blue-grey-6"
          type="email"
          v-model="email"
          label="Your email address *"
          hint="Email address"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your email address',
          ]"
        />

        <q-input
          filled
          color="blue-grey-6"
          v-model="username"
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
          hint="Password (6 or more characters)"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your password',
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

        <q-toggle v-model="accept" label="I accept the license and terms" color="blue-grey-9"/>

        <div>
          <q-btn label="SING UP" type="submit" color="blue-grey-9"/>
          <q-btn label="Reset" type="reset" color="blue-grey-9" flat class="q-ml-sm" />
        </div>
      </q-form>
        <img src="../assets/register.png" style="width:400px" class="col-md-6">
    </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
export default {
    name:'Register',
  setup () {
    const $q = useQuasar()

    const username = ref(null)
    const password = ref(null)
    const accept = ref(false)

    return {
      username,
      accept,
      isPwd: ref(true),
      password: ref(''),

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        username.value = null
        password.value = null
        accept.value = false
      }
    }
  }
}
</script>

<style scoped>


</style>