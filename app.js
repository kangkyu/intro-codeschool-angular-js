(function()

{
  var app = angular.module('store', [ ]);

  // Modules - Where our application components live

  app.controller('StoreController', function(){
    this.products = gems; // 'product' property of StoreController
  });

  // Controllers - Where we add application behavior

  app.controller('PanelController', function(){
    this.tab = 1; // init description

    this.selectTab = function(arg){
      this.tab = arg;
    };
    this.isSelected = function(arg){
      return this.tab === arg;  // return true or false
    };
  });

  var gems = [
    {
      name: "Azurite",
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: "#CCC",
      faces: 14,
      images: [
        {full: "images/gem-02.gif"},
        {full: "images/gem-05.gif"},
        {full: "images/gem-09.gif"}
      ],
      reviews: []
    },
    {
      name: "Bloodstone",
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: "#EEE",
      faces: 12,
      images: [
        {full: "images/gem-01.gif"},
        {full: "images/gem-03.gif"},
        {full: "images/gem-04.gif"}
      ],
      reviews: []
    },
    {
      name: "Zircon",
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: "#000",
      faces: 6,
      images: [
        {full: "images/gem-06.gif"},
        {full: "images/gem-07.gif"},
        {full: "images/gem-08.gif"}
      ],
      reviews: []
    }
  ]
}

)();

// Wrapping the JavaScript in a closure is a good habit!