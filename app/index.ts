'use strict';

import Vue from 'vue';
import AppComponent from './app.component';
import router from './router';

new AppComponent({router}).$mount('app');
