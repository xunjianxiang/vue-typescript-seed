'use strict';

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <card><Button type="primary">Dashboard</Button></card>
  `
})

export class DashboardComponent extends Vue {}
