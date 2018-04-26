function animation(entity, numframes, yOffset) {
  this.currentFrame = 0;

  //updates animation
  this.updateAnimation = function(animation){
    //offsetX = image width * current frame + animation type's x offset(unused) * image size
    this.xOffset = entity.W * this.currentFrame;
    //offsetY = image height * animation type's Y offset
    this.yOffset = entity.H * yOffset;
    //displays stats
    console.log("Current frame number: " + this.currentFrame)
    console.log("Total frames: " + this.numframes);
    console.log("Animation y offset: " + this.yOffset);

    this.currentFrame++;
    if(this.currentFrame >= this.numframes){
      this.currentFrame = 0;
    }
  }
}

//entity constructor
function Entity(IMAGE) {
  this.X = 0;
  this.Y = 0;

  this.VX = 0;
  this.VY = 0;

  this.W = 90;
  this.H = 120;

  //the hitbox size is different to the animation size
  this.borderX = 40;
  this.borderY = 30;

  this.flipX = false;

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
  this.midY = function() { return this.Y +this.H/2; };

  this.jump = function() {
  }

  //Set image
  this.IMAGE = IMAGE;
  this.drawImage;

  //animations
  this.facingRight = {
    idle:0,
    move:0,
    jump:0,
    crouch:0,
    punch:0,
    kick:0,
    gethit:0,
    die:0,
    win:0
  }
  this.facingLeft = {
    idle:0,
    move:0,
    jump:0,
    crouch:0,
    punch:0,
    kick:0,
    gethit:0,
    die:0,
    win:0
  }
}

//character stuff
var Cammy =  new Entity("Assets/Sprite Sheets/cammy.png");
Cammy.facingRight.idle    = new animation(Cammy, 5, 0);
Cammy.facingRight.move    = new animation(Cammy, 6, 1);
Cammy.facingRight.jump    = new animation(Cammy, 5, 2);
Cammy.facingRight.crouch  = new animation(Cammy, 1, 3);
Cammy.facingRight.punch   = new animation(Cammy, 5, 4);
Cammy.facingRight.kick    = new animation(Cammy, 5, 5);
Cammy.facingRight.gethit  = new animation(Cammy, 4, 6);
Cammy.facingRight.die     = new animation(Cammy, 5, 7);
Cammy.facingRight.win     = new animation(Cammy, 5, 8);

Cammy.facingLeft.idle    = new animation(Cammy, 5, 0);
Cammy.facingLeft.move    = new animation(Cammy, 6, 1);
Cammy.facingLeft.jump    = new animation(Cammy, 5, 2);
Cammy.facingLeft.crouch  = new animation(Cammy, 1, 3);
Cammy.facingLeft.punch   = new animation(Cammy, 5, 4);
Cammy.facingLeft.kick    = new animation(Cammy, 5, 5);
Cammy.facingLeft.gethit  = new animation(Cammy, 4, 6);
Cammy.facingLeft.die     = new animation(Cammy, 5, 7);
Cammy.facingLeft.win     = new animation(Cammy, 5, 8);

var ChunLi = new Entity("Assets/Sprite Sheets/chunli.png");
ChunLi.facingRight.idle = new animation(ChunLi, 4, 0);
ChunLi.facingRight.move = new animation(ChunLi, 8, 1);
ChunLi.facingRight.jump = new animation(ChunLi, 4, 2);
ChunLi.facingRight.crouch = new animation(ChunLi, 1, 3);
ChunLi.facingRight.punch = new animation(ChunLi, 3, 4);
ChunLi.facingRight.kick = new animation(ChunLi, 7, 5);
ChunLi.facingRight.gethit = new animation(ChunLi, 2, 6);
ChunLi.facingRight.die = new animation(ChunLi, 4, 7);
ChunLi.facingRight.win = new animation(ChunLi, 3, 8);

ChunLi.facingLeft.idle = new animation(ChunLi, 4, 0);
ChunLi.facingLeft.move = new animation(ChunLi, 8, 1);
ChunLi.facingLeft.jump = new animation(ChunLi, 4, 2);
ChunLi.facingLeft.crouch = new animation(ChunLi, 1, 3);
ChunLi.facingLeft.punch = new animation(ChunLi, 3, 4);
ChunLi.facingLeft.kick = new animation(ChunLi, 7, 5);
ChunLi.facingLeft.gethit = new animation(ChunLi, 2, 6);
ChunLi.facingLeft.die = new animation(ChunLi, 4, 7);
ChunLi.facingLeft.win = new animation(ChunLi, 3, 8);

var Ken = new Entity("Assets/Sprite Sheets/ken.png");
Ken.facingRight.idle = new animation(Ken, 4, 0);
Ken.facingRight.move = new animation(Ken, 5, 1);
Ken.facingRight.jump = new animation(Ken, 5, 2);
Ken.facingRight.crouch = new animation(Ken, 1, 3);
Ken.facingRight.punch = new animation(Ken, 5, 4);
Ken.facingRight.kick = new animation(Ken, 5, 5);
Ken.facingRight.gethit = new animation(Ken, 4, 6);
Ken.facingRight.die = new animation(Ken, 5, 7);
Ken.facingRight.win = new animation(Ken, 3, 8);

Ken.facingLeft.idle = new animation(Ken, 4, 0);
Ken.facingLeft.move = new animation(Ken, 5, 1);
Ken.facingLeft.jump = new animation(Ken, 5, 2);
Ken.facingLeft.crouch = new animation(Ken, 1, 3);
Ken.facingLeft.punch = new animation(Ken, 5, 4);
Ken.facingLeft.kick = new animation(Ken, 5, 5);
Ken.facingLeft.gethit = new animation(Ken, 4, 6);
Ken.facingLeft.die = new animation(Ken, 5, 7);
Ken.facingLeft.win = new animation(Ken, 3, 8);

var Ryu = new Entity("Assets/Sprite Sheets/ryu.png");
Ryu.facingRight.idle = new animation(Ryu, 4, 0);
Ryu.facingRight.move = new animation(Ryu, 5, 1);
Ryu.facingRight.jump = new animation(Ryu, 5, 2);
Ryu.facingRight.crouch = new animation(Ryu, 1, 3);
Ryu.facingRight.punch = new animation(Ryu, 5, 4);
Ryu.facingRight.kick = new animation(Ryu, 5, 5);
Ryu.facingRight.gethit = new animation(Ryu, 4, 6);
Ryu.facingRight.die = new animation(Ryu, 5, 7);
Ryu.facingRight.win = new animation(Ryu, 3, 8);

Ryu.facingLeft.idle = new animation(Ryu, 4, 0);
Ryu.facingLeft.move = new animation(Ryu, 5, 1);
Ryu.facingLeft.jump = new animation(Ryu, 5, 2);
Ryu.facingLeft.crouch = new animation(Ryu, 1, 3);
Ryu.facingLeft.punch = new animation(Ryu, 5, 4);
Ryu.facingLeft.kick = new animation(Ryu, 5, 5);
Ryu.facingLeft.gethit = new animation(Ryu, 4, 6);
Ryu.facingLeft.die = new animation(Ryu, 5, 7);
Ryu.facingLeft.win = new animation(Ryu, 3, 8);