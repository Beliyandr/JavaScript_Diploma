// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let timer = require('./parts/timer.js'),
      calc = require('./parts/calc.js'),
      decoration = require('./parts/decoration.js'),
      glazing = require('./parts/glazing.js'),
      images = require('./parts/images.js'),
      modal = require('./parts/modal.js'),
      modalForm = require('./parts/modalForm.js');

  images();
  modal();
  modalForm();
  glazing();
  decoration();
  calc();
  timer();
});