<template>
  <div class="login">
    <div class="container">
      <h4>Login</h4>
        <div class="row">
          <form @submit="login">
            <div class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input type="text" id="username-input" class="username" v-model="username">
                  <label for="username-input">Username</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input type="password" class="password" v-model="password">
                  <label for="password-input">Password</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <button type="submit" class="btn">Login</button>
                </div>
              </div>
              <div class="row">
                <div class="col s12">
                  <p><a @click="logout">Logout</a></p>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import router from "../router"
  export default {    
      name: "login",
      data(){
        return{
          username: "",
          password: ""
        }
      },    
      methods: {
        login(){  
          let username = this.username;
          let password = this.password;
          this.$store.dispatch('login', { username, password}).then(() => this.$router.push('/home'))
        },
        logout(){
          console.log("logout")
          axios.post("http://localhost:3010/auth/student/logout")
              .then((response) => {                    
                  console.log(response)
                  this.$router.push({name: "buildings"})
              })
              .catch((errors) => {
                  console.log("flag");
                  console.log(errors)
              })
        } 
      }    
  }
</script>
<style scoped>
  .btn {
    width: 100%;
  }
</style>