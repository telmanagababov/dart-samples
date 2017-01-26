import 'dart:math';

class Util {
  Random rand = new Random();

  String getRandomColor() {
    String letters = '0123456789ABCDEF';
    String color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[rand.nextInt(16).floor()];
      color += letters[rand.nextInt(16).floor()];
    }
    return color;
  }

  bool hasCollision(a, b) {
    return !(((a.getY() + a.getHeight()) < (b.getY())) ||
        (a.getY() > (b.getY() + b.getHeight())) ||
        ((a.getX() + a.getWidth()) < b.getX()) ||
        (a.getX() > (b.getX() + b.getWidth())));
  }
}