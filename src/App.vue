<template>
  <div id="app">
    <div class="text-center pt-2 pb-5">
      <router-link to="/">English</router-link>
      <br>
      <router-link to="/spanish">Spanish</router-link>
      <br>
      <a @click="mandar(3)" href="/resume.pdf" target="_blank"><i class="fa fa-file-pdf" aria-hidden="true"></i> PDF English</a>
      <br>
      <a @click="mandar(4)" href="/cv.pdf" target="_blank"><i class="fa fa-file-pdf" aria-hidden="true"></i> PDF Spanish</a>
    </div>
    <router-view></router-view>
    <footer class="footer text-center pt-2 pb-5">
      <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
      <router-link to="/">English</router-link>
      <br>
      <router-link to="/spanish">Spanish</router-link>
      <br>
      <a @click="mandar(3)" href="/resume.pdf" target="_blank"><i class="fa fa-file-pdf" aria-hidden="true"></i> PDF English</a>
      <br>
      <a @click="mandar(4)" href="/cv.pdf" target="_blank"><i class="fa fa-file-pdf" aria-hidden="true"></i> PDF Spanish</a>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'app',
    components: {
    },
    methods: {
      mandar: function (num) {
        axios.get('/index.php/welcome/ws/' + num)
                .then(function () {
                })
                .catch(function () {
                })
                .finally(function () {
                })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
