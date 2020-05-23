<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <el-card class="box-card">
          <!-- <div slot="header" class="clearfix"> -->
          <span>图像识别</span>
          <i class="el-icon-picture-outline"></i>
          <!-- </div> -->
        </el-card>
      </el-col>
      <el-col :span="6" :offset="2">
        <el-card class="box-card">
          <!-- <div slot="header" class="clearfix"> -->
          <span>语音转文字</span>
          <i class="el-icon-microphone"></i>

          <!-- </div> -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.row-bg {
  line-height: 160px;
  max-height: 160px;
}
</style>