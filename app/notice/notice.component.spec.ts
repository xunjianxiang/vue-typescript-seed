'use strict';

import Vue, { ComponentOptions } from 'vue';
import NoticeComponent from './notice.component';

describe('notice component', () => {
  it('test', () => {
    let app = document.createElement('app');
    document.body.appendChild(app);
    let vm = new NoticeComponent().$mount('app');
    expect(vm.$el.textContent).toBe('Notice');
  })
})
