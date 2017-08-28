'use strict';

import Vue from 'vue';
import Component from 'vue-class-component';
import AppComponent from './app.component';
import router from './router';

import axios from 'axios';
axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data;
  } else if (response.status === 404 ) {
    return {
      message: '404'
    }
  } else if (response.status === 500) {
    return {
      message: '500'
    }
  }
})

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave'
])

new AppComponent({router}).$mount('app');
