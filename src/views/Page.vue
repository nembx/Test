<template>
    <div>
      <navBar/>
      <el-row :gutter="20" >
        <el-col :xs="24" :sm="8" :md="6" :lg="4" v-for="item in page.list" :key="item.id">
          <el-card shadow="hover" @click.native="$router.push(`/pagedetail/${item.id}`)">
            <el-image :src="item.img" style="height: 140px; width: 224px;"></el-image>
            <el-tooltip effect="light">
              <div slot="content" v-text="item.name"></div>
              <span style="font-size: 17px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">{{ item.name }}</span>
            </el-tooltip>
          </el-card> 
        </el-col>
      </el-row>
      <el-pagination
      background
      layout="prev, pager, next"
      :page-size="page.pageSize"
      :current-page="page.pageNum"
      :total="page.total"
      @current-change="changePage"
      >
      </el-pagination>
    </div>
</template>

<script>
import axios from 'axios'
import navBar from '@/components/navBar.vue'
export default {
  name: 'pageN',
  data () {
    return {
      page: [],
      pageNum: 1,
      showTooltip: true,
      loading: true
    }
  },
  components: {
    navBar
  },
  methods: {
    async getList () {
      const res = await axios.get(`http://localhost:8081/Page?pageNum=${this.pageNum}`)
      this.page = res.data.pageInfo
    },
    changePage (size) {
      this.pageNum = size
      this.getList()
    }
  },
  created () {
    this.getList()
  },
  mounted () {
    this.loading = false
  }
}
</script>

<style scoped>
.el-pagination {
  position: fixed;
    bottom: 0;
    height: 40px;
    width: 100%;
    text-align: center;
}
.el-card{
  height: 200px;
  width: 224px;
  /* margin: 20px 0 10px 40px; */
  transition: all .5s;
  margin-left: 40px;
  margin-bottom: 90px;
}

.el-row {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  margin-top: 130px;
}

.el-card ::v-deep .el-card__body {
  padding: 0px;
}
</style>
