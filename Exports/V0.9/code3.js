gdjs.ControlsCode = {};
gdjs.ControlsCode.GDWallObjects1= [];
gdjs.ControlsCode.GDWallObjects2= [];
gdjs.ControlsCode.GDTimeObjects1= [];
gdjs.ControlsCode.GDTimeObjects2= [];
gdjs.ControlsCode.GDControls2Objects1= [];
gdjs.ControlsCode.GDControls2Objects2= [];
gdjs.ControlsCode.GDControlsObjects1= [];
gdjs.ControlsCode.GDControlsObjects2= [];
gdjs.ControlsCode.GDStartObjects1= [];
gdjs.ControlsCode.GDStartObjects2= [];
gdjs.ControlsCode.GDAskObjects1= [];
gdjs.ControlsCode.GDAskObjects2= [];

gdjs.ControlsCode.conditionTrue_0 = {val:false};
gdjs.ControlsCode.condition0IsTrue_0 = {val:false};
gdjs.ControlsCode.condition1IsTrue_0 = {val:false};


gdjs.ControlsCode.eventsList0 = function(runtimeScene) {

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


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


};

gdjs.ControlsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ControlsCode.GDWallObjects1.length = 0;
gdjs.ControlsCode.GDWallObjects2.length = 0;
gdjs.ControlsCode.GDTimeObjects1.length = 0;
gdjs.ControlsCode.GDTimeObjects2.length = 0;
gdjs.ControlsCode.GDControls2Objects1.length = 0;
gdjs.ControlsCode.GDControls2Objects2.length = 0;
gdjs.ControlsCode.GDControlsObjects1.length = 0;
gdjs.ControlsCode.GDControlsObjects2.length = 0;
gdjs.ControlsCode.GDStartObjects1.length = 0;
gdjs.ControlsCode.GDStartObjects2.length = 0;
gdjs.ControlsCode.GDAskObjects1.length = 0;
gdjs.ControlsCode.GDAskObjects2.length = 0;

gdjs.ControlsCode.eventsList0(runtimeScene);

return;

}

gdjs['ControlsCode'] = gdjs.ControlsCode;
