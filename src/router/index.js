import Vue from 'vue'
import Router from 'vue-router'
import config from '@/config'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'applyList',
      meta: {
        title: '活动列表',
      },
      component: resolve => require(['@/components/Apply/List'], resolve),
        beforeEnter: (to, from, next) => {
          if(applyId) {
              next({name: 'applyDetail', params: {applyId: applyId}})
          }else {
              next();
          }
        }
    },
    {
      path: '/applyDetail/:applyId',
      name: 'applyDetail',
      meta: {
        title: '活动详情',
      },
      component: resolve => require(['@/components/Apply/Detail'], resolve)
    }
  ];

let router = new Router({
  mode: config.isDevEnv ? 'history' : 'hash',
  routes: routes,
  scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
          return savedPosition
      } else {
          return { x: 0, y: 0 }
      }
  }
});

export default router;
