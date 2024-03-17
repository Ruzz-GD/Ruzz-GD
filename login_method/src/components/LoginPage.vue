<template>
  <div class="login-page-main-view">
    <span>
      <h1>Hello This is My Practice Login_Method</h1>
    </span>
    <div class="login-container">
      <label for="username">Enter Your Username</label>
      <input v-model="username" id="username" type="text" placeholder="Username">
      <label for="password">Enter Your Password</label>
      <input v-model="password" id="password" type="text" placeholder="Password">
      <button @click="loginMethod">Login</button>
      <button @click="createAccount">Create Account</button>
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
    loginMethod(){
      axios.post('https://rz.pythonanywhere.com/login',{
        username : this.username,
        password : this.password,
      })
      .then(response =>{
        if(response && response.data && response.data.message){
          alert(response.data.message);
          this.$store.dispatch('login'); // Dispatch the login action to update the state
          this.$router.push('/HomePage');
        }
        if(response && response.data && response.data.error){
          alert(response.data.error)
        }
      })
    },
    createAccount(){
      this.$router.push('CreateAccount');

    }
    
  }
}
</script>
<style>
.login-container button{
  position: relative;
  margin-top: 10px;
}
.login-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30vh;
  height: 40vh;
  box-shadow: 2px 2px 10px 1px rgb(158, 156, 156);
  padding: 50px;
}
.login-page-main-view{
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width:450px){
  .login-page-main-view{
    text-align: center;
  }
  .login-page-main-view h1{
    font-size: 1.4rem;
  }
}
</style>