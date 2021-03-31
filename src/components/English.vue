<template>
	<HelloWorld/>
</template>

<script>
  import HelloWorld from "./HelloWorld";
  import utilities from '../arrays/utilities'
  export default {
    name: "English",
    components: {HelloWorld},
    beforeCreate: async function () {
      await utilities.mandar(1)
    }
  }
</script>

<style scoped>

</style>
