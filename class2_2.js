const firstName = "Ander";
const lastName = "Laansalu";


const fs = require("fs");
let proverb = [];



fs.readFile("txt_files/vanas6nad.txt", "utf8", (err, data)=>{
	if (err) {
		console.log(err);
	}
	else {
			proverb = data.split(";");	
			//console.log(proverb);
			//console.log("Vanasõnu on " + proverb.length);
			onScreen();

	}
})


const onScreen = function(){
	console.log(firstName + " " +lastName);
	console.log("Tänane vanasõna on: " + (proverb[Math.floor(Math.random() * proverb.length)])) ;
}







