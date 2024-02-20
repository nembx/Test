<template>
    <div v-loading.fullscreen.lock="Loading">
      <el-menu router :default-active="$route.path"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-menu-item index="/home">Home</el-menu-item>
        <el-menu-item index="/article">Article</el-menu-item>
        <el-menu-item index="/page">Video</el-menu-item>
        <el-menu-item index="/user">User</el-menu-item>
        <i class="el-icon-search" style="color: white;" @click="open"></i>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'HomeN',
  data () {
    return {
      Loading: false
    }
  },
  methods: {
    async open () {
      this.$prompt('请输入搜索内容:').then(({ value }) => {
        setTimeout(() => {
          this.Loading = true
          this.$router.push(`/search/${value}`)
          this.$router.go(0)
        }, 2000);
        this.Loading = false
        this.$message({
          type: 'success',
          message: '你输入的内容是 ' + value,
        })
      }).catch(() => {
        this.$message({
            type: 'info',
            message: '取消输入'
        })
      })
    }
  }
}

</script>

<style scoped>
.el-icon-search{
  margin-left: 700px;
  margin-top: 20px;
  font-size: larger;
  float: right;
  margin-right: 20px;
}

.el-menu-item {
  font-size: large;
}
</style>
