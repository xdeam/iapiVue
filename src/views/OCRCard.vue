<template>
  <el-card class="outter">
    <el-page-header @back="goBack" content="OCR图片转文字"></el-page-header>
    <el-row class="row">
      <el-steps :active="activeTag" finish-status="success" align-center>
        <el-step title="上传图片"></el-step>
        <el-step title="解析"></el-step>
        <el-step title="结果"></el-step>
      </el-steps>
    </el-row>
    <el-row class="upload" v-if="activeTag==0">
      <el-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-row>
    <el-row class="progress" v-if="activeTag==1">
      <el-progress
        ref="progress"
        :width="180"
        type="circle"
        :percentage="progress"
        status="success"
      ></el-progress>
    </el-row>
    <el-row type="flex" justify="center" class="result" v-if="activeTag==3">
      <el-col span="14">
        <el-input
          type="textarea"
          :autosize="{ minRows: 10, maxRows: 18}"
          placeholder="请输入内容"
          v-model="textarea"
        ></el-input>
      </el-col>
    </el-row>
    <el-row class="result">
      <el-button @click="next">再来一次</el-button>
      <el-button @click="add">增加</el-button>
    </el-row>
  </el-card>
</template>
<style scoped>
.upload,
.progress,
.result {
  margin-top: 6%;
}
.row {
  margin-top: 2%;
}
.outter {
  min-height: 600px;
}
</style>
<script>
import { bus } from "../main.js";

export default {
  methods: {
    goBack() {
      //提交路径跳转
      bus.$emit("pathchange", "home");
    },
    next() {
      //进度条清零
      this.progress = 0;
      //清除定时任务
      clearInterval(this.st);
      this.st == null;
    },
    add() {
      //防止多次定时任务
      if (this.st == null) {
        if (this.progress < 15) {
          this.st = setInterval(() => {
            this.progress++;
            if (this.progress == 100) {
              this.$message({
                message: "恭喜你，OCR解析成功",
                type: "success"
              });
              clearInterval(this.st);

              this.st = null;
            }
          }, 30);
        }
      }
    }
  },
  data() {
    return {
      progress: 0,
      st: null,
      textarea: ""
    };
  },
  computed: {
    activeTag() {
      if (this.progress > 98) {
        return 3;
      } else {
        if (this.progress == 0) {
          return 0;
        } else {
          return 1;
        }
      }
    }
  }
};
</script>
