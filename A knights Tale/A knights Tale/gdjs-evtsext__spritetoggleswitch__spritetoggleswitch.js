
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch || {};

/**
 * Object generated from Toggle switch
 */
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch = class SpriteToggleSwitch extends gdjs.CustomRuntimeObject {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.IsChecked = objectData.content.IsChecked !== undefined ? objectData.content.IsChecked : true;
    this._objectData.PreviousIsChecked = false;

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.IsChecked !== newObjectData.content.IsChecked)
      this._objectData.IsChecked = newObjectData.content.IsChecked;
    if (oldObjectData.content.PreviousIsChecked !== newObjectData.content.PreviousIsChecked)
      this._objectData.PreviousIsChecked = newObjectData.content.PreviousIsChecked;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getIsChecked() {
    return this._objectData.IsChecked !== undefined ? this._objectData.IsChecked : true;
  }
  _setIsChecked(newValue) {
    this._objectData.IsChecked = newValue;
  }
  _toggleIsChecked() {
    this._setIsChecked(!this._getIsChecked());
  }
  _getPreviousIsChecked() {
    return this._objectData.PreviousIsChecked !== undefined ? this._objectData.PreviousIsChecked : false;
  }
  _setPreviousIsChecked(newValue) {
    this._objectData.PreviousIsChecked = newValue;
  }
  _togglePreviousIsChecked() {
    this._setPreviousIsChecked(!this._getPreviousIsChecked());
  }
}

// Methods:
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95SpriteToggleSwitch_95_95SpriteToggleSwitch_46SpriteToggleSwitch_46prototype_46onCreatedContext_46GDStateObjects1Objects = Hashtable.newFrom({"State": gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1});
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.mapOfGDgdjs_46evtsExt_95_95SpriteToggleSwitch_95_95SpriteToggleSwitch_46SpriteToggleSwitch_46prototype_46onCreatedContext_46GDStateObjects1Objects, 0, 0, "");
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1[i]._getIsChecked() ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SwitchFSM")).SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1[i]._setPreviousIsChecked(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1[i]._getIsChecked()) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SwitchFSM")).SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1[i]._setPreviousIsChecked(false);
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1[i].UpdateStateAnimation((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1[i].setAnimationFrame((gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1[i].getAnimationFrameCount()) - 1);
}
}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i]._getIsChecked() ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i]._getPreviousIsChecked()) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i]._setPreviousIsChecked(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i]._getIsChecked()) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i]._getPreviousIsChecked() ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1[i]._setPreviousIsChecked(false);
}
}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1[i].UpdateStateAnimation((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDStateObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDStateObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDStateObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SwitchFSM")).IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDStateObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDStateObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDStateObjects1.length = k;}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsChecked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.conditionTrue_1 = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.condition0IsTrue_0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDStateObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDStateObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDStateObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SwitchFSM")).SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.conditionTrue_1 = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.condition0IsTrue_0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDStateObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDStateObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDStateObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("SwitchFSM")).SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetChecked = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.SetCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDStateObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDStateObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDStateObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsIdle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDStateObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDStateObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDStateObjects1.length = k;}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsIdleContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDStateObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDStateObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDStateObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDStateObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDStateObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDStateObjects1.length = k;}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsClickedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDStateObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDStateObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDStateObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDStateObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDStateObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDStateObjects1.length = k;}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHovered = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsHoveredContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDStateObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDStateObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDStateObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsFocused((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDStateObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDStateObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDStateObjects1.length = k;}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocused = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsFocusedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDStateObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDStateObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDStateObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDStateObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDStateObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDStateObjects1.length = k;}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1[i].isCurrentAnimationName("Unchecked") ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1.length = k;}}
if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1[i].setAnimationName("Checked");
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1[i].isCurrentAnimationName("Checked") ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1.length = k;}}
if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1[i].setAnimationName("Unchecked");
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1[i].playAnimation();
}
}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimation = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.UpdateStateAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.conditionTrue_1 = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.condition0IsTrue_0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldActivate") : false);
}
}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDStateObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDStateObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDStateObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM"), true);
}
}}

}


{


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.conditionTrue_1 = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.condition0IsTrue_0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldActivate") : false);
}
}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDStateObjects1);
{for(var i = 0, len = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDStateObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDStateObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM"), false);
}
}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.Activate = function(ShouldActivate, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
if (argName === "ShouldActivate") return ShouldActivate;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.ActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext = {};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDStateObjects1= [];
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDStateObjects2= [];

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("State"), gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDStateObjects1);

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDStateObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDStateObjects1[i].behaviorActivated(eventsFunctionContext.getBehaviorName("ButtonFSM")) ) {
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDStateObjects1[k] = gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDStateObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDStateObjects1.length = k;}if (gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStateObjectsList = [...runtimeScene.getObjects("State")];
var GDStateObjects = Hashtable.newFrom({"State": thisGDStateObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "State": GDStateObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "State": thisGDStateObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDStateObjects1.length = 0;
gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.GDStateObjects2.length = 0;

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.IsActivatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("SpriteToggleSwitch::SpriteToggleSwitch", gdjs.evtsExt__SpriteToggleSwitch__SpriteToggleSwitch.SpriteToggleSwitch);
