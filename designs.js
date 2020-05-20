"use strict";
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const size = document.getElementById('sizePicker');
//Update table dimensions whenever form is submitted
$('#sizePicker').submit(event => {
	event.preventDefault();

	let width = $inputWidth.val();
	let height = $inputHeight.val();
	//Clear previous cells
	table.innerHTML = "";

	makeGrid(height, width);
});

//Making table of required height and width
function makeGrid(height, width) {
	let tableBody = '';

	for (let i = 0; i < height; i++) {
		tableBody += "<tr>"
		for (let j = 0; j < width; j++) {
			tableBody += "<td></td>"
		}
		tableBody += "</tr>";
	}
	table.innerHTML = tableBody;
	//change the color of cell by clicking
	$('td').click(function () {
		$(this).css("background-color", $("#colorPicker").val());
	});
}
