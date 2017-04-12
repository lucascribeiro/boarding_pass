"use strict";

// TODO: refactor && ES6

$(document).ready(function() {
  $('select').material_select();
});

function getClass() {
  var x = document.getElementById("city-location");
  var classOfTickets = x.options[x.selectedIndex].value;
  return classOfTickets;
}

function getQuantity() {
  var y = document.getElementById("city-destination");
  var numberOfTickets = y.options[y.selectedIndex].value;
  return numberOfTickets;
}

function getBasePrice() {
  var basePrice = 200.61;
  if (getClass() !== 'business') {
    return basePrice;
  } else {
    var round = function round(value, decimals) {
      return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    };

    basePrice *= 1.5;

    basePrice = round(basePrice, 2);
    return basePrice;
  }
}

function getTotalPrice() {
  document.getElementById('price').innerHTML = getBasePrice();
  var totalPrice = 0;
  totalPrice = getBasePrice() * getQuantity();

  function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  totalPrice = round(totalPrice, 2);
  document.getElementById('total-price').innerHTML = totalPrice;
}
