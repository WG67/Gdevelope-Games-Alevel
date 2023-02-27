gdjs.MenuCode = {};
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDWallObjects1= [];
gdjs.MenuCode.GDWallObjects2= [];
gdjs.MenuCode.GDSettingsObjects1= [];
gdjs.MenuCode.GDSettingsObjects2= [];
gdjs.MenuCode.GDBookObjects1= [];
gdjs.MenuCode.GDBookObjects2= [];
gdjs.MenuCode.GDExitObjects1= [];
gdjs.MenuCode.GDExitObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDStartObjects1[k] = gdjs.MenuCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Book"), gdjs.MenuCode.GDBookObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDBookObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBookObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDBookObjects1[k] = gdjs.MenuCode.GDBookObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBookObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Book", false);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Book", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MenuCode.GDExitObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDExitObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDExitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDExitObjects1[k] = gdjs.MenuCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDExitObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDWallObjects1.length = 0;
gdjs.MenuCode.GDWallObjects2.length = 0;
gdjs.MenuCode.GDSettingsObjects1.length = 0;
gdjs.MenuCode.GDSettingsObjects2.length = 0;
gdjs.MenuCode.GDBookObjects1.length = 0;
gdjs.MenuCode.GDBookObjects2.length = 0;
gdjs.MenuCode.GDExitObjects1.length = 0;
gdjs.MenuCode.GDExitObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
