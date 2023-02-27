
if (typeof gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes !== "undefined") {
  gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes = {};
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects4= [];

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.conditionTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.conditionTrue_1 = {val:false};
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3 */

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.conditionTrue_1 = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.conditionTrue_1.val = ((( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))) == (( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")) + 1)));
}
}if (gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0) * Math.max(1, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0)));
}
}}

}


};gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2 */

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.conditionTrue_1 = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.conditionTrue_1.val = ((( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))) == (( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")) + 1)));
}
}if (gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0) * Math.max(1, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0)));
}
}}

}


};gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3);

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.conditionTrue_1 = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.conditionTrue_1.val = ((( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))) == (( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")) - 1)));
}
}if (gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0) * Math.max(1, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0)));
}
}
{ //Subevents
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2);

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.conditionTrue_1 = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.conditionTrue_1.val = ((( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))) == (( gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")) - 1)));
}
}if (gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0) * Math.max(1, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0)));
}
}
{ //Subevents
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}}

}


{



}


{


gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")) > 1;
}if (gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter").add(1);
}}

}


};gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList3(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.func = function(runtimeScene, HallwayObject, PathfinderObject, PathfindingBehavior, TileSize, HallwayWidth, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"HallwayObject": HallwayObject
, "PathfinderObject": PathfinderObject
},
  _objectArraysMap: {
"HallwayObject": gdjs.objectsListsToArray(HallwayObject)
, "PathfinderObject": gdjs.objectsListsToArray(PathfinderObject)
},
  _behaviorNamesMap: {
"PathfindingBehavior": PathfindingBehavior
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
if (argName === "HallwayWidth") return HallwayWidth;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDHallwayObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.GDPathfinderObjectObjects4.length = 0;

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.eventsList4(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.registeredGdjsCallbacks = [];