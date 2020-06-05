## MADU mobile app [expo link](https://expo.io/@ayshiff/madu)
![style-airbnb--typescript-](https://img.shields.io/badge/code%20style-airbnb--typescript-blue)
[![Coverage Status](https://coveralls.io/repos/github/ayshiff/madu_app/badge.svg?branch=master)](https://coveralls.io/github/ayshiff/madu_app?branch=master)

The app is not ejected yet so you can start it using expo:

```
yarn install && yarn [web | start | android | ios | web | test | eject]
```

## Redux & Actions

When you create actions, add them to your root Actions type.
Same with your rootReducer and your rootEpic.

## Epics

Epics are awesome.   
Learn more here => https://redux-observable.js.org/docs/basics/Epics.html

<div align="center">
<img height="300" src="https://miro.medium.com/max/1400/1*6a8luEwhNAzfsxDja_3sAA.png" >
</div>

## Testing Epics

We will use **marble testing** which will make our tests more concise and expressive.   
We will have a **visual representation** of complex cases (error handling...).   
We test the **consistency** of the system and the **behavior** of the circuit.

<div align="center">
<img height="400" src="https://miro.medium.com/max/2000/1*5LpZWsaLnP2vXm78CqjtVA.jpeg" >
</div>

How to write nice marble tests => https://redux-observable.js.org/docs/recipes/WritingTests.html

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


## NOTE

Some files are extracted from the ignite boilerplates: Ignite Bowser & ignite-andross.