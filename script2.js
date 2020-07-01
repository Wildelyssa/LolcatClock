//Default Times
let wakeUpTime = 7;
let lunchTime = 13;
let napTime = lunchTime + 2;
let partyTime = 20;
const evening = 18;

const clock = document.getElementById("clock");

//Display time in 12hr format
function setTime() { 
	let hour = new Date().getHours();
	let minute = new Date().getMinutes();
	let second = new Date().getSeconds();
	let meridian = "AM";
		if (hour > 12) { meridian = "PM" };
	hour = checkHour(hour);
	minute = checkTime(minute);
	second = checkTime(second);

function checkHour(i) {
	if ( i > 12 ) { i = i - 12 } { return i }	
	if ( i >= 0 && i < 12 ) { return i }
	if ( i = 0 ) { i = 12 } { return i }
}	

function checkTime(i) {
	if (i < 10) { i = "0" + i } { return i }
}
clock.innerHTML = `${hour} : ${minute} : ${second}${meridian}`
}

//Update images at default times
function updateClock() {
	const kittyImage = document.getElementById("catImage");
	const time = new Date().getHours();

	if (time == wakeUpTime) { 
		kittyImage.src = "./Images/wakeKasha.jpeg"
	}
	else if (time == lunchTime) {
		kittyImage.src = "./Images/lunch.jpeg"
	}
	else if (time == napTime) {
		kittyImage.src = "./Images/nap.jpeg"
	}
	else if (time == partyTime) {
		kittyImage.src = "./Images/party.jpg"
	}
	else if (time >= evening) {
		kittyImage.src = "./Images/evening.jpeg"
	}
	else if (time < 12 ) {
		kittyImage.src = "./Images/morning.jpeg"
	}
	else {
		kittyImage.src = "./Images/afternoon.jpg"
	}
	setTime(); 
}
updateClock();
setInterval(updateClock, 1000);

//Add event listeners
const wakeUpSelector = document.getElementById("wakeUpSelector");
const lunchSelector = document.getElementById("lunchSelector");
const napSelector = document.getElementById("napSelector");

function wakeUpEvent() {
	wakeUpTime = wakeUpSelector.value
	updateClock();
}
wakeUpSelector.addEventListener("change", wakeUpEvent);

function lunchEvent() {
	lunchTime = lunchSelector.value
	updateClock();
}
lunchSelector.addEventListener("change", lunchEvent);

function napEvent() {
	napTime = napSelector.value
	updateClock();
}
napSelector.addEventListener("change", napEvent);

//Party button
const partyBtn = document.getElementById("partyBtn");

let partyEvent = function()
{
    if (partyTime < 0) 
    {
        partyTime = new Date().getHours();
        partyBtn.innerText = "Party Time!";
        partyBtn.style.backgroundColor = "yellow";
        kittyImage.src = "./Images/party.jpg";
    }
    else
    {
        partyTime = -1;
        partyBtn.innerText = "Party?";
        partyBtn.style.backgroundColor = "black";
    }
};

partyBtn.addEventListener("click", partyEvent);
partyEvent(); 







	



	




