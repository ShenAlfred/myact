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
      component: resolve => require(['@/components/Apply/List'], resolve)
    },
    {
        path: '/applyDetail',
        name: 'applyDetail',
        meta: {
            title: '活动详情',
        },
        component: resolve => require(['@/components/Apply/Detail'], resolve)
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
  routes: routes
});

export default router;
