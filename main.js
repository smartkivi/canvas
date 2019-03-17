var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
var using = false;
var lastPoint={x:undefined,y:undefined};
var lineWidth=7;
//  context.fillStyle="green";
//  context.fillRect(0,0,100,100);

cnavasInitial(canvas);
listenToMouse(canvas);

function cnavasInitial(canvas){
    setCanvasSize();
    window.onresize=function(){
        setCanvasSize();
    }
    function setCanvasSize(){
        var pageWidth = document.documentElement.clientWidth;
        var pageHeight = document.documentElement.clientHeight;
        canvas.width=pageWidth;
        canvas.height=pageHeight;
    }
}
function drawline(x1,y1,x2,y2){
    context.beginPath();
    // context.strokeStyle = 'black';
    context.moveTo(x1,y1);
    context.lineWidth=lineWidth;
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}
function listenToMouse(canvas){
    if(document.body.ontouchstart === undefined)
    {
        //PC端
        canvas.onmousedown=function(a){
            using=true;
            var x=a.clientX;
            var y=a.clientY;
            // drawCircle(x,y,1);
            if(usingEraser){
                context.clearRect(x-5,y-5,20,20);
            }else{
                lastPoint={"x":x,"y":y};
            }
        }
        canvas.onmousemove=function(a){
            var x=a.clientX;
            var y=a.clientY;
            if(using)
            {
                if(usingEraser){
                        context.clearRect(x-5,y-5,20,20);
                }else{
                        var newPoint={"x":x,"y":y};
                        // drawCircle(x,y,1);
                        drawline(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                        lastPoint=newPoint;
                        // lastPoint={"x":x,"y":y};
                }
            }
        }
        
        canvas.onmouseup=function(a){
          using=false;
        }
        
        var usingEraser=false;
        var eraser=document.getElementById("eraser");
        var paint=document.getElementById("paint");
        var action=document.getElementById("action");
        var clear=document.getElementById("clear");
        var save=document.getElementById("save");
        eraser.onclick=function(){
            usingEraser=true;
            eraser.classList.add('active');
            paint.classList.remove('active');
            // usingEraser=!usingEraser;
            // if(usingEraser){
            //     eraser.textContent="画笔";
            // }else{
            //     eraser.textContent="橡皮擦";
            // }
        }
        paint.onclick=function(){
            usingEraser=false;
            eraser.classList.remove('active');
            paint.classList.add('active');
        }
        clear.onclick=function(){
            context.clearRect(0,0,canvas.width,canvas.height);
        }
        save.onclick=function(){
            var url = canvas.toDataURL("image/png");
            var a=document.createElement('a');
            document.body.appendChild(a);
            a.href = url;
            a.download = '我的作品';
            a.target = '_blank';
            a.click();
        }

        var red=document.getElementById('red');
        var green=document.getElementById('green');
        var blue=document.getElementById('blue');
        var black=document.getElementById('black');
        black.onclick=function(){
            context.strokeStyle='black';
            black.classList.add('active');
            red.classList.remove('active');
            blue.classList.remove('active');
            green.classList.remove('active');
        }
        red.onclick=function(){
            context.strokeStyle='red';
            red.classList.add('active');
            black.classList.remove('active');
            blue.classList.remove('active');
            green.classList.remove('active');
        }
        green.onclick=function(){
            context.strokeStyle='green';
            green.classList.add('active');
            red.classList.remove('active');
            blue.classList.remove('active');
            black.classList.remove('active');
        }
        blue.onclick=function(){
            context.strokeStyle='blue';
            blue.classList.add('active');
            red.classList.remove('active');
            black.classList.remove('active');
            green.classList.remove('active');
        }
        var thin=document.getElementById('thin');
        var normal=document.getElementById('normal');
        var thick=document.getElementById('thick');
        thin.onclick=function(){
            lineWidth=3;
        }
        normal.onclick=function(){
            lineWidth=7;
        }
        thick.onclick=function(){
            lineWidth=11;
        }
    }
    else
    {
        //移动端
        canvas.ontouchstart=function(a){
            // console.log('点');
            using=true;
            var x=a.touches[0].clientX;
            var y=a.touches[0].clientY;
            // drawCircle(x,y,1);
            if(usingEraser){
                context.clearRect(x-5,y-5,20,20);
            }else{
                lastPoint={"x":x,"y":y};
            }
        }
        canvas.ontouchmove=function(a){
            var x=a.touches[0].clientX;
            var y=a.touches[0].clientY;
            if(using)
            {
                if(usingEraser){
                        context.clearRect(x-5,y-5,20,20);
                }else{
                        var newPoint={"x":x,"y":y};
                        // drawCircle(x,y,1);
                        drawline(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                        lastPoint=newPoint;
                        // lastPoint={"x":x,"y":y};
                }
            }
        }
        canvas.ontouchend=function(a){
            using=false;
        }
        var usingEraser=false;
        var eraser=document.getElementById("eraser");
        var paint=document.getElementById("paint");
        var action=document.getElementById("action");
        var clear=document.getElementById("clear");
        var save=document.getElementById("save");
        eraser.onclick=function(){
            usingEraser=true;
            eraser.classList.add('active');
            paint.classList.remove('active');
        }
        paint.onclick=function(){
            usingEraser=false;
            paint.classList.add('active');
            eraser.classList.remove('active');
        }
        clear.onclick=function(){
            context.clearRect(0,0,canvas.width,canvas.height);
        }
        save.onclick=function(){
            var url = canvas.toDataURL("image/png");
            var a=document.createElement('a');
            document.body.appendChild(a);
            a.href = url;
            a.download = '我的作品';
            a.target = '_blank';
            a.click();
        }

        var red=document.getElementById('red');
        var green=document.getElementById('green');
        var blue=document.getElementById('blue');
        var black=document.getElementById('black');
        black.onclick=function(){
            context.strokeStyle='black';
            black.classList.add('active');
            red.classList.remove('active');
            blue.classList.remove('active');
            green.classList.remove('active');
        }
        red.onclick=function(){
            context.strokeStyle='red';
            red.classList.add('active');
            black.classList.remove('active');
            blue.classList.remove('active');
            green.classList.remove('active');
        }
        green.onclick=function(){
            context.strokeStyle='green';
            green.classList.add('active');
            red.classList.remove('active');
            blue.classList.remove('active');
            black.classList.remove('active');
        }
        blue.onclick=function(){
            context.strokeStyle='blue';
            blue.classList.add('active');
            red.classList.remove('active');
            black.classList.remove('active');
            green.classList.remove('active');
        }

        var thin=document.getElementById('thin');
        var normal=document.getElementById('normal');
        var thick=document.getElementById('thick');
        thin.onclick=function(){
            lineWidth=3;
        }
        normal.onclick=function(){
            lineWidth=7;
        }
        thick.onclick=function(){
            lineWidth=11;
        }
    }
 
}




// function drawCircle(x,y,radius){
//     context.beginPath();
//     context.arc(x,y,radius,0,Math.PI*2);
//     context.fill();
//     // console.log("1");
// }
// div.onmousedown=function(a){
//     painting=true;
//     var x=a.clientX;
//     var y=a.clientY;
//     var divA=document.createElement('div');
//     divA.style="width:5px;height:6px;" +
//     "background-color:black;" +
//     "border-radius:3px;" +
//     "position:absolute;" +
//     "left:" + (x-3) + "px;" +
//     "top:" + (y-3) + "px;" +
//     div.appendChild(divA)
// }
// div.onmousemove=function(a){
//     if(painting)
//     {
//         var x=a.clientX;
//         var y=a.clientY;
//         var divA=document.createElement('div');
//         divA.style="width:5px;height:6px;" +
//         "background-color:black;" +
//         "border-radius:3px;" +
//         "position:absolute;" +
//         "left:" + (x-3) + "px;" +
//         "top:" + (y-3) + "px;" +
//         div.appendChild(divA)
//     }
// }
