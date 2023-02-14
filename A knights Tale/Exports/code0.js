gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDHealthObjects1= [];
gdjs.Untitled_32sceneCode.GDHealthObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects1= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects2= [];
gdjs.Untitled_32sceneCode.GDSpawnerObjects1= [];
gdjs.Untitled_32sceneCode.GDSpawnerObjects2= [];
gdjs.Untitled_32sceneCode.GDBulletObjects1= [];
gdjs.Untitled_32sceneCode.GDBulletObjects2= [];
gdjs.Untitled_32sceneCode.GDTerrainObjects1= [];
gdjs.Untitled_32sceneCode.GDTerrainObjects2= [];
gdjs.Untitled_32sceneCode.GDRoomObjects1= [];
gdjs.Untitled_32sceneCode.GDRoomObjects2= [];
gdjs.Untitled_32sceneCode.GDHallwayObjects1= [];
gdjs.Untitled_32sceneCode.GDHallwayObjects2= [];
gdjs.Untitled_32sceneCode.GDPathfindingObjects1= [];
gdjs.Untitled_32sceneCode.GDPathfindingObjects2= [];
gdjs.Untitled_32sceneCode.GDWallObjects1= [];
gdjs.Untitled_32sceneCode.GDWallObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects1});
gdjs.Untitled_32sceneCode.asyncCallback10170092 = function (runtimeScene, asyncObjectsList) {
}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10170092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Untitled_32sceneCode.GDWallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Untitled_32sceneCode.GDWallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDTerrainObjects1Objects = Hashtable.newFrom({"Terrain": gdjs.Untitled_32sceneCode.GDTerrainObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDRoomObjects1Objects = Hashtable.newFrom({"Room": gdjs.Untitled_32sceneCode.GDRoomObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHallwayObjects1Objects = Hashtable.newFrom({"Hallway": gdjs.Untitled_32sceneCode.GDHallwayObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPathfindingObjects1Objects = Hashtable.newFrom({"Pathfinding": gdjs.Untitled_32sceneCode.GDPathfindingObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Untitled_32sceneCode.GDWallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSpawnerObjects1Objects = Hashtable.newFrom({"Spawner": gdjs.Untitled_32sceneCode.GDSpawnerObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Untitled scene");
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getPointX("")), (gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getPointY("")), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBulletObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 70, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].addForce(200, 0, 0);
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].addForce(0, -(200), 0);
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].addForce(0, 200, 0);
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].addForce(-(200), 0, 0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Untitled_32sceneCode.GDWallObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDWallObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].addForce(10, 10, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Untitled_32sceneCode.GDWallObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBulletObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDWallObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].addForceTowardObject((gdjs.Untitled_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects1[0] : null), 60, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Health").Hit(0.1, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDBulletObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Untitled_32sceneCode.GDWallObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWallObjects1[i].getBehavior("PathfindingObstacle").setImpassable(true);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Untitled_32sceneCode.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHealthObjects1[i].SetValue((( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spawner"), gdjs.Untitled_32sceneCode.GDSpawnerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSpawnerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDEnemyObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
}

}


{



}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hallway"), gdjs.Untitled_32sceneCode.GDHallwayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pathfinding"), gdjs.Untitled_32sceneCode.GDPathfindingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Room"), gdjs.Untitled_32sceneCode.GDRoomObjects1);
gdjs.copyArray(runtimeScene.getObjects("Terrain"), gdjs.Untitled_32sceneCode.GDTerrainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Untitled_32sceneCode.GDWallObjects1);
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDSpawnerObjects1.length = 0;

{gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.func(runtimeScene, 32, 60, 60, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDTerrainObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDRoomObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDHallwayObjects1Objects, 8, "", 10, 10, 10, 10, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPathfindingObjects1Objects, "Pathfinding", 2, false, 2, 2, false, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDWallObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDPlayerObjects1Objects, (( gdjs.Untitled_32sceneCode.GDRoomObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDRoomObjects1[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDRoomObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDRoomObjects1[0].getCenterYInScene()), "1");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSpawnerObjects1Objects, (( gdjs.Untitled_32sceneCode.GDRoomObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDRoomObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDRoomObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDRoomObjects1[0].getPointY("")), "");
}}

}


{


{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDHealthObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHealthObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTerrainObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTerrainObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRoomObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRoomObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHallwayObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHallwayObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPathfindingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPathfindingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
