<template>
	<HelloWorld/>
</template>

<script>
  import HelloWorld from "./HelloWorld";
  import axios from 'axios'
  export default {
    name: "English",
    components: {HelloWorld},
    beforeCreate: function () {
      axios.get('/index.php/welcome/ws/1')
        .then(function () {
        })
        .catch(function () {
        })
        .finally(function () {
        });
    }
  }
</script>

<style scoped>

</style>