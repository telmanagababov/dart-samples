// Copyright (c) 2017, telma. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';
import 'dart:developer';

const String TITLE = "hello world";
const String CONTENT_SELECTOR = "#output";

Element content = null;
int counter = 0;

void main() {
  content = querySelector(CONTENT_SELECTOR);
  render();
  debugger();
}

void updateInfo() {
  content.text = TITLE + ":${counter}";;
}

void render([num value = 0]) {
  counter++;
  updateInfo();
  window.requestAnimationFrame(render);
}

