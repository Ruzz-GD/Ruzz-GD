<template>
    <div class="create-account-main-view">
        <div class="login-container">
            <label for="username">Create Your Username</label>
            <input v-model="username" id="username" type="text" placeholder="Username">
            <label for="password">Create Your Password</label>
            <input v-model="password" id="password" type="text" placeholder="Password">
            <button @click="createmethod">Create Account</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            username:'',
            password:'',
        }
    },
    methods:{
        createmethod(){
            axios.post('https://rz.pythonanywhere.com/createAccount',{
                createdusername: this.username,
                createdpassword: this.password,
            })
            .then(response =>{
                if (response && response.data && response.data.message){
                    this.username = '';
                    this.password = '';
                    alert(response.data.message);
                }
            })
            
        }
    }
}
</script>
<style>

.create-account-main-view{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>