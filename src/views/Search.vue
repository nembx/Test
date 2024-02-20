<template>
    <div>
      <h1>查询内容：" <a style="color: red;">{{ $route.params.value }}</a> "，结果如下</h1>
      <el-row>
        <el-col :xs="24" :sm="8" :md="6" :lg="4" v-for="item in result" :key="item.id">
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
    </div>
</template>
 
<script>
import axios from 'axios';
    export default {
      data () {
        return {
            result: []
        }
      },
      async created () {
        const value = this.$route.params.value
        const res = await axios.get(`http://localhost:8081/Search/${value}`)
        this.result = res.data.searchContent
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