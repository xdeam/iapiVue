<template>
  <el-card :class="{'box-card':!disabled,'gray':disabled}" @click.native="doclick()">
    <el-image :src="this.imagePath"></el-image>
    <el-col class="icon-details">
      <span>{{title}}</span>
    </el-col>
  </el-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imagePath: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    disabled: {
      type: String
    }
  },
  methods: {
    doclick() {
      if (this.disabled) return;
      else this.$emit("pathchange", this.path);
    }
  }
};
</script>
<style scoped>
div {
  user-select: none;
}
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
.gray {
  cursor: not-allowed;
  filter: grayscale(100%);
}
</style>
