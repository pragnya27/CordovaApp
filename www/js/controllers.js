angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
//});

$scope.chats = Chats.all();   
$scope.remove = function(chat) {
    Chats.remove(chat);
};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId); 
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
})

/*fetch beer inventory data*/
.controller('BeersCtrl', function($scope, Beers, $stateParams) {
	Beers.getBeers(function(beers){
		$scope.beers = beers;		
	});
	
	/* delete beer  */
	$scope.remove = function (beer){
		Beers.removeBeer(function(beers){
			$scope.beers = beers;
		}, beer.image, JSON.stringify($scope.beers));
	}
})

/*fetch details for a particular beer*/
.controller('BeerCtrl', function($scope, Beers, $stateParams) {
	Beers.getBeer(function(beer){
		$scope.beer = beer;		
	}, $stateParams.beerId);
});
