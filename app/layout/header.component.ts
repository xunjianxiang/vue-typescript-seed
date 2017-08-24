'use strict';

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <div class="app-header flex align-items-center">
      <div class="app-logo">
        <img src="https://s.shuzilm.cn/favicon.ico">
      </div>
      <h1>Vue Typescript Seed</h1>
      <div class="flex-spacer"></div>
      <div>
        <div>管理员</div>
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
  `
})

export default class HeaderComponent extends Vue {}
