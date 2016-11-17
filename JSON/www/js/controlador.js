var app = angular.module("moduloControlador",[]);

app.controller("controlador",["$scope","$http","$ionicPopup",function($scope,$http,$ionicPopup){
    $scope.result = "";
  $http.get('json/datos.json')
  //$http.get('http://ofimenutesting.cloudapp.net/api/sincronizacion/sincronizacioninicial/88/000')
    .success(function(data, status, headers,config){
      
      $scope.result = data.Idiomas; // for UI
      
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });


/*$scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Try again later!',
     template: 'No Connection Found.'
   });
   alertPopup.then(function(res) {
     console.log('Thank you for advice.');
   });
 };*/

 //Popup
 $scope.showPopup = function() {
 
  $ionicPopup.show({
    title :'Hola que ase',
    templateUrl : 'templates/popup.html',
    
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
         //Cuando le das a aceptar...
        }
      }
    ]
	});
    }

}])