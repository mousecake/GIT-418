function drawGraph(){
	var c = document.getElementById("career");
	var chart = c.getContext("2d");
	chart.rect(2, 18, 532, -13);
	chart.rect(2, 28, 504, 18);
	chart.rect(2, 61, 484, 19);
	chart.rect(1, 95, 457, 29);
	chart.rect(2, 141, 428, 33);
	chart.rect(3, 192, 372, 54);
	chart.rect(1, 254, 441, 32);
	chart.rect(2, 300, 430, 22);
	chart.rect(1, 334, 432, 19);
	chart.rect(2, 364, 433, 17);
	chart.moveTo(42,395);
	chart.lineTo(42,395);
	chart.moveTo(43,4);
	chart.lineTo(41,399);
	chart.moveTo(109,4);
	chart.lineTo(107,400);
	chart.moveTo(186,3);
	chart.lineTo(189,400);
	chart.moveTo(260,4);
	chart.lineTo(264,400);
	chart.moveTo(337,7);
	chart.lineTo(344,400);
	chart.moveTo(412,8);
	chart.lineTo(418,400);
	chart.moveTo(462,4);
	chart.lineTo(457,400);
	chart.moveTo(566,5);
	chart.lineTo(563,398);
	chart.moveTo(514,162);
	chart.lineTo(538,165);
	chart.stroke();
}