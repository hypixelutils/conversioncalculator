function boxEdited(num) {
	input = []
	input[0] = document.getElementById("diamonds")
	input[1] = document.getElementById("ED")
	input[2] = document.getElementById("EDB")
	input[3] = document.getElementById("cost")
	if(num === 0) {
		input[1].text = parseInt(input[0]) / 160
		input[2].text = parseInt(input[1]) / 160
		input[3].text = parseInt(input[0]) * 8
	} else if (num === 1) {
		input[0].text = parseInt(input[0]) * 160
		input[2].text = parseInt(input[1]) / 160
		input[3].text = parseInt(input[0]) * 8
	} else if (num === 2) {
		input[0].text = parseInt(input[0]) * 160 * 160
		input[1].text = parseInt(input[1]) / 160
		input[3].text = parseInt(input[0]) * 8
	} else if (num === 3) {
		input[0].text = parseInt(input[0]) / 8
		input[1].text = parseInt(input[0]) / 160
		input[2].text = parseInt(input[1]) / 160
	} 
}
