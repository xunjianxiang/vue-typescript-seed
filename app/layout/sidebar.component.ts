'use strict';

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <div class="app-sidebar flex flex-column">
      <!--
      <div>
        <img width="20" src="https://s.shuzilm.cn/favicon.ico">
      </div>
      -->
      <div class="flex-spacer">
        <ul>
          <li>
            <router-link to="/dashboard">
              <i class="el-icon-menu"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <router-link to="/notice">
              <i class="el-icon-message"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/setting">
              <i class="el-icon-setting"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/setting/account">
              <i class="el-icon-information"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  `
})

export default class SidebarComponent extends Vue {}
