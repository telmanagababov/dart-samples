function KeyHandler() {
	this.arrowUpCallback = null;
	this.arrowDownCallback = null;
	this.arrowLeftCallback = null;
	this.arrowRightCallback = null;

	this._start();
}

KeyHandler.prototype._start = function () {
	window.addEventListener('keydown', this._onKeyDown.bind(this));
};

KeyHandler.prototype._onKeyDown = function (event) {
	switch(event.key) {
		case "ArrowUp":
			if(this.arrowUpCallback !== null && this.arrowUpCallback !== undefined) {
				this.arrowUpCallback();
			}
			break;
		case "ArrowDown":
			if(this.arrowDownCallback !== null && this.arrowDownCallback !== undefined) {
				this.arrowDownCallback();
			}
			break;
		case "ArrowLeft":
			if(this.arrowLeftCallback !== null && this.arrowLeftCallback !== undefined) {
				this.arrowLeftCallback();
			}
			break;
		case "ArrowRight":
			if(this.arrowRightCallback !== null && this.arrowRightCallback !== undefined) {
				this.arrowRightCallback();
			}
			break;
		default:
			break;
	}
};