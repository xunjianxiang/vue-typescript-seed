'use strict';

import Vue, { ComponentOptions } from 'vue';
import AccountComponent from './account.component';

describe('account component', () => {
  it('test', () => {
    let app = document.createElement('app');
    document.body.appendChild(app);
    let vm = new AccountComponent().$mount('app');
    expect(vm.$el.textContent).toBe('Account');
  })
})
