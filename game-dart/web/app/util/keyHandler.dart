import 'dart:html';

class KeyHandler {
  Function arrowUpCallback = null;
  Function arrowDownCallback = null;
  Function arrowLeftCallback = null;
  Function arrowRightCallback = null;

  KeyHandler() {
    window.onKeyDown.listen(onKeyDown);
  }

  void onKeyDown(KeyboardEvent event) {
    switch (event.keyCode.toString()) {
      case "38":
        if (arrowUpCallback != null) {
          arrowUpCallback();
        }
        break;
      case "40":
        if (arrowDownCallback != null) {
          arrowDownCallback();
        }
        break;
      case "37":
        if (arrowLeftCallback != null) {
          arrowLeftCallback();
        }
        break;
      case "39":
        if (arrowRightCallback != null) {
          arrowRightCallback();
        }
        break;
      default:
        break;
    }
  }
}