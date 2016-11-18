var app = angular.module("moduloMain", []);
app.controller("controladorMain", ["$scope", "$rootScope", "$translate", "$http", "$ionicPopup", function ($scope, $rootScope, $translate, $http, $ionicPopup) {
	
	
	
	
$scope.result = "";
$http.get('json/datos.json')
		//$http.get('http://ofimenutesting.cloudapp.net/api/sincronizacion/sincronizacioninicial/88/000')
		.success(function (data, status, headers, config) {

			$scope.result = data.Idiomas; // for UI

		})
		.error(function (data, status, headers, config) {
			console.log('data error');
		})
		.then(function (result) {
			things = result.data;
		});

//Popup
$rootScope.showPopup = function() {
 
  var myPopup = $ionicPopup.show({
    title :'Hola que ase',
    templateUrl : 'templates/popup.html',
    
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
         console.log("Save");
        }
      }
    ]
	});


$rootScope.cerrarPopup = function(){
      myPopup.close();
    }
}

$rootScope.ChangeLanguage = function (lang) {
		$translate.use(lang);
		
	}



}])