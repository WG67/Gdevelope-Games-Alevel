
if (typeof gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms !== "undefined") {
  gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms = {};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2_1final = [];

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2_1final = [];

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2_1final = [];

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.forEachIndex4 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.forEachObjects4 = [];

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.forEachTemporary4 = null;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.forEachTotalCount4 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatCount4 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatCount5 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatCount6 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex4 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex5 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex6 = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile2 = false;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile3 = false;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects6= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects7= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects8= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects6= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects7= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects8= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects6= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects7= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects8= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects6= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects7= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects8= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects2= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects3= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects4= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects6= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects7= [];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects8= [];

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition4IsTrue_0 = {val:false};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1 = {val:false};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition3IsTrue_1 = {val:false};
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition4IsTrue_1 = {val:false};


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects1Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects1});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("TerrainObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects1);
{gdjs.evtsExt__DungeonGenerator__FillWorld.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MapWidth")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MapHeight")) || 0 : 0), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects3Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getVariables().get("__DungeonGenerator").getChild("RoomWidth")).setNumber(gdjs.randomInRange((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MinRoomWidth")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomWidth")) || 0 : 0)) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getVariables().get("__DungeonGenerator").getChild("RoomHeight")).setNumber(gdjs.randomInRange((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MinRoomHeight")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomHeight")) || 0 : 0)) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].setWidth((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getVariables().get("__DungeonGenerator").getChild("RoomWidth"))));
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].setHeight((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getVariables().get("__DungeonGenerator").getChild("RoomHeight"))));
}
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects3Objects, gdjs.randomInRange((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MapWidth")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomWidth")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0)) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0), gdjs.randomInRange((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MapHeight")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomHeight")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0)) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}
{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile2 = false;
do {gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2);
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects) < (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RoomQty")) || 0 : 0);
}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
if (true) {

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile2 = true; 
} while ( !gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile2 );

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].setPosition(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getX() +gdjs.randomWithStep(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomWidth")) || 0 : 0)) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomWidth")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomWidth")) || 0 : 0)) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0),gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getY() +gdjs.randomWithStep(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomHeight")) || 0 : 0)) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomHeight")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomHeight")) || 0 : 0)) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3);


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getY() > ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MapHeight")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomWidth")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0)) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0) ) {
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length = k;}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].setY(((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MapHeight")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomWidth")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0)) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3);


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getX() > ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MapWidth")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomWidth")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0)) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0) ) {
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length = k;}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].setX(((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MapWidth")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomWidth")) || 0 : 0) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0)) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3);


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getX() < (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0) ) {
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length = k;}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].setX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3);


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getY() < (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0) ) {
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length = k;}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].setY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("MinSeparationDistance").setNumber(Math.ceil((Math.sqrt(Math.pow((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomWidth")) || 0 : 0), 2) + Math.pow((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxRoomHeight")) || 0 : 0), 2)))) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("SeparationCounter").setNumber(0);
}}

}


{



}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1 = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxSeparationAttempts")) || 0 : 0) != 0);
}
}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("MaxSeparationAttempts").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxSeparationAttempts")) || 0 : 0));
}}

}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1 = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxSeparationAttempts")) || 0 : 0) == 0);
}
}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("MaxSeparationAttempts").setNumber(10000);
}}

}


{



}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile2 = false;
do {gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2);
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("MinSeparationDistance")), false);
}if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("SeparationCounter")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("MaxSeparationAttempts"));
}}
if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val) {
if (true) {
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("SeparationCounter").add(1);
}
{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile2 = true; 
} while ( !gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile2 );

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects2Objects = Hashtable.newFrom({"PathfinderObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects2Objects = Hashtable.newFrom({"PathfinderObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2 */
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CurrentRoomID").setNumber(1);
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2[i].getVariables().get("__DungeonGenerator").getChild("RoomID")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CurrentRoomID")));
}
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CurrentRoomID").add(1);
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects4Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects7Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects7});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects7Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects7});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects7Objects = Hashtable.newFrom({"PathfinderObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects7});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects7 */
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects7 */
{gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.func(runtimeScene, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects7Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects7Objects, eventsFunctionContext.getBehaviorName("PathfindingBehavior"), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects7);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects7.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects7Objects, (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects7.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects7[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))), (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects7.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects7[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}
{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5);


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5[i].getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5[i].getVariables().get("__DungeonGenerator").getChild("RoomID")) == 0 ) {
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5.length = k;}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5[i].returnVariable(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5[i].getVariables().get("__DungeonGenerator").getChild("RoomID")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CurrentRoomID")));
}
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("CurrentRoomID").add(1);
}}

}


{



}


{


{
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).moveTo(runtimeScene, (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5[0].getCenterXInScene()), (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5[0].getCenterYInScene()));
}
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5);


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatCount6 = (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeCount());
for(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex6 = 0;gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex6 < gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatCount6;++gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex6) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList8(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


{
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4 */
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4[i].setPosition((( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4[0].getCenterXInScene()),(( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4[i].getVariables().get("__DungeonGenerator").getChild("Visited"), true);
}
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4);
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4);


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects4Objects, (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4[0].getPointX("")), (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4[0].getPointY("")), false);
}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects4Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects4});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects5Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects5Objects = Hashtable.newFrom({"PathfinderObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects4, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5);

{gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.func(runtimeScene, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects5Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects5Objects, eventsFunctionContext.getBehaviorName("PathfindingBehavior"), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getVariableNumber(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getVariables().get("__DungeonGenerator").getChild("RoomID")) == 1 ) {
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length = k;}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3);
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).moveTo(runtimeScene, (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[0].getCenterXInScene()), (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[0].getCenterYInScene()));
}
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatCount4 = (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeCount());
for(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex4 = 0;gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex4 < gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatCount4;++gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex4) {
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects4.length = 0;


if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects4Objects, (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))), (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}
{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList11(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i].setPosition((( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2[0].getCenterXInScene()),(( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2[0].getCenterYInScene()));
}
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1 = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("CloseLoop") : false);
}
}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects3Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects3Objects = Hashtable.newFrom({"PathfinderObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects3Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects5Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects6Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects6});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects6Objects = Hashtable.newFrom({"PathfinderObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects6});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects6);

{gdjs.evtsExt__DungeonGenerator__AdjustHallwaySizes.func(runtimeScene, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects6Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects6Objects, eventsFunctionContext.getBehaviorName("PathfindingBehavior"), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HallwayWidth")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4);


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatCount5 = (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeCount());
for(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex5 = 0;gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex5 < gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatCount5;++gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.repeatIndex5) {
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5.length = 0;


if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects5Objects, (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))), (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5[0].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getNodeY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter")))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}
{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList14(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


{
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3 */
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3[i].setPosition((( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[0].getCenterXInScene()),(( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[0].getCenterYInScene()));
}
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("AdditionalPathCounter").add(1);
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects3Objects);
}if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects3Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects3Objects, true, runtimeScene, false);
}}
if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3 */
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).moveTo(runtimeScene, (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[0].getCenterXInScene()), (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[0].getCenterYInScene()));
}
}{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("PathCounter").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("AdditionalPathCounter").setNumber(0);
}}

}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile2 = false;
do {gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__DungeonGenerator").getChild("AdditionalPathCounter")) < (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AdditionalPaths")) || 0 : 0);
}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
if (true) {

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList16(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile2 = true; 
} while ( !gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile2 );

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects2Objects) < 1;
}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDPathfinderObjectObjects2Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).allowDiagonals(false);
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i].setZOrder(100);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getCellWidth() != (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0) ) {
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length = k;}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).setCellWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).getCellHeight() != (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0) ) {
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length = k;}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PathfindingBehavior")).setCellHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects);
}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2);
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2[i].setPosition((( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2[0].getCenterXInScene()),(( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2[i].getVariables().get("__DungeonGenerator").getChild("Visited"), true);
}
}
{ //Subevents
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile3 = false;
do {gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3);
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i].getVariables().get("__DungeonGenerator").getChild("Visited"), false) ) {
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length = k;}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
if (true) {

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList10(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile3 = true; 
} while ( !gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.stopDoWhile3 );

}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList13(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList17(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects3Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects3Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects3Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects3Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2.length = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2.length = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2.length = 0;


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1 = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2_1final.length = 0;gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2_1final.length = 0;gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2_1final.length = 0;gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_1.val = false;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("TerrainObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3);
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects3Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects3Objects, false, runtimeScene, true);
if( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_1.val ) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2_1final.indexOf(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[j]) === -1 )
            gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2_1final.push(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2_1final.indexOf(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3[j]) === -1 )
            gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2_1final.push(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("TerrainObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3);
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects3Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects3Objects, false, runtimeScene, true);
if( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_1.val ) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2_1final.indexOf(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3[j]) === -1 )
            gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2_1final.push(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2_1final.indexOf(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3[j]) === -1 )
            gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2_1final.push(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2_1final, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2);
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2_1final, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2);
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2_1final, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2);
}
}
}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects5Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects5Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects5Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDWallObjectObjects5Objects = Hashtable.newFrom({"WallObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects5Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects5Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects5Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDWallObjectObjects5Objects = Hashtable.newFrom({"WallObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5);
gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5);
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects4, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5);


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val = false;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition2IsTrue_0.val = false;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5[i].getVariables().get("Deleted"), false) ) {
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = true;
        gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5[k] = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5.length = k;}if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects5Objects, true, runtimeScene, true);
}if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects5Objects, false, runtimeScene, false);
}if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition2IsTrue_0.val ) {
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition3IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects5Objects, true, runtimeScene, true);
}}
}
}
if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition3IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5 */
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDWallObjectObjects5Objects, (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5[0].getPointX("")), (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5[0].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5);
gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5);
gdjs.copyArray(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects4, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5);


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val = false;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects5Objects, true, runtimeScene, true);
}if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects5Objects, false, runtimeScene, false);
}if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects5Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects5Objects, true, runtimeScene, true);
}}
}
if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5 */
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDWallObjectObjects5Objects, (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5[0].getPointX("")), (( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5[0].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TileSize")) || 0 : 0));
}
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects3Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects3Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects2Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TerrainObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3);

for(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.forEachIndex4 = 0;gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.forEachIndex4 < gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3.length;++gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.forEachIndex4) {
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects4.length = 0;


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.forEachTemporary4 = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3[gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.forEachIndex4];
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects4.push(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.forEachTemporary4);
if (true) {

{ //Subevents: 
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList20(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects3Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects3Objects, false, runtimeScene, true);
}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects2Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects, false, runtimeScene, false);
}if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2[i].getVariables().get("__DungeonGenerator").getChild("IsRoomEntrance"), true);
}
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects2Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects = Hashtable.newFrom({"RoomObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects2Objects = Hashtable.newFrom({"TerrainObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects2Objects = Hashtable.newFrom({"HallwayObject": gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2});
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList22 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("HallwayObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("TerrainObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2);

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val = false;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val = false;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1 = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("DeleteUnused") : false);
}
}if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects2Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDRoomObjectObjects2Objects, true, runtimeScene, false);
}if ( gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDTerrainObjectObjects2Objects, gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.mapOfGDgdjs_46evtsExt_95_95DungeonGenerator_95_95GenerateDungeonRooms_46GDHallwayObjectObjects2Objects, true, runtimeScene, false);
}}
}
if (gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("PathfinderObject"), gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList23 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList19(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList21(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList22(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList24 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList5(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList18(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList23(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.func = function(runtimeScene, TileSize, MapWidth, MapHeight, TerrainObject, RoomObject, HallwayObject, RoomQty, Layer, MinRoomWidth, MaxRoomWidth, MinRoomHeight, MaxRoomHeight, PathfinderObject, PathfindingBehavior, MaxSeparationAttempts, CloseLoop, HallwayWidth, AdditionalPaths, DeleteUnused, WallObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"TerrainObject": TerrainObject
, "RoomObject": RoomObject
, "HallwayObject": HallwayObject
, "PathfinderObject": PathfinderObject
, "WallObject": WallObject
},
  _objectArraysMap: {
"TerrainObject": gdjs.objectsListsToArray(TerrainObject)
, "RoomObject": gdjs.objectsListsToArray(RoomObject)
, "HallwayObject": gdjs.objectsListsToArray(HallwayObject)
, "PathfinderObject": gdjs.objectsListsToArray(PathfinderObject)
, "WallObject": gdjs.objectsListsToArray(WallObject)
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
if (argName === "MapWidth") return MapWidth;
if (argName === "MapHeight") return MapHeight;
if (argName === "RoomQty") return RoomQty;
if (argName === "Layer") return Layer;
if (argName === "MinRoomWidth") return MinRoomWidth;
if (argName === "MaxRoomWidth") return MaxRoomWidth;
if (argName === "MinRoomHeight") return MinRoomHeight;
if (argName === "MaxRoomHeight") return MaxRoomHeight;
if (argName === "MaxSeparationAttempts") return MaxSeparationAttempts;
if (argName === "CloseLoop") return CloseLoop;
if (argName === "HallwayWidth") return HallwayWidth;
if (argName === "AdditionalPaths") return AdditionalPaths;
if (argName === "DeleteUnused") return DeleteUnused;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDTerrainObjectObjects8.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDRoomObjectObjects8.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDHallwayObjectObjects8.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDPathfinderObjectObjects8.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects2.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects3.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects4.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects5.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects6.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects7.length = 0;
gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.GDWallObjectObjects8.length = 0;

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.eventsList24(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.registeredGdjsCallbacks = [];