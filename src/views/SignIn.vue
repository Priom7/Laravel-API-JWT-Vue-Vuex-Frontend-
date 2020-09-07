<template>
  <div class="signIn">
    <h1>SignIn</h1>
    {{form}}
    <form @submit.prevent="submit">
      <hr/>
       <label for ='name'>Name : </label>
        <input v-model="form.name" type='text' name='name' id ='name'/>
        <hr/>
        <label for ='email'>Email : </label>
        <input v-model="form.email" type='email' name='email' id ='email'/>
        <hr/>
         <label for ='password'>Password : </label>
        <input v-model="form.password" type='password' name='password' id ='password'/>
        <hr/>
        <button type="submit">Sign In</button>
    </form>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex'
export default {
  name: 'SignIn',
  components: {
   
  },

  data(){
    return {
      form:{
        name: '',
        email:'',
        password:''
      }
    }
  },
   methods: {

     ...mapActions({
       signIn: 'auth/signIn'
     }),
       submit (){
           //
           this.signIn(this.form)
        } 
}
  }
</script>
