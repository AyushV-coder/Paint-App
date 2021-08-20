window.onload = function(){
$("#load").hide();
var can = document.getElementById("canvas");
var ctx = can.getContext("2d");
can.width = window.innerWidth/1.1;
can.height = window.innerHeight/1.2;
ctx.beginPath();
ctx.fillRect(0,0,can.width,can.height);
ctx.fillStyle = clois;
ctx.fill();
ctx.closePath();
document.getElementById("cl").value = "#ffffff";
$('.fa-angle-right').click(function(){
  $('#sar').hide();
  $('#sar2').show();
});
$('.fa-angle-left').click(function() {
  $('#sar2').hide();
  $('#sar').show();
});
var div = document.getElementById('inf');
div.addEventListener('touchmove',function(e){
var x1 = e.touches[0].clientX - window.innerWidth/3;
var y1 = e.touches[0].clientY - window.innerHeight/4;
div.style.top = y1 + 'px';
div.style.left = x1 + 'px';
div.style.transition = "0s";
});



var door = 0;

document.getElementById('about').addEventListener('mousemove',function(){
  $('#inf').css('transform', 'scale(1)');
  div.style.transition = "1s";
})
$('.fa-close').click(function() {
  $('#inf').css('transform', 'scale(0)');
  div.style.transition = "1s";
});
$('.fa-paint-brush').click(function(){
  if (door == 0) {
    can.removeEventListener('touchmove', erase);can.removeEventListener('touchmove', brush);
    $('#fill').css('background', '#d1d9eb');
    can.removeEventListener('touchmove', move);
    can.removeEventListener('touchmove', not);
    can.addEventListener('touchmove', brush);
    $('#brush').css('background', 'yellow');
    $('#erase').css('background', '#d1d9eb');
    door= 1;
  }
  else {
    can.removeEventListener('touchmove', erase);
    can.addEventListener('touchmove', move);
    can.removeEventListener('touchmove', brush);
    $('#brush').css('background', '#d1d9eb');
    door = 0;
  }
});
var x, y;
can.addEventListener('touchmove',move);
can.addEventListener('touchstart',newPath);
can.addEventListener('mousemove',dot);
document.getElementById("clo").addEventListener("change", newCanvas2);
var counter = 0;
$('#erase').click(function() {
  if (counter == 0) {
    can.addEventListener('touchmove', erase);
    $('#erase').css('background', 'yellow');
    can.removeEventListener('touchmove', move);
    can.removeEventListener('touchmove', not);
    can.removeEventListener('touchmove', brush);
    $('#brush').css('background', '#d1d9eb');
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
  ctx.lineCap = "round";
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
$('#brush').css('background', '#d1d9eb');
can.removeEventListener('touchmove', brush); 
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
ctx.beginPath();
ctx.arc(x ,y,cli.value + 4,0,Math.PI * 2);
ctx.fillStyle = cloi;
ctx.fill();
ctx.closePath();
}
function brush(e) {
  var cm = document.getElementById("cl").value;
  x = e.touches[0].clientX - window.innerWidth / 12;
  y = e.touches[0].clientY - window.innerHeight / 6;
  ctx.beginPath();
  ctx.arc(x, y-3, cli.value+1, 0, Math.PI * 2);
  ctx.fillStyle = cm;
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(x+2, y+2, cli.value+1, 0, Math.PI * 2);
  ctx.fillStyle = cm;
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(x-2, y-2, cli.value+1, 0, Math.PI * 2);
  ctx.fillStyle = cm;
  ctx.fill();
  ctx.closePath();
  
}
function dot(){
var cloi = document.getElementById("cl").value;
ctx.beginPath();
ctx.strokeStyle = "transparent";
ctx.arc(x ,y,cli.value,0,Math.PI * 2,false);
ctx.fillStyle = cloi;
ctx.stroke();
ctx.fill();
ctx.closePath();
}


document.getElementById("logo").addEventListener("mousemove", function(){
    location.href = "https://www.sololearn.com/Profile/19517706/?ref=app";
})
document.getElementById("load").addEventListener("mousemove", function(){
    alert("Please Wait....")
})



}