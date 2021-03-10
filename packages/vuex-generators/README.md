# vuex-generators

Generator functions for simple vuex store interactions.

## generateSimpleGetters

Returns an object of simple getters for a state object, where simple means that they will just return an entry for any key.  
For example, given a state object `{key: value}`, an object `{key: state => state[key]}` will be returned.  
This is useful to avoid writing basic operations.

## generateSimpleMutations

Returns an object of simple mutations for a state object, where simple means that they will just replace an entry for any key.  
For example, given a state object `{key: value}`, an object `{setKey: (state, payload) => state[key] = payload}` will be returned.  
This is useful to avoid writing basic operations.
