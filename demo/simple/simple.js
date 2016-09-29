angular.module("demo", ["ngRoute", "dndLists"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/simple', {
                templateUrl: 'simple/simple-frame.html',
                controller: 'SimpleDemoController'
            })
            .otherwise({redirectTo: '/simple'});
    });

angular.module("demo").controller("SimpleDemoController", function($scope) {

    $scope.models = {
        selected: null,
        lists: {"Quote Requested": [],
                "In Process (Need More Info)": [],
                "In Process (Delivered to Carrier)": [],
                "In Process (Quote Delivered)": [],
                "Policy Executed (Won)": [],
                "Policy Declined (Lost/Dead)": []}
    };

    // Fill with dummy info
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists["Quote Requested"].push(                    {label: "Item A" + i});
        $scope.models.lists["In Process (Need More Info)"].push(        {label: "Item B" + i});
        $scope.models.lists["In Process (Delivered to Carrier)"].push(  {label: "Item B" + i});
        $scope.models.lists["In Process (Quote Delivered)"].push(       {label: "Item B" + i});
        $scope.models.lists["Policy Executed (Won)"].push(              {label: "Item B" + i});
        $scope.models.lists["Policy Declined (Lost/Dead)"].push(        {label: "Item B" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});
