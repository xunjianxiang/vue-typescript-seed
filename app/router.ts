'use strict';

import VueRouter from 'vue-router';

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

export default new VueRouter({
  routes
})
