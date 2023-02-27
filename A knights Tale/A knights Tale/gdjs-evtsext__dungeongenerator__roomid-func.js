
if (typeof gdjs.evtsExt__DungeonGenerator__RoomID !== "undefined") {
  gdjs.evtsExt__DungeonGenerator__RoomID.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DungeonGenerator__RoomID = {};
gdjs.evtsExt__DungeonGenerator__RoomID.GDRoomObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__RoomID.GDRoomObjectObjects2= [];

gdjs.evtsExt__DungeonGenerator__RoomID.conditionTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__RoomID.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DungeonGenerator__RoomID.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__RoomID.GDRoomObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__DungeonGenerator__RoomID.GDRoomObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__DungeonGenerator__RoomID.GDRoomObjectObjects1[0].getVariables()).get("__DungeonGenerator").getChild("RoomID"))); }}}

}


};

gdjs.evtsExt__DungeonGenerator__RoomID.func = function(runtimeScene, RoomObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"RoomObject": RoomObject
},
  _objectArraysMap: {
"RoomObject": gdjs.objectsListsToArray(RoomObject)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__DungeonGenerator__RoomID.GDRoomObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__RoomID.GDRoomObjectObjects2.length = 0;

gdjs.evtsExt__DungeonGenerator__RoomID.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__DungeonGenerator__RoomID.registeredGdjsCallbacks = [];