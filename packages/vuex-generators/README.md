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

## Usage example

```js
import { generateSimpleGetters, generateSimpleMutations } from '@repositoryname/vuex-generators'

const initialState = {
  example: 'value',
  exampleToo: 'Two'
}

// generate getters example, exampleToo
const simpleGetters = generateSimpleGetters(initialState)
// generate mutations setExample, setExampleToo
const simpleMutations = generateSimpleMutations(initialState)

// getters object can be extended - this pattern comes in handy
export const getters = {
  ...simpleGetters,
  other: ({example}) => example.toUpperCase()
}

// same pattern allows overriding simple mutations in case they do something later
export const mutations = {
  ...simpleMutations,
  setExample: (state, payload) => state.example = payload.toLowerCase()
}
```
