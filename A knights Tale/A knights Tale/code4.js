gdjs.BookCode = {};
gdjs.BookCode.GDWallObjects1= [];
gdjs.BookCode.GDWallObjects2= [];
gdjs.BookCode.GDBookObjects1= [];
gdjs.BookCode.GDBookObjects2= [];
gdjs.BookCode.GDogarObjects1= [];
gdjs.BookCode.GDogarObjects2= [];
gdjs.BookCode.GDSkeletonObjects1= [];
gdjs.BookCode.GDSkeletonObjects2= [];
gdjs.BookCode.GDZombieObjects1= [];
gdjs.BookCode.GDZombieObjects2= [];
gdjs.BookCode.GDOgarexplainObjects1= [];
gdjs.BookCode.GDOgarexplainObjects2= [];
gdjs.BookCode.GDSkeleexplainObjects1= [];
gdjs.BookCode.GDSkeleexplainObjects2= [];
gdjs.BookCode.GDZombexplain2Objects1= [];
gdjs.BookCode.GDZombexplain2Objects2= [];

gdjs.BookCode.conditionTrue_0 = {val:false};
gdjs.BookCode.condition0IsTrue_0 = {val:false};
gdjs.BookCode.condition1IsTrue_0 = {val:false};


gdjs.BookCode.eventsList0 = function(runtimeScene) {

{


gdjs.BookCode.condition0IsTrue_0.val = false;
{
gdjs.BookCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.BookCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


gdjs.BookCode.condition0IsTrue_0.val = false;
{
gdjs.BookCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.BookCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.BookCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BookCode.GDWallObjects1.length = 0;
gdjs.BookCode.GDWallObjects2.length = 0;
gdjs.BookCode.GDBookObjects1.length = 0;
gdjs.BookCode.GDBookObjects2.length = 0;
gdjs.BookCode.GDogarObjects1.length = 0;
gdjs.BookCode.GDogarObjects2.length = 0;
gdjs.BookCode.GDSkeletonObjects1.length = 0;
gdjs.BookCode.GDSkeletonObjects2.length = 0;
gdjs.BookCode.GDZombieObjects1.length = 0;
gdjs.BookCode.GDZombieObjects2.length = 0;
gdjs.BookCode.GDOgarexplainObjects1.length = 0;
gdjs.BookCode.GDOgarexplainObjects2.length = 0;
gdjs.BookCode.GDSkeleexplainObjects1.length = 0;
gdjs.BookCode.GDSkeleexplainObjects2.length = 0;
gdjs.BookCode.GDZombexplain2Objects1.length = 0;
gdjs.BookCode.GDZombexplain2Objects2.length = 0;

gdjs.BookCode.eventsList0(runtimeScene);

return;

}

gdjs['BookCode'] = gdjs.BookCode;
