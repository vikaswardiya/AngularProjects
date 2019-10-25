app.factory("studentService", function($rootScope){
    $rootScope.data=[];
    return {
        
prepforBroadcast:function(data){
    console.log("perforbroadcast worked-------------++++===!!!");
    var sourceCopy = angular.copy(data);
    $rootScope.data.push(sourceCopy);
    $rootScope.$broadcast('handlebroadcast');
}

}
});