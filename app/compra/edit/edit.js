var miControlador = miModulo.controller(
    "compraEditController",
    ['$scope', '$http', '$routeParams', '$window', '$location', 'promesasService', 'auth', '$filter',
        function ($scope, $http, $routeParams, $window, $location, promesasService, auth, $filter) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            if ($scope.authStatus != 200) {
                $location.path('/login');
            }
            //--
            $scope.fecha = new Date();
            //$scope.isOpen = false;
            //--
            $scope.id = $routeParams.id;
            //--
            $scope.controller = "compraEditController";
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            promesasService.ajaxGet('compra', $scope.id)
                .then(function (response) {
                    $scope.id = response.data.message.id;
                    $scope.cantidad = response.data.message.cantidad;
                    $scope.factura_id = response.data.message.factura_obj.id;
                    $scope.producto_id = response.data.message.producto_obj.id;
                    $scope.producto_descripcion = response.data.message.producto_obj.descripcion;
                  
                  
                }, function (error) {
                    $scope.fallo = true;
                });

            $scope.modificar = function () {
                const datos = {
                    id: $routeParams.id,
                    cantidad: $scope.cantidad,
                    factura_id: $scope.factura_id,
                    producto_id: $scope.producto_id,
                }
                var jsonToSend = {
                    data: JSON.stringify(datos)
                };
                $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
                $http.get('http://localhost:8081/trolleyes/json?ob=compra&op=update', {
                        params: jsonToSend
                    })
                    .then(function (response) {
                        if (response.data.status != 200) {
                            $scope.fallo = true;
                            $scope.falloMensaje = response.data.message;
                        } else {
                            $scope.fallo = false;
                        }
                        $scope.hecho = true;
                    }, function (error) {
                        $scope.hecho = true;
                        $scope.fallo = true;
                        $scope.falloMensaje = error.message + " " + error.stack;
                    });
            }
            $scope.volver = function () {
                window.history.back();
            };
            $scope.cerrar = function () {
                $location.path('/home');
            };
        }
    ]

)