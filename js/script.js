var chessBoard = [];
var me = true;
var chess = document.getElementById('chess');
var context = chess.getContext('2d');
for(var i=0; i<15; i++){
	chessBoard[i] = [];
	for(var j=0; j<15; j++){
		chessBoard[i][j] = 0;
	}
}
context.strokeStyle = "#BFBFBF";
var logo = new Image();
logo.src = "images/logo.jpg";
logo.onload = function(){
	context.drawImage(logo, 0, 0, 450, 450);
	drawChessBoard();
	
}

var drawChessBoard = function(){
	for(var i=0; i<15; i++){
		context.moveTo(15 + i*30, 15);
		context.lineTo(15 + i*30, 435);
		context.stroke();
		context.moveTo(15, 15 + i*30);
		context.lineTo(435, 15 + i*30);
		context.stroke();
	}
}

var oneStep = function(i, j, me){//me代表是黑棋还是白棋
	context.beginPath();
	context.arc(15 + i*30, 15 + j*30, 13, 0, 2 * Math.PI);//用来画圆,
	//圆心坐标，半径，起始角度，终止角度
	context.closePath();
	var gradient = context.createRadialGradient(15 + i*30 +2, 15 + j*30 - 2, 13, 15 + i*30 +2, 15 + j*30 - 2, 0);//第一个圆的圆心和半径，第二个圆
	if(me){
		gradient.addColorStop(0, "#0A0A0A");//0对应第一个圆
		gradient.addColorStop(1, "#636766")//1对应第二个圆
	} else {
		gradient.addColorStop(0, "#D1D1D1");//0对应第一个圆
		gradient.addColorStop(1, "#F9F9F9")//1对应第二个圆
	}
	
	context.fillStyle = gradient;
	context.fill();//用来填色
}

chess.onclick = function(e){
	var x = e.offsetX;
	var y = e.offsetY;
	var i = Math.floor(x / 30);
	var j = Math.floor(y / 30);
	if(chessBoard[i][j] == 0){
		oneStep(i, j, me);
		if(me){
			chessBoard[i][j] = 1;
		}else{
			chessBoard[i][j] = 2;
		}
		me = !me;
	}
}