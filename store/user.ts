'use strict';

import axios from 'axios';

declare interface User {
  id: number,
  name: string;
  age: number;
}

declare interface UserState {
  list: User[];
}

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    get (state: UserState, users: User[]): void {
      state.list = users;
    },
    set (state: UserState, user: User): void {
      let _user = state.list.find(_user => {
        return _user.id === user.id;
      });
      if (!_user) return;
      _user.age = user.age;
    }
  },
  actions: {
    get (context: any): void {
      axios.get('users').then(response => {
        context.commit('get', response.data.list);
      })
    },
    set (context: any, user: User): void {
      context.commit('set', user)
    }
  }
}
