function boxEdited(num) {
	input = []
	input[0] = document.getElementById("diamonds")
	input[1] = document.getElementById("ED")
	input[2] = document.getElementById("EDB")
	input[3] = document.getElementById("cost")
	if(num === 0) {
		input[1].value = parseInt(input[0].value) / 160
		input[2].value = parseInt(input[1].value) / 160
		input[3].value = parseInt(input[0].value) * 8
	} else if (num === 1) {
		input[0].value = parseInt(input[1].value) * 160
		input[2].value = parseInt(input[1].value) / 160
		input[3].value = parseInt(input[0].value) * 8
	} else if (num === 2) {
		input[0].value = parseInt(input[2].value) * 160 * 160
		input[1].value = parseInt(input[2].value) * 160
		input[3].value = parseInt(input[2].value) * 8 * 160 * 160
	} else if (num === 3) {
		input[0].value = parseInt(input[3].value) / 8
		input[1].value = parseInt(input[0].value) / 160
		input[2].value = parseInt(input[1].value) / 160
	} 
}
