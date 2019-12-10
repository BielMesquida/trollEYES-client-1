var miControlador = miModulo.controller(
    "facturaNewController",
    ['$scope', '$http', '$routeParams', '$window', 'promesasService', 'auth', '$location',
        function ($scope, $http, $routeParams, $window, promesasService, auth, $location) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            if ($scope.authStatus != 200) {
                $location.path('/login');
            }
            //--
            $scope.id = $routeParams.id;
            $scope.controller = "facturaNewController";
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //
            $scope.usu = $routeParams.usu;
            if ($scope.usu=="usuario"){
            promesasService.ajaxGet('usuario', $scope.id)
            .then(function (response) {
              $scope.usuario_login = response.data.message.login;
              
              
            }, function (error) {
                $scope.fallo = true;
            });
        }
            
            //--
            $scope.guardar = function () {
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
                $http.get('http://localhost:8081/trolleyes/json?ob=factura&op=insert', {
                        params: jsonToSend
                    })
                    .then(function (response) {
                        if (response.data.status != 200) {
                            $scope.fallo = true;
                            $scope.falloMensaje = response.data.response;
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