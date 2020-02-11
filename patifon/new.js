window.addEventListener("load", function () {
	var telo = document.querySelectorAll("#telo")[0];
	var disk = document.querySelectorAll("#disk")[0];
	var duda = document.querySelectorAll("#duda")[0];
	var start = document.querySelectorAll("#kp")[0];
	var stop = document.querySelectorAll("#ks")[0];
	var pause = document.querySelectorAll("#ku")[0];
	disk.style.transform = "rotate(0deg)"
		window.addEventListener("click", F, false);

	function F(e) {
		if (e.target === start) {
			//duda.style.visibility = "visible";
			//duda.style.transform = "rotate(185deg)";
			TweenLite.to(duda,0,{
				rotation:"185deg",
				onComplete: F1
				});
			TweenLite.to(disk, 1000, {
				rotation: "12800deg"
				//onComplete: F1

			});
			function F1(){
			TweenLite.to(duda, 100, {
					rotation: "205deg"
					//onComplete: F2
				});}
			}
		 else if (e.target === pause) {
			  var x = disk.style.transform;
              var y = duda.style.transform;
			//duda.style.transform = "rotate(170deg)";
			TweenLite.to(disk,0, {
				transform: x
			});
			TweenLite.to(duda,0, {
				transform: y
			});
		} else if (e.target === stop) {
			  var x = disk.style.transform;
			TweenLite.to(duda,0,{
				rotation:"170deg"
				});
			//duda.style.transform = "rotate(170deg)";
			TweenLite.to(disk,0, {
				transform: x
			});
		} else {
			duda.style.transform = "rotate(170deg)";
		}
	}

	var option1 = document.getElementsByTagName("option")[0].value = "DDT group",
	option2 = document.getElementsByTagName("option")[1].value = "SCORPIONS",
	option3 = document.getElementsByTagName("option")[2].value = "ARIA",
	cont = document.querySelectorAll("#content")[0],
	centr = disk.querySelector("#centr"),
	selectTxt = document.getElementsByClassName("bord")[0];
	selectTxt.id = "sTxt";
	var texte = centr.getElementsByTagName("p")[0];
	console.log(texte);
	var zb = texte.textContent.split("");
	for (var j = 0; j < zb.length; j++) {
		if (zb[j] === option1) {
			zb[j] = "<p>" + zb[0] + "</p>"
		} else if (zb[j] === option2) {
			zb[j] = "<p>" + zb[1] + "</p>"
		} else {
			zb[j] = "<p>" + zb[2] + "</p>"
		}
	}
	cont.addEventListener("change", formBoxFun, false);
	cont.addEventListener("keyup", formBoxFun, false);
	function formBoxFun(e) {

		var formElement = e.target;
		while (!formElement.id) { 
			formElement = formElement.parentNode;
		}

		switch (formElement.id) {
		case "sTxt":
			texte.textContent = e.target.value;

			break;
		}
	}
}, false)
