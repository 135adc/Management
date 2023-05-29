<template>
<div class="login">
    <el-form    :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <h3>登录系统</h3>
        <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
// import  Mock  from 'mockjs';
import Cookie from 'js-cookie'

import { getMenu } from '../api'
export default {
data() {
    return {
        ruleForm: {
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
    methods:{
        submitForm(){
            //token信息
            // const token=Mock.Random.guid()
            //token信息存入cookie中
            //设置cookie
            //&&且 ||或
            // Cookie.set('token',token)
            //通过路由前置后,完成相关逻辑,跳转
            // this.$router.push({name:'home'})

            //校验数据是否格式正确
            this.$refs.ruleForm.validate((item)=>{
                if(item){
                    getMenu(this.ruleForm).then(({data})=>{
                    console.log(data)
                    if(data.code===20000){
                        this.$store.commit('setMenu',data.data.menu)
                        this.$message({
                            message: '恭喜你，登录成功',
                            type: 'success'
                         });
                        Cookie.set('token',data.data.token)
                        this.$router.push({name:'home'})
                    }else{
                        this.$message.error('账号或密码不正确');
                    }

               })


                    // Cookie.set('token',token)
                    // this.$router.push({name:'home'})
                }
            })
            //生成登录数据
          
        }
    }
}


</script>

<style lang="less" scoped>
.login{
    box-sizing: border-box;
    border-radius: 10px;
    margin: 100px auto;
    padding: 20px;
    width: 400px;
    height: 300px;
    background-color: rgb(212, 209, 205);

    .el-form{
        h3{
            text-align: center;
            margin-bottom: 30px;
        }
        // margin: 20px;
    
    }
}
</style>