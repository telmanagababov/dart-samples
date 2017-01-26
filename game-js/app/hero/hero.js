function Hero(element) {
	this.element = element;
	this._init();
}

Hero.prototype.getY = function () {
	return this._y
};

Hero.prototype.setY = function (value) {
	this._y = value;
	this._render();
};

Hero.prototype.getX = function () {
	return this._x
};

Hero.prototype.setX = function (value) {
	this._x = value;
	this._render();
};

Hero.prototype.getWidth = function () {
	return this._width;
};

Hero.prototype.getHeight = function () {
	return this._height;
};

Hero.prototype.moveUp = function () {
	this._y -= heroEnum.SPEED;
	this._render();
};

Hero.prototype.moveDown = function () {
	this._y += heroEnum.SPEED;
	this._render();
};

Hero.prototype.moveLeft = function () {
	this._x -= heroEnum.SPEED;
	this._render();
};

Hero.prototype.moveRight = function () {
	this._x += heroEnum.SPEED;
	this._render();
};

Hero.prototype._init = function () {
	this._x = 0;
	this._y = 0;
	this._width = this.element.offsetWidth;
	this._height = this.element.offsetHeight;
	this._render();
};

Hero.prototype._render = function () {
	this.element.style.top = this._y + "px";
	this.element.style.left = this._x + "px";
};