<template>
	<HelloWorld />
</template>

<script>
  import HelloWorld from "./HelloWorld";
  import utilities from '../arrays/utilities'
  export default {
    name: "Spanish",
    components: {HelloWorld},
    beforeCreate: async function () {
      await utilities.mandar(2)
    }
  }
</script>

<style scoped>

</style>
