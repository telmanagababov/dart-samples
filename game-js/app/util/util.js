var Util = (function Util() {
	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	function hasCollision(a, b) {
		return !(((a.getY() + a.getHeight()) < (b.getY())) ||
			(a.getY() > (b.getY() + b.getHeight())) ||
			((a.getX() + a.getWidth()) < b.getX()) ||
			(a.getX() > (b.getX() + b.getWidth())));
	}

	return {
		getRandomColor: getRandomColor,
		hasCollision: hasCollision
	}
}());