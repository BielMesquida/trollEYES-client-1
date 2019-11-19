var miControlador = miModulo.controller(
    "tipo_usuarioViewController",
    ['$scope', '$http', '$routeParams', 'auth', 'promesasService',

        function ($scope, $http, $routeParams, auth, promesasService) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            //--
            $scope.controller = "tipo_usuarioViewController";
            //--
            $scope.id = $routeParams.id;
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            promesasService.ajaxGet('tipo_usuario', $scope.id).then(function (response) {
                $scope.id = response.data.message.id;
                $scope.descripcion = response.data.message.descripcion;
            
              
            }, function () {
                $scope.fallo = true;
                $scope.falloMensaje = "No se ha podido acceder a los datos del servidor";
            });
            //--
            $scope.volver = function () {
                window.history.back();
            };

        }
    ]
);