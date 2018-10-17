<template>
   <div class="login-wrap"> 
      <el-container>
          <el-aside>
              <index></index>
          </el-aside> 
            <div class="login">
                <el-main>
                    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" :label-position="labelPosition" class="demo-ruleForm">
                        <el-form-item label="username" prop="username" >
                        <el-input v-model="loginForm.username" autofocus="true"></el-input>
                        </el-form-item>
                        <el-form-item label="password" prop="password">
                        <el-input type="password" v-model="loginForm.password" @keyup.enter.native="login('loginForm')"></el-input>
                        </el-form-item>
                        <div class="login-btn">
                            <el-button type="primary" @click="login('loginForm')">登录</el-button>
                        </div>
                    </el-form>
                </el-main>
            </div>
    </el-container>
   </div>
</template>
<script>
    import index from '@/components/index.vue'
    export default {
        components: {
            index
        },
        data (){
            return{ 
                labelPosition: 'left' ,
                loginForm: {
                username: '',
                password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            login (formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                            this.$router.push('/file')
                        }
            })
        }
    }
    }
</script>
<style>
    .login{
        position: relative;
        width:100%;
        height:100%;
    }
</style>

