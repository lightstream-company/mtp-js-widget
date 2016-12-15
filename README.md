# MontpellierJS Widget

## Plan    

### Create a tweet wall

* connect to `wall` service
  * History
  * Realtime
* Create redux Store
  * define actions
  * dispatch ations according to API
  * handle actions in store (reducers)
* Create React component(s)
* Plug components to Redux store 
* Skin wall
  * colors for different sources
  * display profile picture
* Make each item clickable
  

### Create a map

* connect to `geo` service
  * History
  * Realtime
* Create redux Store
  * refactor store with multiple namespaces
  * define new actions
  * dispatch new ations according to API
  * handle new actions in store (reducers)
* Create React Map component
  * find/download equirectangular map
* Plug components to Redux store 
* use `equirectangular-projection` to project GeoJSON data on map
* display points in map component
* Make each dot clickable

## Bootstrapping 

```
//install facebook build configuration scripts
npm install -g create-react-app

//create new app
create-react-app mtp-js-widget

//go the app directory...
cd mtp-js-widget
//... and start the dev server
npm start
// => visit http://localhost:3000/

//install dependencies
npm install --save tweetping-connect redux react-redux

//start coding :)
```
