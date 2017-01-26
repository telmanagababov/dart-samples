@JS()
library fpsmeter;

import 'package:js/js.dart';

@JS('FPSMeter')
class FPSMeter {
  external FPSMeter();
  external tick();
}

