<template>
  <el-card class="outter">
    <el-page-header @back="goback" content="TTS语音合成"></el-page-header>
    <el-row class="row"></el-row>
  </el-card>
</template>
<script>
import { bus } from "../main.js";
export default {
  methods: {
    goback() {
      bus.$emit("pathchange", "home");
    }
  }
};
</script>