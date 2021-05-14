<!--
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-14 10:28:59
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-14 17:18:52
-->
<template>
  <div class="login">
    <h1 class="title">管理系统</h1>
    <div class="login-box">
      <div class="choose-login">
        <a-radio-group name="radioGroup" :default-value="1" @change="onChange">
          <a-radio :value="1">会员登录</a-radio>
          <a-radio :value="2">企业登录</a-radio>
          <a-radio :value="3">注册</a-radio>
        </a-radio-group>
      </div>
      <div class="title2">
        <h2 class="login-title v-title" v-show="vipTitle">会员登录</h2>
        <h2 class="login-title admin-title" v-show="adminTitle">企业登录</h2>
        <h2 class="login-title register-title" v-show="regiTitle">注册</h2>
      </div>
      <div class="login-content">
        <a-form
          :form="form"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 17 }"
          @submit="handleSubmit"
          class="login-from"
        >
          <a-form-item label="用户名">
            <a-input placeholder="请输入用户名" />
          </a-form-item>
          <a-form-item label="密码">
            <a-input placeholder="请输入密码"> </a-input>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" html-type="submit"> 登录 </a-button>
          </a-form-item>
        </a-form>
      </div>
      <div class="register-content" style="display: none"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vipTitle: true,
      adminTitle: false,
      regiTitle: false,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        let { username, password } = values;
        // 会员登录
        this.$http({
          method: "post",
          url: this.$util.baseUrl + "users/userLogin",
          data: {
            username: username,
            userpwd: password,
          },
        })
          .then((res) => {
            console.log(res);
            if (res.data.code === "200") {
              sessionStorage.setItem("userIfon", JSON.stringify(res.data.data));
            }
          })
          .then((err) => {
            console.log(err);
          });
      });
    },
    /**
     * @name: 切换
     * @msg:
     * @param {*}
     * @return {*}
     */
    onChange(e) {
      let index = e.target.value;
      if (index === 1) {
        this.vipTitle = true;
        this.adminTitle = false;
        this.regiTitle = false;
      } else if (index === 2) {
        this.adminTitle = true;
        this.vipTitle = false;
        this.regiTitle = false;
      } else {
        this.regiTitle = true;
        this.vipTitle = false;
        this.adminTitle = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  // background-image: url('../../assets/img/loginbg.png');
  background: url("../../assets/img/loginbg.png") no-repeat center/cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    position: absolute;
    color: #fff;
    font-size: 45px;
    top: 10%;
    left: 20%;
  }

  .login-box {
    background: url("../../assets/img/loginbox.png") no-repeat center/cover;
    width: 60vw;
    height: 60vh;
    background-color: #fff;
    position: relative;

    .choose-login {
      position: absolute;
      right: 10%;
      top: 10%;
    }

    .title2 {
      position: absolute;
      right: 10%;
      top: 21%;
      font-size: 20px;
      display: flex;
      width: 300px;
    }
    // .login-title {
    //   position: absolute;
    // }

    .login-from {
      position: absolute;
      width: 300px;
      height: 300px;
      right: 18%;
      top: 33%;
    }
  }
}
</style>