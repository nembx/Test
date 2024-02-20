<template>
  <el-container>
    <el-header>
      <h1>{{ page.name }}</h1>
    </el-header>
    <el-main>
      <iframe
        :src="page.url"
        allowfullscreen="allowfullscreen"
        width="60%"
        height="500"
        scrolling="no"
        frameborder="0"
        sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts">
      </iframe>
    </el-main>
    <el-footer>
      <el-button>打开弹幕</el-button>
    </el-footer>
  </el-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pageD',
  data () {
    return {
      page: String
    }
  },
  async created () {
    const id = this.$route.params.id
    const res = await axios.get(`http://localhost:8081/Page/${id}`)
    this.page = res.data.pageIdInfo[0]
  }
}
</script>

<style scoped>
.el-main {
  align-items: center;
}
</style>
