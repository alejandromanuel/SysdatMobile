angular.module('SysdatApp', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $stateParams) {
  
  // Form data for the login modal
  $scope.loginData = {};
  $scope.temp=[];
  $scope.parametro=$stateParams.actID;

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
  
    $scope.downloadActivities = function(){
     //// STEP ONE------------------------------------------>
     //// HAY INTERNET---->
     $scope.activities=[{activity_id:1,title:"Balloon Events",start_date:"2015-05-31 00:00:00",end_date:"2015-06-01 00:00:00",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1},{activity_id:2,title:"Nanotechnology Expo",start_date:"2015-08-31 00:00:00",end_date:"2015-09-01 00:00:00",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1},{activity_id:3,title:"Nanito Conference",start_date:"2015-05-31 00:00:00",end_date:"2015-05-01 00:00:00",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1}];
     window.localStorage['Activities'] = JSON.stringify($scope.activities);
     $scope.users=[{k12_student_id:1,member_code:"EMH001",first_name:"Chucho",last_name:"Avellanet",second_last_name:"Rodriguez",date_of_birth:"2015-03-21 16:02:35"},{k12_student_id:2,member_code:"EMH002",first_name:"Tony",last_name:"Croato",second_last_name:"Suarez",date_of_birth:"2015-03-21 19:52:47"},{k12_student_id:3,member_code:"EMH003",first_name:"Marc",last_name:"Anthony",second_last_name:"Jimenez",date_of_birth:"2015-03-21 19:55:39"},{k12_student_id:4,member_code:"EMH004",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"}];
     window.localStorage['Users'] = JSON.stringify($scope.users);
     //// STEP TWO------------------------------------------>
     //// NO HAY INTERNET---->
     //$scope.activities = JSON.parse(window.localStorage['Activities'] || '{}');
     //$scope.users = JSON.parse(window.localStorage['Users'] || '{}');


  
  //SERVICIO PARA HACER EL GET, DESATIVADO, SOLO LEE DE LA VARIABLE QUE SALE ARRIBA
   // $http.get("http://localhost/getact.php").success(function(data){
   // alert(data);
   // $scope.activities = data;
   // }).
   //  error(function(data, status, headers, config) {
   //     alert("ERROR: Request error");
   // });
};
     $scope.addMember = function(num) {
       
      if(window.localStorage['StudentConfirmed']!=""){
        $scope.temp=JSON.parse(window.localStorage['StudentConfirmed'] || '{}');
       $scope.temp.push({activity: $stateParams.actID, user:num});
     // [].push.apply($scope.temp,{activity: $stateParams.actID, user:num} );
       window.localStorage['StudentConfirmed']= JSON.stringify($scope.temp);

      }
      else{
         window.localStorage['StudentConfirmed']= JSON.stringify([{activity: $stateParams.actID, user:num}]);

      }
    };
     $scope.desactivate = function(id) {
      $scope.temp1=JSON.parse(window.localStorage['StudentConfirmed'] || '{}');
      for (var i = 0; i<$scope.temp1.length; i++) {
          if($scope.temp1[i].user==id){

            return false
          }
    };
    return true;
  };
  $scope.newUser = function(f, l) {
 

      if(window.localStorage['NonMember']!=""){
        $scope.temp=JSON.parse(window.localStorage['NonMember'] || '{}');
        $scope.temp.push({first_name:f, last_name:l});
     // [].push.apply($scope.temp,{activity: $stateParams.actID, user:num} );
       window.localStorage['NonMember']= JSON.stringify($scope.temp);

      }
      else{
         window.localStorage['NonMember']= JSON.stringify([{first_name: f, last_name:l}]);

      }
  };


})

.controller('ActCtrl', function($scope, $http, $stateParams ) {

  $scope.parametro=$stateParams.actID;

  //Esto es para sustituit el backend!!
  $scope.activities = JSON.parse(window.localStorage['Activities'] || '{}');
   
  for (var i = 0; i < $scope.activities.length; i++) {

    if($scope.activities[i].activity_id==$stateParams.actID){
         $scope.activity=$scope.activities[i];

    }


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

