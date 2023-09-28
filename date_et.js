

const monthNamesET = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];




exports.dateNowET = function(){
		
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	
	let completeDate =  dateNow + ". " + monthNamesET[timeNow.getMonth()]  + "   " + timeNow.getHours() + ":" + timeNow.getMinutes()  ;
	return completeDate;
}


