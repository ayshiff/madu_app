## MADU mobile app [expo link](https://expo.io/@ayshiff/madu)
![style-airbnb--typescript-](https://img.shields.io/badge/code%20style-airbnb--typescript-blue)
[![Coverage Status](https://coveralls.io/repos/github/ayshiff/madu_app/badge.svg?branch=master)](https://coveralls.io/github/ayshiff/madu_app?branch=master)

You can start the app using expo:

```
yarn install && yarn [web | start | android | ios | web | test | eject]
```

## Tech used

- **core**: React Native, Expo SDK
- **code quality** Typescript, esLint, prettier
- **state management**: redux, redux-observable, RxJs, redux-persist, AsyncStorage
- **test**: jest, detox (not yet finished)
- **styling**: styled-components

## Redux & Actions

We use redux to store our domain logic and redux-persist to persist our store inside AsyncStorage.
When you create actions, add them to your root Actions type.
Same with your rootReducer and your rootEpic.

*Having unit tests for all reducers will **prevent any issues related to global application state**. It’s especially useful if there are a lot of different API calls and every call will modify a state. It’s easy to break entire application state with a small refactoring without realizing it.
Alex Bachuk*

## Epics

[Redux-Observable](https://www.npmjs.com/package/redux-observable) is a [Redux middleware](https://www.codementor.io/vkarpov/beginner-s-guide-to-redux-middleware-du107uyud) that allows you to filter and map actions using [RxJS operators](https://www.npmjs.com/package/rxjs).

Learn more here:  https://redux-observable.js.org/docs/basics/Epics.html

<div align="center">
<img height="300" src="https://miro.medium.com/max/1400/1*6a8luEwhNAzfsxDja_3sAA.png" >
</div>

## Epic Testing

We will use **marble testing** which will make our tests more concise and expressive.   
We will have a **visual representation** of complex cases (error handling...).   
We test the **consistency** of the system and the **behavior** of the circuit.

We can easily pass any dependencies to our epics as `ajax` to mock our calls.

<div align="center">
<img height="400" src="https://miro.medium.com/max/2000/1*5LpZWsaLnP2vXm78CqjtVA.jpeg" >
</div>

How to write nice marble tests -> https://redux-observable.js.org/docs/recipes/WritingTests.html

NOTE: **cold** VS **hot** Observables -> https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339

## Folder structure

```
├── src
|   ├── app
│   │   ├── components // This is where our React components will live
│   │   ├── actions // This is where our Redux actions will live
│   │   ├── store // This is where our Redux reducers are
│   │   ├── epics // This is where our Redux-Observable epics will live
│   │   ├── screens // This is the place for our Screens
│   │   ├── core // This is the place to put the core types and functions
│   │   ├── theme // This is where the theme of the app is (fonts, spacing...)
│   │   ├── utils // This the place to put our utilities
│   │   ├── navigation // This is where your react-navigation navigators will live
```