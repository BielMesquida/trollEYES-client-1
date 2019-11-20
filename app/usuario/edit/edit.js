var miControlador = miModulo.controller(
    "usuarioEditController",
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
            $scope.controller = "usuarioEditController";
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            promesasService.ajaxGet('usuario', $scope.id)
                .then(function (response) {
                    $scope.id = response.data.message.id;
                    $scope.dni = response.data.message.dni;
                    $scope.nombre = response.data.message.nombre;
                    $scope.apellido1 = response.data.message.apellido1;
                    $scope.apellido2 = response.data.message.apellido2;
                    $scope.tipo_usuario_obj = response.data.message.tipo_usuario_obj;
                    $scope.login = response.data.message.login;
                    $scope.email = response.data.message.email;
                    $scope.tipo_usuario_descripcion= response.data.message.tipo_usuario_obj.descripcion;

                }, function (error) {
                    $scope.fallo = true;
                });

            $scope.modificar = function () {
                const datos = {
                    id: $routeParams.id,
                    dni: $scope.dni,
                    nombre: $scope.nombre,
                    apellido1: $scope.apellido1,
                    apellido2: $scope.apellido2,
                    login: $scope.login,
                    password: forge_sha256($scope.password),
                    email: $scope.email,
                    tipo_usuario_id: $scope.tipo_usuario_id,
                                    }
                var jsonToSend = {
                    data: JSON.stringify(datos)
                };
                $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
                $http.get('http://localhost:8081/trolleyes/json?ob=usuario&op=update', {
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