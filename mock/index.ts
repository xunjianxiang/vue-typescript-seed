
'use strict';

import Mock from 'mockjs';

Mock.setup({
  timeout: '200-600'
})

Mock.mock('users', 'get', options => {
  return {
    status: 'success',
    message: 'toaster.success.DATALOAD',
    list: [
      {
        id: 1,
        name: '张三',
        age: 18
      },
      {
        id: 2,
        name: '李四',
        age: 19
      },
      {
        id: 3,
        name: '王五',
        age: 20
      }
    ]
  }
})
