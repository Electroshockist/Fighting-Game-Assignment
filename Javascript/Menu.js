var inMenu = true;

//scale of images
var scale = 3;

X = 0;
Y = 0;
choice = 0;

//set enemy stuff

var cursor = new Image();
cursor.src = "Assets/cursor.png";

var select = new Image();
select.src = "Assets/character_select.png";

var logo = new Image();
logo.src = "Assets/logo.png";

var portrait = new Image();
portrait.src = "Assets/Portraits/ryuFace.png";

logo.addEventListener("load",updateMenu);


  function renderMenu() {
    context.fillRect (0, 0, canvas.width, canvas.height);
    //Clear the previous animation frame
    context.clearRect(1, 1, canvas.width-2, canvas.height-2);
    //drwas background
    context.drawImage(logo, 0, 0, 224, 148, 1, 100, 224 * scale, 148 * scale);
    //draws Player
    context.drawImage(select, 0, 0, 84, 32, 850, 450, 84*scale, 32*scale);
    context.drawImage(cursor, 0, 0, 21, 32, 850+X, 450+Y, 21*scale, 32*scale);
    context.drawImage(portrait, 0, 0, 54, 93, 900, 150, 54*scale, 93*scale);
  }

  function updateMenu(){
    requestAnimationFrame(update,canvas);
    if(choice == 0){  portrait.src = "Assets/Portraits/ryuface.png";}
    if(choice == 1){  portrait.src = "Assets/Portraits/kenface.png";}
    if(choice == 2){  portrait.src = "Assets/Portraits/chunliface.png";}
    if(choice == 3){  portrait.src = "Assets/Portraits/cammyface.png";}
    renderMenu();
  }
