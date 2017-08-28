'use strict';

import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';

@Component({
  template: `
    <el-card>
      <el-button>Dashboard</el-button>
    </el-card>
  `
})

export default class DashboardComponent extends Vue {
  private list: any[];
  mounted () {
    axios.get('users').then(response => {
      console.log(response)
    })
  }
}
