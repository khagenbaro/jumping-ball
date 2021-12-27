
var ball    = document.querySelector('.ball'),
    info    = document.querySelector('.info'),
    y       = 444,
    obstacles = document.querySelector('.obstacles');
    ball.style.top = (y) + "px";
    function bounceBall(){
        if(y>350){
            y = y -1;  //setting up the ball to move up by 1px every 10miliseconds time  
        document.querySelector('.ball').style.top = y + 'px';
        var myvar = setTimeout(bounceBall,1);
        } else {
            clearTimeout(myvar);
            bounceBallback(); //calling the function to jump back to its original position
        }
    }
    function bounceBallback(){
        if(y<444){
            y = y + 1;
        document.querySelector('.ball').style.top = y + 'px';
        var myvar2 = setTimeout(bounceBallback ,1);// setting the ball to bounce back to its original by 1px every 10ms 
        }
        else if(y=444){
            clearTimeout(myvar2);
        }
    }
    // Adding the event listener to pres any key to jump in .ball div class
document.querySelector('body').addEventListener("keypress",bounceBall);  

// check  if game is over
 var checkGame = setInterval(function(){
        var ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
        var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
        console.log(obstaclesLeft);
        if(obstaclesLeft<30 && obstaclesLeft> 0 && ballTop >=420 ){
            alert("hi");
        }
 },10)