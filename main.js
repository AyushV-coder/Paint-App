window.onload = function(){
var can = document.getElementById("canvas");
var ctx = can.getContext("2d");
can.width = window.innerWidth/1.1;
can.height = window.innerHeight/1.2;
ctx.beginPath();
ctx.fillRect(0,0,can.width,can.height);
ctx.fillStyle = clois;
ctx.fill();
ctx.closePath();

var x, y;
can.addEventListener('touchmove',move);
can.addEventListener('touchstart',newPath);
document.getElementById("clo").addEventListener("change", newCanvas2);
var counter = 0;
$('#erase').click(function() {
  if (counter == 0) {
    can.addEventListener('touchmove', erase);
    $('#erase').css('background', 'yellow');
    can.removeEventListener('touchmove', move);
    can.removeEventListener('touchmove', not);
    $('#fill').css('background', '#d1d9eb');
    counter = 1;
  }
  else {
    can.removeEventListener('touchmove', erase);
can.addEventListener('touchmove', move);
    $('#erase').css('background', '#d1d9eb');
    counter = 0;
  }
});
document.getElementById("clrbtn").addEventListener("click", newCanvas);
var cl = document.getElementById("cl");
var cli = document.getElementById("ran");
var badi;
var clois = document.getElementById("clo").value;
var nr =  document.getElementById("cl").value;
function move(e) {
  var nr =  document.getElementById("cl").value;
  x = e.touches[0].clientX - window.innerWidth / 12;
  y = e.touches[0].clientY - window.innerHeight / 6;
  ctx.lineWidth = badi;
  badi = cli.value;
  ctx.strokeStyle = nr;
  ctx.lineTo(x, y);
  ctx.stroke();
  //console.log("ctx.lineTo = " + "(" + x + "," + y + ")");
}
function newCanvas(){
    ctx.beginPath();
    var cloi = document.getElementById("clo").value;
    ctx.fillStyle = cloi;
    ctx.fillRect(0,0,can.width,can.height);
    ctx.fill();
    ctx.closePath();
    

}
function newCanvas2(){
  var cloi = document.getElementById("clo").value;
    ctx.beginPath();
     ctx.fillStyle = cloi;
    ctx.fillRect(0,0,can.width,can.height);
    ctx.fill();
    ctx.closePath();
    }

function newPath(e){
    x = e.touches[0].clientX - window.innerWidth/12;
    y = e.touches[0].clientY - window.innerHeight/6;
    ctx.beginPath();
    ctx.moveTo(x, y);
  //  console.log("ctx.moveTo = "+"( "+ x +" , " + y + " )")
}
var count = 0;
$('#fill').click(function(){
  if(count == 0){
   can.addEventListener('touchmove', not);
 $('#fill').css('background', 'yellow');
can.removeEventListener('touchmove', erase);
can.removeEventListener('touchmove', move);
$('#erase').css('background', '#d1d9eb');  
   count = 1;
  }
  else{
can.removeEventListener('touchmove', not);
can.addEventListener('touchmove', move);
 $('#fill').css('background', '#d1d9eb');

    count = 0;
  }
})
function not(e){
x = e.touches[0].clientX - window.innerWidth / 12;
y = e.touches[0].clientY - window.innerHeight / 6;
ctx.lineWidth = badi;
bad = cl.value;
badi = cli.value;
ctx.fillStyle = bad ;
ctx.strokeStyle = bad;
ctx.lineTo(x, y);
ctx.stroke();
ctx.fill();
}


function erase(e){
var cloi = document.getElementById("clo").value;
x = e.touches[0].clientX - window.innerWidth / 12;
y = e.touches[0].clientY - window.innerHeight / 6;
ctx.fillRect(x - cli.value + 5 / 2,y - cli.value + 5 / 2,cli.value + 5,cli.value + 5);
ctx.fillStyle = cloi;
ctx.fill();
}






}