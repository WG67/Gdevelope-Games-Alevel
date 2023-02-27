
if (typeof gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors !== "undefined") {
  gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors = {};
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.forEachIndex2 = 0;

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.forEachObjects2 = [];

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.forEachTemporary2 = null;

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.forEachTotalCount2 = 0;

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatCount4 = 0;

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatCount6 = 0;

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatIndex4 = 0;

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatIndex6 = 0;

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects5= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects6= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects7= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects8= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects1= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects2= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects3= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects4= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects5= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects6= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects7= [];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects8= [];

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.conditionTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Neighbor"), gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects7);

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects7.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects7[i].isCollidingWithPoint(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ThisCenterX")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("NeighborOffsetX")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ThisObjectWidth"))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ThisCenterY")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("NeighborOffsetY")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ThisObjectWidth")))) ) {
        gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects7[k] = gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects7[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects7.length = k;}if (gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ThisNeighborCount").add(1);
}}

}


{


{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("NeighborOffsetX").add(1);
}}

}


};gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatCount6 = 3;
for(gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatIndex6 = 0;gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatIndex6 < gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatCount6;++gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatIndex6) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("NeighborOffsetX").setNumber(-(1));
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("NeighborOffsetY").add(1);
}}

}


};gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects2, gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3);

{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ThisCenterX").setNumber((( gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3[0].getCenterXInScene()));
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ThisCenterY").setNumber((( gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3[0].getCenterYInScene()));
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ThisObjectWidth").setNumber((( gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3[0].getWidth()));
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ThisNeighborCount").setNumber(0);
}}

}


{



}


{


{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("NeighborOffsetX").setNumber(-(1));
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("NeighborOffsetY").setNumber(-(1));
}}

}


{



}


{


gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatCount4 = 3;
for(gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatIndex4 = 0;gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatIndex4 < gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatCount4;++gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.repeatIndex4) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects2, gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3[i].getVariables().get("__DungeonGenerator").getChild("Neighbors")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("ThisNeighborCount")));
}
}}

}


};gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects1);

for(gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.forEachIndex2 = 0;gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.forEachIndex2 < gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects1.length;++gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.forEachIndex2) {
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects2.length = 0;


gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.forEachTemporary2 = gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects1[gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.forEachIndex2];
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects2.push(gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.forEachTemporary2);
if (true) {

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.func = function(runtimeScene, Object, Neighbor, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Neighbor": Neighbor
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Neighbor": gdjs.objectsListsToArray(Neighbor)
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

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDObjectObjects8.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.GDNeighborObjects8.length = 0;

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.eventsList3(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DungeonGenerator__CalculateGridNeighbors.registeredGdjsCallbacks = [];