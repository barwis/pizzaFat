'use strict';

angular
	.module('home', ['basket'])
	.controller('HomeCtrl', function(BasketService) {
		this.appName = "pizza!"
	});