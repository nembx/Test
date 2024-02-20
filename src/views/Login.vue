<template>
  <div class="LoginBox" v-loading.fullscreen.lock="fullscreenLoading">
    <el-container>
      <el-header>
        <h3>LOGIN</h3>
      </el-header>
      <el-main>
        <el-input v-model="user.LoginName" placeholder="请输入用户名" style="width: 360px;"></el-input>
        <br>
        <el-input v-model="user.LoginPassword" placeholder="请输入密码" style="width: 360px;" show-password></el-input>
        <br>
        <el-checkbox v-model="checked" label="记住密码" @change="remember"></el-checkbox>
        <el-button type="primary" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
        <el-button type="text" @click="$router.push('/register')">注册</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginF',
  data () {
    return {
      user: {},
      fullscreenLoading: false,
      checked: true
    }
  },
  methods: {
    login () {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
        if (this.user.LoginName === undefined ||
        this.user.LoginPassword === undefined) {
          this.$message.error('用户名或密码不能为空')
        } else {
          axios.post('/Login', {
            username: this.user.LoginName,
            password: this.user.LoginPassword
          }).then(res => {
            if (!res.data) {
              this.$message.error('用户名或密码出错')
            } else {
              window.sessionStorage.setItem("username",this.user.LoginName);//存储user对象
              this.$router.push('/home')
            }
          })
        }
      }, 2000)
    },
    remember (value) {
      console.log("nihao"+value);
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

.el-checkbox {
  margin-left: -100px;
  padding-right: 20px;
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
