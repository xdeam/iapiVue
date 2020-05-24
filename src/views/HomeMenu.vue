<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <card-center
          title="图像识别"
          :imagePath="require('@/assets/ocr.svg')"
          @pathchange="pathchange"
          :path="pathx.ocr"
        />
      </el-col>
      <el-col :span="6" :offset="2">
        <card-center
          title="语音转文字"
          :imagePath="require('@/assets/tts.svg')"
          @pathchange="pathchange"
          :path="pathx.tts"
        />
      </el-col>

      <el-col :span="6" :offset="2" v-show="idcard">
        <card-center
          title="身份证水印"
          :imagePath="require('@/assets/idcard.svg')"
          @pathchange="pathchange"
          :path="pathx.tts"
          disabled="true"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { bus } from "../main.js";
import cardcenter from "../components/CenterCard";
export default {
  data() {
    return {
      pathx: {
        ocr: "ocr",
        tts: "tts"
      },
      idcard: true
    };
  },
  methods: {
    pathchange(path) {
      bus.$emit("pathchange", path);
    }
  },
  components: {
    "card-center": cardcenter
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
