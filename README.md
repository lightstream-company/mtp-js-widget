# Montpellier Javascript Widget

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

