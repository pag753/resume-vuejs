<template>
	<HelloWorld />
</template>

<script>
  import HelloWorld from "./HelloWorld";
  import axios from 'axios'
  export default {
    name: "Spanish",
    components: {HelloWorld},
    beforeCreate: function () {
      axios.get('/index.php/welcome/ws/2')
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