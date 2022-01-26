gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDSkeletObjects1= [];
gdjs.New_32sceneCode.GDSkeletObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDKnightSwordObjects1= [];
gdjs.New_32sceneCode.GDKnightSwordObjects2= [];
gdjs.New_32sceneCode.GDWallRightObjects1= [];
gdjs.New_32sceneCode.GDWallRightObjects2= [];
gdjs.New_32sceneCode.GDNecromancerObjects1= [];
gdjs.New_32sceneCode.GDNecromancerObjects2= [];
gdjs.New_32sceneCode.GDWallBannerGreenObjects1= [];
gdjs.New_32sceneCode.GDWallBannerGreenObjects2= [];
gdjs.New_32sceneCode.GDWallGooObjects1= [];
gdjs.New_32sceneCode.GDWallGooObjects2= [];
gdjs.New_32sceneCode.GDWallObjects1= [];
gdjs.New_32sceneCode.GDWallObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSkeletObjects1Objects = Hashtable.newFrom({"Skelet": gdjs.New_32sceneCode.GDSkeletObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightSwordObjects1Objects = Hashtable.newFrom({"KnightSword": gdjs.New_32sceneCode.GDKnightSwordObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSkeletObjects1Objects = Hashtable.newFrom({"Skelet": gdjs.New_32sceneCode.GDSkeletObjects1});gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightSwordObjects1Objects = Hashtable.newFrom({"KnightSword": gdjs.New_32sceneCode.GDKnightSwordObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.New_32sceneCode.eventsList0(runtimeScene);
}


{


{
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setX(gdjs.New_32sceneCode.GDPlayerObjects1[i].getX() + (2));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setX(gdjs.New_32sceneCode.GDPlayerObjects1[i].getX() - (2));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.New_32sceneCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.New_32sceneCode.GDSkeletObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickNearestObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSkeletObjects1Objects, 0, 0, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
/* Reuse gdjs.New_32sceneCode.GDSkeletObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSkeletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSkeletObjects1[i].addForceTowardObject((gdjs.New_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.New_32sceneCode.GDPlayerObjects1[0] : null), 10, 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSkeletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSkeletObjects1[i].setAnimation(2);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("KnightSword"), gdjs.New_32sceneCode.GDKnightSwordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.New_32sceneCode.GDSkeletObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightSwordObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSkeletObjects1Objects, false, runtimeScene, true);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSkeletObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSkeletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSkeletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.New_32sceneCode.eventsList2(runtimeScene);
}


{


{
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
gdjs.New_32sceneCode.GDKnightSwordObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightSwordObjects1Objects, (( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightSwordObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightSwordObjects1[i].getBehavior("Sticker").Stick(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("KnightSword"), gdjs.New_32sceneCode.GDKnightSwordObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightSwordObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightSwordObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightSwordObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightSwordObjects1[i].getBehavior("Sticker").Unstick((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDSkeletObjects1.length = 0;
gdjs.New_32sceneCode.GDSkeletObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDKnightSwordObjects1.length = 0;
gdjs.New_32sceneCode.GDKnightSwordObjects2.length = 0;
gdjs.New_32sceneCode.GDWallRightObjects1.length = 0;
gdjs.New_32sceneCode.GDWallRightObjects2.length = 0;
gdjs.New_32sceneCode.GDNecromancerObjects1.length = 0;
gdjs.New_32sceneCode.GDNecromancerObjects2.length = 0;
gdjs.New_32sceneCode.GDWallBannerGreenObjects1.length = 0;
gdjs.New_32sceneCode.GDWallBannerGreenObjects2.length = 0;
gdjs.New_32sceneCode.GDWallGooObjects1.length = 0;
gdjs.New_32sceneCode.GDWallGooObjects2.length = 0;
gdjs.New_32sceneCode.GDWallObjects1.length = 0;
gdjs.New_32sceneCode.GDWallObjects2.length = 0;

gdjs.New_32sceneCode.eventsList3(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
