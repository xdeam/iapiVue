<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <el-card class="box-card" @click.native="doclick('ocr')">
          <!-- <div slot="header" class="clearfix"> -->

          <el-image :src="require('@/assets/ocr.svg')"></el-image>
          <el-col class="icon-details">
            <span>图像识别</span>
          </el-col>
          <!-- </div> -->
        </el-card>
      </el-col>
      <el-col :span="6" :offset="2">
        <el-card class="box-card" @click.native="doclick('tts')">
          <!-- <div slot="header" class="clearfix"> -->

          <el-image :src="require('../assets/tts.svg')">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
              <!-- <i class="el-icon-microphone"></i> -->
            </div>
          </el-image>
          <el-col>
            <span>语音转文字</span>
          </el-col>
          <!-- </div> -->
        </el-card>
      </el-col>
      <!--    <el-col :span="6" :offset="2">
        <el-card class="box-card" @click.native="doclick">
       
          <el-image :src="require('../assets/idcard.svg')">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
           
            </div>
          </el-image>
          <el-col>
            <span>身份证加水印</span>
          </el-col>
      
        </el-card>
      </el-col>-->
    </el-row>
  </div>
</template>
<script>
import { bus } from "../main.js";
export default {
  data() {
    return {
      pathx: {
        ocr: "/ocr",
        tts: "/tts"
      }
    };
  },
  methods: {
    doclick(path) {
      //confirm("a");
      bus.$emit("pathchange", path);
    }
  }
};
</script>
<style scoped>
.row-bg {
  line-height: 110px;
  max-height: 160px;
}
.con-details {
  line-height: 10px;
}
.box-card:hover {
  box-shadow: 0 0 10px grey;
}
.box-card {
  cursor: pointer;
}
</style>
