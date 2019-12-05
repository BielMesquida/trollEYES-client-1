var miControlador = miModulo.controller(
    "comprarController",
    ['$scope', '$http', '$routeParams', '$location', 'auth', '$timeout',
        function ($scope, $http, $routeParams, $location, auth, $timeout) {
            if (auth.data.status != 200) {
                $location.path('/login');
            }
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            
        }
    ]
)