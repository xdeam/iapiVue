<template>
  <div>
    <el-row type="flex" class="row-bg" justify="start" style=" flex-flow: row wrap">
      <el-col :md="{span:6,offset:1}" :sm="{span:11}" :xs="{span:10}">
        <card-center
          title="图像识别"
          :imagePath="require('@/assets/ocr.svg')"
          @pathchange="pathchange"
          :path="pathx.ocr"
        />
      </el-col>
      <el-col :md="{span:6,offset:2}" :sm="{span:11,offset:2}" :xs="{span:10,offset:2}">
        <card-center
          title="语音合成"
          :imagePath="require('@/assets/tts.svg')"
          @pathchange="pathchange"
          :path="pathx.tts"
        />
      </el-col>

      <el-col :md="{span:6,offset:2}" v-show="idcard" :sm="{span:12}" :xs="{span:10}">
        <card-center
          title="身份证水印"
          :imagePath="require('@/assets/idcard.svg')"
          @pathchange="pathchange"
          :path="pathx.idc"
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
        tts: "tts",
        idc: "watermark"
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
