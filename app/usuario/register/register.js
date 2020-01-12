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
            
            $scope.guardar = function () {
                const datos = {
                    //id: $routeParams.id,
                    dni: $scope.dni,
                    nombre: $scope.nombre,
                    apellido1: $scope.apellido1,
                    apellido2: $scope.apellido2,
                    login: $scope.login,
                    password: forge_sha256($scope.password),
                    email: $scope.email,
                    tipo_usuario_id: $scope.tipo_usuario_id
                    
                }
                var jsonToSend = {
                    data: JSON.stringify(datos)
                };
                $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
                $http.get('http://localhost:8081/trolleyes/json?ob=usuario&op=register', {
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
            
    ])