var app = angular
  .module("app", ["ngRoute"]).config(function($routeProvider, $locationProvider){
      $routeProvider.when('/home',{
          templateUrl:'Templates/home.html',
          controller: 'addstudent'
      })
      .when('/list',{
          templateUrl:'Templates/listStudents.html',
          controller: 'listStudent'
      })
      .otherwise({
        redirectTo: "/home"
    })

      $locationProvider.hashPrefix('');
      $locationProvider.html5Mode({
          enabled: false,
          requireBase: true
        });
  })
  .controller("mainController", function($scope, $location) {
    $scope.getClass = function(path) {
      return $location.$$path.replace(/\//g, '') === path ? "active" : "";
    };
  })
  .controller("addstudent", ["$scope","$rootScope",'studentService', function($scope, $rootscope, studentService) {
      $scope.student = {
          name:'',
          marks:''
      }
      $rootscope.students=[];
      $scope.addStudent = function(){
        studentService.prepforBroadcast($scope.student);
        console.log("save button pressed",$scope.student);
        $scope.student = {name:'', marks:''};
    }
  }])
  .controller("listStudent", ["$scope","$rootScope", function($scope, $rootscope) {
    $scope.students = [];
    $scope.$on('handlebroadcast', function(evt){
        $scope.students=$rootscope.data;
    });
    $scope.students = [];
    $scope.random = Math.random();
    $scope.handlrandom = function(){
      $scope.random = Math.random();
    }

}]);
