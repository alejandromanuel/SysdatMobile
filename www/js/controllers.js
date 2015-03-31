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

  $scope.activities= [{activity_id:1,title:"Balloon Event",start_date:"2015-05-31 00:00:00",end_date:"2015-06-01 00:00:00",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1},{activity_id:2,title:"Nanotechnology Expo",start_date:"2015-08-31 00:00:00",end_date:"2015-09-01 00:00:00",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1},{activity_id:3,title:"Nanito Conference",start_date:"2015-05-31 00:00:00",end_date:"2015-05-01 00:00:00",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1}];

   //SERVICIO PARA HACER EL GET, DESATIVADO, SOLO LEE DE LA VARIABLE QUE SALE ARRIBA
   // $http.get("http://localhost/getact.php").success(function(data){
   // alert(data);
   // $scope.activities = data;
   // }).
   //  error(function(data, status, headers, config) {
   //     alert("ERROR: Request error");
   // });

})

.controller('ActCtrl', function($scope, $http, $stateParams ) {

  //Esto es para sustituit el backend!!

  if($stateParams.actID==1){
    $scope.activity = {activity_id:1,title:"Balloon Event",start_date:"2015-05-31 00:00:00",end_date:"2015-06-01 00:00:00",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1};
   
  }

  if($stateParams.actID==2){
    $scope.activity={activity_id:2,title:"Nanotechnology Expo",start_date:"2015-08-31 00:00:00",end_date:"2015-09-01 00:00:00",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1};
  
    
  }
  if($stateParams.actID==3){
    $scope.activity=  {activity_id:3,title:"Nanito Conference",start_date:"2015-05-31 00:00:00",end_date:"2015-05-01 00:00:00",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1};

    
  }
  
   //
   //SERVICIO PARA HACER EL GET, DESATIVADO, SOLO LEE DE LA VARIABLE QUE SALE ARRIBA
   // $http.get("http://localhost/getsingleact.php&id="+$stateParams.actID).success(function(data){
   //  alert(JSON.stringify(data));
   //  $scope.activity = data;
   //}).
   // error(function(data, status, headers, config) {
   //  alert("ERROR: Request error");
   //});
});

