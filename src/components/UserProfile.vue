<template>
    <div class="formHeader bg-blue-grey-1 text-blue-grey-9">
        <h4>Profile</h4>
    </div>
    <div class="formBody">
        <div style="font-size:22px">
            <p>Role: {{ getRole }}</p>
            <p>User Name: {{ userName }}</p>
            <p>Password: {{ password }}</p>
            <div class="row items-center">
                <p class="col-md-3">New Password: </p>
                <q-input dense standout="bg-blue-grey-8" bg-color="blue-grey-1" class="col-md-5" v-model="newpwd">{{ newpwd }}</q-input>
            </div>
            <div class="row items-center">
                <p class="col-md-3">Confirm Password:</p>
                <q-input dense standout="bg-blue-grey-8" bg-color="blue-grey-1" class="col-md-5" v-model="firmpwd">{{ firmpwd }}</q-input>
            </div>
            <q-btn label="Change Password" color="blue-grey-8" style="margin-top:10px" @click="updatePassword"/>
            <p v-if="pwdChecked == true">New Password did not same to Confirm Password!!</p>
        </div>
    </div>
</template>

<script>
import http from '../http-common'

export default {
    name:'Profile',
    data() {
        return {
            userName: localStorage.getItem('user'),
            password: localStorage.getItem('pwd'),
            newpwd: null,
            firmpwd: null,
            pwdChecked: false
        }
    },
    beforeMount() {
        if(this.$store.getters.getSession == null) {
        this.$router.push('/login')
        }
    },
    computed: {
        getRole() {
            if(this.$store.getters.getSession.role == 1) {
                return 'Staff'
            } else {
                return 'Customer'
            }
        }
    },
    methods:{
        updatePassword() {
            if(this.newpwd === this.firmpwd) {
                const body = {
                    newpwd: this.newpwd,
                    key: this.$store.getters.getSession.s
                }
                http.put('/update', body)
                .then(()=> {
                    localStorage.setItem('pwd',this.newpwd)
                    alert('Password update succesed')
                })
                .catch((error) => {
                    console.log(error);
                })
            } else {
                return this.pwdChecked = true
            }
        }
    } 
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




</style>