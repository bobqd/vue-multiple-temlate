<template>
  <div class="login-layout">
    <el-container>
      <el-main>
        <el-row class="login-main">
          <el-col :span="24">
            <el-input type="text" v-model="userName" placeholder="用户名"></el-input>
          </el-col>
        </el-row>
        <el-row class="login-main">
          <el-col :span="24">
            <el-input type="password" v-model="passWord" placeholder="密码"></el-input>
          </el-col>
        </el-row>
        <el-row class="login-main">
          <el-button type="primary" :style="{'width': '100%'}">提交</el-button>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import mixinComm from '../../../mixins/mixinComm';
import { Container, Main, Button, Input, Row, Col } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default {
  name: 'Login',
  mixins: [
    mixinComm
  ],
  data: () => {
    return {
      userName: '',
      passWord: ''
    }
  },
  components: {
    'el-container': Container,
    'el-main': Main,
    'el-row': Row,
    'el-col': Col,
    'el-input': Input,
    'el-button': Button
  },
  created() {
  },
  mounted() {

  },
  methods: { }
};
</script>
<style lang="scss">
  .login-main{
    width: 600px;
    margin: 0 auto 20px;
  }
</style>
