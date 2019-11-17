var miControlador = miModulo.controller(
    "facturaEditController",
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
            $scope.controller = "facturaEditController";
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            promesasService.ajaxGet('factura', $scope.id)
                .then(function (response) {
                    $scope.id = response.data.message.id;
                    $scope.fecha = response.data.message.fecha;
                    $scope.iva = response.data.message.iva;
                    $scope.usuario_id = response.data.message.usuario_obj.id;
                  
                  
                }, function (error) {
                    $scope.fallo = true;
                });

            $scope.modificar = function () {
                const datos = {
                    id: parseInt($routeParams.id),
                    fecha: $scope.fecha,
                    iva: parseInt($scope.iva),
                    usuario_id: $scope.usuario_id,
                }
                var jsonToSend = {
                    data: JSON.stringify(datos)
                };
                $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
                $http.get('http://localhost:8081/trolleyes/json?ob=factura&op=update', {
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