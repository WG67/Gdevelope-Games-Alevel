gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDSkeletObjects1= [];
gdjs.New_32sceneCode.GDSkeletObjects2= [];
gdjs.New_32sceneCode.GDKnightMaleObjects1= [];
gdjs.New_32sceneCode.GDKnightMaleObjects2= [];
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

{


gdjs.New_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.New_32sceneCode.GDKnightMaleObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightMaleObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightMaleObjects1[i].setX(gdjs.New_32sceneCode.GDKnightMaleObjects1[i].getX() + (2));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightMaleObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightMaleObjects1[i].setAnimation(2);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.New_32sceneCode.GDKnightMaleObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightMaleObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightMaleObjects1[i].setX(gdjs.New_32sceneCode.GDKnightMaleObjects1[i].getX() - (2));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightMaleObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightMaleObjects1[i].setAnimation(3);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.New_32sceneCode.GDKnightMaleObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightMaleObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightMaleObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.New_32sceneCode.GDKnightMaleObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightMaleObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightMaleObjects1[i].setAnimation(4);
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDSkeletObjects1.length = 0;
gdjs.New_32sceneCode.GDSkeletObjects2.length = 0;
gdjs.New_32sceneCode.GDKnightMaleObjects1.length = 0;
gdjs.New_32sceneCode.GDKnightMaleObjects2.length = 0;
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

gdjs.New_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
