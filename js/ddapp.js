//anonymous function module keeps your script private.
(() => {

	// Identify your nodes
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
	function startDrag() {
		console.log('dragging ' + this.dataset.piecenumber);

	};
	function dropped(event) {
		event.preventDefault(); //override default behaviour
		console.log('whoops, dropped it!');
		console.log(event.target.id);

	};
	function draggedOver(event) {
		event.preventDefault(); //override default behaviour
		console.log('Look at you go, dragging things around');

	};
	function imageflip() {
		//Click thumbnail image to switch out puzzle pieces
		//update the background image of the drop zone container
			//let imageindex = this.dataset.imageref;
			//newimagepath = `url(images/dd/backGround${imageindex}.jpg)`;

		dropZoneContainer.style.backgroundImage = `url(images/dd/backGround${this.dataset.imageref}.jpg)`;
		debugger;
	}

	// event handling at the bottom
	dragImages.forEach(piece => {
		piece.addEventListener('dragstart', startDrag, false);
	});
	//the pieces look for being clicked/dragged, but the dropzones are looking for the drop.
	dropZones.forEach(zone => {
		zone.addEventListener('drop', dropped, false);
		zone.addEventListener('dragover', draggedOver, false);
	});

	puzzleSelectors.forEach(button => {
		button.addEventListener('click', imageflip, false);
	});
})();
