//my variables
let colorPicker = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');
//const Height = document.getElementById('inputHeight'); this not working
//const Width = document.getElementById('inputWidth'); this not working
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
makeGrid(height, width);

// my input and click button to change size
sizePicker.addEventListener('click', (e) => {

	e.preventDefault();
	let height = inputHeight.value;
    let width = inputWidth.value;

	table.firstElementChild.remove();

	makeGrid(height, width);
});

// my function for width and height and to allow change color running a for loop to insert rows w/ a click
//listener for the color to change in the background of each square
function makeGrid(height, width) {	
	for (let i = 0; i < height; i++) {
		let row = table.insertRow(i);
		for (let j = 0; j < width; j++) {
			let cell = row.insertCell(j);
			cell.addEventListener('click', () => {
				cell.style.background = colorPicker.value;
			});
		}
	}
}