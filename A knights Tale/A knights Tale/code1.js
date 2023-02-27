gdjs.MainCode = {};
gdjs.MainCode.repeatCount3 = 0;

gdjs.MainCode.repeatIndex3 = 0;

gdjs.MainCode.GDPlayerObjects1= [];
gdjs.MainCode.GDPlayerObjects2= [];
gdjs.MainCode.GDPlayerObjects3= [];
gdjs.MainCode.GDOgerObjects1= [];
gdjs.MainCode.GDOgerObjects2= [];
gdjs.MainCode.GDOgerObjects3= [];
gdjs.MainCode.GDSkeletonObjects1= [];
gdjs.MainCode.GDSkeletonObjects2= [];
gdjs.MainCode.GDSkeletonObjects3= [];
gdjs.MainCode.GDZombieObjects1= [];
gdjs.MainCode.GDZombieObjects2= [];
gdjs.MainCode.GDZombieObjects3= [];
gdjs.MainCode.GDSpawnerObjects1= [];
gdjs.MainCode.GDSpawnerObjects2= [];
gdjs.MainCode.GDSpawnerObjects3= [];
gdjs.MainCode.GDBulletObjects1= [];
gdjs.MainCode.GDBulletObjects2= [];
gdjs.MainCode.GDBulletObjects3= [];
gdjs.MainCode.GDTerrainObjects1= [];
gdjs.MainCode.GDTerrainObjects2= [];
gdjs.MainCode.GDTerrainObjects3= [];
gdjs.MainCode.GDRoomObjects1= [];
gdjs.MainCode.GDRoomObjects2= [];
gdjs.MainCode.GDRoomObjects3= [];
gdjs.MainCode.GDHallwayObjects1= [];
gdjs.MainCode.GDHallwayObjects2= [];
gdjs.MainCode.GDHallwayObjects3= [];
gdjs.MainCode.GDPathfindingObjects1= [];
gdjs.MainCode.GDPathfindingObjects2= [];
gdjs.MainCode.GDPathfindingObjects3= [];
gdjs.MainCode.GDWallObjects1= [];
gdjs.MainCode.GDWallObjects2= [];
gdjs.MainCode.GDWallObjects3= [];
gdjs.MainCode.GDDoorObjects1= [];
gdjs.MainCode.GDDoorObjects2= [];
gdjs.MainCode.GDDoorObjects3= [];
gdjs.MainCode.GDHealthObjects1= [];
gdjs.MainCode.GDHealthObjects2= [];
gdjs.MainCode.GDHealthObjects3= [];
gdjs.MainCode.GDHealObjects1= [];
gdjs.MainCode.GDHealObjects2= [];
gdjs.MainCode.GDHealObjects3= [];
gdjs.MainCode.GDStaffObjects1= [];
gdjs.MainCode.GDStaffObjects2= [];
gdjs.MainCode.GDStaffObjects3= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};
gdjs.MainCode.condition3IsTrue_0 = {val:false};
gdjs.MainCode.conditionTrue_1 = {val:false};
gdjs.MainCode.condition0IsTrue_1 = {val:false};
gdjs.MainCode.condition1IsTrue_1 = {val:false};
gdjs.MainCode.condition2IsTrue_1 = {val:false};
gdjs.MainCode.condition3IsTrue_1 = {val:false};


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHealObjects1Objects = Hashtable.newFrom({"Heal": gdjs.MainCode.GDHealObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.asyncCallback13216484 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects2);

{for(var i = 0, len = gdjs.MainCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MainCode.GDBulletObjects1) asyncObjectsList.addObject("Bullet", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback13216484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.asyncCallback13217412 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects2);

{for(var i = 0, len = gdjs.MainCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MainCode.GDBulletObjects1) asyncObjectsList.addObject("Bullet", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback13217412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.MainCode.GDWallObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOgerObjects1Objects = Hashtable.newFrom({"Oger": gdjs.MainCode.GDOgerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.MainCode.GDSkeletonObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.MainCode.GDZombieObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOgerObjects1Objects = Hashtable.newFrom({"Oger": gdjs.MainCode.GDOgerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHealObjects1Objects = Hashtable.newFrom({"Heal": gdjs.MainCode.GDHealObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.MainCode.GDSkeletonObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHealObjects1Objects = Hashtable.newFrom({"Heal": gdjs.MainCode.GDHealObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.MainCode.GDZombieObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHealObjects1Objects = Hashtable.newFrom({"Heal": gdjs.MainCode.GDHealObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOgerObjects1Objects = Hashtable.newFrom({"Oger": gdjs.MainCode.GDOgerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.MainCode.GDWallObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.MainCode.GDSkeletonObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.MainCode.GDWallObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.MainCode.GDZombieObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.MainCode.GDWallObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOgerObjects1Objects = Hashtable.newFrom({"Oger": gdjs.MainCode.GDOgerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.MainCode.GDSkeletonObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.MainCode.GDZombieObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHealObjects1Objects = Hashtable.newFrom({"Heal": gdjs.MainCode.GDHealObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRoomObjects1Objects = Hashtable.newFrom({"Room": gdjs.MainCode.GDRoomObjects1});
gdjs.MainCode.asyncCallback13230692 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Heal"), gdjs.MainCode.GDHealObjects2);

{for(var i = 0, len = gdjs.MainCode.GDHealObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDHealObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MainCode.GDHealObjects1) asyncObjectsList.addObject("Heal", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback13230692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOgerObjects1Objects = Hashtable.newFrom({"Oger": gdjs.MainCode.GDOgerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects = Hashtable.newFrom({"Skeleton": gdjs.MainCode.GDSkeletonObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.MainCode.GDZombieObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDTerrainObjects1Objects = Hashtable.newFrom({"Terrain": gdjs.MainCode.GDTerrainObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRoomObjects1Objects = Hashtable.newFrom({"Room": gdjs.MainCode.GDRoomObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHallwayObjects1Objects = Hashtable.newFrom({"Hallway": gdjs.MainCode.GDHallwayObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPathfindingObjects1Objects = Hashtable.newFrom({"Pathfinding": gdjs.MainCode.GDPathfindingObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.MainCode.GDWallObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRoomObjects3Objects = Hashtable.newFrom({"Room": gdjs.MainCode.GDRoomObjects3});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSpawnerObjects3Objects = Hashtable.newFrom({"Spawner": gdjs.MainCode.GDSpawnerObjects3});
gdjs.MainCode.eventsList3 = function(runtimeScene) {

};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRoomObjects1Objects = Hashtable.newFrom({"Room": gdjs.MainCode.GDRoomObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.MainCode.GDDoorObjects2});
gdjs.MainCode.asyncCallback13235172 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Room"), gdjs.MainCode.GDRoomObjects2);

gdjs.MainCode.GDDoorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDoorObjects2Objects, (( gdjs.MainCode.GDRoomObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDRoomObjects2[0].getCenterXInScene()), (( gdjs.MainCode.GDRoomObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDRoomObjects2[0].getPointY("")), "1");
}}
gdjs.MainCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MainCode.GDRoomObjects1) asyncObjectsList.addObject("Room", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(60), (runtimeScene) => (gdjs.MainCode.asyncCallback13235172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainCode.repeatCount3 = 6;
for(gdjs.MainCode.repeatIndex3 = 0;gdjs.MainCode.repeatIndex3 < gdjs.MainCode.repeatCount3;++gdjs.MainCode.repeatIndex3) {
gdjs.copyArray(gdjs.MainCode.GDRoomObjects1, gdjs.MainCode.GDRoomObjects3);

gdjs.MainCode.GDSpawnerObjects3.length = 0;


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRoomObjects3Objects);
}if (gdjs.MainCode.condition0IsTrue_0.val)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSpawnerObjects3Objects, (( gdjs.MainCode.GDRoomObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDRoomObjects3[0].getPointX("")), (( gdjs.MainCode.GDRoomObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDRoomObjects3[0].getCenterYInScene()), "1");
}}
}

}


{

/* Reuse gdjs.MainCode.GDRoomObjects1 */

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRoomObjects1Objects);
}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.MainCode.GDDoorObjects1});
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.asyncCallback13241092 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects2);

{for(var i = 0, len = gdjs.MainCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.MainCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MainCode.GDBulletObjects1) asyncObjectsList.addObject("Bullet", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback13241092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.MainCode.GDBulletObjects1});
gdjs.MainCode.asyncCallback13242164 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects2);

{for(var i = 0, len = gdjs.MainCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.MainCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.MainCode.GDBulletObjects1) asyncObjectsList.addObject("Bullet", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainCode.asyncCallback13242164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDPlayerObjects1[k] = gdjs.MainCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPlayerObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", false);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addForce(200, 0, 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addForce(0, -(200), 0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addForce(0, 200, 0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addForce(-(200), 0, 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Heal"), gdjs.MainCode.GDHealObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHealObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDHealObjects1 */
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].getBehavior("Health").Heal(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDHealObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDHealObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MainCode.GDPlayerObjects1.length !== 0 ? gdjs.MainCode.GDPlayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
}

}


{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "u");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.MainCode.GDPlayerObjects1[i].getPointX("")), (gdjs.MainCode.GDPlayerObjects1[i].getPointY("")), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, (gdjs.MainCode.GDPlayerObjects1[i].getAngle()), 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "y");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.MainCode.GDPlayerObjects1[i].getPointX("")), (gdjs.MainCode.GDPlayerObjects1[i].getPointY("")), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, 180, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.MainCode.GDWallObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWallObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{



}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Oger"), gdjs.MainCode.GDOgerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOgerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].getBehavior("Health").Hit(0.2, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.MainCode.GDSkeletonObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].getBehavior("Health").Hit(0.1, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.MainCode.GDZombieObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZombieObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].getBehavior("Health").Hit(0.05, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Oger"), gdjs.MainCode.GDOgerObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOgerObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDOgerObjects1 */
gdjs.MainCode.GDHealObjects1.length = 0;

{for(var i = 0, len = gdjs.MainCode.GDOgerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDOgerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHealObjects1Objects, (( gdjs.MainCode.GDOgerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDOgerObjects1[0].getPointX("")), (( gdjs.MainCode.GDOgerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDOgerObjects1[0].getPointY("")), "1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.MainCode.GDSkeletonObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDSkeletonObjects1 */
gdjs.MainCode.GDHealObjects1.length = 0;

{for(var i = 0, len = gdjs.MainCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSkeletonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHealObjects1Objects, (( gdjs.MainCode.GDSkeletonObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDSkeletonObjects1[0].getPointX("")), (( gdjs.MainCode.GDSkeletonObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDSkeletonObjects1[0].getPointY("")), "1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.MainCode.GDZombieObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZombieObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDZombieObjects1 */
gdjs.MainCode.GDHealObjects1.length = 0;

{for(var i = 0, len = gdjs.MainCode.GDZombieObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDZombieObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHealObjects1Objects, (( gdjs.MainCode.GDZombieObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDZombieObjects1[0].getPointX("")), (( gdjs.MainCode.GDZombieObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDZombieObjects1[0].getPointY("")), "1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Oger"), gdjs.MainCode.GDOgerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.MainCode.GDSkeletonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.MainCode.GDWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.MainCode.GDZombieObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOgerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWallObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWallObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
gdjs.MainCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZombieObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWallObjects1Objects, false, runtimeScene, false);
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDWallObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDWallObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDWallObjects1[i].getBehavior("PathfindingObstacle").setImpassable(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Oger"), gdjs.MainCode.GDOgerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOgerObjects1Objects, 300, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDOgerObjects1 */
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDOgerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDOgerObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.MainCode.GDSkeletonObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects, 300, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
/* Reuse gdjs.MainCode.GDSkeletonObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSkeletonObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.MainCode.GDZombieObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZombieObjects1Objects, 150, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
/* Reuse gdjs.MainCode.GDZombieObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDZombieObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDZombieObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getCenterYInScene()));
}
}}

}


{


{
}

}


{


{
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.MainCode.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDHealthObjects1[i].SetValue((( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Heal"), gdjs.MainCode.GDHealObjects1);
gdjs.copyArray(runtimeScene.getObjects("Room"), gdjs.MainCode.GDRoomObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHealObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRoomObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13230508);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Oger"), gdjs.MainCode.GDOgerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.MainCode.GDSkeletonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spawner"), gdjs.MainCode.GDSpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.MainCode.GDZombieObjects1);
{for(var i = 0, len = gdjs.MainCode.GDSpawnerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDOgerObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDSpawnerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDSkeletonObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDSpawnerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDSpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZombieObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hallway"), gdjs.MainCode.GDHallwayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pathfinding"), gdjs.MainCode.GDPathfindingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Room"), gdjs.MainCode.GDRoomObjects1);
gdjs.copyArray(runtimeScene.getObjects("Terrain"), gdjs.MainCode.GDTerrainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.MainCode.GDWallObjects1);
gdjs.MainCode.GDPlayerObjects1.length = 0;

{gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.func(runtimeScene, 16, 80, 80, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDTerrainObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDRoomObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDHallwayObjects1Objects, 8, "", 12, 12, 12, 12, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPathfindingObjects1Objects, "Pathfinding", 10000, true, 3, 1, true, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWallObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, (( gdjs.MainCode.GDRoomObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDRoomObjects1[0].getCenterXInScene()), (( gdjs.MainCode.GDRoomObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDRoomObjects1[0].getCenterYInScene()), "1");
}
{ //Subevents
gdjs.MainCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.MainCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDDoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Swamp", false);
}}

}


{


{
}

}


{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addForce(0, -(200), 0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addForce(0, 200, 0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addForce(200, 0, 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].addForce(-(200), 0, 0);
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.MainCode.GDPlayerObjects1[i].getPointX("")), (gdjs.MainCode.GDPlayerObjects1[i].getPointY("")), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, 180, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.MainCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.MainCode.GDPlayerObjects1[i].getPointX("")), (gdjs.MainCode.GDPlayerObjects1[i].getPointY("")), gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDBulletObjects1Objects, (gdjs.MainCode.GDPlayerObjects1[i].getAngle()), 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.MainCode.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDPlayerObjects1.length = 0;
gdjs.MainCode.GDPlayerObjects2.length = 0;
gdjs.MainCode.GDPlayerObjects3.length = 0;
gdjs.MainCode.GDOgerObjects1.length = 0;
gdjs.MainCode.GDOgerObjects2.length = 0;
gdjs.MainCode.GDOgerObjects3.length = 0;
gdjs.MainCode.GDSkeletonObjects1.length = 0;
gdjs.MainCode.GDSkeletonObjects2.length = 0;
gdjs.MainCode.GDSkeletonObjects3.length = 0;
gdjs.MainCode.GDZombieObjects1.length = 0;
gdjs.MainCode.GDZombieObjects2.length = 0;
gdjs.MainCode.GDZombieObjects3.length = 0;
gdjs.MainCode.GDSpawnerObjects1.length = 0;
gdjs.MainCode.GDSpawnerObjects2.length = 0;
gdjs.MainCode.GDSpawnerObjects3.length = 0;
gdjs.MainCode.GDBulletObjects1.length = 0;
gdjs.MainCode.GDBulletObjects2.length = 0;
gdjs.MainCode.GDBulletObjects3.length = 0;
gdjs.MainCode.GDTerrainObjects1.length = 0;
gdjs.MainCode.GDTerrainObjects2.length = 0;
gdjs.MainCode.GDTerrainObjects3.length = 0;
gdjs.MainCode.GDRoomObjects1.length = 0;
gdjs.MainCode.GDRoomObjects2.length = 0;
gdjs.MainCode.GDRoomObjects3.length = 0;
gdjs.MainCode.GDHallwayObjects1.length = 0;
gdjs.MainCode.GDHallwayObjects2.length = 0;
gdjs.MainCode.GDHallwayObjects3.length = 0;
gdjs.MainCode.GDPathfindingObjects1.length = 0;
gdjs.MainCode.GDPathfindingObjects2.length = 0;
gdjs.MainCode.GDPathfindingObjects3.length = 0;
gdjs.MainCode.GDWallObjects1.length = 0;
gdjs.MainCode.GDWallObjects2.length = 0;
gdjs.MainCode.GDWallObjects3.length = 0;
gdjs.MainCode.GDDoorObjects1.length = 0;
gdjs.MainCode.GDDoorObjects2.length = 0;
gdjs.MainCode.GDDoorObjects3.length = 0;
gdjs.MainCode.GDHealthObjects1.length = 0;
gdjs.MainCode.GDHealthObjects2.length = 0;
gdjs.MainCode.GDHealthObjects3.length = 0;
gdjs.MainCode.GDHealObjects1.length = 0;
gdjs.MainCode.GDHealObjects2.length = 0;
gdjs.MainCode.GDHealObjects3.length = 0;
gdjs.MainCode.GDStaffObjects1.length = 0;
gdjs.MainCode.GDStaffObjects2.length = 0;
gdjs.MainCode.GDStaffObjects3.length = 0;

gdjs.MainCode.eventsList8(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
