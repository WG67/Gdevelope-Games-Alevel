var gdjs;(function(r){class i extends r.RuntimeObject{constructor(e,t){super(e,t);this._xOffset=0;this._yOffset=0;this.opacity=255;this._renderer=new r.TiledSpriteRuntimeObjectRenderer(this,e,t.texture),this._width=0,this._height=0,this.setWidth(t.width),this.setHeight(t.height),this.onCreated()}updateFromObjectData(e,t){return e.texture!==t.texture&&this.setTexture(t.texture,this._runtimeScene),e.width!==t.width&&this.setWidth(t.width),e.height!==t.height&&this.setHeight(t.height),!0}getRendererObject(){return this._renderer.getRendererObject()}onDestroyFromScene(e){super.onDestroyFromScene(e),this._renderer.onDestroy&&this._renderer.onDestroy()}extraInitializationFromInitialInstance(e){e.customSize&&(this.setWidth(e.width),this.setHeight(e.height))}setX(e){super.setX(e),this._renderer.updatePosition()}setY(e){super.setY(e),this._renderer.updatePosition()}setTexture(e,t){this._renderer.setTexture(e,t)}setAngle(e){super.setAngle(e),this._renderer.updateAngle()}getWidth(){return this._width}getHeight(){return this._height}setWidth(e){this._width!==e&&(this._width=e,this._renderer.setWidth(e),this.hitBoxesDirty=!0)}setHeight(e){this._height!==e&&(this._height=e,this._renderer.setHeight(e),this.hitBoxesDirty=!0)}setXOffset(e){this._xOffset=e,this._renderer.updateXOffset()}setYOffset(e){this._yOffset=e,this._renderer.updateYOffset()}getXOffset(){return this._xOffset}getYOffset(){return this._yOffset}setOpacity(e){e<0&&(e=0),e>255&&(e=255),this.opacity=e,this._renderer.updateOpacity()}getOpacity(){return this.opacity}setColor(e){this._renderer.setColor(e)}getColor(){return this._renderer.getColor()}getScale(){return(this.getScaleX()+this.getScaleY())/2}getScaleX(){return this._width/this._renderer.getTextureWidth()}getScaleY(){return this._height/this._renderer.getTextureHeight()}setScale(e){this.setWidth(this._renderer.getTextureWidth()*e),this.setHeight(this._renderer.getTextureHeight()*e)}setScaleX(e){this.setWidth(this._renderer.getTextureWidth()*e)}setScaleY(e){this.setHeight(this._renderer.getTextureHeight()*e)}}r.TiledSpriteRuntimeObject=i,r.registerObject("TiledSpriteObject::TiledSprite",r.TiledSpriteRuntimeObject)})(gdjs||(gdjs={}));
//# sourceMappingURL=tiledspriteruntimeobject.js.map