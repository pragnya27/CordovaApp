angular.module('starter.services', [])

.factory('Beers', function($http){
	/*call to load data*/
	var getBeerData = function(callback){
		$http.get('data/inventory.json').then(callback);		    					
	};
	
	return {	    	
		getBeers : function(callback){
			getBeerData(function(beers){
				callback(beers.data.inventory);
			});
		},
		getBeer : function(callback,beerId){			
			getBeerData(function(beers){
			    beers = beers.data.inventory;
				for(var i =0, j = beers.length; i<j; i++){
					if(beers[i].image === beerId){
						callback(beers[i]);
					}
				}
			});	
		},
		removeBeer : function(callback, beerId, beers){
			beers = JSON.parse(beers);
			for(var i =0, j = beers.length; i<j; i++){			
				if(beers[i].image === beerId){				    
					beers.splice(i, 1);	
					break;
				}				
			}
			callback(beers);
		}
	};	
	
});
