function Containment(element) {
	this.element = element;
	this._init();
}

Containment.prototype.getWidth = function () {
	return this._width;
};

Containment.prototype.getHeight = function () {
	return this._height;
};

Containment.prototype._init = function () {
	this._width = this.element.offsetWidth;
	this._height = this.element.offsetHeight;
};