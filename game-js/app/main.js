var heroDOM = null,
	containmentDOM = null,
	hero = null,
	containment = null,
	items = [];

window.onload = function () {
	initElements();
	initContainment();
	initHeroMovement();
	initFPSMeter();
};

function initElements() {
	heroDOM = document.querySelector(selectorEnum.HERO);
	containmentDOM = document.querySelector(selectorEnum.CONTAINMENT);
	hero = new Hero(heroDOM);
	containment = new Containment(containmentDOM);
}

function initContainment() {
	setInterval(function () {
		items.push(new Item(containmentDOM));
		checkCollisions();
	}, appEnum.ITEMS_CREATING_DELAY)
}

function initHeroMovement() {
	var keyHandler = new KeyHandler();
	keyHandler.arrowUpCallback = function () {
		if(hero.getY() > heroEnum.SPEED) {
			hero.moveUp();
		} else {
			hero.setY(0);
		}
		checkCollisions();
	};
	keyHandler.arrowDownCallback = function () {
		if(hero.getY() < (containment.getHeight() - hero.getHeight() - heroEnum.SPEED)) {
			hero.moveDown();
		} else {
			hero.setY(containment.getHeight() - hero.getHeight());
		}
		checkCollisions();
	};
	keyHandler.arrowLeftCallback = function () {
		if(hero.getX() > heroEnum.SPEED) {
			hero.moveLeft();
		} else {
			hero.setX(0);
		}
		checkCollisions();
	};
	keyHandler.arrowRightCallback = function () {
		if(hero.getX() < (containment.getWidth() - hero.getWidth() - heroEnum.SPEED)) {
			hero.moveRight();
		} else {
			hero.setX(containment.getWidth() - hero.getWidth());
		}
		checkCollisions();
	};
}

function checkCollisions() {
	for(var i = 0; i < items.length; i++) {
		if(Util.hasCollision(hero, items[i]) === true) {
			var item = items.splice(i, 1)[0];
			item.remove();
			i--;
		}
	}
}

function initFPSMeter() {
	var meter = new FPSMeter();
	function render() {
		meter.tick();
		requestAnimationFrame(render);
	}
	render();
}