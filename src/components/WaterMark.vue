<template>
  <div>
    <!-- <el-row type="flex" :gutter="3" justify="center">
      <el-alert
        show-icon
        center
        :closable="true"
        title="这是一款最安全，最快速的纯前端图片加水印，拒绝上传保证个人信息安全。"
        type="success"
      ></el-alert>
    </el-row>-->
    <el-row type="flex" :gutter="3" justify="center" style=" flex-flow: row wrap">
      <el-col :md="{span:6}" :sm="{span:24}" :xs="{span:24}">
        <div class="tip">安全，快速的纯前端图片加水印，拒绝上传保证个人信息安全。</div>
        <el-card style="heigh:100%">
          <el-row type="flex" align="middle">
            <el-col :span="50">
              <label>水印文案：</label>
            </el-col>
            <el-col :span="50">
              <el-input v-model.lazy="state.text" placeholder="请输入内容" @change="onChangeText"></el-input>
            </el-col>
          </el-row>
          <!-- 字体大小 -->
          <el-row type="flex" align="middle" style="marginTop:10px">
            <el-col :span="50">
              <label>字体大小：</label>
            </el-col>
            <el-col :span="50">
              <el-input-number
                @change="onChangeText"
                size="10"
                v-model="state.fontSize"
                :min="1"
                :max="100"
                label="字体大小"
              ></el-input-number>
            </el-col>
          </el-row>

          <!-- 水印宽度 -->
          <el-row type="flex" align="middle" style="marginTop:10px">
            <el-col :span="50">
              <label>水印宽度：</label>
            </el-col>
            <el-col :span="50">
              <el-input-number
                @change="onChangeText"
                v-model="state.watermarkWidth"
                :min="1"
                :max="1000"
                label="水印宽度"
              ></el-input-number>
            </el-col>
          </el-row>
          <el-row type="flex" align="middle" style="marginTop:10px">
            <el-col :span="50">
              <label>水印高度：</label>
            </el-col>
            <el-col :span="50">
              <el-input-number
                @change="onChangeText"
                v-model="state.watermarkHeight"
                :min="1"
                :max="1000"
                label="水印高度"
              ></el-input-number>
            </el-col>
          </el-row>
          <el-row type="flex" align="middle" style="marginTop:10px">
            <el-col :span="50">
              <label>选择颜色：</label>
            </el-col>
            <el-col :span="50">
              <el-color-picker v-model="state.color" @change="setOptions" show-alpha></el-color-picker>
            </el-col>
          </el-row>
          <el-row type="flex" align="middle" style="marginTop:10px">
            <!-- <el-col :span="50">
            <label>选择颜色：</label>
            </el-col>-->
            <el-col>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :before-upload="beforeUpload"
              >
                <el-button size="small" type="success">选择图片</el-button>
                <div slot="tip" class="el-upload__tip">jpg/png文件</div>
              </el-upload>
            </el-col>
          </el-row>
          <el-row type="flex" align="middle" style="marginTop:10px">
            <el-col>
              <el-button @click="rest">重置</el-button>
            </el-col>
            <el-col>
              <el-button @click="rotate">旋转</el-button>
            </el-col>
            <el-col>
              <el-button @click="save">下载</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :md="{span:18}" :sm="{span:24}" :xs="{span:24}">
        <el-card class="main_box" style="marginTop:30">
          <!-- 控制 -->
          <div class="canvas_box">
            <canvas style="width: 100%" ref="mainCanvas"></canvas>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Watermark from "../utils/Watermark";
import example from "../assets/example.jpg";
export default {
  data() {
    return {
      state: {
        isExist: true,
        text: "仅用于XXX，他用无效。",
        hex: "#000000",
        // rgb: { r: 0, g: 0, b: 0, a: 0.4 },
        color: "rgba(0, 0, 0, 0.4)",
        fontSize: 23,
        watermarkHeight: 180,
        watermarkWidth: 280
      }
    };
  },
  methods: {
    beforeUpload(file) {
      console.info(file);
      new Promise((resolve, reject) => {
        // console.info("0000");
        var a = new FileReader();
        a.onload = e => {
          //   console.info("1111");
          resolve(e.target.result);
        };
        a.readAsDataURL(file);
      }).then(dataUrls => {
        // console.info("2222");
        // console.info(dataUrls);
        this.watermark.draw(dataUrls);
        this.state.isExist = true;
      });
      return false;
    },
    rotate() {
      this.watermark.rotate();
    },
    save() {
      this.watermark.save();
    },
    rest() {
      this.state = {
        isExist: true,
        text: "仅用于XXX，他用无效。",
        hex: "#000000",
        // rgb: { r: 0, g: 0, b: 0, a: 0.4 },
        color: "rgba(0, 0, 0, 0.4)",
        fontSize: 23,
        watermarkHeight: 180,
        watermarkWidth: 280
      };
      this.setOptions();
      //   this.watermark.draw(example);
    },
    setOptions() {
      const {
        text,
        rgb,
        fontSize,
        watermarkWidth,
        watermarkHeight
      } = this.state;
      const fillStyle = this.state.color;
      this.watermark.setOptions({
        text,
        fillStyle,
        fontSize,
        watermarkWidth,
        watermarkHeight
      });
    },
    onChangeText(key, value) {
      //this.setState({ [key]: value }, () => {
      this.setOptions();
      //});
    }
  },
  mounted: function() {
    this.watermark = new Watermark(this.$refs.mainCanvas);
    this.setOptions();
    this.watermark.draw(example);
  }
};
</script>
<style scoped>
.canvas_box {
  /* margin-left: 30px; */
}
@media (max-width: 768px) {
  .canvas_box {
    margin-left: 0;
    margin-top: 20px;
  }
  .main_box {
    flex-flow: column;
  }
}
.tip {
  padding: 8px 16px;
  background-color: #ecf8ff;
  border-radius: 4px;
  border-left: 5px solid #67c23a;
  margin: 20px 0;
  /* width: 100%; */
}
</style>