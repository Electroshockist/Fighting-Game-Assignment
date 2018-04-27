//animation constructor
function animation(entity, numframes, OffsetY) {
  this.currentFrame = 0;

  this.animating = false;

  //updates animation
  this.updateAnimation = function(){
    //offsetX = image width * current frame
    this.xOffset = entity.W * this.currentFrame;
    //offsetY = image height * Y offset
    this.yOffset = entity.H * OffsetY;

    this.currentFrame++;
    if(this.currentFrame >= numframes){
      this.currentFrame = 0;
    }
  }
}

//entity constructor
function Entity(IMAGE) {
  this.X = 0;
  this.Y = 250;

  this.VX = 0;
  this.VY = 0;

  this.W = 90;
  this.H = 120;
  //saves current facing direction
  this.facingDir;
  //saves current animation
  this.currentAnim;

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
  this.midY = function() { return this.Y +this.H/2; };

  // this.jump = function() {
  // }

  //Set image
  this.IMAGE = IMAGE;
  this.drawImage;

  this.setAnimations = function() {
    if (this.VX != 0) this.currentAnim = this.facingDir.move;
  }

  //animations
  this.facingRight = {
    name: "Right",
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
    name: "Left",
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

//character animation stuff
//Cammy
function Cammy() {
  this.object = new Entity("Assets/Sprite Sheets/cammy.png");
  this.object.facingRight.idle    = new animation(this.object, 5, 0);
  this.object.facingRight.move    = new animation(this.object, 6, 1);
  this.object.facingRight.jump    = new animation(this.object, 5, 2);
  this.object.facingRight.crouch  = new animation(this.object, 1, 3);
  this.object.facingRight.punch   = new animation(this.object, 5, 4);
  this.object.facingRight.kick    = new animation(this.object, 5, 5);
  this.object.facingRight.gethit  = new animation(this.object, 4, 6);
  this.object.facingRight.die     = new animation(this.object, 5, 7);
  this.object.facingRight.win     = new animation(this.object, 5, 8);

  this.object.facingLeft.idle     = new animation(this.object, 5, 0);
  this.object.facingLeft.move     = new animation(this.object, 6, 10);
  this.object.facingLeft.jump     = new animation(this.object, 5, 11);
  this.object.facingLeft.crouch   = new animation(this.object, 1, 12);
  this.object.facingLeft.punch    = new animation(this.object, 5, 13);
  this.object.facingLeft.kick     = new animation(this.object, 5, 14);
  this.object.facingLeft.gethit   = new animation(this.object, 4, 15);
  this.object.facingLeft.die      = new animation(this.object, 5, 16);
  this.object.facingLeft.win      = new animation(this.object, 5, 17);
}

//Chun Li
function ChunLi(){
   this.object = new Entity("Assets/Sprite Sheets/chunli.png");
   this.object.facingRight.idle   = new animation(this.object, 4, 0);
   this.object.facingRight.move   = new animation(this.object, 8, 1);
   this.object.facingRight.jump   = new animation(this.object, 4, 2);
   this.object.facingRight.crouch = new animation(this.object, 1, 3);
   this.object.facingRight.punch  = new animation(this.object, 3, 4);
   this.object.facingRight.kick   = new animation(this.object, 7, 5);
   this.object.facingRight.gethit = new animation(this.object, 2, 6);
   this.object.facingRight.die    = new animation(this.object, 4, 7);
   this.object.facingRight.win    = new animation(this.object, 3, 8);

   this.object.facingLeft.idle    = new animation(this.object, 4, 9);
   this.object.facingLeft.move    = new animation(this.object, 8, 10);
   this.object.facingLeft.jump    = new animation(this.object, 4, 11);
   this.object.facingLeft.crouch  = new animation(this.object, 1, 12);
   this.object.facingLeft.punch   = new animation(this.object, 3, 13);
   this.object.facingLeft.kick    = new animation(this.object, 7, 14);
   this.object.facingLeft.gethit  = new animation(this.object, 2, 15);
   this.object.facingLeft.die     = new animation(this.object, 4, 16);
   this.object.facingLeft.win     = new animation(this.object, 3, 17);
}

//Ken
function Ken(){
  this.object = new Entity("Assets/Sprite Sheets/ken.png");
  this.object.facingRight.idle    = new animation(this.object, 4, 0);
  this.object.facingRight.move    = new animation(this.object, 5, 1);
  this.object.facingRight.jump    = new animation(this.object, 5, 2);
  this.object.facingRight.crouch  = new animation(this.object, 1, 3);
  this.object.facingRight.punch   = new animation(this.object, 5, 4);
  this.object.facingRight.kick    = new animation(this.object, 5, 5);
  this.object.facingRight.gethit  = new animation(this.object, 4, 6);
  this.object.facingRight.die     = new animation(this.object, 5, 7);
  this.object.facingRight.win     = new animation(this.object, 3, 8);

  this.object.facingLeft.idle     = new animation(this.object, 4, 0);
  this.object.facingLeft.move     = new animation(this.object, 5, 1);
  this.object.facingLeft.jump     = new animation(this.object, 5, 2);
  this.object.facingLeft.crouch   = new animation(this.object, 1, 3);
  this.object.facingLeft.punch    = new animation(this.object, 5, 4);
  this.object.facingLeft.kick     = new animation(this.object, 5, 5);
  this.object.facingLeft.gethit   = new animation(this.object, 4, 6);
  this.object.facingLeft.die      = new animation(this.object, 5, 7);
  this.object.facingLeft.win      = new animation(this.object, 3, 8);
}

//Ryu
function Ryu() {
  this.object = new Entity("Assets/Sprite Sheets/ryu.png");
  this.object.facingRight.idle    = new animation(this.object, 4, 0);
  this.object.facingRight.move    = new animation(this.object, 5, 1);
  this.object.facingRight.jump    = new animation(this.object, 5, 2);
  this.object.facingRight.crouch  = new animation(this.object, 1, 3);
  this.object.facingRight.punch   = new animation(this.object, 5, 4);
  this.object.facingRight.kick    = new animation(this.object, 5, 5);
  this.object.facingRight.gethit  = new animation(this.object, 4, 6);
  this.object.facingRight.die     = new animation(this.object, 5, 7);
  this.object.facingRight.win     = new animation(this.object, 3, 8);

  this.object.facingLeft.idle     = new animation(this.object, 4, 9);
  this.object.facingLeft.move     = new animation(this.object, 5, 10);
  this.object.facingLeft.jump     = new animation(this.object, 5, 11);
  this.object.facingLeft.crouch   = new animation(this.object, 1, 12);
  this.object.facingLeft.punch    = new animation(this.object, 5, 13);
  this.object.facingLeft.kick     = new animation(this.object, 5, 14);
  this.object.facingLeft.gethit   = new animation(this.object, 4, 15);
  this.object.facingLeft.die      = new animation(this.object, 5, 16);
  this.object.facingLeft.win      = new animation(this.object, 3, 17);
}
