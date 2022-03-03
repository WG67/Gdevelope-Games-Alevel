gdjs.QuitCode = {};
gdjs.QuitCode.GDTimeObjects1= [];
gdjs.QuitCode.GDTimeObjects2= [];
gdjs.QuitCode.GDAskObjects1= [];
gdjs.QuitCode.GDAskObjects2= [];

gdjs.QuitCode.conditionTrue_0 = {val:false};
gdjs.QuitCode.condition0IsTrue_0 = {val:false};
gdjs.QuitCode.condition1IsTrue_0 = {val:false};
gdjs.QuitCode.condition2IsTrue_0 = {val:false};


gdjs.QuitCode.eventsList0 = function(runtimeScene) {

{


gdjs.QuitCode.condition0IsTrue_0.val = false;
{
gdjs.QuitCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.QuitCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time_Quit");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.QuitCode.GDTimeObjects1);
{for(var i = 0, len = gdjs.QuitCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.QuitCode.GDTimeObjects1[i].setString("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time_Quit")));
}
}}

}


{


gdjs.QuitCode.condition0IsTrue_0.val = false;
{
gdjs.QuitCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time_Quit") >= 4;
}if (gdjs.QuitCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Time_Quit");
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.QuitCode.condition0IsTrue_0.val = false;
gdjs.QuitCode.condition1IsTrue_0.val = false;
{
gdjs.QuitCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time_Quit") >= 1;
}if ( gdjs.QuitCode.condition0IsTrue_0.val ) {
{
gdjs.QuitCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}}
if (gdjs.QuitCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


};

gdjs.QuitCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.QuitCode.GDTimeObjects1.length = 0;
gdjs.QuitCode.GDTimeObjects2.length = 0;
gdjs.QuitCode.GDAskObjects1.length = 0;
gdjs.QuitCode.GDAskObjects2.length = 0;

gdjs.QuitCode.eventsList0(runtimeScene);
return;

}

gdjs['QuitCode'] = gdjs.QuitCode;
