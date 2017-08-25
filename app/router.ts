'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';

import progressbar from './progressbar/progressbar';

const routes = [
  {
    path: '/dashboard',
    component: (r: any) => require.ensure([], () => r(require('./dashboard/dashboard.component')), 'dashboard')
  },
  {
    path: '/notice',
    component: (r: any) => require.ensure([], () => r(require('./notice/notice.component')), 'dashboard')
  },
  {
    path: '/setting',
    component: (r: any) => require.ensure([], () => r(require('./setting/setting.component')), 'setting'),
    redirect: '/setting/account',
    children: [
      {
        path: 'account',
        component: (r: any) => require.ensure([], () => r(require('./setting/account.component')), 'setting')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  progressbar.start();
  next();
})
router.afterEach((router) => {
  setTimeout(() => {
    progressbar.finish();
  }, 500)
})

export default router;
