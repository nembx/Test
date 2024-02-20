<template>
    <div class="RegisterBox" v-loading.fullscreen.lock="fullscreenLoading">
        <el-container>
          <el-header>
            <h3>REGISTER</h3>
          </el-header>
          <el-main>
            <el-input v-model="user.RegisterName" placeholder="请输入用户名" style="width: 360px;"></el-input>
            <br>
            <el-input v-model="user.RegisterPassword" placeholder="请输入密码" style="width: 360px;" show-password></el-input>
            <br>
            <el-input v-model="user.RegisterEmail" placeholder="请输入邮箱" style="width: 360px;"></el-input>
            <br>
            <el-button type="primary" @click="Register">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</el-button>
            <el-button type="text" @click="$router.push('/login')">登录</el-button>
          </el-main>
        </el-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RegisterF',
  data () {
    return {
      user: {},
      fullscreenLoading: false
    }
  },
  methods: {
    Register () {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
        if (this.user.RegisterName === undefined ||
        this.user.RegisterPassword === undefined ||
        this.user.RegisterEmail === undefined) {
          this.$message.error('用户名或密码不能为空')
        } else {
          axios.post('/Register', {
            username: this.user.RegisterName,
            password: this.user.RegisterPassword,
            email: this.user.RegisterEmail
          }).then(res => {
            if (!res.data) {
              this.$message.error('用户名或密码已存在')
            } else {
              this.$message({
                message: '账号创建成功',
                type: 'success'
              })
              this.$router.push('/login')
            }
          })
        }
      }, 2000)
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 38px;
}
.el-input {
  margin:15px 0;
}

a {
  text-decoration: none;
  font-size: 20px;
}
.el-container {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 160px 290px;
  background-color: rgba(255, 248, 248, 0.534);
}
</style>
