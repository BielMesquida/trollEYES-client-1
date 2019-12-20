miModulo.controller(
    "usuarioRegisterController",
    ['$scope', '$http', '$location', 'promesasService',
        function ($scope, $http, $location, promesasService,) {
            $scope.controller = "usuarioRegisterController";
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            
            
        }
    ])