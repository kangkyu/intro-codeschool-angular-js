(function()

{
  var app = angular.module('store', [ ]);

  // Modules - Where our application components live

  app.controller('StoreController', function(){
    this.products = gems; // 'product' property of StoreController
  });

  // Controllers - Where we add application behavior

  app.controller('PanelController', function(){
    this.tab = 3; // init description

    this.selectTab = function(arg){
      this.tab = arg;
    };
    this.isSelected = function(arg){
      return this.tab === arg;  // return true or false
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review); // when submit button pressed
      this.review = {};
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
      reviews: [
        {
          stars: 3,
          body: "I think this gem was just OK, could honestly use more shine, IMO.",
          author: "JimmyDean@example.com"
        },
        {
          stars: 4,
          body: "Any gem with 12 faces is for me!",
          author: "gemsRock@example.com"
        }
      ]
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