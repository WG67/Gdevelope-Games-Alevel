gdjs.DeadCode = {};
gdjs.DeadCode.GDDeadObjects1= [];
gdjs.DeadCode.GDDeadObjects2= [];
gdjs.DeadCode.GDWallObjects1= [];
gdjs.DeadCode.GDWallObjects2= [];

gdjs.DeadCode.conditionTrue_0 = {val:false};
gdjs.DeadCode.condition0IsTrue_0 = {val:false};
gdjs.DeadCode.condition1IsTrue_0 = {val:false};


gdjs.DeadCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.DeadCode.condition0IsTrue_0.val = false;
{
gdjs.DeadCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.DeadCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


gdjs.DeadCode.condition0IsTrue_0.val = false;
{
gdjs.DeadCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.DeadCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};

gdjs.DeadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeadCode.GDDeadObjects1.length = 0;
gdjs.DeadCode.GDDeadObjects2.length = 0;
gdjs.DeadCode.GDWallObjects1.length = 0;
gdjs.DeadCode.GDWallObjects2.length = 0;

gdjs.DeadCode.eventsList0(runtimeScene);

return;

}

gdjs['DeadCode'] = gdjs.DeadCode;
