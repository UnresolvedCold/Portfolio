$(document).ready(function(){
  
    var mousePos = {};
    var flag = 0;
    var mouse = [];
    var shouldDrawMouse=1;
  
   function getRandomInt(min, max) {
     return Math.round(Math.random() * (max - min + 1)) + min;
   }
    
    $(window).mousemove(function(e) {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
      mouse[0] = mousePos.x;
      mouse[1] = mousePos.y;
    });
    
    $(window).mouseleave(function(e) {
      mousePos.x = -1;
      mousePos.y = -1;
      mouse[0] = mousePos.x;
      mouse[1] = mousePos.y;
    });

    window.onmouseover=function(e) {
        if(e.target.href!=null || 
            e.target.href!=this.undefined
            )
            flag=1;    
        else
            flag=0;
        };
    var draw = setInterval(function(){

      if(mousePos.x > 0 && mousePos.y > 0 && shouldDrawMouse==1){

        var range = 7;
        var midmaker = 2*range;
        
        var rnd = getRandomInt(0,255);
        var color = "background: rgb("+rnd+","+rnd+","+rnd+");";
       // if(flag===1)color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
        
        var sizeInt = getRandomInt(5, 10);
        size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
        
        var left = "left: " + getRandomInt(mousePos.x-midmaker-range-sizeInt, mousePos.x+range) + "px;";
        
        var top = "top: " + getRandomInt(mousePos.y-midmaker-range-sizeInt, mousePos.y+range) + "px;"; 
  
        var style = left+top+color+size;
        $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
      }
    }, 1);
  });
  