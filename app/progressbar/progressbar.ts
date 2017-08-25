'use strict';

import Vue from 'vue';
import ProgressbarComponent from './progressbar.component';

import { interval } from './progressbar.config';

class ProgressBar {

  // 进度条实例
  private instance: ProgressbarComponent;
  // 进度条完成标记，默认为完成状态
  private completed: boolean = true;
  // 进度条销毁标记，默认为销毁状态
  private destroyed: boolean = true;
  // 延时销毁任务
  private lazyDestroyTask: any;

  // 创建进度条实例
  private create (): void {
    this.instance = new ProgressbarComponent().$mount();
    document.body.appendChild(this.instance.$el);
  }

  // 销毁实例
  private destroy (): void {
    this.instance.$el.remove();
    // 标记销毁状态
    this.destroyed = true;
  }

  // 开启延时销毁任务
  private setLazyDestroy (): void {
    // 此处设置延时是为了优化进度条过渡效果
    this.lazyDestroyTask = setTimeout(() => {
      this.destroy();
    }, interval + 100);
  }

  // 取消延时销毁任务
  private cancelLazyDestroy (): void {
    clearTimeout(this.lazyDestroyTask);
  }

  // 进度条加载开始
  start (): void {
    // 如果当前进度条没有完成则不创建新进度条
    if (!this.completed) return;
    // 如果当前进度条已经完成但是没有销毁
    // 取消延时销毁任务
    // 手动销毁
    if (!this.destroyed) {
      this.cancelLazyDestroy();
      this.destroy();
    }
    // 创建新的实例并加载
    this.create();
    this.instance.start();
    this.completed = false;
    this.destroyed = false;
  }

  // 进度条加载完成
  finish (): void {
    this.instance.finish();
    // 延时销毁
    this.setLazyDestroy();
    // 标记完成状态
    this.completed = true;
  }

}

export default new ProgressBar();
