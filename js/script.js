const colors = ['#fe0002','#01ff00','#00b3fe','#ffae00','#fa00ff'];

function createColorChooser(colorList, element) {
	var blackDiv = document.createElement("DIV");
	blackDiv.classList.add("blackDiv");

	for (i = 0; i < colors.length; i++) {
		var div = document.createElement("DIV");

		div.classList.add("colorDiv");
		div.style.backgroundColor = colors[i];
		div.addEventListener('click', function(event) {
			blackDiv.style.backgroundColor = this.style.backgroundColor;
		})
		blackDiv.appendChild(div);
	}
	element.appendChild(blackDiv);
}

createColorChooser(colors, document.body);
