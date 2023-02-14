
gdjs.evtsExt__ObjectSpawner__ObjectSpawner = gdjs.evtsExt__ObjectSpawner__ObjectSpawner || {};

/**
 * Behavior generated from Object Spawner
 */
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner = class ObjectSpawner extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SpawnPeriod = behaviorData.SpawnPeriod !== undefined ? behaviorData.SpawnPeriod : Number("1") || 0;
    this._behaviorData.OffsetX = behaviorData.OffsetX !== undefined ? behaviorData.OffsetX : Number("0") || 0;
    this._behaviorData.OffsetY = behaviorData.OffsetY !== undefined ? behaviorData.OffsetY : Number("0") || 0;
    this._behaviorData.JustSpawnedAnObject = false;
    this._behaviorData.MaxQuantityReached = false;
    this._behaviorData.MaxQuantity = behaviorData.MaxQuantity !== undefined ? behaviorData.MaxQuantity : Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.SpawnPeriod !== newBehaviorData.SpawnPeriod)
      this._behaviorData.SpawnPeriod = newBehaviorData.SpawnPeriod;
    if (oldBehaviorData.OffsetX !== newBehaviorData.OffsetX)
      this._behaviorData.OffsetX = newBehaviorData.OffsetX;
    if (oldBehaviorData.OffsetY !== newBehaviorData.OffsetY)
      this._behaviorData.OffsetY = newBehaviorData.OffsetY;
    if (oldBehaviorData.JustSpawnedAnObject !== newBehaviorData.JustSpawnedAnObject)
      this._behaviorData.JustSpawnedAnObject = newBehaviorData.JustSpawnedAnObject;
    if (oldBehaviorData.MaxQuantityReached !== newBehaviorData.MaxQuantityReached)
      this._behaviorData.MaxQuantityReached = newBehaviorData.MaxQuantityReached;
    if (oldBehaviorData.MaxQuantity !== newBehaviorData.MaxQuantity)
      this._behaviorData.MaxQuantity = newBehaviorData.MaxQuantity;

    return true;
  }

  // Properties:
  
  _getSpawnPeriod() {
    return this._behaviorData.SpawnPeriod !== undefined ? this._behaviorData.SpawnPeriod : Number("1") || 0;
  }
  _setSpawnPeriod(newValue) {
    this._behaviorData.SpawnPeriod = newValue;
  }
  _getOffsetX() {
    return this._behaviorData.OffsetX !== undefined ? this._behaviorData.OffsetX : Number("0") || 0;
  }
  _setOffsetX(newValue) {
    this._behaviorData.OffsetX = newValue;
  }
  _getOffsetY() {
    return this._behaviorData.OffsetY !== undefined ? this._behaviorData.OffsetY : Number("0") || 0;
  }
  _setOffsetY(newValue) {
    this._behaviorData.OffsetY = newValue;
  }
  _getJustSpawnedAnObject() {
    return this._behaviorData.JustSpawnedAnObject !== undefined ? this._behaviorData.JustSpawnedAnObject : false;
  }
  _setJustSpawnedAnObject(newValue) {
    this._behaviorData.JustSpawnedAnObject = newValue;
  }
  _toggleJustSpawnedAnObject() {
    this._setJustSpawnedAnObject(!this._getJustSpawnedAnObject());
  }
  _getMaxQuantityReached() {
    return this._behaviorData.MaxQuantityReached !== undefined ? this._behaviorData.MaxQuantityReached : false;
  }
  _setMaxQuantityReached(newValue) {
    this._behaviorData.MaxQuantityReached = newValue;
  }
  _toggleMaxQuantityReached() {
    this._setMaxQuantityReached(!this._getMaxQuantityReached());
  }
  _getMaxQuantity() {
    return this._behaviorData.MaxQuantity !== undefined ? this._behaviorData.MaxQuantity : Number("0") || 0;
  }
  _setMaxQuantity(newValue) {
    this._behaviorData.MaxQuantity = newValue;
  }
}

/**
 * Shared data generated from Object Spawner
 */
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.SharedData = class ObjectSpawnerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ObjectSpawner_ObjectSpawnerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ObjectSpawner_ObjectSpawnerSharedData = new gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.SharedData(
      initialData
    );
  }
  return instanceContainer._ObjectSpawner_ObjectSpawnerSharedData;
}

// Methods:
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects3= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects2= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects3= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_46evtsExt_95_95ObjectSpawner_95_95ObjectSpawner_46ObjectSpawner_46prototype_46SpawnObjectContext_46GDObjectToSpawnObjects1Objects = Hashtable.newFrom({"ObjectToSpawn": gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1});
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_46evtsExt_95_95ObjectSpawner_95_95ObjectSpawner_46ObjectSpawner_46prototype_46SpawnObjectContext_46GDObjectToSpawnObjects2Objects = Hashtable.newFrom({"ObjectToSpawn": gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects2});
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_46evtsExt_95_95ObjectSpawner_95_95ObjectSpawner_46ObjectSpawner_46prototype_46SpawnObjectContext_46GDObjectToSpawnObjects1Objects = Hashtable.newFrom({"ObjectToSpawn": gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1});
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2);

gdjs.copyArray(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects2);


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.conditionTrue_1 = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.conditionTrue_1.val = (gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_46evtsExt_95_95ObjectSpawner_95_95ObjectSpawner_46ObjectSpawner_46prototype_46SpawnObjectContext_46GDObjectToSpawnObjects2Objects) < (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantity()));
}
}if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.conditionTrue_1 = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition1IsTrue_0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9961228);
}
}}
if (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[i].resetTimer("__ObjectSpawner.SpawnTimer");
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1 */
/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1 */

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.conditionTrue_1 = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.conditionTrue_1.val = (gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_46evtsExt_95_95ObjectSpawner_95_95ObjectSpawner_46ObjectSpawner_46prototype_46SpawnObjectContext_46GDObjectToSpawnObjects1Objects) >= (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantity()));
}
}if (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxQuantityReached(true);
}
}}

}


};gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxQuantityReached(false);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ObjectToSpawn"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1);

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantity() != 0 ) {
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition1IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_46evtsExt_95_95ObjectSpawner_95_95ObjectSpawner_46ObjectSpawner_46prototype_46SpawnObjectContext_46GDObjectToSpawnObjects1Objects, (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
if (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_46evtsExt_95_95ObjectSpawner_95_95ObjectSpawner_46ObjectSpawner_46prototype_46SpawnObjectContext_46GDObjectToSpawnObjects1Objects = Hashtable.newFrom({"ObjectToSpawn": gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1});
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJustSpawnedAnObject(false);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1);

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__ObjectSpawner.SpawnTimer") > (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPeriod()) ) {
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantityReached()) ) {
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1 */
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1.length = 0;

{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i].resetTimer("__ObjectSpawner.SpawnTimer");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_46evtsExt_95_95ObjectSpawner_95_95ObjectSpawner_46ObjectSpawner_46prototype_46SpawnObjectContext_46GDObjectToSpawnObjects1Objects, (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getX()) + (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX()), (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getY()) + (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()), (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getLayer()));
}{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJustSpawnedAnObject(true);
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1.length !== 0 ? gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1[0] : null), (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0] : null));
}
{ //Subevents
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList3(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObject = function(ObjectToSpawn, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ObjectToSpawn": ObjectToSpawn
},
  _objectArraysMap: {
"Object": thisObjectList
, "ObjectToSpawn": gdjs.objectsListsToArray(ObjectToSpawn)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects2.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects3.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList4(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("__ObjectSpawner.SpawnTimer");
}
}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffsetX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffsetY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxQuantity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpawnPeriod((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriod = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX()); }}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY()); }}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantity()); }}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPeriod()); }}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriod = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects1[i].pauseTimer("__ObjectSpawner.SpawnTimer");
}
}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects1[i].unpauseTimer("__ObjectSpawner.SpawnTimer");
}
}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects1[i].resetTimer("__ObjectSpawner.SpawnTimer");
}
}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimer = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1);

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantityReached() ) {
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPeriod()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1);

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantityReached()) ) {
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPeriod()) - (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1[0].getTimerElapsedTimeInSeconds("__ObjectSpawner.SpawnTimer")); }}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawn = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects2= [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects1);

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJustSpawnedAnObject() ) {
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects1[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawned = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("ObjectSpawner::ObjectSpawner", gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner);
