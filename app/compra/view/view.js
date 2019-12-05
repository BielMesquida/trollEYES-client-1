var miControlador = miModulo.controller(
    "compraViewController",
    ['$scope', '$http', '$routeParams', 'auth', 'promesasService',

        function ($scope, $http, $routeParams, auth, promesasService) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            //--
            $scope.controller = "compraViewController";
            //--
            $scope.id = $routeParams.id;
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            promesasService.ajaxGet('compra', $scope.id).then(function (response) {
                $scope.id = response.data.message.id;
                $scope.cantidad = response.data.message.cantidad;
                $scope.factura_id = response.data.message.factura_obj.id;
                $scope.producto_obj = response.data.message.producto_obj;

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