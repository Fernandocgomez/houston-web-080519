# React Native

### Install
* Expo Client App
* https://github.com/Joshua-Miles/cross-platform-react
    * `npm install` or `yarn install`
    * `npm install @babel/plugin-proposal-decorators` or `yarn add @babel/plugin-proposal-decorators`
    * `npm run-script web`

### Learning Goals

- Explain how React Native works at a high level
- Identify Key Packages in the React Native Ecosystem
- Use React Native components to build a basic interface on mobile
- Use Expo to connect to a user's Camera  

### High Level
* React Native useability (AirBnB story)
* Unified Code Base vs Platform Targeted Code Bases
    * Will the design in a unified code base be an inferior user experience for people used to specific operating systems


### Packages
* React
* React Native
* Native Base (UI Kit)
    * The closest React Native had to an industry standard styling framework
    * It has some challengers
        * React Native Paper
* Expo
    * Toolkit for Native Apps
    * Components for Native-Specific functionality
    * Provides tool for testing a react native app on your phone
    



### React Native
* No `div`
* Cross Platform (android and ios and ~~windows~~)
* JavaScript based
* No css grid (layout is handled through flex)
* Built in components
    * View (essentially replaces div)
    * TextInput
* React Native Navigation is an alternative to react router
    * createStackNavigator
* onPress vs onClick (we need to think about touch events)

