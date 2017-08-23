'use strict';

import Vue, { ComponentOptions } from 'vue';
import { DashboardComponent } from './dashboard.component';

describe('dashboard component', () => {
  it('test', () => {
    let app = document.createElement('app');
    document.body.appendChild(app);
    let vm = new DashboardComponent().$mount('app');
    expect(vm.$el.className).toBe('ivu-card ivu-card-bordered')
  })
})
