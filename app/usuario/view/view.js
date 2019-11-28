var miControlador = miModulo.controller(
    "usuarioViewController",
    ['$scope', '$http', '$routeParams', 'auth', 'promesasService',

        function ($scope, $http, $routeParams, auth, promesasService) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            //--
            $scope.controller = "usuarioViewController";
            //--
            $scope.id = $routeParams.id;
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            promesasService.ajaxGet('usuario', $scope.id).then(function (response) {
                $scope.id = response.data.message.id;
                $scope.dni = response.data.message.dni;
                $scope.nombre = response.data.message.nombre;
                $scope.apellido1 = response.data.message.apellido1;
                $scope.apellido2 = response.data.message.apellido2;
                $scope.tipo_usuario_obj = response.data.message.tipo_usuario_obj;
                $scope.login = response.data.message.login;
                $scope.email = response.data.message.email;
                $scope.link_factura = response.data.message.link_factura;
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