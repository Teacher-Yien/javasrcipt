let options = document.getElementById("options_Flag");

function changFlag(){
	let name;
	let pic;
	if(options.value === "Cambodia"){
		name = "Cambodia";
		document.querySelector(".name").innerHTML = name;
		document.querySelector("img").src = "https://i.pinimg.com/736x/2e/8e/99/2e8e9930df338034690ce72ec124d302.jpg";
	}else if(options.value === "Japan"){
		name = "Japan";
		document.querySelector(".name").innerHTML = name;
		document.querySelector("img").src = "https://www.kcpinternational.com/wp-content/uploads/2014/01/Japan-Flag-and-cherry-blossoms.jpg";
	}else if(options.value === "Korea"){
		name = "Korea";
		document.querySelector(".name").innerHTML = name;
		document.querySelector("img").src = "https://www.kcpinternational.com/wp-content/uploads/2014/01/Japan-Flag-and-cherry-blossoms.jpg";
	}else if(options.value === "Vietnam"){
		name = "Vietnam";
		document.querySelector(".name").innerHTML = name;
		document.querySelector("img").src = "https://www.kcpinternational.com/wp-content/uploads/2014/01/Japan-Flag-and-cherry-blossoms.jpg";
	}else if(options.value === "Indain"){
		name = "Indain";
		document.querySelector(".name").innerHTML = name;
		document.querySelector("img").src = "https://www.kcpinternational.com/wp-content/uploads/2014/01/Japan-Flag-and-cherry-blossoms.jpg";
	}
}
console.log(changFlag());