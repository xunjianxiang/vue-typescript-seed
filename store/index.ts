'use strict';

import Vuex from 'vuex';
import Users from './user';

export default new Vuex.Store({
  modules: {
    users: Users
  }
});
