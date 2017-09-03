	


function proccess(){	
var canv1 = document.getElementById('back');
var cont1 = canv1.getContext('2d');
var canv2 = document.getElementById('front');
var cont2 = canv2.getContext('2d');
var txt = document.getElementById('inText').value.charAt(0);
var out = document.getElementById('hexOut');
var CNfont = "150px Courier New";
var CNy = 130;
var ENfont = "250px Courier New";
var ENy = 150;
	var Font, PosY;
	if(txt.charCodeAt(0) > 250){
		Font = CNfont;
		PosY = CNy;
	}else{
		Font = ENfont;
		PosY = ENy
	}
	cont1.clearRect(0, 0, 160, 160);
	cont2.clearRect(0, 0, 160, 160);
	cont1.font = Font;
	cont1.fillStyle = "red";
	cont1.fillText(txt, 0, PosY);

	cont2.fillStyle = "red";

	var arr = new Array()
	var imgData, imgData2, ten, i, j, k, temp, temp2;	
	for(k = 0; k < 2; k++){
		for(i = 0; i < 160; i += 10)
		{
			temp2 = "";
			for(j = k * 80; j < 80 * k + 80; j += 10)
			{	
				try{
					imgData= cont1.getImageData(i + 4, j + 4, 10, 10);
				}catch (e) {
					alert(e);
				}
				if (imgData.data[0] >= 200)
				{
					temp = "1";
					cont2.fillRect(i, j, 10, 10);
				}
				else
				{
					temp = "0";
				}
				temp2 = temp2 + temp;
			}
			arr[i / 10] = "  0x" + parseInt(temp2, 2).toString(16);
		}
	}
	out.innerHTML = arr;
}
function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/jpg");
	return image;
}

