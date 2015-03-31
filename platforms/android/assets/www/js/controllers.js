angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('Ctrl', function($scope, $http) {

  $scope.activities2 = [
    { title: 'Balloon Expo', id: 1 },
    { title: 'Nanotechnology for Kids', id: 2 },
    { title: 'Nanito is going to India', id: 3 },
    { title: 'Showing this to Juan', id: 4 },
    { title: 'Experiment three of four', id: 5 }
  ];

   
        $http.get("http://localhost/getact.php").success(function(data){
            //alert(data);
            $scope.activities = data;

           
        }).
        error(function(data, status, headers, config) {
            alert("ERROR: Request error");
        });
  
})

.controller('ActCtrl', function($scope, $http, $stateParams ) {

         $http.get("http://localhost/getsingleact.php&id="+$stateParams.actID).success(function(data){
            alert(JSON.stringify(data));
            $scope.activity = data;

           
        }).
        error(function(data, status, headers, config) {
            alert("ERROR: Request error");
        });
});

