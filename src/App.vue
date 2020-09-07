<template>
  <div id="app">
    <div id="nav">
     <template v-if="authenticated">
       <h1>Welcome</h1>
       <p>Name : {{user.name}}</p>
       <p>Email : {{user.email}}</p>
      <router-link  to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      </template>
      <template v-else>
      <router-link to="/">SignIn</router-link>
      </template>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed : {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user'
    })
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
