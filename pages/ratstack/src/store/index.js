import { createStore } from 'vuex'
import { getInitialState } from './getInitialState'
import { map } from '../map'
import {
  generateSimpleGetters,
  generateSimpleMutations
} from '@repositoryname/vuex-generators'

export const store = createStore({
  state: getInitialState(),
  getters: {
    ...generateSimpleGetters(getInitialState()),
  },
  mutations: {
    ...generateSimpleMutations(getInitialState())
  },
  actions: {

  }
})
