'use strict';

import Vue from 'vue';

import AppComponent from './app.component';
import router from './router';

import './component.shim';
import './http.shim';

import store from '../store';

new AppComponent({
  store,
  router
}).$mount('app');
