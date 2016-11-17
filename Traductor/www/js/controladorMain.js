var app = angular.module("moduloMain",[]);
app.controller("controladorMain",["$scope","$rootScope","$translate",function($scope,$rootScope,$translate){



    $rootScope.ChangeLanguage = function(lang){
		$translate.use(lang);
	}




}])