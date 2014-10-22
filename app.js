(function()

{
  var app = angular.module('store', [ ]);

  // angularjs
  // module
  // dependency

  var gem = {
    name : 'Dodecahedron',
    price : 2.95,
    description : 'Some gems have hidden qualities \
      beyond their luster, beyond their shine... Dodeca is one of those gems.',
    canPurchase: true,
    soldOut: true,
  }

  app.controller('StoreController', function(){
    this.product = gem; // 'product' property of StoreController
  });
}

)();

// Wrapping the JavaScript in a closure is a good habit!