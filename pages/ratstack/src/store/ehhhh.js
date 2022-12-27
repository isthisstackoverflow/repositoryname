import { RESTRICTION } from './restriction'
import { MODIFY_TYPE } from './modifyType'
import { MODIFIABLE } from './modifiable'
import { makeProperties } from './makeProperties'

// TODO this is a messy potentially buggy hardly updatable mess - what do?

const DECLARATION = {
  PACK: 0,
  MAFIA: 1,
  // TODO step between these?
  LORDSHIP: 2,
  SCREECHING: 3,
  HOLY_RAT_EMPIRE: 4,
  NATION: 5
}

const BUILDING = {
  FOOD_HOLE: 0,
  MAKE_RATS: 1,
  RAT_HOLE: 2,
  EAT_BUNKER: 3,
  SHARP_TEETH_SHOP: 4
}

const THINK = {
  BOSS_GOOD: 0,
  OTHER_PACK_BAD: 1,
  TURN_THINK_AROUND: 2,
  DONT_EAT_ALL: 3,
  SHARPEN: 4,
  SHARE: 5,
  BROTHERHOOD: 6,
  THE_RATFATHER: 7,
  DOMINANCE_IS_FAMILY: 8
}

DECLARATION.properties = [
  makeProperties('Pack', 0, RESTRICTION.FACTION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.OBEDIENCE, 20],
    [MODIFY_TYPE.ADD, MODIFIABLE.THINK, 20]
  ]),
  makeProperties('Mafia', 500, RESTRICTION.FACTION, [
    [THINK, [THINK.BOSS_GOOD, THINK.OTHER_PACK_BAD]]
  ], [
    [MODIFY_TYPE.ADD, MODIFIABLE.OBEDIENCE, 20],
    [MODIFY_TYPE.ADD, MODIFIABLE.EAT, 100]
  ]),
  makeProperties('Lordship', 0, RESTRICTION.FACTION, [], []),
  makeProperties('Screeching', 0, RESTRICTION.FACTION, [], []),
  makeProperties('Holy Rat Empire', 0, RESTRICTION.FACTION, [], [])
]

BUILDING.properties = [
  makeProperties('Food Hole', 150, RESTRICTION.REGION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.EAT, 20],
    [MODIFY_TYPE.ADD, MODIFIABLE.THINK, 20]
  ]),
  makeProperties('Make Rats', 0, RESTRICTION.NONE, [], [
    [MODIFY_TYPE.MULTIPLY, MODIFIABLE.RATS, 2]
  ]),
  makeProperties('Rat Hole', 200, RESTRICTION.REGION, [
    [DECLARATION, [DECLARATION.MAFIA]]
  ], [
    [MODIFY_TYPE.MULTIPLY, MODIFIABLE.RAT, 1.2]
  ]),
  makeProperties('Eat Bunker', 200, RESTRICTION.REGION, [
    [DECLARATION, [DECLARATION.MAFIA]]
  ], [
    [MODIFY_TYPE.ADD, MODIFIABLE.EAT, 100]
  ]),
  makeProperties('Sharp Teeth Shop', 300, RESTRICTION.REGION, [
    [DECLARATION, [DECLARATION.MAFIA]],
    [THINK, [THINK.SHARPEN]]
  ], [
    [MODIFY_TYPE.MULTIPLY, MODIFIABLE.ATTACK_STEAL, 1.2],
    [MODIFY_TYPE.ADD, MODIFIABLE.ATTACK_TERRORIZE, 100]
  ])
]

THINK.properties = [
  makeProperties('Boss good', 0, RESTRICTION.FACTION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.OBEDIENCE, 20]
  ]),
  makeProperties('Other Pack Bad', 0, RESTRICTION.FACTION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.ATTACK_STEAL, 20]
  ]),
  makeProperties('Turn Thing Around', 0, RESTRICTION.FACTION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.EAT, 20]
  ]),
  makeProperties('Don\'t Eat All', 0, RESTRICTION.FACTION, [], [
    [MODIFY_TYPE.ADD, MODIFIABLE.EAT, 20],
    [MODIFY_TYPE.ADD, MODIFIABLE.OBEDIENCE, -20]
  ]),
  makeProperties('Sharpen', 0, RESTRICTION.FACTION, [], []), // Plus Steal
  makeProperties('Share', 0, RESTRICTION.FACTION, [], []), // Minus Obedience, Plus Eat
  makeProperties('Brotherhood', 0, RESTRICTION.FACTION, [], []), // Add Obedience
  makeProperties('The Ratfather', 0, RESTRICTION.FACTION, [], []), // Plus Obedience
  makeProperties('Dominance is Family', 0, RESTRICTION.FACTION, [], []) // Other factions may join offer
]

export {
  RESTRICTION,
  MODIFY_TYPE,
  MODIFIABLE,
  DECLARATION,
  BUILDING,
  THINK
}


export default new Store({
  state: initialState(),
  modules: {
    /* reserved for plugins */
    plugin: {
      namespaced: true,
    },
  },
  getters: {
    ...generateSimpleGetters(initialState()),
    // hack: deliver map (outside vuex) based on counter; see NOTE(sende) above
    map: (state) => {
      noop(state.map)
      return map
    },
    // hack: deliver components (outside vuex) based on counter; see NOTE(sende) above
    components: (state) => {
      noop(state.components)
      return components
    },
  },
  mutations: {
    ...generateSimpleMutations(initialState()),
    // hack: don't put map in vuex (complex object); see NOTE(sende) above
    setMap: (state, payload) => {
      map = payload
      state.map = state.map + 1
    },
    // hack: don't put components in vuex (complex objects); see NOTE(sende) above
    setComponents: (state, payload) => {
      components = payload
      state.components = state.components + 1
    },
  },
  actions: {
    addComponent({ state, commit, dispatch }, component: PluginContainer) {
      const { language, name, options, storeModule } = component

      /* configuration merge – "options" are from client-code, "configuration"
       * is from mapConfiguration object and thus overrides */
      commit('setConfiguration', {
        ...state.configuration,
        [name]: merge({}, options, state.configuration[name] || {}),
      })

      // if a store module exists, register it to plugin module namespace
      if (storeModule) {
        this.registerModule(['plugin', name], storeModule)
        const setupActionName = `plugin/${name}/setupModule`
        const setupActionExists = Object.keys(this._actions).includes(
          setupActionName
        )

        if (setupActionExists) {
          dispatch(setupActionName, options)
        }
      }
      if (language) {
        // NOTE(roehlipa): If somehow needed later, add the namespace to the LanguageOption as well;
        //                 for whatever reason one would need that ಠ_ಠ
        language.forEach((lng) =>
          i18next.addResourceBundle(lng.type, 'common', lng.resources, true)
        )
      }
      if (state.configuration[name].displayComponent) {
        commit('setComponents', [...components, component])
      }
    },
  },
})
