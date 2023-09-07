const day = document.getElementById('day')
const utcTime = document.getElementById('time')
const newDate = new Date()
const date = newDate
const getDay = date.getDay()

console.log(getDay)

if (getDay === 1){
	
	day.textContent = "Monday"
	
}else if(getDay === 2){
	
	day.textContent = "Tuesday"
	
}else if(getDay === 3){
	
	day.textContent = "Wednesday"
	
}else if(getDay === 4){
	
	day.textContent = "Thursday"
	
}else if(getDay === 5){
	
	day.textContent = "Friday"
	
}else if(getDay === 6){
	
	day.textContent = "Saturday"
	
}else if(getDay === 7){

	day.textContent = "Sunday"
	
}


// console.log(date)


const currentUTCTime = new Date();

// Get UTC hours, minutes, and seconds
const hours = currentUTCTime.getUTCHours();
const minutes = currentUTCTime.getUTCMinutes();
const seconds = currentUTCTime.getUTCSeconds();

console.log(`${hours}:${minutes}:${seconds}`);


const childTime = `<p>Current UTC Time: ${hours} : ${minutes} : ${seconds}</p>`

utcTime.innerHTML = childTime


