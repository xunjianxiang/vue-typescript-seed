'use strict';

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <div class="app-container flex-spacer">
      <el-card>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-card>
      <router-view></router-view>
    </div>
  `
})

export default class ContainerComponent extends Vue {}
