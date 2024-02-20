<template>
    <div>
        <navBar/>
        <el-col>
            <el-avatar :size="180" :src="defImg"></el-avatar>
                <!-- <el-upload class="avatar-uploader"
                action=""
                :show-file-list="false"
                :on-success="handleAvatarSuccess">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload> -->
            <h1>name：{{ userInfo.username }}</h1>
            <h1>email：{{ userInfo.email }}</h1>
            <h1>address：{{ userInfo.address }}</h1>
            <el-button round @click="exit" type="primary">退出登录</el-button>
        </el-col>
        <el-upload
        class="avatar-uploader"
        action="http://localhost:8081/Up"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>
</template>

<script>
import axios from 'axios'
import navBar from '@/components/navBar.vue'
    export default {
        data () {
            return {
                // imageUrl: '',
                defImg: "https://s11.ax1x.com/2024/02/02/pFQsec8.jpg",
                userInfo: [],
                imageUrl: ''
            }
        },
        components: {
            navBar
        },
        async created () {
            const name = sessionStorage.getItem('username')
            this.name = name
            const res = await axios.post(`http://localhost:8081/User/${name}`)
            this.userInfo = res.data[0]
        },
        methods: {
            // handleAvatarSuccess (res, file) {
            //     this.imageUrl = URL.createObjectURL(file.raw)
            // },
            exit () {
                sessionStorage.removeItem('username')
                this.$message({
                    message: '成功退出',
                    type: 'success'
                })
                this.$router.push('/login')
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped>

.el-col {
    margin-top: 60px;
}
</style>