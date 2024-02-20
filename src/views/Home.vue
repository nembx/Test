<template>
  <div>
    <navBar/>
    <el-switch
      v-model="switchvalue"
      active-color="#13ce66"
      inactive-color="gray"
      active-text="打开表格"
      inactive-text="关闭表格"
      @change="change">
      </el-switch>
      <h3>当前时间是：{{ currentDate }}</h3>
      <p class="animate__animated animate__lightSpeedInRight" style="font-size: 70px;">欧内的手</p>
      <p class="animate__animated animate__lightSpeedInLeft" style="font-size: 70px;">好汉</p>
      <h1>B站动画区三天排行榜</h1>
      <el-table class="animate__animated animate__fadeIn" :data="imformation" border style="width: 900px; margin: auto;" v-if="hide">
        <el-table-column prop="title"
        label="标题">
        </el-table-column>
        <el-table-column prop="play"
        label="播放量">
        </el-table-column>
        <el-table-column prop="author"
        label="作者">
        </el-table-column>
        <el-table-column prop="create"
        label="发布时间">
        </el-table-column>
        <el-table-column prop="bvid"
        label="BV号">
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import navBar from '@/components/navBar.vue';

export default {
    name: 'HomeN',
    data () {
      return {
        switchvalue: true,
        currentDate: new Date(),
        imformation: [],
        hide: true
      }
    },
    components: {
        navBar
    },
    mounted(){
      const h = this.$createElement;
      this.$notify({
        title: '会起名的',
        message: h('i', { style: 'color: teal'}, '欢迎')
      })
    },
    async created () {
      const res = await axios.get('http://localhost:8081/transfer')
      this.imformation = res.data.data
    },
    methods:{
      change (value) {
        if (value === false) {
          this.hide = false
          console.log(this.hide)
        }else {
          this.hide = true
          console.log(this.hide)
        }
      }
    }
}
</script>
<style>
</style>
