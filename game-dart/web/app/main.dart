import 'dart:html';
import 'package:game_dart/fpsmeter.dart';
import 'util/keyHandler.dart';

void main() {
  initHeroMovement();
  initFPSMeter();
}

void initHeroMovement() {
  var keyHandler = new KeyHandler();
}

void initFPSMeter() {
  var meter = new FPSMeter();
  void render (num highResTime) {
    meter.tick();
    window.requestAnimationFrame(render);
  }
  render(0);
}
