var miControlador = miModulo.controller(
    "productoViewController",
    ['$scope', '$http', '$routeParams', 'auth', 'promesasService',

        function ($scope, $http, $routeParams, auth, promesasService) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            //--
            $scope.controller = "productoViewController";
            //--
            $scope.id = $routeParams.id;
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            promesasService.ajaxGet('producto', $scope.id).then(function (response) {
                $scope.id = response.data.message.id;
                $scope.descripcion = response.data.message.descripcion;
                $scope.codigo = response.data.message.codigo;
                $scope.existencias = response.data.message.existencias;
                $scope.precio = response.data.message.precio;
                $scope.tipo_producto_obj = response.data.message.tipo_producto_obj;
                $scope.imagen = response.data.message.imagen;
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