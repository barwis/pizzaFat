'use strict';

var app = angular.module("app", ['ngRoute','home']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);



// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// List of possible base sizes, with price

var pizzaSizes = [
		{
			id: 0,
			size: 'small',
			price: 10
		},
		{
			id: 1,
			size: 'medium',
			price: 12
		},
		{
			id: 3,
			size: 'large',
			price: 15
		}
	];


// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// List of all available toppings
// * id - an ID of the topping
// * name - name of the topping
// * info - whether the topping is vegetarian [0], gluten-free [1], hot & spicy [2]
// * prices - price for regular and extra amount

var toppings = [
	{
		id: 0,
		name: 'Anchovies',
		info: [ false, true, false ],
		price: 1.69
	},
	{
		id: 1,
		name: 'Cajun Spices',
		info: [true, true, false],
		price: 0.75
	},
	{
		id: 2,
		name: 'Chicken Breast Strips',
		info: [false, true, false],
		price: 2.5
	},
	{
		id: 3,
		name: "Chorizo Sausage",
		info: [ true, true, false ],
		price: 1.02
	},
	{
		id:4,
		name: 'Cumberland Sausage',
		info: [	],
		price: 1.67
	},
	{
		id: 5,
		name: 'PizzaFat\'s Herbs',
		info: [true, true, false],
		price: 0.7
	},
	{
		id: 6,
		name: 'Fire Roasted Red Pepper',
		info: [true, true, false],
		price: 2
	},
	{
		id: 7,
		name: "Fresh Rocket Leaves",
		info: [true, true, false],
		price: 0.5
	},
	{
		id:8,
		name: 'Garlic Butter',
		info: [true, true, false],
		price: 0.6
	},
	{
		id: 9,
		name: 'Goats Cheese',
		info: [true, true, false],
		price: 2.12
	},
	{
		id: 10,
		name: 'Gran Moravia Cheese',
		info: [true, true, false],
		price: 1.5
	}
];



// (function() {

// 	var app = angular.module("app", []);
// 	app.controller('PizzaCreatorController', function($scope) {

// 		$scope.toppings = toppings;
// 		$scope.pizzaSizes = pizzaSizes;

// 		$scope.order = {
// 			size: -1,
// 			toppings: [],
// 			price: 0,
// 			total: function() {
// 				var sizePrice = $scope.pizzaSizes.filter(function(s) {
// 					return s.id == $scope.order.size;
// 				});

// 				var p = (sizePrice.length > 0) ? sizePrice[0].price : 0;
// 				for (var i = 0; i < $scope.order.toppings.length; i++) {
// 					var id =  $scope.order.toppings[i];
// 					p += toppings.filter(function(t) { return t.id == id})[0]['price'];
// 				}
// 				return p.toFixed(2);
// 			}
// 		};

// 		$scope.isInOder = function(topping) {
// 			return $scope.order.toppings.indexOf(topping);
// 		}

// 		$s

// 		$scope.toggleTopping = function(topping) {
// 			var index = $scope.order.toppings.indexOf(topping.id);

// 			// if topping already selected
// 			if (index > -1 ) {
// 				$scope.order.toppings.splice(index, 1)
// 			} else {
// 				$scope.order.toppings.push(topping.id)
// 			}
// 			$scope.order.toppings.sort();
// 		}

// 		$scope.submitOrder = function() {
// 			console.log($scope.order);
// 			return false;
// 		}
// 	});


// })();
