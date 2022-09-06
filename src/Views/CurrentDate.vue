<template>
  <h1>Today, {{ newDate.getUTCDate()}} {{name}}</h1>

</template>

<script setup lang="ts">
const newDate = new Date()
console.log(newDate)
const month = [
    "Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
const name = month[newDate.getMonth()
];
</script>
<style lang="scss" scoped>
</style>