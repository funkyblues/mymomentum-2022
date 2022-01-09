const clock = document.querySelector(".time");

function setClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}`;
}

setClock();
setInterval(setClock, 1000);