var gdjs;(function(s){class g{constructor(t,i){this.center={x:0,y:0};this.origin={x:0,y:0};this.hasCustomHitBoxes=!1;this.customHitBoxes=[];this.image=i?i.image:"",this.texture=s.SpriteRuntimeObjectRenderer.getAnimationFrame(t,this.image),this.points=new Hashtable,this.reinitialize(t,i)}reinitialize(t,i){this.points.clear();for(let n=0,o=i.points.length;n<o;++n){const h=i.points[n],a={x:h.x,y:h.y};this.points.put(h.name,a)}const e=i.originPoint;this.origin.x=e.x,this.origin.y=e.y;const r=i.centerPoint;if(r.automatic!==!0?(this.center.x=r.x,this.center.y=r.y):(this.center.x=s.SpriteRuntimeObjectRenderer.getAnimationFrameWidth(this.texture)/2,this.center.y=s.SpriteRuntimeObjectRenderer.getAnimationFrameHeight(this.texture)/2),i.hasCustomCollisionMask){this.hasCustomHitBoxes=!0;let n=0;for(let o=i.customCollisionMask.length;n<o;++n){const h=i.customCollisionMask[n];n>=this.customHitBoxes.length&&this.customHitBoxes.push(new s.Polygon);let a=0;for(const u=h.length;a<u;++a){const l=h[a];a>=this.customHitBoxes[n].vertices.length&&this.customHitBoxes[n].vertices.push([0,0]),this.customHitBoxes[n].vertices[a][0]=l.x,this.customHitBoxes[n].vertices[a][1]=l.y}this.customHitBoxes[n].vertices.length=a}this.customHitBoxes.length=n}else this.customHitBoxes.length=0}getPoint(t){return t==="Centre"||t==="Center"?this.center:t==="Origin"?this.origin:this.points.containsKey(t)?this.points.get(t):this.origin}}s.SpriteAnimationFrame=g;class f{constructor(t,i){this.frames=[];this.timeBetweenFrames=i?i.timeBetweenFrames:1,this.loop=!!i.looping,this.reinitialize(t,i)}reinitialize(t,i){this.timeBetweenFrames=i?i.timeBetweenFrames:1,this.loop=!!i.looping;let e=0;for(const r=i.sprites.length;e<r;++e){const n=i.sprites[e];e<this.frames.length?this.frames[e].reinitialize(t,n):this.frames.push(new s.SpriteAnimationFrame(t,n))}this.frames.length=e}}s.SpriteAnimationDirection=f;class F{constructor(t,i){this.directions=[];this.hasMultipleDirections=!!i.useMultipleDirections,this.name=i.name||"",this.reinitialize(t,i)}reinitialize(t,i){this.hasMultipleDirections=!!i.useMultipleDirections,this.name=i.name||"";let e=0;for(const r=i.directions.length;e<r;++e){const n=i.directions[e];e<this.directions.length?this.directions[e].reinitialize(t,n):this.directions.push(new s.SpriteAnimationDirection(t,n))}this.directions.length=e}}s.SpriteAnimation=F;class m extends s.RuntimeObject{constructor(t,i){super(t,i);this._currentAnimation=0;this._currentDirection=0;this._currentFrame=0;this._frameElapsedTime=0;this._animationSpeedScale=1;this._animationPaused=!1;this._scaleX=1;this._scaleY=1;this._blendMode=0;this._flippedX=!1;this._flippedY=!1;this.opacity=255;this._animations=[];this._animationFrame=null;this._animationFrameDirty=!0;this._updateIfNotVisible=!!i.updateIfNotVisible;for(let e=0,r=i.animations.length;e<r;++e)this._animations.push(new s.SpriteAnimation(t.getGame().getImageManager(),i.animations[e]));this._renderer=new s.SpriteRuntimeObjectRenderer(this,t),this._updateAnimationFrame(),this.onCreated()}reinitialize(t){super.reinitialize(t);const i=this.getInstanceContainer();this._currentAnimation=0,this._currentDirection=0,this._currentFrame=0,this._frameElapsedTime=0,this._animationSpeedScale=1,this._animationPaused=!1,this._scaleX=1,this._scaleY=1,this._blendMode=0,this._flippedX=!1,this._flippedY=!1,this.opacity=255,this._updateIfNotVisible=!!t.updateIfNotVisible;let e=0;for(const r=t.animations.length;e<r;++e){const n=t.animations[e];e<this._animations.length?this._animations[e].reinitialize(i.getGame().getImageManager(),n):this._animations.push(new s.SpriteAnimation(i.getGame().getImageManager(),n))}this._animations.length=e,this._animationFrame=null,this._renderer.reinitialize(this,i),this._updateAnimationFrame(),this.onCreated()}updateFromObjectData(t,i){const e=this.getInstanceContainer();let r=0;for(const n=i.animations.length;r<n;++r){const o=i.animations[r];r<this._animations.length?this._animations[r].reinitialize(e.getGame().getImageManager(),o):this._animations.push(new s.SpriteAnimation(e.getGame().getImageManager(),o))}return this._animations.length=r,this._updateAnimationFrame(),this._animationFrame||this.setAnimation(0),this.invalidateHitboxes(),!0}extraInitializationFromInitialInstance(t){if(t.numberProperties)for(let i=0,e=t.numberProperties.length;i<e;++i){const r=t.numberProperties[i];r.name==="animation"&&this.setAnimation(r.value)}t.customSize&&(this.setWidth(t.width),this.setHeight(t.height))}update(t){if(!this._updateIfNotVisible&&!this._renderer.getRendererObject().visible||this._currentAnimation>=this._animations.length||this._currentDirection>=this._animations[this._currentAnimation].directions.length)return;const i=this._animations[this._currentAnimation].directions[this._currentDirection],e=this._currentFrame,r=this.getElapsedTime()/1e3;if(this._frameElapsedTime+=this._animationPaused?0:r*this._animationSpeedScale,!(!i.loop&&this._currentFrame>=i.frames.length-1&&this._frameElapsedTime>i.timeBetweenFrames)){if(this._frameElapsedTime>i.timeBetweenFrames){const n=Math.floor(this._frameElapsedTime/i.timeBetweenFrames);this._currentFrame+=n,this._frameElapsedTime=this._frameElapsedTime-n*i.timeBetweenFrames,this._frameElapsedTime<0&&(this._frameElapsedTime=0)}this._currentFrame>=i.frames.length&&(this._currentFrame=i.loop?this._currentFrame%i.frames.length:i.frames.length-1),this._currentFrame<0&&(this._currentFrame=0)}(e!==this._currentFrame||this._animationFrameDirty)&&this._updateAnimationFrame(),e!==this._currentFrame&&this.invalidateHitboxes(),this._renderer.ensureUpToDate()}updatePreRender(t){this._animationFrameDirty&&this._updateAnimationFrame(),this._renderer.ensureUpToDate()}_updateAnimationFrame(){if(this._animationFrameDirty=!1,this._currentAnimation<this._animations.length&&this._currentDirection<this._animations[this._currentAnimation].directions.length){const t=this._animations[this._currentAnimation].directions[this._currentDirection];if(this._currentFrame<t.frames.length){this._animationFrame=t.frames[this._currentFrame],this._animationFrame!==null&&this._renderer.updateFrame(this._animationFrame);return}}this._animationFrame=null}getRendererObject(){return this._renderer.getRendererObject()}updateHitBoxes(){if(this._animationFrameDirty&&this._updateAnimationFrame(),this._animationFrame!==null){if(!this._animationFrame.hasCustomHitBoxes)return super.updateHitBoxes();for(let t=0;t<this._animationFrame.customHitBoxes.length;++t){t>=this.hitBoxes.length&&this.hitBoxes.push(new s.Polygon);for(let i=0;i<this._animationFrame.customHitBoxes[t].vertices.length;++i)i>=this.hitBoxes[t].vertices.length&&this.hitBoxes[t].vertices.push([0,0]),this._transformToGlobal(this._animationFrame.customHitBoxes[t].vertices[i][0],this._animationFrame.customHitBoxes[t].vertices[i][1],this.hitBoxes[t].vertices[i]);this.hitBoxes[t].vertices.length=this._animationFrame.customHitBoxes[t].vertices.length}this.hitBoxes.length=this._animationFrame.customHitBoxes.length}}setAnimation(t){t=t|0,t<this._animations.length&&this._currentAnimation!==t&&t>=0&&(this._currentAnimation=t,this._currentFrame=0,this._frameElapsedTime=0,this._renderer.update(),this._animationFrameDirty=!0,this.invalidateHitboxes())}setAnimationName(t){if(!!t){for(let i=0;i<this._animations.length;++i)if(this._animations[i].name===t)return this.setAnimation(i)}}getAnimation(){return this._currentAnimation}getAnimationName(){return this._currentAnimation>=this._animations.length?"":this._animations[this._currentAnimation].name}isCurrentAnimationName(t){return this.getAnimationName()===t}setDirectionOrAngle(t){if(this._currentAnimation>=this._animations.length)return;const i=this._animations[this._currentAnimation];if(i.hasMultipleDirections){if(t=t|0,t===this._currentDirection||t>=i.directions.length||i.directions[t].frames.length===0)return;this._currentDirection=t,this._currentFrame=0,this._frameElapsedTime=0,this.angle=0,this._renderer.update(),this._animationFrameDirty=!0,this.invalidateHitboxes()}else{if(this.angle===t)return;this.angle=t,this.invalidateHitboxes(),this._renderer.updateAngle()}}getDirectionOrAngle(){return this._currentAnimation>=this._animations.length?0:this._animations[this._currentAnimation].hasMultipleDirections?this._currentDirection:this.angle}setAnimationFrame(t){if(this._currentAnimation>=this._animations.length||this._currentDirection>=this._animations[this._currentAnimation].directions.length)return;const i=this._animations[this._currentAnimation].directions[this._currentDirection];t>=0&&t<i.frames.length&&t!==this._currentFrame&&(this._currentFrame=t,this._frameElapsedTime=0,this._animationFrameDirty=!0,this.invalidateHitboxes())}getAnimationFrame(){return this._currentFrame}getAnimationFrameCount(){if(this._currentAnimation>=this._animations.length)return 0;const t=this._animations[this._currentAnimation];return this._currentDirection>=t.directions.length?0:t.directions[this._currentDirection].frames.length}hasAnimationEnded(){if(this._currentAnimation>=this._animations.length||this._currentDirection>=this._animations[this._currentAnimation].directions.length)return!0;const t=this._animations[this._currentAnimation].directions[this._currentDirection];return t.loop?!1:this._currentFrame===t.frames.length-1}hasAnimationEnded2(){if(this._currentAnimation>=this._animations.length||this._currentDirection>=this._animations[this._currentAnimation].directions.length)return!0;const t=this._animations[this._currentAnimation].directions[this._currentDirection];return t.loop?!1:this._currentFrame===t.frames.length-1&&this._frameElapsedTime>t.timeBetweenFrames}animationPaused(){return this._animationPaused}pauseAnimation(){this._animationPaused=!0}playAnimation(){this._animationPaused=!1}getAnimationSpeedScale(){return this._animationSpeedScale}setAnimationSpeedScale(t){this._animationSpeedScale=t}getPointX(t){if(this._animationFrameDirty&&this._updateAnimationFrame(),t.length===0||this._animationFrame===null)return this.getX();const i=this._animationFrame.getPoint(t),e=s.staticArray(m.prototype.getPointX);return this._transformToGlobal(i.x,i.y,e),e[0]}getPointY(t){if(this._animationFrameDirty&&this._updateAnimationFrame(),t.length===0||this._animationFrame===null)return this.getY();const i=this._animationFrame.getPoint(t),e=s.staticArray(m.prototype.getPointY);return this._transformToGlobal(i.x,i.y,e),e[1]}getPointPosition(t){if(this._animationFrameDirty&&this._updateAnimationFrame(),t.length===0||this._animationFrame===null)return[this.getX(),this.getY()];const i=this._animationFrame.getPoint(t),e=s.staticArray(m.prototype.getPointX);return this._transformToGlobal(i.x,i.y,e),[e[0],e[1]]}_transformToGlobal(t,i,e){const r=this._animationFrame;let n=r.center.x,o=r.center.y;this._flippedX&&(t=t+(n-t)*2),this._flippedY&&(i=i+(o-i)*2);const h=Math.abs(this._scaleX),a=Math.abs(this._scaleY);t*=h,i*=a,n*=h,o*=a;const u=this.angle/180*Math.PI,l=Math.cos(u),_=Math.sin(u),d=t-n,p=i-o;t=n+l*d-_*p,i=o+_*d+l*p,e.length=2,e[0]=t+(this.x-r.origin.x*h),e[1]=i+(this.y-r.origin.y*a)}getDrawableX(){if(this._animationFrame===null)return this.x;const t=Math.abs(this._scaleX);return this._flippedX?this.x+(-this._animationFrame.origin.x-this._renderer.getUnscaledWidth()+2*this._animationFrame.center.x)*t:this.x-this._animationFrame.origin.x*t}getDrawableY(){if(this._animationFrame===null)return this.y;const t=Math.abs(this._scaleY);return this._flippedY?this.y+(-this._animationFrame.origin.y-this._renderer.getUnscaledHeight()+2*this._animationFrame.center.y)*t:this.y-this._animationFrame.origin.y*t}getCenterX(){return this._animationFrameDirty&&this._updateAnimationFrame(),this._animationFrame===null?0:this._flippedX?(this._renderer.getUnscaledWidth()-this._animationFrame.center.x)*Math.abs(this._scaleX):this._animationFrame.center.x*Math.abs(this._scaleX)}getCenterY(){return this._animationFrameDirty&&this._updateAnimationFrame(),this._animationFrame===null?0:this._flippedY?(this._renderer.getUnscaledHeight()-this._animationFrame.center.y)*Math.abs(this._scaleY):this._animationFrame.center.y*Math.abs(this._scaleY)}setX(t){t!==this.x&&(this.x=t,this._animationFrame!==null&&(this.invalidateHitboxes(),this._renderer.updateX()))}setY(t){t!==this.y&&(this.y=t,this._animationFrame!==null&&(this.invalidateHitboxes(),this._renderer.updateY()))}setAngle(t){if(!(this._currentAnimation>=this._animations.length))if(this._animations[this._currentAnimation].hasMultipleDirections)t=t%360,t<0&&(t+=360),this.setDirectionOrAngle(Math.round(t/45)%8);else{if(this.angle===t)return;this.angle=t,this._renderer.updateAngle(),this.invalidateHitboxes()}}getAngle(){return this._currentAnimation>=this._animations.length?0:this._animations[this._currentAnimation].hasMultipleDirections?this._currentDirection*45:this.angle}setBlendMode(t){this._blendMode!==t&&(this._blendMode=t,this._renderer.update())}getBlendMode(){return this._blendMode}setOpacity(t){t<0&&(t=0),t>255&&(t=255),this.opacity=t,this._renderer.updateOpacity()}getOpacity(){return this.opacity}hide(t){t===void 0&&(t=!0),this.hidden=t,this._renderer.updateVisibility()}setColor(t){this._renderer.setColor(t)}getColor(){return this._renderer.getColor()}flipX(t){t!==this._flippedX&&(this._scaleX*=-1,this._flippedX=t,this.invalidateHitboxes(),this._renderer.update())}flipY(t){t!==this._flippedY&&(this._scaleY*=-1,this._flippedY=t,this.invalidateHitboxes(),this._renderer.update())}isFlippedX(){return this._flippedX}isFlippedY(){return this._flippedY}getWidth(){return this._animationFrameDirty&&this._updateAnimationFrame(),this._renderer.getWidth()}getHeight(){return this._animationFrameDirty&&this._updateAnimationFrame(),this._renderer.getHeight()}setWidth(t){this._animationFrameDirty&&this._updateAnimationFrame();const i=this._renderer.getUnscaledWidth();i!==0&&this.setScaleX(t/i)}setHeight(t){this._animationFrameDirty&&this._updateAnimationFrame();const i=this._renderer.getUnscaledHeight();i!==0&&this.setScaleY(t/i)}setSize(t,i){this.setWidth(t),this.setHeight(i)}setScale(t){t<0&&(t=0),!(t===Math.abs(this._scaleX)&&t===Math.abs(this._scaleY))&&(this._scaleX=t*(this._flippedX?-1:1),this._scaleY=t*(this._flippedY?-1:1),this._renderer.update(),this.invalidateHitboxes())}setScaleX(t){t<0&&(t=0),t!==Math.abs(this._scaleX)&&(this._scaleX=t*(this._flippedX?-1:1),this._renderer.update(),this.invalidateHitboxes())}setScaleY(t){t<0&&(t=0),t!==Math.abs(this._scaleY)&&(this._scaleY=t*(this._flippedY?-1:1),this._renderer.update(),this.invalidateHitboxes())}getScale(){return(Math.abs(this._scaleX)+Math.abs(this._scaleY))/2}getScaleY(){return Math.abs(this._scaleY)}getScaleX(){return Math.abs(this._scaleX)}turnTowardObject(t,i){t!==null&&this.rotateTowardPosition(t.getDrawableX()+t.getCenterX(),t.getDrawableY()+t.getCenterY(),0,i)}}s.SpriteRuntimeObject=m,s.registerObject("Sprite",s.SpriteRuntimeObject),m.supportsReinitialization=!0})(gdjs||(gdjs={}));
//# sourceMappingURL=spriteruntimeobject.js.map
