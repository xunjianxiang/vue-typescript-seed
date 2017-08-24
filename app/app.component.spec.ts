'use strict';

import Vue, { ComponentOptions } from 'vue';
import AppComponent from './app.component';

describe('app component', () => {
  it('test', () => {
    let app = document.createElement('app');
    document.body.appendChild(app);
    let vm = new AppComponent().$mount('app');
    expect(vm.$el.className).toBe('app-layout flex')
  })
})
