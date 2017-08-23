'use strict';

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <card><Button type="primary">Primary</Button></card>
  `
})

export class AppComponent extends Vue {}
