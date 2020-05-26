<template>
  <div class="home">
    <el-container>
      <el-header>
        <hmenu :activeIndex="activeIndex" @handleSelect="handleSelect" />
      </el-header>
      <el-main>
        <!-- <transition name="el-fade-in" mode="in-out" appear> -->
        <router-view />
        <!-- </transition> -->
      </el-main>
      <el-footer>
        ©2020
        <a href="http://xdeam.github.io/" target="_blank">Xwinter</a> All Rights Reserved
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import centercard from "@/components/CenterCard";
import hmenu from "@/components/HeadMenu";
import { bus } from "../main.js";

export default {
  name: "Home",
  data() {
    return {
      activeIndex: "1",
      tab: { "1": "home", "2-1": "ocr", "2-2": "tts", "2-3": "watermark" }
    };
  },
  methods: {
    //处理下拉菜单
    handleSelect(key, keyPath) {
      //  console.log(key, keyPath);
      this.activeIndex = key;
      this.$router.push(this.tab[key]);
    }
  },
  components: { centercard, hmenu },
  mounted: function() {
    let that = this;
    //改变路径和路由
    bus.$on("pathchange", function(path) {
      for (let prop in that.tab) {
        // console.log(prop + " = " + that.tab[prop]);
        if (path == that.tab[prop]) {
          that.activeIndex = prop;
          that.$router.push(path);
          break;
        }
        //
      }
    });
    this.$axios.get(`${process.env.VUE_APP_URL}/upload/`).then(data => {
      //  console.info(data);
    });
  }
};
</script>
<style scoped>
.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  flex: 1;
  min-height: calc(99vh - 140px);
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
