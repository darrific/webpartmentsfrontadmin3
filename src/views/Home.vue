<template>
  <div class="home">
    <section>
      <div class="container">
        <HelloWorld msg="Welcome to Your Vue.js App. This text belongs to a componenent."/>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  }
}
</script>
