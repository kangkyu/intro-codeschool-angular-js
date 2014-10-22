(function()

{
  var app = angular.module('store', [ ]);

  // angularjs
  // module
  // dependency

  var gems = [
    {
      name : 'Dodecahedron',
      price : 2.95,
      description : 'Some gems have hidden qualities \
        beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: true,
      soldOut: true,
    },
    {
      name : 'Pentagonal',
      price : 5.95,
      description : 'Some gems have hidden qualities \
        beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: false,
      soldOut: true,
    }
  ]
  app.controller('StoreController', function(){
    this.products = gems; // 'product' property of StoreController
  });
}

)();

// Wrapping the JavaScript in a closure is a good habit!