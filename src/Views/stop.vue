<template>
    <div>
      <el-button @click="stop.pause()" type="danger" plain>STOP</el-button>

      <el-button @click="stop.reset()" type="success" plain>START NEW</el-button>

  <span>{{ stop.hours }}</span>:<span>{{ stop.minutes }}</span>:<span>{{ stop.seconds }}</span>
    </div>
    
</template>


<script setup lang="ts">
import {useStop} from 'vue-timer-hook';
const autoStart = true;
const stop= useStop(autoStart);
</script>
<style lang="scss" scoped>
</style>