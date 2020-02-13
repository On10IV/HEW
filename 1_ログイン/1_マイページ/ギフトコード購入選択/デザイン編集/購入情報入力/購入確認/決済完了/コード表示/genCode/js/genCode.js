(function() {
  'use strict';

  var label = document.getElementById('label');
  var btn = document.getElementById('btn');
  var result = document.getElementById('result');
  var numbers = document.getElementById('numbers');
  var symbols = document.getElementById('symbols');

  function genCode() {
      var seed_letters = 'abcdefghijklmnopqrstuvwxyz';
      var seed_numbers = '0123456789';
      var seed_symbols = '~`!@#$%^&*';
      var seed;

      var len = codeLen.value;
      var pwd = '';

      seed = seed_letters + seed_letters.toUpperCase();
      if (numbers.checked == true) {
          seed += seed_numbers;
      }
      if (symbols.checked) {
          seed += seed_symbols;
      }
      while (len--) {
          pwd += seed[Math.floor(Math.random() * seed.length)];
      }
      result.value = pwd;
  }

 

  btn.addEventListener('click', function() {
      genCode()
  });

  result.addEventListener('click', function() {
      this.select()
  });

  genCode();

})();