<template>
  <transition name="fade">
    <div>
      <h1 class="test">{{ msg }}</h1>
      <i class="fa fa-camera-retro"></i>
      <div>
        <button @click="add">click me</button>
      </div>
      <test></test>
    </div>
  </transition>
</template>
<style>
</style>
<script>
  import test from '../test.vue'
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    components:{
      test
    },
    methods: {
      add () {
        this.$store.commit('increment')
      }
    },
    created () {
      console.log(this.$store)
    }
  }
</script>
