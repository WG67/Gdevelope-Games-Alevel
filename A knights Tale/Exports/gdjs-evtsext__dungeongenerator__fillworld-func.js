
if (typeof gdjs.evtsExt__DungeonGenerator__FillWorld !== "undefined") {
  gdjs.evtsExt__DungeonGenerator__FillWorld.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DungeonGenerator__FillWorld = {};
gdjs.evtsExt__DungeonGenerator__FillWorld.repeatCount2 = 0;

gdjs.evtsExt__DungeonGenerator__FillWorld.repeatCount4 = 0;

gdjs.evtsExt__DungeonGenerator__FillWorld.repeatIndex2 = 0;

gdjs.evtsExt__DungeonGenerator__FillWorld.repeatIndex4 = 0;

gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects4= [];

gdjs.evtsExt__DungeonGenerator__FillWorld.conditionTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__FillWorld.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DungeonGenerator__FillWorld.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95FillWorld_46GDTerrainObjectObjects4Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects4});
gdjs.evtsExt__DungeonGenerator__FillWorld.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__DungeonGenerator__FillWorld.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DungeonGenerator__FillWorld.repeatCount4 = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MapWidth")) || 0 : 0);
for(gdjs.evtsExt__DungeonGenerator__FillWorld.repeatIndex4 = 0;gdjs.evtsExt__DungeonGenerator__FillWorld.repeatIndex4 < gdjs.evtsExt__DungeonGenerator__FillWorld.repeatCount4;++gdjs.evtsExt__DungeonGenerator__FillWorld.repeatIndex4) {
gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects4.length = 0;


if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__DungeonGenerator__FillWorld.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95FillWorld_46GDTerrainObjectObjects4Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterX")) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterY")) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects4[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects4[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterX").add(1);
}}
}

}


{


{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterX").setNumber(0);
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterY").add(1);
}}

}


};gdjs.evtsExt__DungeonGenerator__FillWorld.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterX").setNumber(0);
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CounterY").setNumber(0);
}}

}


{


gdjs.evtsExt__DungeonGenerator__FillWorld.repeatCount2 = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MapHeight")) || 0 : 0);
for(gdjs.evtsExt__DungeonGenerator__FillWorld.repeatIndex2 = 0;gdjs.evtsExt__DungeonGenerator__FillWorld.repeatIndex2 < gdjs.evtsExt__DungeonGenerator__FillWorld.repeatCount2;++gdjs.evtsExt__DungeonGenerator__FillWorld.repeatIndex2) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__FillWorld.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__DungeonGenerator__FillWorld.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DungeonGenerator__FillWorld.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DungeonGenerator__FillWorld.func = function(runtimeScene, TileSize, MapWidth, MapHeight, TerrainObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"TerrainObject": TerrainObject
},
  _objectArraysMap: {
"TerrainObject": gdjs.objectsListsToArray(TerrainObject)
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
if (argName === "TileSize") return TileSize;
if (argName === "MapWidth") return MapWidth;
if (argName === "MapHeight") return MapHeight;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__FillWorld.GDTerrainObjectObjects4.length = 0;

gdjs.evtsExt__DungeonGenerator__FillWorld.eventsList3(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DungeonGenerator__FillWorld.registeredGdjsCallbacks = [];