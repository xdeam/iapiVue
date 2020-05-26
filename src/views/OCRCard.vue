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
      <el-upload
        :on-success="onsuccess"
        :on-progress="onprogress"
        drag
        :action="actionurl"
        name="uploadimg"
      >
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
        v-if="progress==0"
        ref="uploadprogress"
        :width="180"
        type="circle"
        :percentage="uploadprogress"
      ></el-progress>
      <el-progress
        v-show="progress>0"
        ref="progress"
        :width="180"
        type="circle"
        :percentage="progress"
        status="success"
      ></el-progress>
    </el-row>
    <el-row type="flex" justify="center" class="result" v-if="activeTag==3">
      <el-col :span="14">
        <el-input
          type="textarea"
          :autosize="{ minRows: 10, maxRows: 18}"
          placeholder="请输入内容"
          v-model="textarea"
        ></el-input>
      </el-col>
    </el-row>
    <el-row class="result" v-if="isfinished&&progress==100">
      <el-button @click="next">再来一次</el-button>
      <!-- <el-button @click="add">增加</el-button> -->
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
      this.uploadprogress = 0;
      this.isfinished = false;
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
          }, this.stap);
        }
      }
    },
    onsuccess(response, file, fileList) {
      console.log(response);
      this.isfinished = true;
      this.textarea = response.result;
    },
    onprogress(e) {
      var loaded = e.loaded; //已经上传大小情况
      var tot = e.total; //附件总大小
      var per = Math.floor((100 * loaded) / tot); //已经上传的百分比
      this.uploadprogress = per;
      if (per == 100) {
        this.add();
      }
      if (!this.isfinished && this.progress > 90) {
        this.progress = 70;
        this.stap = 60;
      }
    }
  },
  data() {
    return {
      isfinished: false,
      progress: 0,
      st: null,
      textarea: "",
      uploadprogress: 0,
      stap: 30
    };
  },
  computed: {
    activeTag() {
      if (this.isfinished && this.progress == 100) {
        return 3;
      } else {
        if (this.uploadprogress == 0) {
          return 0;
        } else {
          return 1;
        }
      }
    },
    actionurl() {
      return `${this.$api.base}/api/ocr/`;
    }
  }
};
</script>
