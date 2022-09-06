<script setup lang="ts">
import Timer from "./components/timer";

export default {
  name: 'App',
  components: {
    Timer,
  },
};

import { RouterLink, RouterView } from 'vue-router'
import CurrentDate from "@/views/CurrentDate.vue";
import Stop from "@/views/Stop.vue";
</script>

<template>
<div id="app">
 <Timer msg=" Time tracker"/>
 </div>
 
  <current-date/>
  <stop-watch/>
</template>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

<style scoped>
</style>