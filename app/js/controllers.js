angular.module('SysdatApp', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $stateParams,$ionicPlatform) {
    
   // this.delegateEvents(); 
  // Form data for the login modal
  $scope.loginData = {};

  $scope.temp=[];
  $scope.parametro=$stateParams.actID;
  $scope.activity=JSON.parse(window.localStorage['Activities'] || '{}');
  $scope.confirms=JSON.parse(window.localStorage['StudentConfirmed'] || '{}');
  $scope.non=JSON.parse(window.localStorage['NonMember'] || '{}');
  $scope.userssystem=JSON.parse(window.localStorage['Users'] || '{}');

  //

  // Create the login modal for the download activities login
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

//Create the login modal for the error login message
  $ionicModal.fromTemplateUrl('templates/login-fail.html', {
    scope: $scope
  }).then(function(error_modal) {
    $scope.error_modal = error_modal;
  });

  //Create the login modal for the error login message
  $ionicModal.fromTemplateUrl('templates/upload-login.html', {
    scope: $scope
  }).then(function(upload_modal) {
    $scope.upload_modal = upload_modal;
  });

  // Triggered in the download login modal to close it
  $scope.closeLogin = function() {
    //$scope.clearData();
    $scope.modal.hide();

  };

  // Open the download activities login modal
  $scope.login = function() {
    $scope.loginData={};
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form when click download activities.
  $scope.doLogin = function() {
    //console.log('Doing login', $scope.loginData);
    
    if($scope.loginData.password == "1" && $scope.loginData.username== "1"){
      $scope.resetInfo();
      $scope.downloadActivities(1);
      
      $scope.closeLogin();
      
    }
    else if($scope.loginData.password == "crest" && $scope.loginData.username== "crest"){

        window.location.href = "#/app/init" ;
        $scope.closeLogin();
    }
    else {
        $scope.LoginFail();    
    }
    
  };



// Used by the login fail modal
  $scope.LoginFail= function(){
    $scope.error_modal.show();
  };

  $scope.closeLoginFail = function() {
    $scope.error_modal.hide();
  };

//Used by the upload login modal
  $scope.upload_closeLogin = function() {
    //$scope.clearData();
    $scope.upload_modal.hide();
    
  };

  // Open the download activities login modal
  $scope.upload_login = function() {
    $scope.loginData={};
    $scope.upload_modal.show();
  };
  

  // Perform the login action when the user submits the login form when click download activities.
  $scope.upload_doLogin = function() {
    //console.log('Doing login', $scope.loginData);
    if($scope.loginData.password == "2" && $scope.loginData.username== "2"){
      
      //aqui llamar la funcion de upload
      $scope.upload_closeLogin();
    }
    else{
      $scope.LoginFail();
      
    }

  };

  //Initialize values in this view from the local storage.
  $scope.initiliaze = function() {
 $scope.activities = JSON.parse(window.localStorage['Activities'] || '{}');
     $scope.users = JSON.parse(window.localStorage['Users'] || '{}');
  };
  

  // download activities from server, if server is not connected it will use the local values.
    $scope.downloadActivities = function(num){
      if(num==1){
     //// STEP ONE------------------------------------------>
     //// HAY INTERNET---->
     //// Select * from Activity where start_date> now()
     //// Cambiar formate de fecha, mysql.com
     $scope.activities=[{activity_id:1,title:"Balloon Events",start_date:"2015-05-31",end_date:"2015-06-01",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1},{activity_id:2,title:"Nanotechnology Expo",start_date:"2015-08-31",end_date:"2015-09-01",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1},
     {activity_id:3,title:"Nanito Conference",start_date:"2015-05-31",end_date:"2015-05-01",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1},{activity_id:4,title:"Nanito Super Event",start_date:"2015-05-31",end_date:"2015-05-01",highlights:"None",accomplishments:"None",impact:"None",contribution:"None",notes_area:null,thrust_area_id:null,available:1}];
     //SERVICIO PARA HACER EL GET, DESATIVADO, SOLO LEE DE LA VARIABLE QUE SALE ARRIBA

     
     window.localStorage['Activities'] = JSON.stringify($scope.activities);
     //// Select * from K12Students where available=1
     $scope.users=[{k12_student_id:1,member_code:"EMH001",first_name:"Chucho",last_name:"Avellanet",second_last_name:"Rodriguez",date_of_birth:"2015-03-21 16:02:35"},{k12_student_id:2,member_code:"EMH002",first_name:"Tony",last_name:"Croato",second_last_name:"Suarez",date_of_birth:"2015-03-21 19:52:47"},{k12_student_id:3,member_code:"EMH003",first_name:"Marc",last_name:"Anthony",second_last_name:"Jimenez",date_of_birth:"2015-03-21 19:55:39"},
     {k12_student_id:5,member_code:"EMH005",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:6,member_code:"EMH006",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:7,member_code:"EMH007",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:8,member_code:"EMH008",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:9,member_code:"EMH009",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:10,member_code:"EMH010",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:11,member_code:"EMH011",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:12,member_code:"EMH012",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:13,member_code:"EMH013",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:14,member_code:"EMH014",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:15,member_code:"EMH015",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:16,member_code:"EMH016",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:17,member_code:"EMH017",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:18,member_code:"EMH018",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"},
     {k12_student_id:19,member_code:"EMH019",first_name:"Ricky",last_name:"Martin",second_last_name:"Martin",date_of_birth:"2015-03-21 19:58:05"}];
     window.localStorage['Users'] = JSON.stringify($scope.users);

   }
   else{
     //// STEP TWO------------------------------------------>
     //// NO HAY INTERNET---->
     $scope.activities = JSON.parse(window.localStorage['Activities'] || '{}');
     $scope.users = JSON.parse(window.localStorage['Users'] || '{}');

}
  
  //SERVICIO PARA HACER EL GET, DESATIVADO, SOLO LEE DE LA VARIABLE QUE SALE ARRIBA
   // $http.get("http://localhost/getact.php").success(function(data){
   // alert(data);
   // $scope.activities = data;
   // }).
   //  error(function(data, status, headers, config) {
   //     alert("ERROR: Request error");
   // });
};

    $scope.resetInfo = function() {
      window.localStorage['NonMember']= "";
      window.localStorage['StudentConfirmed']="";
      window.localStorage['Activities']= "";
      window.localStorage['Users']= "";
     


  };
     //add new member to the array
     $scope.addMember = function(num) {
       $scope.dec=false;
       
      if(window.localStorage['StudentConfirmed']!=""){
           $scope.temp=JSON.parse(window.localStorage['StudentConfirmed'] || '{}');
           for (var i = 0; i < $scope.temp.length; i++) {
         if($scope.temp[i].activity==$stateParams.actID&&$scope.temp[i].user==num){
             $scope.dec=true;
         }
       };
        if(!$scope.dec){
           $scope.temp.push({activity: $stateParams.actID, user:num});
           window.localStorage['StudentConfirmed']= JSON.stringify($scope.temp);
        }
       
     // [].push.apply($scope.temp,{activity: $stateParams.actID, user:num} );
       

      }
      else{
         window.localStorage['StudentConfirmed']= JSON.stringify([{activity: $stateParams.actID, user:num}]);

      }
    };
    //desactivate the button in the members list
     $scope.desactivate = function(id) {
 
       $scope.temp1=JSON.parse(window.localStorage['StudentConfirmed'] || '{}');
        
        for (var j = 0; j<$scope.temp1.length; j++) {
        if($scope.temp1[j].user==id && $scope.temp1[j].activity==$stateParams.actID){
           return true;

        }
      
    }
    return false;
  };


  $scope.newUser = function(f, l,act) {
 

      if(window.localStorage['NonMember']!=""){
        $scope.temp=JSON.parse(window.localStorage['NonMember'] || '{}');
        $scope.temp.push({first_name:f, last_name:l, activity:act});
     // [].push.apply($scope.temp,{activity: $stateParams.actID, user:num} );
       window.localStorage['NonMember']= JSON.stringify($scope.temp);

      }
      else{
         window.localStorage['NonMember']= JSON.stringify([{first_name: f, last_name:l, activity:act}]);

      }
  };

    //list of users that click confirm
    $scope.confirmedUsers = function() {
     

        $scope.confirms=JSON.parse(window.localStorage['StudentConfirmed'] || '{}');
        $scope.nonconfirms=JSON.parse(window.localStorage['NonMember'] || '{}');
        $scope.confStudents=[];
        $scope.confNonStudents=[];


       // alert("entre");
        for (var i = 0; i <$scope.userssystem.length ; i++) {
              for (var j = 0; j <$scope.confirms.length ; j++) {
          
                                  if($scope.confirms[j].user==$scope.userssystem[i].k12_student_id&&$scope.confirms[j].activity==$scope.parametro){
                                    
                                     $scope.confStudents.push($scope.userssystem[i]);
                              
                                  }
                           }

   
        }
         for (var h = 0; h <$scope.nonconfirms.length ; h++) {
           
          
                                  if($scope.nonconfirms[h].activity==$scope.parametro){
                                    
                                     $scope.confNonStudents.push($scope.nonconfirms[h]);
                              
                                  }
                         

   
        }
        //alert(JSON.stringifu($scope.confirms));
};
    //Remove user from the list array

    $scope.removeUser = function(id) {
      

      for (var y = 0; y <$scope.confirms.length ; y++) {

      if($scope.confirms[y].user==id&&$scope.confirms[y].activity==$scope.parametro){

       $scope.confirms.splice(y,1);

     }
   }
    window.localStorage['StudentConfirmed'] = JSON.stringify($scope.confirms);
    window.location.reload(true);
    window.location.href = "#/app/init" ;
  };

})

.controller('ActCtrl', function($scope, $http, $stateParams,$ionicPlatform) {
   $ionicPlatform.registerBackButtonAction(function (event) {
                    event.preventDefault();
                    event.stopPropagation();
            }, 100);

   
  $scope.parametro=$stateParams.actID;
  
  //Esto es para sustituit el backend!!
  $scope.activities ="";
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

