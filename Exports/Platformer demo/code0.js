gdjs.TestCode = {};
gdjs.TestCode.GDPlayerObjects1_1final = [];

gdjs.TestCode.GDWallObjects1= [];
gdjs.TestCode.GDWallObjects2= [];
gdjs.TestCode.GDWallObjects3= [];
gdjs.TestCode.GDSkeletObjects1= [];
gdjs.TestCode.GDSkeletObjects2= [];
gdjs.TestCode.GDSkeletObjects3= [];
gdjs.TestCode.GDPlayerObjects1= [];
gdjs.TestCode.GDPlayerObjects2= [];
gdjs.TestCode.GDPlayerObjects3= [];
gdjs.TestCode.GDKnightSwordObjects1= [];
gdjs.TestCode.GDKnightSwordObjects2= [];
gdjs.TestCode.GDKnightSwordObjects3= [];
gdjs.TestCode.GDNecromancer_95leftObjects1= [];
gdjs.TestCode.GDNecromancer_95leftObjects2= [];
gdjs.TestCode.GDNecromancer_95leftObjects3= [];
gdjs.TestCode.GDNecromancerObjects1= [];
gdjs.TestCode.GDNecromancerObjects2= [];
gdjs.TestCode.GDNecromancerObjects3= [];
gdjs.TestCode.GDWallBannerGreenObjects1= [];
gdjs.TestCode.GDWallBannerGreenObjects2= [];
gdjs.TestCode.GDWallBannerGreenObjects3= [];
gdjs.TestCode.GDWallGooObjects1= [];
gdjs.TestCode.GDWallGooObjects2= [];
gdjs.TestCode.GDWallGooObjects3= [];
gdjs.TestCode.GDWall2Objects1= [];
gdjs.TestCode.GDWall2Objects2= [];
gdjs.TestCode.GDWall2Objects3= [];
gdjs.TestCode.GDTiledGooObjects1= [];
gdjs.TestCode.GDTiledGooObjects2= [];
gdjs.TestCode.GDTiledGooObjects3= [];
gdjs.TestCode.GDFloor2Objects1= [];
gdjs.TestCode.GDFloor2Objects2= [];
gdjs.TestCode.GDFloor2Objects3= [];
gdjs.TestCode.GDFloorObjects1= [];
gdjs.TestCode.GDFloorObjects2= [];
gdjs.TestCode.GDFloorObjects3= [];
gdjs.TestCode.GDChest_95checkpointObjects1= [];
gdjs.TestCode.GDChest_95checkpointObjects2= [];
gdjs.TestCode.GDChest_95checkpointObjects3= [];
gdjs.TestCode.GDChestObjects1= [];
gdjs.TestCode.GDChestObjects2= [];
gdjs.TestCode.GDChestObjects3= [];
gdjs.TestCode.GDCrateObjects1= [];
gdjs.TestCode.GDCrateObjects2= [];
gdjs.TestCode.GDCrateObjects3= [];
gdjs.TestCode.GDGreenMagicStaffObjects1= [];
gdjs.TestCode.GDGreenMagicStaffObjects2= [];
gdjs.TestCode.GDGreenMagicStaffObjects3= [];
gdjs.TestCode.GDnecromancer_95proObjects1= [];
gdjs.TestCode.GDnecromancer_95proObjects2= [];
gdjs.TestCode.GDnecromancer_95proObjects3= [];
gdjs.TestCode.GDenemy_95deadObjects1= [];
gdjs.TestCode.GDenemy_95deadObjects2= [];
gdjs.TestCode.GDenemy_95deadObjects3= [];
gdjs.TestCode.GDDoorObjects1= [];
gdjs.TestCode.GDDoorObjects2= [];
gdjs.TestCode.GDDoorObjects3= [];
gdjs.TestCode.GDUiHeartObjects1= [];
gdjs.TestCode.GDUiHeartObjects2= [];
gdjs.TestCode.GDUiHeartObjects3= [];
gdjs.TestCode.GDNewObjectObjects1= [];
gdjs.TestCode.GDNewObjectObjects2= [];
gdjs.TestCode.GDNewObjectObjects3= [];
gdjs.TestCode.GDNewObject2Objects1= [];
gdjs.TestCode.GDNewObject2Objects2= [];
gdjs.TestCode.GDNewObject2Objects3= [];
gdjs.TestCode.GDTiled_95FloorObjects1= [];
gdjs.TestCode.GDTiled_95FloorObjects2= [];
gdjs.TestCode.GDTiled_95FloorObjects3= [];
gdjs.TestCode.GDLadderObjects1= [];
gdjs.TestCode.GDLadderObjects2= [];
gdjs.TestCode.GDLadderObjects3= [];
gdjs.TestCode.GDLadderSpriteObjects1= [];
gdjs.TestCode.GDLadderSpriteObjects2= [];
gdjs.TestCode.GDLadderSpriteObjects3= [];
gdjs.TestCode.GDMimicObjects1= [];
gdjs.TestCode.GDMimicObjects2= [];
gdjs.TestCode.GDMimicObjects3= [];

gdjs.TestCode.conditionTrue_0 = {val:false};
gdjs.TestCode.condition0IsTrue_0 = {val:false};
gdjs.TestCode.condition1IsTrue_0 = {val:false};
gdjs.TestCode.condition2IsTrue_0 = {val:false};
gdjs.TestCode.condition3IsTrue_0 = {val:false};
gdjs.TestCode.conditionTrue_1 = {val:false};
gdjs.TestCode.condition0IsTrue_1 = {val:false};
gdjs.TestCode.condition1IsTrue_1 = {val:false};
gdjs.TestCode.condition2IsTrue_1 = {val:false};
gdjs.TestCode.condition3IsTrue_1 = {val:false};


gdjs.TestCode.eventsList0 = function(runtimeScene) {

};gdjs.TestCode.eventsList1 = function(runtimeScene) {

};gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestCode.GDPlayerObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDSkeletObjects1Objects = Hashtable.newFrom({"Skelet": gdjs.TestCode.GDSkeletObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDSkeletObjects1Objects = Hashtable.newFrom({"Skelet": gdjs.TestCode.GDSkeletObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestCode.GDPlayerObjects1});
gdjs.TestCode.eventsList2 = function(runtimeScene) {

};gdjs.TestCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TestCode.GDPlayerObjects1, gdjs.TestCode.GDPlayerObjects2);


gdjs.TestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.TestCode.condition0IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects2[k] = gdjs.TestCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects2.length = k;}if (gdjs.TestCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].setAnimationName("Run");
}
}}

}


{

/* Reuse gdjs.TestCode.GDPlayerObjects1 */

gdjs.TestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.TestCode.condition0IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects1[k] = gdjs.TestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects1.length = k;}if (gdjs.TestCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


};gdjs.TestCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDPlayerObjects1 */

gdjs.TestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.TestCode.condition0IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects1[k] = gdjs.TestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects1.length = k;}if (gdjs.TestCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TestCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDPlayerObjects1 */

gdjs.TestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects1[i].getVariableNumber(gdjs.TestCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.TestCode.condition0IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects1[k] = gdjs.TestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects1.length = k;}if (gdjs.TestCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].setAnimationName("Sword_right");
}
}}

}


};gdjs.TestCode.eventsList6 = function(runtimeScene) {

};gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDnecromancer_9595proObjects1Objects = Hashtable.newFrom({"necromancer_pro": gdjs.TestCode.GDnecromancer_95proObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDnecromancer_9595proObjects1Objects = Hashtable.newFrom({"necromancer_pro": gdjs.TestCode.GDnecromancer_95proObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestCode.GDPlayerObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDNecromancer_9595leftObjects1Objects = Hashtable.newFrom({"Necromancer_left": gdjs.TestCode.GDNecromancer_95leftObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestCode.GDPlayerObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDNecromancerObjects1Objects = Hashtable.newFrom({"Necromancer": gdjs.TestCode.GDNecromancerObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDnecromancer_9595proObjects1Objects = Hashtable.newFrom({"necromancer_pro": gdjs.TestCode.GDnecromancer_95proObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestCode.GDPlayerObjects1});
gdjs.TestCode.eventsList7 = function(runtimeScene) {

};gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestCode.GDPlayerObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDChest_9595checkpointObjects1Objects = Hashtable.newFrom({"Chest_checkpoint": gdjs.TestCode.GDChest_95checkpointObjects1});
gdjs.TestCode.eventsList8 = function(runtimeScene) {

};gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDFloor2Objects1Objects = Hashtable.newFrom({"Floor2": gdjs.TestCode.GDFloor2Objects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestCode.GDPlayerObjects1});
gdjs.TestCode.eventsList9 = function(runtimeScene) {

};gdjs.TestCode.eventsList10 = function(runtimeScene) {

};gdjs.TestCode.eventsList11 = function(runtimeScene) {

};gdjs.TestCode.eventsList12 = function(runtimeScene) {

};gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestCode.GDPlayerObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.TestCode.GDDoorObjects1});
gdjs.TestCode.eventsList13 = function(runtimeScene) {

};gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestCode.GDPlayerObjects1});
gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDLadderObjects1Objects = Hashtable.newFrom({"Ladder": gdjs.TestCode.GDLadderObjects1});
gdjs.TestCode.eventsList14 = function(runtimeScene) {

{


gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.TestCode.GDPlayerObjects1, gdjs.TestCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}}

}


{


gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.TestCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects1 */
{}}

}


};gdjs.TestCode.eventsList15 = function(runtimeScene) {

};gdjs.TestCode.eventsList16 = function(runtimeScene) {

{


gdjs.TestCode.eventsList0(runtimeScene);
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


gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{


gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


{
}

}


{


gdjs.TestCode.eventsList1(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.TestCode.GDSkeletObjects1);
{for(var i = 0, len = gdjs.TestCode.GDSkeletObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDSkeletObjects1[i].addForceTowardObject((gdjs.TestCode.GDPlayerObjects1.length !== 0 ? gdjs.TestCode.GDPlayerObjects1[0] : null), 10, 0);
}
}{for(var i = 0, len = gdjs.TestCode.GDSkeletObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDSkeletObjects1[i].setAnimation(2);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.TestCode.GDSkeletObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
gdjs.TestCode.condition1IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects, gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDSkeletObjects1Objects, false, runtimeScene, false);
}if ( gdjs.TestCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects1[i].getVariableNumber(gdjs.TestCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.TestCode.condition1IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects1[k] = gdjs.TestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects1.length = k;}}
if (gdjs.TestCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDSkeletObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDSkeletObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDSkeletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skelet"), gdjs.TestCode.GDSkeletObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDSkeletObjects1Objects, gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CheckpointX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CheckpointY")));
}
}}

}


{


gdjs.TestCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects1[i].getVariableNumber(gdjs.TestCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.TestCode.condition0IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects1[k] = gdjs.TestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects1.length = k;}if (gdjs.TestCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TestCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.TestCode.condition0IsTrue_0.val = false;
gdjs.TestCode.condition1IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if ( gdjs.TestCode.condition0IsTrue_0.val ) {
{
{gdjs.TestCode.conditionTrue_1 = gdjs.TestCode.condition1IsTrue_0;
gdjs.TestCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11992036);
}
}}
if (gdjs.TestCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].returnVariable(gdjs.TestCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(0);
}
}
{ //Subevents
gdjs.TestCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


{
}

}


{

gdjs.TestCode.GDPlayerObjects1.length = 0;


gdjs.TestCode.condition0IsTrue_0.val = false;
gdjs.TestCode.condition1IsTrue_0.val = false;
{
{gdjs.TestCode.conditionTrue_1 = gdjs.TestCode.condition0IsTrue_0;
gdjs.TestCode.GDPlayerObjects1_1final.length = 0;gdjs.TestCode.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects2);
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects2[i].isCurrentAnimationName("Sword_right") ) {
        gdjs.TestCode.condition0IsTrue_1.val = true;
        gdjs.TestCode.GDPlayerObjects2[k] = gdjs.TestCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects2.length = k;if( gdjs.TestCode.condition0IsTrue_1.val ) {
    gdjs.TestCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.TestCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.TestCode.GDPlayerObjects1_1final.indexOf(gdjs.TestCode.GDPlayerObjects2[j]) === -1 )
            gdjs.TestCode.GDPlayerObjects1_1final.push(gdjs.TestCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.TestCode.GDPlayerObjects1_1final, gdjs.TestCode.GDPlayerObjects1);
}
}
}if ( gdjs.TestCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects1[i].hasAnimationEnded() ) {
        gdjs.TestCode.condition1IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects1[k] = gdjs.TestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects1.length = k;}}
if (gdjs.TestCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].returnVariable(gdjs.TestCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(120);
}
}}

}


{


{
}

}


{


gdjs.TestCode.eventsList6(runtimeScene);
}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Necromancer"), gdjs.TestCode.GDNecromancerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("necromancer_pro"), gdjs.TestCode.GDnecromancer_95proObjects1);
{for(var i = 0, len = gdjs.TestCode.GDNecromancerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDNecromancerObjects1[i].getBehavior("FireBullet").Fire((gdjs.TestCode.GDNecromancerObjects1[i].getPointX("")), (gdjs.TestCode.GDNecromancerObjects1[i].getPointY("")), gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDnecromancer_9595proObjects1Objects, (( gdjs.TestCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestCode.GDPlayerObjects1[0].getAnimationFrame()), 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Necromancer_left"), gdjs.TestCode.GDNecromancer_95leftObjects1);
gdjs.copyArray(runtimeScene.getObjects("necromancer_pro"), gdjs.TestCode.GDnecromancer_95proObjects1);
{for(var i = 0, len = gdjs.TestCode.GDNecromancer_95leftObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDNecromancer_95leftObjects1[i].getBehavior("FireBullet").Fire((gdjs.TestCode.GDNecromancer_95leftObjects1[i].getPointX("")), (gdjs.TestCode.GDNecromancer_95leftObjects1[i].getPointY("")), gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDnecromancer_9595proObjects1Objects, 180, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Necromancer_left"), gdjs.TestCode.GDNecromancer_95leftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
gdjs.TestCode.condition1IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects, gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDNecromancer_9595leftObjects1Objects, false, runtimeScene, false);
}if ( gdjs.TestCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects1[i].getVariableNumber(gdjs.TestCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.TestCode.condition1IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects1[k] = gdjs.TestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects1.length = k;}}
if (gdjs.TestCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDNecromancer_95leftObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDNecromancer_95leftObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDNecromancer_95leftObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Necromancer"), gdjs.TestCode.GDNecromancerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
gdjs.TestCode.condition1IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects, gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDNecromancerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.TestCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects1[i].getVariableNumber(gdjs.TestCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.TestCode.condition1IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects1[k] = gdjs.TestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects1.length = k;}}
if (gdjs.TestCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDNecromancerObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDNecromancerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDNecromancerObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.TestCode.GDNecromancerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDNecromancerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("necromancer_pro"), gdjs.TestCode.GDnecromancer_95proObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDnecromancer_9595proObjects1Objects, gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CheckpointX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CheckpointY")));
}
}}

}


{


gdjs.TestCode.eventsList7(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Chest_checkpoint"), gdjs.TestCode.GDChest_95checkpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects, gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDChest_9595checkpointObjects1Objects, false, runtimeScene, false);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDChest_95checkpointObjects1 */
{runtimeScene.getScene().getVariables().get("CheckpointX").setNumber((( gdjs.TestCode.GDChest_95checkpointObjects1.length === 0 ) ? 0 :gdjs.TestCode.GDChest_95checkpointObjects1[0].getPointX("")));
}{runtimeScene.getScene().getVariables().get("CheckpointX").setNumber((( gdjs.TestCode.GDChest_95checkpointObjects1.length === 0 ) ? 0 :gdjs.TestCode.GDChest_95checkpointObjects1[0].getPointY("")));
}}

}


{


gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
{runtimeScene.getScene().getVariables().get("CheckpointX").setNumber((( gdjs.TestCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestCode.GDPlayerObjects1[0].getPointX("")));
}{runtimeScene.getScene().getVariables().get("CheckpointX").setNumber((( gdjs.TestCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TestCode.GDPlayerObjects1[0].getPointY("")));
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


gdjs.TestCode.eventsList8(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Floor2"), gdjs.TestCode.GDFloor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
gdjs.TestCode.condition1IsTrue_0.val = false;
gdjs.TestCode.condition2IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") >= 10;
}if ( gdjs.TestCode.condition0IsTrue_0.val ) {
{
gdjs.TestCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDFloor2Objects1Objects, gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.TestCode.condition1IsTrue_0.val ) {
{
gdjs.TestCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}}
}
if (gdjs.TestCode.condition2IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDFloor2Objects1 */
{for(var i = 0, len = gdjs.TestCode.GDFloor2Objects1.length ;i < len;++i) {
    gdjs.TestCode.GDFloor2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.TestCode.eventsList9(runtimeScene);
}


{


gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.TestCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.TestCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDNewObjectObjects1[i].setString("0" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Timer")));
}
}}

}


{


gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") >= 90;
}if (gdjs.TestCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


{


{
}

}


{


gdjs.TestCode.eventsList10(runtimeScene);
}


{


gdjs.TestCode.condition0IsTrue_0.val = false;
gdjs.TestCode.condition1IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") >= 1;
}if ( gdjs.TestCode.condition0IsTrue_0.val ) {
{
gdjs.TestCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}}
if (gdjs.TestCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Quit");
}}

}


{


gdjs.TestCode.eventsList11(runtimeScene);
}


{


gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "My Song 4.wav", true, 50, 1);
}}

}


{


gdjs.TestCode.eventsList12(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.TestCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
gdjs.TestCode.condition1IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects, gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDDoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.TestCode.condition0IsTrue_0.val ) {
{
gdjs.TestCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}}
if (gdjs.TestCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Thanks", false);
}}

}


{


gdjs.TestCode.eventsList13(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Ladder"), gdjs.TestCode.GDLadderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects, gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDLadderObjects1Objects, false, runtimeScene, false);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}
{ //Subevents
gdjs.TestCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


gdjs.TestCode.eventsList15(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Mimic"), gdjs.TestCode.GDMimicObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TestCode.GDMimicObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDMimicObjects1[i].addForceTowardObject((gdjs.TestCode.GDPlayerObjects1.length !== 0 ? gdjs.TestCode.GDPlayerObjects1[0] : null), 60, 0);
}
}}

}


};

gdjs.TestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestCode.GDWallObjects1.length = 0;
gdjs.TestCode.GDWallObjects2.length = 0;
gdjs.TestCode.GDWallObjects3.length = 0;
gdjs.TestCode.GDSkeletObjects1.length = 0;
gdjs.TestCode.GDSkeletObjects2.length = 0;
gdjs.TestCode.GDSkeletObjects3.length = 0;
gdjs.TestCode.GDPlayerObjects1.length = 0;
gdjs.TestCode.GDPlayerObjects2.length = 0;
gdjs.TestCode.GDPlayerObjects3.length = 0;
gdjs.TestCode.GDKnightSwordObjects1.length = 0;
gdjs.TestCode.GDKnightSwordObjects2.length = 0;
gdjs.TestCode.GDKnightSwordObjects3.length = 0;
gdjs.TestCode.GDNecromancer_95leftObjects1.length = 0;
gdjs.TestCode.GDNecromancer_95leftObjects2.length = 0;
gdjs.TestCode.GDNecromancer_95leftObjects3.length = 0;
gdjs.TestCode.GDNecromancerObjects1.length = 0;
gdjs.TestCode.GDNecromancerObjects2.length = 0;
gdjs.TestCode.GDNecromancerObjects3.length = 0;
gdjs.TestCode.GDWallBannerGreenObjects1.length = 0;
gdjs.TestCode.GDWallBannerGreenObjects2.length = 0;
gdjs.TestCode.GDWallBannerGreenObjects3.length = 0;
gdjs.TestCode.GDWallGooObjects1.length = 0;
gdjs.TestCode.GDWallGooObjects2.length = 0;
gdjs.TestCode.GDWallGooObjects3.length = 0;
gdjs.TestCode.GDWall2Objects1.length = 0;
gdjs.TestCode.GDWall2Objects2.length = 0;
gdjs.TestCode.GDWall2Objects3.length = 0;
gdjs.TestCode.GDTiledGooObjects1.length = 0;
gdjs.TestCode.GDTiledGooObjects2.length = 0;
gdjs.TestCode.GDTiledGooObjects3.length = 0;
gdjs.TestCode.GDFloor2Objects1.length = 0;
gdjs.TestCode.GDFloor2Objects2.length = 0;
gdjs.TestCode.GDFloor2Objects3.length = 0;
gdjs.TestCode.GDFloorObjects1.length = 0;
gdjs.TestCode.GDFloorObjects2.length = 0;
gdjs.TestCode.GDFloorObjects3.length = 0;
gdjs.TestCode.GDChest_95checkpointObjects1.length = 0;
gdjs.TestCode.GDChest_95checkpointObjects2.length = 0;
gdjs.TestCode.GDChest_95checkpointObjects3.length = 0;
gdjs.TestCode.GDChestObjects1.length = 0;
gdjs.TestCode.GDChestObjects2.length = 0;
gdjs.TestCode.GDChestObjects3.length = 0;
gdjs.TestCode.GDCrateObjects1.length = 0;
gdjs.TestCode.GDCrateObjects2.length = 0;
gdjs.TestCode.GDCrateObjects3.length = 0;
gdjs.TestCode.GDGreenMagicStaffObjects1.length = 0;
gdjs.TestCode.GDGreenMagicStaffObjects2.length = 0;
gdjs.TestCode.GDGreenMagicStaffObjects3.length = 0;
gdjs.TestCode.GDnecromancer_95proObjects1.length = 0;
gdjs.TestCode.GDnecromancer_95proObjects2.length = 0;
gdjs.TestCode.GDnecromancer_95proObjects3.length = 0;
gdjs.TestCode.GDenemy_95deadObjects1.length = 0;
gdjs.TestCode.GDenemy_95deadObjects2.length = 0;
gdjs.TestCode.GDenemy_95deadObjects3.length = 0;
gdjs.TestCode.GDDoorObjects1.length = 0;
gdjs.TestCode.GDDoorObjects2.length = 0;
gdjs.TestCode.GDDoorObjects3.length = 0;
gdjs.TestCode.GDUiHeartObjects1.length = 0;
gdjs.TestCode.GDUiHeartObjects2.length = 0;
gdjs.TestCode.GDUiHeartObjects3.length = 0;
gdjs.TestCode.GDNewObjectObjects1.length = 0;
gdjs.TestCode.GDNewObjectObjects2.length = 0;
gdjs.TestCode.GDNewObjectObjects3.length = 0;
gdjs.TestCode.GDNewObject2Objects1.length = 0;
gdjs.TestCode.GDNewObject2Objects2.length = 0;
gdjs.TestCode.GDNewObject2Objects3.length = 0;
gdjs.TestCode.GDTiled_95FloorObjects1.length = 0;
gdjs.TestCode.GDTiled_95FloorObjects2.length = 0;
gdjs.TestCode.GDTiled_95FloorObjects3.length = 0;
gdjs.TestCode.GDLadderObjects1.length = 0;
gdjs.TestCode.GDLadderObjects2.length = 0;
gdjs.TestCode.GDLadderObjects3.length = 0;
gdjs.TestCode.GDLadderSpriteObjects1.length = 0;
gdjs.TestCode.GDLadderSpriteObjects2.length = 0;
gdjs.TestCode.GDLadderSpriteObjects3.length = 0;
gdjs.TestCode.GDMimicObjects1.length = 0;
gdjs.TestCode.GDMimicObjects2.length = 0;
gdjs.TestCode.GDMimicObjects3.length = 0;

gdjs.TestCode.eventsList16(runtimeScene);

return;

}

gdjs['TestCode'] = gdjs.TestCode;
