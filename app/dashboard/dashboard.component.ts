'use strict';

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <el-card>
      <el-button>Dashboard</el-button>
    </el-card>
  `
})

export default class DashboardComponent extends Vue {}
