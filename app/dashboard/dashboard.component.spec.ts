'use strict';

import Vue, { ComponentOptions } from 'vue';
import DashboardComponent from './dashboard.component';

describe('dashboard component', () => {
  it('test', () => {
    let trimString = (string: any): string => {
      return string.trim();
    }
    let app = document.createElement('app');
    document.body.appendChild(app);
    let vm = new DashboardComponent().$mount('app');
    expect(trimString(vm.$el.textContent)).toBe('Dashboard');
  })
})
