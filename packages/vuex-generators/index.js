/**
 * @param {string} key string to settify, e.g. 'varName'
 * @returns {string} settified string, e.g. 'setVarName'
 */
function settify (key) {
    return `set${key[0].toUpperCase()}${key.slice(1)}`
}

/**
 * Returns an object of simple mutations for a state object, where
 * simple means that they will just replace an entry for any key.
 * For example, given a state object {key: value}, an object
 * {setKey: (state, payload) => state[key] = payload} will be returned.
 * This is useful to avoid writing basic operations.
 * @param {Object} state state to generate mutations for
 * @returns {Object.<String, Function>} object of mutations
 */
export function generateSimpleMutations (state) {
    return Object.keys(state)
        .reduce((acc, key) => {
            return {
                ...acc,
                [settify(key)]: (moduleState, payload) => {
                    moduleState[key] = payload;
                }
            };
        }, {});
}

/**
 * Returns an object of simple getters for a state object, where
 * simple means that they will just return an entry for any key.
 * For example, given a state object {key: value}, an object
 * {key: state => state[key]} will be returned.
 * This is useful to avoid writing basic operations.
 * @param {Object} state state to generate getters for
 * @returns {Object.<String, Function>} object of getters
 */
export function generateSimpleGetters (state) {
    return Object.keys(state)
        .reduce((acc, key) => ({
            ...acc,
            [key]: s => s[key]
        }), {});
}

/**
 * Generator to use vuex variables as v-model. Used analoguous to vuex helper functions, e.g.
 * you may use `getSetGenerator(['varName'])` or `getSetGenerator('moduleName', ['varName'])`
 * to create `this.varName` in vue component that may then be used as a v-model.
 * @param {(String|String[])} prefixOrNames Either store prefix (module names '/'-separated) or ...
 * @param {?String[]} names Array of names to generate v-model-like computed-usable property for.
 *                          Mustn't be set if prefixOrNames is String[].
 * @returns {Array} Array of get-settable objects
 */
export function getSetGenerator (prefixOrNames, names) {
    const prefix = typeof prefixOrNames === 'string' ? `${prefixOrNames}/` : ''
    const reducable = typeof prefixOrNames === 'string' ? names : prefixOrNames

    return reducable.reduce((acc, curr) => {
        acc[curr] = {
            get() {
                let pointer = this.$store.state
                if (prefix) {
                    prefixOrNames
                        .split('/')
                        .forEach((moduleName) => (pointer = pointer[moduleName]))
                }
                return pointer[curr]
            },
            set(value) {
                this.$store.commit(
                    `${prefix}${settify(curr)}`,
                    value
                )
            },
        }
        return acc
    }, {})
}
