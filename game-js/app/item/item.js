function Item(containment) {
	this._containment = containment;
	this._init();
}

Item.prototype.getY = function () {
	return this._y
};

Item.prototype.getX = function () {
	return this._x
};

Item.prototype.getWidth = function () {
	return this._width;
};

Item.prototype.getHeight = function () {
	return this._height;
};

Item.prototype.remove = function () {
	this._containment.removeChild(this._element);
};

Item.prototype._init = function () {
	this._element = document.createElement('div');
	this._width = parseInt(Math.random() * 100);
	this._height = parseInt(Math.random() * 100);
	this._x = parseInt(Math.random() * (this._containment.offsetWidth - this._width));
	this._y = parseInt(Math.random() * (this._containment.offsetHeight - this._height));
	this._render();
};

Item.prototype._render = function () {
	this._element.style.width = this._width + "px";
	this._element.style.height = this._height + "px";
	this._element.style.top = this._y + "px";
	this._element.style.left = this._x + "px";
	this._element.style.backgroundColor = Util.getRandomColor();
	this._element.style.borderColor = Util.getRandomColor();
	this._element.className = "item";
	this._containment.appendChild(this._element);
};