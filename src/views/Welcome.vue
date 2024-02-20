<template>
    <div v-loading="loading" class="animate__animated animate__fadeIn">
            <h2 class="animate__animated animate__fadeIn">《{{ arr.creator }}》—— {{ arr.hitokoto }}</h2>
            <el-container>
            <el-button type="primary" @click="start">ENTER</el-button>  
        </el-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            loading: false,
            arr: []
        }
    },
    methods: {
        start () {
            this.loading = true
            setTimeout(() => {
                this.loading = false
                this.$router.push('/login')
            },2000)
        }
    },
    async created () {
        const res = await axios.get('https://v1.hitokoto.cn/?c=b')
        this.arr = res.data
    }
}
</script>

<style scoped>
h2 {
    margin-top: 200px;
}

.el-button {
    height: 60px;
    margin-top: 200px;
}

.el-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

div {
    background: url('@/assets/background.jpg');
    width: 100%;
    height: 100%;
    position:fixed;
    background-size: 100% 100%;
    overflow-y: scroll;
    max-width: 100vw;
    margin: 0 auto;
}

</style>