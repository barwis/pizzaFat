'use strict';

angular
	.module('creator', ['ngResource', 'basket'])
	.service('CreatorSrvc', function($http, $q) {
		var deferred = $q.defer();

		$http
			.get('/shopData.json')
			.then(function(data) {
				deferred.resolve(data)
			});

		this.getProducts = function() {
			return deferred.promise;
		}
	})

	.controller('CreatorCtrl', function($scope, CreatorSrvc, BasketService) {
		$scope.welcomeMessage = "Welcome to pizza creator!"
		$scope.pizzaSizes = [];
		$scope.pizzaToppings = [];
		$scope.totalPrice = 0;
		
		$scope.itemsInBasketCount = BasketService.items.length;

		$scope.pizza = {
			id: -1,
			size: null,
			toppings: [],
			price: 0
		};

		var promise = CreatorSrvc.getProducts($scope);

		promise.then(function(data) {
			$scope.pizzaSizes = data.data.products.pizza.sizes;
			$scope.pizzaToppings = data.data.products.pizza.toppings;
		})

		$scope.selectSize = function(id) {
			$scope.pizza.size = $scope.pizzaSizes.filter(function(el) { return el.id == id})[0];
			$scope.updatePrice();
		}

		$scope.reset = function() {
			$scope.pizza = {
				id: -1,
				size: null,
				toppings: [],
				price: 0
			};
		}

		$scope.updatePrice = function() {
			var price = 0;
			// get size price
			price += $scope.pizza.size.price

			var selectedToppings = [];
			for (var i = 0; i < $scope.pizza.toppings.length; i++) {
				selectedToppings.push($scope.pizzaToppings.filter(function(el) { return el.id == $scope.pizza.toppings[i].id})[0]);
			}

			
			if (selectedToppings.length > 3) {
				// sort selected toppings by price
				selectedToppings.sort(function(a,b) {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);} );
				for (var i = 3; i < selectedToppings.length; i++) {
					price += selectedToppings[i].price
				}
			}

			// to fixed just to avoid ocassional js inprecission
			// which can result displaying price like 1.60000000001
			$scope.totalPrice = parseFloat(price.toFixed(2));
			$scope.pizza.price = parseFloat(price.toFixed(2));
		}

		$scope.addToBasket = function() {
			// quickly generate uuid
			var uuid="";
			for (var i=0; i<32; i++) {
				uuid+=Math.floor(Math.random()*0xF).toString(0xF);
			}

			$scope.pizza.id = uuid;
			BasketService.addToBasket($scope.pizza);
			BasketService.totalPrice += $scope.updatePrice();
			$scope.reset();
			window.location.href = '#/basket';
		}

		$scope.toggleTopping = function(topping) {
			var index = this.pizza.toppings.indexOf(topping);

			// if topping already selected
			if (index > -1 ) {
				$scope.pizza.toppings.splice(index, 1)
			} else {
				$scope.pizza.toppings.push(topping)
			}
			$scope.pizza.toppings.sort();
			$scope.updatePrice();
		}

	})