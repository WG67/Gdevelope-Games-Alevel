gdjs.ThanksCode = {};
gdjs.ThanksCode.GDWallObjects1= [];
gdjs.ThanksCode.GDWallObjects2= [];
gdjs.ThanksCode.GDTimeObjects1= [];
gdjs.ThanksCode.GDTimeObjects2= [];
gdjs.ThanksCode.GDAskObjects1= [];
gdjs.ThanksCode.GDAskObjects2= [];

gdjs.ThanksCode.conditionTrue_0 = {val:false};
gdjs.ThanksCode.condition0IsTrue_0 = {val:false};
gdjs.ThanksCode.condition1IsTrue_0 = {val:false};
gdjs.ThanksCode.condition2IsTrue_0 = {val:false};


gdjs.ThanksCode.eventsList0 = function(runtimeScene) {

{


gdjs.ThanksCode.condition0IsTrue_0.val = false;
{
gdjs.ThanksCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ThanksCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time_Quit");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.ThanksCode.GDTimeObjects1);
{for(var i = 0, len = gdjs.ThanksCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.ThanksCode.GDTimeObjects1[i].setString("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time_Quit")));
}
}}

}


{


gdjs.ThanksCode.condition0IsTrue_0.val = false;
{
gdjs.ThanksCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time_Quit") >= 10;
}if (gdjs.ThanksCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time_Quit");
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.ThanksCode.condition0IsTrue_0.val = false;
gdjs.ThanksCode.condition1IsTrue_0.val = false;
{
gdjs.ThanksCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time_Quit") >= 1;
}if ( gdjs.ThanksCode.condition0IsTrue_0.val ) {
{
gdjs.ThanksCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}}
if (gdjs.ThanksCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


};

gdjs.ThanksCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ThanksCode.GDWallObjects1.length = 0;
gdjs.ThanksCode.GDWallObjects2.length = 0;
gdjs.ThanksCode.GDTimeObjects1.length = 0;
gdjs.ThanksCode.GDTimeObjects2.length = 0;
gdjs.ThanksCode.GDAskObjects1.length = 0;
gdjs.ThanksCode.GDAskObjects2.length = 0;

gdjs.ThanksCode.eventsList0(runtimeScene);

return;

}

gdjs['ThanksCode'] = gdjs.ThanksCode;
