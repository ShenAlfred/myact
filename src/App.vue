<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    @import 'assets/style/myanimate.scss';
    @import 'assets/style/common.css';
    @import 'assets/FontAwesome-4.7.0/css/font-awesome.min.css';

body, html {
    background: #fff;
}

#app {
    color: #2c3e50;
    background: #fff;
    height: 100%;
    -webkit-overflow-scrolling : touch;
}
.load-more {
    padding: 15px 0;
    text-align: center;
}
</style>
