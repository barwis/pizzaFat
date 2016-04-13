'use strict';

angular
	.module('basket', [])
	.controller('BasketCtrl', function($scope, BasketService) {
		$scope.appName = "pizza!"
		$scope.items = BasketService.items;
		$scope.totalPrice = BasketService.getTotalPrice();

		$scope.loadState = function() {
			BasketService.loadState();
			$scope.items = BasketService.items;
		}

		$scope.removeFromBasket = function(i) {
			BasketService.items.splice(i, 1)
			BasketService.saveState();
			$scope.totalPrice = BasketService.getTotalPrice();
		}

		$scope.getTotalPrice = function() {
			return BasketService.getTotalPrice();
		}

		$scope.$watch(
			function(){
				return BasketService.getTotalPrice();
			},
			function(newVal) {
				$scope.totalPrice = newVal
			}
		)

	})

	.service('BasketService', function($http) {
		this.items = [];

		this.loadState = function() {
			this.items = JSON.parse(localStorage.getItem('PizzaFatOrders'));
			if (this.items === null)	 {
				this.items = [];
				this.saveState();
			}
		}

		this.saveState = function() {
			localStorage.setItem('PizzaFatOrders', JSON.stringify(this.items));
			this.getTotalPrice();
		}

		this.clearBasket = function() {
			this.items = [];
			saveState();
		}

		this.addToBasket = function(item) {
			this.items.push(item)
			this.saveState();
		}

		this.getTotalPrice = function() {
			var price = 0;
			if (this.items.length === 0 ) return price;
			for (var i = 0; i < this.items.length; i ++) {
				price += this.items[i].price;
			}
			
			return price;
		}

	})