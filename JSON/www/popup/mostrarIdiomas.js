var idiomas = showPopup = function() {
  $scope.data = {};
  $ionicPopup.show({
    templateUrl: 'templates/idiomas.html',
    title: 'Enter Username',
    subTitle: 'Please Enter Username',
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