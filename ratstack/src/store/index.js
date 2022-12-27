import { createStore } from 'vuex'
import createMap from '../map/createMap'
import {
  generateSimpleGetters,
  generateSimpleMutations
} from '@repositoryname/vuex-generators'

const map = createMap()

const initialState = () => ({
  eh: 0
})

export const store = createStore({
  state: initialState,
  getters: {
    ...generateSimpleGetters(initialState()),
    map: () => map
  },
  mutations: {
    ...generateSimpleMutations(initialState())
  },
  actions: {

  }
})
