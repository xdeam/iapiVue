<template>
  <div class="divc" @click="load=!load">
    <div :class="{'unload':true,'loader':load}">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <el-avatar
        class="child"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    loader: Boolean
  },
  data() {
    return { load: false };
  },
  methods: {
    //   load(){
    //       return !this.load
    //   }
  }
};
</script>
<style scoped>
.divc {
  margin-top: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 12vh;
  /* background: #f1f1f1; */
}
.unload {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-content: center;
  align-items: center;
}
.loader {
  background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
  animation: animate 1.2s linear infinite;
}
@keyframes animatechild {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
    box-shadow: #84cdfa;
  }
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    box-shadow: #84cdfa;
  }
}
.unload:hover {
  box-shadow: 0 0 10px grey;
}
.unload .child {
  content: "";
  flex: 1;
  background: #f1f1f1;
  border: solid white 10px;
  border-radius: 50%;
}
.loader .child {
  animation: animatechild 1.2s linear infinite;
}
.unload span {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 55%;
}
.loader span {
  background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
}
.loader span:nth-child(1) {
  filter: blur(2px);
}
.loader span:nth-child(2) {
  filter: blur(5px);
}
.loader span:nth-child(3) {
  filter: blur(5px);
}
.loader span:nth-child(4) {
  filter: blur(30px);
}

/* 
.loader:after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: #f1f1f1;
  border: solid white 10px;
  border-radius: 50%;
} */
</style>
