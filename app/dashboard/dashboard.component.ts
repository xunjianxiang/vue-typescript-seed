'use strict';

import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';

@Component({
  template: `
    <div>
      <el-card>
        <el-button>Dashboard</el-button>
      </el-card>
      <table>
        <tr v-for="item in items" @click="update(item)">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </table>
    </div>
  `
})

export default class DashboardComponent extends Vue {
  mounted () {
    this.$store.dispatch('users/get');
  }
  update (item: any) {
    item.age = 22;
    this.$store.dispatch('users/set', item);
  }
  private get items () {
    return this.$store.state.users.list;
  }
}
