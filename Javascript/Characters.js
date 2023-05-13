//animation constructor
function animation(name, entity, numframes, OffsetY) {
  this.miliseconds = 0;

  this.timer;

  this.name = name;

  this.value = false;

  this.stop = false;

  this.times = 0;

  this.numframes = numframes;

  this.currentFrame = 0;

  //time between frames
  this.frametime = 100;

  this.flip = false;

  this.reverseOffsetY = OffsetY + 9;

  //updates animation
  this.updateAnimation = function(){
    this.timer = new Date(Date.now());
    if(this.value && this.timer - this.miliseconds > this.frametime && !this.stop){
      this.miliseconds = this.timer;
      //offsetX = image width * current frame
      this.xOffset = entity.W * this.currentFrame;

      //offsetY = image height * Y offset
      if(this.flip) this.yOffset = entity.H * this.reverseOffsetY;
      else this.yOffset = entity.H * OffsetY;

      this.currentFrame++;
      if(this.currentFrame >= this.numframes){
        this.currentFrame = 0;
        this.times++;
      }
    }
  }
}

//entity constructor
function Entity(IMAGE) {
  this.health = 100;

  this.X = 0;
  this.Y = 250;

  this.VX = 0;
  this.VY = 0;

  this.W = 121;
  this.H = 120;

  //saves current animation
  this.currentAnim = this.idle;

  //the hitbox size is different to the animation size
  this.borderX = 40;
  this.borderY = 30;

  //for smooth movement
  this.moveleft;
  this.moveright;

  //for bounds
  this.canMoveDown = true;
  this.canMoveLeft = true;
  this.canMoveRight = true;

  //Getters to define the moveleft, moveright, top and bottom sides
  this.left = function() { return this.X; };
  this.right = function() { return (this.X + (this.W-this.borderX) * scale); };
  this.top = function() { return this.Y + this.borderY * scale; };
  this.bottom = function() { return (this.Y + this.H * scale); };

  this.midX = function() { return this.X + this.W/2; };
  this.midY = function() { return this.Y + this.H/2; };

  //Set image
  this.IMAGE = IMAGE;
  this.drawImage;

  this.setAnimations = function() {
    if (this.health <= 0) this.die.value = true;
    if (this.die.times > 0) this.die.stop = true;
    if (this.win.times > 0) this.win.stop = true;

    if (this.win.value) this.currentAnim = this.win;
    else if (this.die.value) this.currentAnim = this.die;
    else if (this.gethit.value) this.currentAnim = this.gethit;
    else if (this.jump.value) this.currentAnim = this.jump;
    else if (this.kick.value) this.currentAnim = this.kick;
    else if (this.punch.value) this.currentAnim = this.punch;
    else if (this.move.value) this.currentAnim = this.move;
    else if (this.crouch.value) this.currentAnim = this.crouch;
    else {
      this.idle.value = true;
      this.currentAnim = this.idle;
    }
  }

  //animations
  this.idle = 0;
  this.move;
  this.jump;
  this.crouch;
  this.punch;
  this.kick;
  this.gethit;
  this.die;
  this.win;
}

//character animation stuff
//Cammy
function Cammy() {
  this.object = new Entity("Assets/Sprite Sheets/cammy.png");
  this.object.idle    = new animation("idle", this.object, 5, 0);
  this.object.move    = new animation("move", this.object, 6, 1);
  this.object.jump    = new animation("jump", this.object, 5, 2);
  this.object.crouch  = new animation("crouch", this.object, 1, 3);
  this.object.punch   = new animation("punch",this.object, 5, 4);
  this.object.kick    = new animation("kick",this.object, 5, 5);
  this.object.gethit  = new animation("gethit", this.object, 4, 6);
  this.object.die     = new animation("die", this.object, 5, 7);
  this.object.win     = new animation("win", this.object, 5, 8);
}

//Chun Li
function ChunLi(){
   this.object = new Entity("Assets/Sprite Sheets/chunli.png");
   this.object.idle   = new animation("idle", this.object, 4, 0);
   this.object.move   = new animation("move", this.object, 8, 1);
   this.object.jump   = new animation("jump", this.object, 4, 2);
   this.object.crouch = new animation("crouch", this.object, 1, 3);
   this.object.punch  = new animation("punch",this.object, 3, 4);
   this.object.kick   = new animation("kick",this.object, 7, 5);
   this.object.gethit = new animation("gethit", this.object, 2, 6);
   this.object.die    = new animation("die", this.object, 4, 7);
   this.object.win    = new animation("win", this.object, 3, 8);
}

//Ken
function Ken(){
  this.object = new Entity("Assets/Sprite Sheets/ken.png");
  this.object.idle    = new animation("idle", this.object, 4, 0);
  this.object.move    = new animation("move", this.object, 5, 1);
  this.object.jump    = new animation("jump", this.object, 5, 2);
  this.object.crouch  = new animation("crouch", this.object, 1, 3);
  this.object.punch   = new animation("punch",this.object, 5, 4);
  this.object.kick    = new animation("kick",this.object, 5, 5);
  this.object.gethit  = new animation("gethit", this.object, 4, 6);
  this.object.die     = new animation("die", this.object, 5, 7);
  this.object.win     = new animation("win", this.object, 3, 8);
}

//Ryu
function Ryu() {
  this.object = new Entity("Assets/Sprite Sheets/ryu.png");
  this.object.idle    = new animation("idle", this.object, 4, 0);
  this.object.move    = new animation("move", this.object, 5, 1);
  this.object.jump    = new animation("jump", this.object, 5, 2);
  this.object.crouch  = new animation("crouch", this.object, 1, 3);
  this.object.punch   = new animation("punch",this.object, 5, 4);
  this.object.kick    = new animation("kick",this.object, 5, 5);
  this.object.gethit  = new animation("gethit", this.object, 4, 6);
  this.object.die     = new animation("die", this.object, 5, 7);
  this.object.win     = new animation("win", this.object, 3, 8);
}
