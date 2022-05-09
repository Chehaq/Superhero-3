var canvas= new fabric.Canvas('myCanvas');

block_imgWidth= 30;
block_imgHeight= 30;

player_x= 10;
player_y= 10;

var player_object="";

function player_update(){
fabric.Image.fromURL("player.png",function (Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);

});
}

 function new_img(get_Img){
    fabric.Image.fromURL(get_Img,function (Img){
        block_imgObject=Img;
        block_imgObject.scaleToWidth(block_imgWidth);
        block_imgObject.scaleToHeight(block_imgHeight);
        block_imgObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_imgObject);
        
    });
}

    window.addEventListener("keydown", my_keydown);


    function my_keydown(e)
    {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
        if(keyPressed == '70')
        {
            new_img("ironman_face.png");
            console.log("'f' Key pressed");
        }

        if(keyPressed == '66')
        {
            player_x = 200;
            new_img("spiderman_body.png");
            console.log("b Key Pressed");
        }
        
        if(keyPressed == '72')
        {
            player_x = 350;
            new_img("captain_america_left");
            console.log("h Key Pressed");
        }
        if(keyPressed == '76')
        {
            player_x = 600;
            new_img("hulk_legs.png");
            console.log("l Key Pressed");
        }
        if(keyPressed == '82')
        {
            player_x = 700;
            new_img("thor_right_hand.png");
            console.log("r Key Pressed");
        }
        if(keyPressed == '38')
        {
            up();
            console.log(" Up Key Pressed");
        }

        if(keyPressed == '40')
        {
            down();
            console.log(" Down Key Pressed");
        }

        if(keyPressed == '37')
        {
            left();
            console.log(" Left Key Pressed");
        }

        if(keyPressed == '39')
        {
            left();
            console.log(" Right Key Pressed");
        }
    }


    function up() {
        if (player_y >= 0) {
            player_y = player_y - block_imgHeight;
            console.log("block image height = " + block_imgHeight);
            console.log("When up arrow is pressed,X = " + player_x + ",Y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function down() {
        if (player_y <= 500) {
            player_y = player_y + block_imgHeight;
            console.log("block image height = " + block_imgHeight);
            console.log("When Down arrow key is pressed,X = " + player_x + ",Y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }


function right() {
    if (player_x <= 900) {
        player_x = player_x + block_imgWidth;
        console.log("block image width =  " + block_imgWidth);
        console.log("When right arrow key is pressed, X = " + player_x + ",Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_imgWidth;
        console.log("block img width = " + block_imgWidth);
        console.log("When left arrow key is pressed, X = " + player_x + ",Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}


    