$( document ).ready(function() {
  // js goes in here.
  var rotationLimit = 50;
  var card = $(".__card");

  $(document).on("mousemove",function(e) {  
    
    var ax = -($(window).innerWidth()/2- e.pageX)/20;
    var ay = ($(window).innerHeight()/2- e.pageY)/10;

    if(ax>rotationLimit)ax=rotationLimit;
    if(ax<-1*rotationLimit)ax=-1*rotationLimit;
    if(ay>5)ay=5;
    if(ay<-1*rotationLimit)ay=-1*rotationLimit;
    
    card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
  });


  //Reset Position when mouse stops
  var lastTimeMouseMoved = "";
  
  $(document).mousemove(function(e){

       t = (e.pageY - 10).toString() + 'px';
       l = (e.pageX - 10).toString() + 'px';
      
       lastTimeMouseMoved = new Date().getTime();
       var t=setTimeout(function(){
           var currentTime = new Date().getTime();
           if(currentTime - lastTimeMouseMoved > 1000){              
                
           }
       },1000)
   }); 


});
