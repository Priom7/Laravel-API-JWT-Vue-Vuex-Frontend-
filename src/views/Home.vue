<template>
  <div class="home">
    <p>Details : {{details}}</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Details msg="Details Component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Details from '@/components/Details.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Details
  },
  props:{
    details : []
  }
}
</script>
