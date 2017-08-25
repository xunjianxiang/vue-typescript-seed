'use strict';

import './progressbar.scss'
import Vue from 'vue';
import Component from 'vue-class-component';

import { interval } from './progressbar.config';

@Component({
  template: `
      <el-progress :percentage="per" stroke-width="3" text-inside="true" show-text="false" class="app-progressbar"></el-progress>
  `
})

export default class ProgressbarComponent extends Vue {

  private max: number = 100;
  private min: number = 0;
  private per: number = this.min;
  private step: number = 10;
  private task: any;

  private loading (): void {
    if (this.per < this.max) {
      this.per += (this.max - this.per) * interval / 1000 / this.step;
    } else {
      clearInterval(this.task);
    }
  }

  private update (per: number): void {
    this.per = per;
  }

  start (): void {
    setTimeout(() => {
      this.loading();
    });
    this.task = setInterval(() => {
      this.loading();
    }, interval)
  }

  finish (): void {
    this.update(100);
    clearInterval(this.task);
  }

}
