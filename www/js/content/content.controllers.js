angular.module('your_app_name.content.controllers', [])

.controller('FashionContentCtrl', function($scope, $state, $ionicPopup, $rootScope, product, ShoppingCartService, $ionicLoading) {
	$scope.goBack = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
  };

	$scope.product = product;

  $scope.addToCart = function(product) {
		$ionicLoading.show({
			template: 'Adding to cart',
			duration: 1000
		});

		product.qty = 1;
		product.size = "M";
		product.color = "black";
  	ShoppingCartService.addProduct(product);
  };

	var colorPopup = {},
			sizePopup = {};

	$scope.chosen_color = 'Navy';
	$scope.chosen_size = 'M';

	$scope.openColorChooser = function(){
		colorPopup = $ionicPopup.show({
			cssClass: 'popup-outer color-chooser-view',
			templateUrl: 'views/content/fashion/color-chooser.html',
			scope: angular.extend($scope, {chosen_color: $scope.chosen_color}),
			title: 'Color',
			buttons: [
				{ text: 'Close', type: 'close-popup' }
			]
		});
	};

	$scope.openSizeChooser = function(){
		sizePopup = $ionicPopup.show({
			cssClass: 'popup-outer size-chooser-view',
			templateUrl: 'views/content/fashion/size-chooser.html',
			scope: angular.extend($scope, {chosen_size: $scope.chosen_size}),
			title: 'Size',
			buttons: [
				{ text: 'Close', type: 'close-popup' }
			]
		});
	};
})

.controller('FoodContentCtrl', function($scope, $state, $rootScope, $ionicPopup, product) {
	$scope.goBack = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
	};

	$scope.product = product;

	$scope.product.selected_schedule = {
		name: "Today 12:00 pm to 12:00 am"
	};

	$scope.product.dishes = [
		{
			name:"TACOSSA",
			rating: 4
		},
		{
			name:"MIXTE",
			rating: 2
		}
	];

	$scope.product.addresses = [
		{
			street: "32, Avenu FAL OULD OOMEIR,AGDAL",
			city: "Rabat",
			state: "Rabat",
			postal_code: "53000",
			phone: "+ 212 6 25 00 00 69 ",
			lat: 34.0026391,
			lng: -6.8509895
		},
		{
			street: "Avenue Al Atlas",
			city: "Casablanca",
			state: "Grand casablanca",
			postal_code: "11210",
			phone: " + 212 6 25 00 00 70 ",
			lat: 34005820,
			lng: -6841866
		}
	];

	$scope.product.selected_address = product.addresses[0];

	$scope.selectAddress = function(address){
		$scope.product.selected_address = address;
		addressPopup.close();
	};

	var schedulesPopup = {},
			addressPopup = {};

	$scope.openSchedules = function(){
		schedulesPopup = $ionicPopup.show({
			cssClass: 'popup-outer food-schedules-view',
			templateUrl: 'views/content/food/schedules.html',
			scope: angular.extend($scope, {}),
			title: 'More info',
			buttons: [
				{ text: 'Close', type: 'close-popup' }
			]
		});
	};

	$scope.openAddresses = function(){
		addressPopup = $ionicPopup.show({
			cssClass: 'popup-outer food-addresses-view',
			templateUrl: 'views/content/food/addresses.html',
			scope: angular.extend($scope, {addresses: $scope.product.addresses, selected_address: $scope.product.selected_address}),
			title: 'Addresses',
			buttons: [
				{ text: 'Close', type: 'close-popup' }
			]
		});
	};

	$scope.$on('mapInitialized', function(event, map) {
		// If we want to access the map in the future
		$scope.map = map;
	});
})

.controller('TravelContentCtrl', function($scope, $state, $rootScope, product) {
	$scope.goBack = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
  };

	$scope.product = product;
})

.controller('DealsContentCtrl', function($scope, $state, $rootScope, product) {
	$scope.goBack = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
	};

	$scope.product = product;
})

.controller('RealStateContentCtrl', function($scope, $state, $rootScope, product) {
	$scope.goBack = function() {
		var previous_view = _.last($rootScope.previousView);
		$state.go(previous_view.fromState, previous_view.fromParams );
	};

	$scope.product = product;
})




;
