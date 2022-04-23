from [YouTube](https://www.youtube.com/watch?v=CVpUuw9XSjY&t=519s)

# Vocab

- store
  - this is the state storage, can hold many reducers but there should only be one store
  - the golbalized state
- action
  - this is the call that you make with directions on what to do to the state
  - very simple explaination of what you want to do
- reducer
  - this is a js file that does the code work on for the stores. activated through the action
  - describes the way your actions transform the state
- dispatch
  - this is the directions for the action. think of it like a router for redux
- selectors
  - this is a way to get a value from the state
  - prolly a good tool for tokens/auth/userId

# Overall Idea

The page will dispatch an action, the reducer will check the action and see how it needs to change the store to turn current state to make it into the next state.

# Installed libraries

- redux - this is the actual state management package
- react-redux - this allows us to connect redux and react together

# Removed at the start

- /src/
  - app.css
  - app.test
  - logo.sgv
  - reportWebVitals.js
  - setupTests.js

# Walk through

- app.js
  - remove the old junk
- /redux
  - create a store instore with configureStoreimport
  - { configureStore } from "@reduxjs/toolkit";
- index.js
  - `this is also redone with {configureStore} from @reduxjs/toolkit`
  - import and add the store to the index.js
  - import and add the provider to index.js
- /redux reducers
  - create your reducer file, there are a lot of pieces to this
    - imports i.e. createSlice
    - initial state
    - the slices, objects with names, states, and reducers
    - actions
    - selectors
    - export the reducer
- store.js
  - once the reducer is made and exported you can import it into the store
  - add the reducer to the configure store object
