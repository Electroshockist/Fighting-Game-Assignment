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
Cammy.facingRight.move    = new animation(Cammy, 5, 1);
Cammy.facingRight.jump    = new animation(Cammy, 5, 2);
Cammy.facingRight.crouch  = new animation(Cammy, 5, 3);
Cammy.facingRight.punch   = new animation(Cammy, 5, 4);
Cammy.facingRight.kick    = new animation(Cammy, 5, 5);
Cammy.facingRight.gethit  = new animation(Cammy, 5, 6);
Cammy.facingRight.die     = new animation(Cammy, 5, 7);
Cammy.facingRight.win     = new animation(Cammy, 5, 8);

Cammy.facingLeft.idle    = new animation(Cammy, 5, 0);
Cammy.facingLeft.move    = new animation(Cammy, 5, 1);
Cammy.facingLeft.jump    = new animation(Cammy, 5, 2);
Cammy.facingLeft.crouch  = new animation(Cammy, 5, 3);
Cammy.facingLeft.punch   = new animation(Cammy, 5, 4);
Cammy.facingLeft.kick    = new animation(Cammy, 5, 5);
Cammy.facingLeft.gethit  = new animation(Cammy, 5, 6);
Cammy.facingLeft.die     = new animation(Cammy, 5, 7);
Cammy.facingLeft.win     = new animation(Cammy, 5, 8);

var ChunLi = new Entity("Assets/Sprite Sheets/chunli.png");
var Ken = new Entity("Assets/Sprite Sheets/ken.png");
var Ryu = new Entity("Assets/Sprite Sheets/ryu.png");
