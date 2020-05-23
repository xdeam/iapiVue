<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">图片OCR</el-menu-item>
      <el-menu-item index="2-2">文字转声音TTS</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4">
      <a href="http://xdeam.github.io/" target="_blank">博客</a>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      //activeIndex: "1"
    };
  },
  props: {
    activeIndex: {
      type: String,
      required: true
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
      this.$emit("handleSelect", key, keyPath);
    }
  }
};
</script>
