function displayimg(imgpass){
	//�e�C���[�W�p�X��z��ɐݒ�
	img[1]=new Image();
	img[1].src="img/icon1.jpg";
	img[2]=new Image();
	img[2].src="img/icon2.jpg";
	img[3]=new Image();
	img[3].src="img/icon3.jpg";

	//�������{�^���ɕR�Â��摜��\��
	document.getElementById("img").src = img[imgpass].src;
}