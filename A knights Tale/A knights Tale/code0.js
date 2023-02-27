gdjs.SwampCode = {};
gdjs.SwampCode.repeatCount3 = 0;

gdjs.SwampCode.repeatIndex3 = 0;

gdjs.SwampCode.GDPlayerObjects1= [];
gdjs.SwampCode.GDPlayerObjects2= [];
gdjs.SwampCode.GDPlayerObjects3= [];
gdjs.SwampCode.GDLizard1Objects1= [];
gdjs.SwampCode.GDLizard1Objects2= [];
gdjs.SwampCode.GDLizard1Objects3= [];
gdjs.SwampCode.GDLizard2Objects1= [];
gdjs.SwampCode.GDLizard2Objects2= [];
gdjs.SwampCode.GDLizard2Objects3= [];
gdjs.SwampCode.GDslugObjects1= [];
gdjs.SwampCode.GDslugObjects2= [];
gdjs.SwampCode.GDslugObjects3= [];
gdjs.SwampCode.GDSpawnerObjects1= [];
gdjs.SwampCode.GDSpawnerObjects2= [];
gdjs.SwampCode.GDSpawnerObjects3= [];
gdjs.SwampCode.GDBulletObjects1= [];
gdjs.SwampCode.GDBulletObjects2= [];
gdjs.SwampCode.GDBulletObjects3= [];
gdjs.SwampCode.GDTerrainObjects1= [];
gdjs.SwampCode.GDTerrainObjects2= [];
gdjs.SwampCode.GDTerrainObjects3= [];
gdjs.SwampCode.GDRoomObjects1= [];
gdjs.SwampCode.GDRoomObjects2= [];
gdjs.SwampCode.GDRoomObjects3= [];
gdjs.SwampCode.GDHallwayObjects1= [];
gdjs.SwampCode.GDHallwayObjects2= [];
gdjs.SwampCode.GDHallwayObjects3= [];
gdjs.SwampCode.GDPathfindingObjects1= [];
gdjs.SwampCode.GDPathfindingObjects2= [];
gdjs.SwampCode.GDPathfindingObjects3= [];
gdjs.SwampCode.GDWallObjects1= [];
gdjs.SwampCode.GDWallObjects2= [];
gdjs.SwampCode.GDWallObjects3= [];
gdjs.SwampCode.GDDoorObjects1= [];
gdjs.SwampCode.GDDoorObjects2= [];
gdjs.SwampCode.GDDoorObjects3= [];
gdjs.SwampCode.GDHealthObjects1= [];
gdjs.SwampCode.GDHealthObjects2= [];
gdjs.SwampCode.GDHealthObjects3= [];
gdjs.SwampCode.GDHealObjects1= [];
gdjs.SwampCode.GDHealObjects2= [];
gdjs.SwampCode.GDHealObjects3= [];
gdjs.SwampCode.GDStaffObjects1= [];
gdjs.SwampCode.GDStaffObjects2= [];
gdjs.SwampCode.GDStaffObjects3= [];

gdjs.SwampCode.conditionTrue_0 = {val:false};
gdjs.SwampCode.condition0IsTrue_0 = {val:false};
gdjs.SwampCode.condition1IsTrue_0 = {val:false};
gdjs.SwampCode.condition2IsTrue_0 = {val:false};
gdjs.SwampCode.condition3IsTrue_0 = {val:false};
gdjs.SwampCode.conditionTrue_1 = {val:false};
gdjs.SwampCode.condition0IsTrue_1 = {val:false};
gdjs.SwampCode.condition1IsTrue_1 = {val:false};
gdjs.SwampCode.condition2IsTrue_1 = {val:false};
gdjs.SwampCode.condition3IsTrue_1 = {val:false};


gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SwampCode.GDPlayerObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHealObjects1Objects = Hashtable.newFrom({"Heal": gdjs.SwampCode.GDHealObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.SwampCode.GDBulletObjects1});
gdjs.SwampCode.asyncCallback10868172 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects2);

{for(var i = 0, len = gdjs.SwampCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.SwampCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.SwampCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.SwampCode.GDBulletObjects1) asyncObjectsList.addObject("Bullet", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SwampCode.asyncCallback10868172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.SwampCode.GDBulletObjects1});
gdjs.SwampCode.asyncCallback10747580 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects2);

{for(var i = 0, len = gdjs.SwampCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.SwampCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.SwampCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.SwampCode.GDBulletObjects1) asyncObjectsList.addObject("Bullet", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SwampCode.asyncCallback10747580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.SwampCode.GDBulletObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.SwampCode.GDWallObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard1Objects1Objects = Hashtable.newFrom({"Lizard1": gdjs.SwampCode.GDLizard1Objects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SwampCode.GDPlayerObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard2Objects1Objects = Hashtable.newFrom({"Lizard2": gdjs.SwampCode.GDLizard2Objects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SwampCode.GDPlayerObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDslugObjects1Objects = Hashtable.newFrom({"slug": gdjs.SwampCode.GDslugObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SwampCode.GDPlayerObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.SwampCode.GDBulletObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard1Objects1Objects = Hashtable.newFrom({"Lizard1": gdjs.SwampCode.GDLizard1Objects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHealObjects1Objects = Hashtable.newFrom({"Heal": gdjs.SwampCode.GDHealObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.SwampCode.GDBulletObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard2Objects1Objects = Hashtable.newFrom({"Lizard2": gdjs.SwampCode.GDLizard2Objects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHealObjects1Objects = Hashtable.newFrom({"Heal": gdjs.SwampCode.GDHealObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.SwampCode.GDBulletObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDslugObjects1Objects = Hashtable.newFrom({"slug": gdjs.SwampCode.GDslugObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHealObjects1Objects = Hashtable.newFrom({"Heal": gdjs.SwampCode.GDHealObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard1Objects1Objects = Hashtable.newFrom({"Lizard1": gdjs.SwampCode.GDLizard1Objects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.SwampCode.GDWallObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard2Objects1Objects = Hashtable.newFrom({"Lizard2": gdjs.SwampCode.GDLizard2Objects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.SwampCode.GDWallObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDslugObjects1Objects = Hashtable.newFrom({"slug": gdjs.SwampCode.GDslugObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.SwampCode.GDWallObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SwampCode.GDPlayerObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard1Objects1Objects = Hashtable.newFrom({"Lizard1": gdjs.SwampCode.GDLizard1Objects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SwampCode.GDPlayerObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard2Objects1Objects = Hashtable.newFrom({"Lizard2": gdjs.SwampCode.GDLizard2Objects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SwampCode.GDPlayerObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDslugObjects1Objects = Hashtable.newFrom({"slug": gdjs.SwampCode.GDslugObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHealObjects1Objects = Hashtable.newFrom({"Heal": gdjs.SwampCode.GDHealObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDRoomObjects1Objects = Hashtable.newFrom({"Room": gdjs.SwampCode.GDRoomObjects1});
gdjs.SwampCode.asyncCallback8813404 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Heal"), gdjs.SwampCode.GDHealObjects2);

{for(var i = 0, len = gdjs.SwampCode.GDHealObjects2.length ;i < len;++i) {
    gdjs.SwampCode.GDHealObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.SwampCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.SwampCode.GDHealObjects1) asyncObjectsList.addObject("Heal", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SwampCode.asyncCallback8813404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard1Objects1Objects = Hashtable.newFrom({"Lizard1": gdjs.SwampCode.GDLizard1Objects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard2Objects1Objects = Hashtable.newFrom({"Lizard2": gdjs.SwampCode.GDLizard2Objects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDslugObjects1Objects = Hashtable.newFrom({"slug": gdjs.SwampCode.GDslugObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDTerrainObjects1Objects = Hashtable.newFrom({"Terrain": gdjs.SwampCode.GDTerrainObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDRoomObjects1Objects = Hashtable.newFrom({"Room": gdjs.SwampCode.GDRoomObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHallwayObjects1Objects = Hashtable.newFrom({"Hallway": gdjs.SwampCode.GDHallwayObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPathfindingObjects1Objects = Hashtable.newFrom({"Pathfinding": gdjs.SwampCode.GDPathfindingObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.SwampCode.GDWallObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SwampCode.GDPlayerObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDRoomObjects3Objects = Hashtable.newFrom({"Room": gdjs.SwampCode.GDRoomObjects3});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDSpawnerObjects3Objects = Hashtable.newFrom({"Spawner": gdjs.SwampCode.GDSpawnerObjects3});
gdjs.SwampCode.eventsList3 = function(runtimeScene) {

};gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDRoomObjects1Objects = Hashtable.newFrom({"Room": gdjs.SwampCode.GDRoomObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.SwampCode.GDDoorObjects2});
gdjs.SwampCode.asyncCallback8410756 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Room"), gdjs.SwampCode.GDRoomObjects2);

gdjs.SwampCode.GDDoorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDDoorObjects2Objects, (( gdjs.SwampCode.GDRoomObjects2.length === 0 ) ? 0 :gdjs.SwampCode.GDRoomObjects2[0].getCenterXInScene()), (( gdjs.SwampCode.GDRoomObjects2.length === 0 ) ? 0 :gdjs.SwampCode.GDRoomObjects2[0].getPointY("")), "1");
}}
gdjs.SwampCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.SwampCode.GDRoomObjects1) asyncObjectsList.addObject("Room", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(60), (runtimeScene) => (gdjs.SwampCode.asyncCallback8410756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SwampCode.eventsList5 = function(runtimeScene) {

{


gdjs.SwampCode.repeatCount3 = 6;
for(gdjs.SwampCode.repeatIndex3 = 0;gdjs.SwampCode.repeatIndex3 < gdjs.SwampCode.repeatCount3;++gdjs.SwampCode.repeatIndex3) {
gdjs.copyArray(gdjs.SwampCode.GDRoomObjects1, gdjs.SwampCode.GDRoomObjects3);

gdjs.SwampCode.GDSpawnerObjects3.length = 0;


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDRoomObjects3Objects);
}if (gdjs.SwampCode.condition0IsTrue_0.val)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDSpawnerObjects3Objects, (( gdjs.SwampCode.GDRoomObjects3.length === 0 ) ? 0 :gdjs.SwampCode.GDRoomObjects3[0].getPointX("")), (( gdjs.SwampCode.GDRoomObjects3.length === 0 ) ? 0 :gdjs.SwampCode.GDRoomObjects3[0].getCenterYInScene()), "1");
}}
}

}


{

/* Reuse gdjs.SwampCode.GDRoomObjects1 */

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDRoomObjects1Objects);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SwampCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SwampCode.GDPlayerObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.SwampCode.GDDoorObjects1});
gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.SwampCode.GDBulletObjects1});
gdjs.SwampCode.asyncCallback9344676 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects2);

{for(var i = 0, len = gdjs.SwampCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.SwampCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.SwampCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.SwampCode.GDBulletObjects1) asyncObjectsList.addObject("Bullet", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SwampCode.asyncCallback9344676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.SwampCode.GDBulletObjects1});
gdjs.SwampCode.asyncCallback9346060 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects2);

{for(var i = 0, len = gdjs.SwampCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.SwampCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.SwampCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.SwampCode.GDBulletObjects1) asyncObjectsList.addObject("Bullet", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SwampCode.asyncCallback9346060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SwampCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SwampCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.SwampCode.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SwampCode.condition0IsTrue_0.val = true;
        gdjs.SwampCode.GDPlayerObjects1[k] = gdjs.SwampCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.SwampCode.GDPlayerObjects1.length = k;}if (gdjs.SwampCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dead", false);
}}

}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].addForce(200, 0, 0);
}
}{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].addForce(0, -(200), 0);
}
}}

}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].addForce(0, 200, 0);
}
}}

}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].addForce(-(200), 0, 0);
}
}{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Heal"), gdjs.SwampCode.GDHealObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHealObjects1Objects, false, runtimeScene, false);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDHealObjects1 */
/* Reuse gdjs.SwampCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].getBehavior("Health").Heal(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.SwampCode.GDHealObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDHealObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.SwampCode.GDPlayerObjects1.length !== 0 ? gdjs.SwampCode.GDPlayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}}

}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
}

}


{



}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "u");
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.SwampCode.GDPlayerObjects1[i].getPointX("")), (gdjs.SwampCode.GDPlayerObjects1[i].getPointY("")), gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects, (gdjs.SwampCode.GDPlayerObjects1[i].getAngle()), 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.SwampCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "y");
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.SwampCode.GDPlayerObjects1[i].getPointX("")), (gdjs.SwampCode.GDPlayerObjects1[i].getPointY("")), gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects, 180, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.SwampCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.SwampCode.GDWallObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDWallObjects1Objects, false, runtimeScene, false);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.SwampCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
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

gdjs.copyArray(runtimeScene.getObjects("Lizard1"), gdjs.SwampCode.GDLizard1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard1Objects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].getBehavior("Health").Hit(0.2, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lizard2"), gdjs.SwampCode.GDLizard2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard2Objects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].getBehavior("Health").Hit(0.1, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("slug"), gdjs.SwampCode.GDslugObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDslugObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].getBehavior("Health").Hit(0.05, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lizard1"), gdjs.SwampCode.GDLizard1Objects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard1Objects1Objects, false, runtimeScene, false);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDLizard1Objects1 */
gdjs.SwampCode.GDHealObjects1.length = 0;

{for(var i = 0, len = gdjs.SwampCode.GDLizard1Objects1.length ;i < len;++i) {
    gdjs.SwampCode.GDLizard1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHealObjects1Objects, (( gdjs.SwampCode.GDLizard1Objects1.length === 0 ) ? 0 :gdjs.SwampCode.GDLizard1Objects1[0].getPointX("")), (( gdjs.SwampCode.GDLizard1Objects1.length === 0 ) ? 0 :gdjs.SwampCode.GDLizard1Objects1[0].getPointY("")), "1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lizard2"), gdjs.SwampCode.GDLizard2Objects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard2Objects1Objects, false, runtimeScene, false);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDLizard2Objects1 */
gdjs.SwampCode.GDHealObjects1.length = 0;

{for(var i = 0, len = gdjs.SwampCode.GDLizard2Objects1.length ;i < len;++i) {
    gdjs.SwampCode.GDLizard2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHealObjects1Objects, (( gdjs.SwampCode.GDLizard2Objects1.length === 0 ) ? 0 :gdjs.SwampCode.GDLizard2Objects1[0].getPointX("")), (( gdjs.SwampCode.GDLizard2Objects1.length === 0 ) ? 0 :gdjs.SwampCode.GDLizard2Objects1[0].getPointY("")), "1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("slug"), gdjs.SwampCode.GDslugObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDslugObjects1Objects, false, runtimeScene, false);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDslugObjects1 */
gdjs.SwampCode.GDHealObjects1.length = 0;

{for(var i = 0, len = gdjs.SwampCode.GDslugObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDslugObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHealObjects1Objects, (( gdjs.SwampCode.GDslugObjects1.length === 0 ) ? 0 :gdjs.SwampCode.GDslugObjects1[0].getPointX("")), (( gdjs.SwampCode.GDslugObjects1.length === 0 ) ? 0 :gdjs.SwampCode.GDslugObjects1[0].getPointY("")), "1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lizard1"), gdjs.SwampCode.GDLizard1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Lizard2"), gdjs.SwampCode.GDLizard2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.SwampCode.GDWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("slug"), gdjs.SwampCode.GDslugObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
gdjs.SwampCode.condition1IsTrue_0.val = false;
gdjs.SwampCode.condition2IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard1Objects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDWallObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SwampCode.condition0IsTrue_0.val ) {
{
gdjs.SwampCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard2Objects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDWallObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SwampCode.condition1IsTrue_0.val ) {
{
gdjs.SwampCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDslugObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDWallObjects1Objects, false, runtimeScene, false);
}}
}
if (gdjs.SwampCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDWallObjects1 */
{for(var i = 0, len = gdjs.SwampCode.GDWallObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDWallObjects1[i].getBehavior("PathfindingObstacle").setImpassable(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lizard1"), gdjs.SwampCode.GDLizard1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard1Objects1Objects, 300, false);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDLizard1Objects1 */
/* Reuse gdjs.SwampCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SwampCode.GDLizard1Objects1.length ;i < len;++i) {
    gdjs.SwampCode.GDLizard1Objects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.SwampCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SwampCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.SwampCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SwampCode.GDPlayerObjects1[0].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lizard2"), gdjs.SwampCode.GDLizard2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard2Objects1Objects, 300, false);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDLizard2Objects1 */
/* Reuse gdjs.SwampCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SwampCode.GDLizard2Objects1.length ;i < len;++i) {
    gdjs.SwampCode.GDLizard2Objects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.SwampCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SwampCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.SwampCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SwampCode.GDPlayerObjects1[0].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("slug"), gdjs.SwampCode.GDslugObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDslugObjects1Objects, 150, false);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SwampCode.GDPlayerObjects1 */
/* Reuse gdjs.SwampCode.GDslugObjects1 */
{for(var i = 0, len = gdjs.SwampCode.GDslugObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDslugObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.SwampCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SwampCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.SwampCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SwampCode.GDPlayerObjects1[0].getCenterYInScene()));
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
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.SwampCode.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDHealthObjects1[i].SetValue((( gdjs.SwampCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.SwampCode.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Heal"), gdjs.SwampCode.GDHealObjects1);
gdjs.copyArray(runtimeScene.getObjects("Room"), gdjs.SwampCode.GDRoomObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
gdjs.SwampCode.condition1IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHealObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDRoomObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SwampCode.condition0IsTrue_0.val ) {
{
{gdjs.SwampCode.conditionTrue_1 = gdjs.SwampCode.condition1IsTrue_0;
gdjs.SwampCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13135284);
}
}}
if (gdjs.SwampCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.SwampCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Lizard1"), gdjs.SwampCode.GDLizard1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Lizard2"), gdjs.SwampCode.GDLizard2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Spawner"), gdjs.SwampCode.GDSpawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("slug"), gdjs.SwampCode.GDslugObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDSpawnerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDSpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard1Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.SwampCode.GDSpawnerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDSpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDLizard2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.SwampCode.GDSpawnerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDSpawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDslugObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hallway"), gdjs.SwampCode.GDHallwayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pathfinding"), gdjs.SwampCode.GDPathfindingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Room"), gdjs.SwampCode.GDRoomObjects1);
gdjs.copyArray(runtimeScene.getObjects("Terrain"), gdjs.SwampCode.GDTerrainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.SwampCode.GDWallObjects1);
gdjs.SwampCode.GDPlayerObjects1.length = 0;

{gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.func(runtimeScene, 16, 80, 80, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDTerrainObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDRoomObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDHallwayObjects1Objects, 8, "", 12, 12, 12, 12, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPathfindingObjects1Objects, "Pathfinding", 10000, true, 3, 1, true, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDWallObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects, (( gdjs.SwampCode.GDRoomObjects1.length === 0 ) ? 0 :gdjs.SwampCode.GDRoomObjects1[0].getCenterXInScene()), (( gdjs.SwampCode.GDRoomObjects1.length === 0 ) ? 0 :gdjs.SwampCode.GDRoomObjects1[0].getCenterYInScene()), "1");
}
{ //Subevents
gdjs.SwampCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.SwampCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);

gdjs.SwampCode.condition0IsTrue_0.val = false;
gdjs.SwampCode.condition1IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDPlayerObjects1Objects, gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDDoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.SwampCode.condition0IsTrue_0.val ) {
{
gdjs.SwampCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}}
if (gdjs.SwampCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


{
}

}


{



}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].addForce(0, -(200), 0);
}
}}

}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].addForce(0, 200, 0);
}
}}

}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].addForce(200, 0, 0);
}
}{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].addForce(-(200), 0, 0);
}
}{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.SwampCode.GDPlayerObjects1[i].getPointX("")), (gdjs.SwampCode.GDPlayerObjects1[i].getPointY("")), gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects, 180, 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.SwampCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.SwampCode.condition0IsTrue_0.val = false;
{
gdjs.SwampCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.SwampCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.SwampCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SwampCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SwampCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SwampCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.SwampCode.GDPlayerObjects1[i].getPointX("")), (gdjs.SwampCode.GDPlayerObjects1[i].getPointY("")), gdjs.SwampCode.mapOfGDgdjs_46SwampCode_46GDBulletObjects1Objects, (gdjs.SwampCode.GDPlayerObjects1[i].getAngle()), 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.SwampCode.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.SwampCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SwampCode.GDPlayerObjects1.length = 0;
gdjs.SwampCode.GDPlayerObjects2.length = 0;
gdjs.SwampCode.GDPlayerObjects3.length = 0;
gdjs.SwampCode.GDLizard1Objects1.length = 0;
gdjs.SwampCode.GDLizard1Objects2.length = 0;
gdjs.SwampCode.GDLizard1Objects3.length = 0;
gdjs.SwampCode.GDLizard2Objects1.length = 0;
gdjs.SwampCode.GDLizard2Objects2.length = 0;
gdjs.SwampCode.GDLizard2Objects3.length = 0;
gdjs.SwampCode.GDslugObjects1.length = 0;
gdjs.SwampCode.GDslugObjects2.length = 0;
gdjs.SwampCode.GDslugObjects3.length = 0;
gdjs.SwampCode.GDSpawnerObjects1.length = 0;
gdjs.SwampCode.GDSpawnerObjects2.length = 0;
gdjs.SwampCode.GDSpawnerObjects3.length = 0;
gdjs.SwampCode.GDBulletObjects1.length = 0;
gdjs.SwampCode.GDBulletObjects2.length = 0;
gdjs.SwampCode.GDBulletObjects3.length = 0;
gdjs.SwampCode.GDTerrainObjects1.length = 0;
gdjs.SwampCode.GDTerrainObjects2.length = 0;
gdjs.SwampCode.GDTerrainObjects3.length = 0;
gdjs.SwampCode.GDRoomObjects1.length = 0;
gdjs.SwampCode.GDRoomObjects2.length = 0;
gdjs.SwampCode.GDRoomObjects3.length = 0;
gdjs.SwampCode.GDHallwayObjects1.length = 0;
gdjs.SwampCode.GDHallwayObjects2.length = 0;
gdjs.SwampCode.GDHallwayObjects3.length = 0;
gdjs.SwampCode.GDPathfindingObjects1.length = 0;
gdjs.SwampCode.GDPathfindingObjects2.length = 0;
gdjs.SwampCode.GDPathfindingObjects3.length = 0;
gdjs.SwampCode.GDWallObjects1.length = 0;
gdjs.SwampCode.GDWallObjects2.length = 0;
gdjs.SwampCode.GDWallObjects3.length = 0;
gdjs.SwampCode.GDDoorObjects1.length = 0;
gdjs.SwampCode.GDDoorObjects2.length = 0;
gdjs.SwampCode.GDDoorObjects3.length = 0;
gdjs.SwampCode.GDHealthObjects1.length = 0;
gdjs.SwampCode.GDHealthObjects2.length = 0;
gdjs.SwampCode.GDHealthObjects3.length = 0;
gdjs.SwampCode.GDHealObjects1.length = 0;
gdjs.SwampCode.GDHealObjects2.length = 0;
gdjs.SwampCode.GDHealObjects3.length = 0;
gdjs.SwampCode.GDStaffObjects1.length = 0;
gdjs.SwampCode.GDStaffObjects2.length = 0;
gdjs.SwampCode.GDStaffObjects3.length = 0;

gdjs.SwampCode.eventsList8(runtimeScene);

return;

}

gdjs['SwampCode'] = gdjs.SwampCode;
