/*
 * @Descripttion:
 * @version:
 * @Author: OpenLcuk
 * @Date: 2021-05-14 13:43:38
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-14 13:56:09
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("../components/login/Login"),
      meta: {
        title: "登录"
      }
    },
    {
      path: "/",
      name: "UserHome",
      redirect: "/news",
      component: () => import("../view/UserHome/UserHome.vue"),
      children: [
        {
          path: "/news",
          name: "News",
          component: () => import("../components/News/News.vue"),
          meta: {
            title: "新闻中心"
          }
        },
        {
          path: "/userinfo",
          name: "UserInfo",
          component: () => import("../components/UserInfo/UserInfo.vue"),
          meta: {
            title: "个人中心"
          }
        },
        {
          path: "/pointes",
          name: "Pointes",
          component: () => import("../components/Pointes/Pointes.vue"),
          meta: {
            title: "积分中心"
          }
        },
      ]
    }
  ]
});
