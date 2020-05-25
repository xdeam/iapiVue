<template>
  <div>
    <el-row>
      <el-card class="outter">
        <!-- 标题栏 -->
        <el-page-header @back="goback" content="TTS语音合成"></el-page-header>
        <!-- 空一行 -->
        <!-- <el-row class="row"></el-row> -->
      </el-card>
    </el-row>
    <el-row class="row"></el-row>
    <el-row>
      <el-card class="outter">
        <el-row>
          <el-input
            type="textarea"
            :autosize="{ minRows: 10, maxRows: 18}"
            placeholder="请输入内容"
            v-model="textarea"
          ></el-input>
        </el-row>
      </el-card>

      <!-- 空一行 -->
    </el-row>
    <el-row class="row"></el-row>
    <el-row>
      <el-card>
        <el-row type="flex" justify="center" :gutter="2" class="lastz">
          <el-col :span="1" :offset="2">
            <div>
              <voice-circul />
            </div>
          </el-col>
          <el-col :span="1" :offset="2">
            <div>
              <voice-circul :loader="true" />
            </div>
          </el-col>
          <el-col :span="1" :offset="2">
            <div>
              <voice-circul />
            </div>
          </el-col>
          <el-col :span="1" :offset="2">
            <div>
              <voice-circul />
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>
<script>
import { bus } from "../main.js";
import VC from "../components/VoiceCircul";
export default {
  data() {
    return {
      textarea: ""
    };
  },
  methods: {
    goback() {
      bus.$emit("pathchange", "home");
    }
  },
  components: {
    "voice-circul": VC
  }
};
</script>
<style scoped>
.row {
  height: 30px;
}
.lastz {
  margin-top: 10px;
}
</style>
