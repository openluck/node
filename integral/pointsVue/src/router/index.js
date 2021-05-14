/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-14 13:43:38
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-14 13:56:09
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: ()=> import('../components/login/Login'),
      meta:{
        title:"登录"
      }
    },
  ]
})
