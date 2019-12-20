var miControlador = miModulo.controller(
    "productoNewController",
    ['$scope', '$http', '$routeParams', '$window', 'promesasService', 'auth', '$location',
        function ($scope, $http, $routeParams, $window, promesasService, auth, $location) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            if ($scope.authStatus != 200) {
                $location.path('/login');
            }
            //--
            $scope.id = $routeParams.id;
            $scope.tipo_producto_id="";
            $scope.tipo_producto_descripcion="";
            $scope.controller = "productoNewController";
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            $scope.guardar = function () {
                
                oformData= new FormData(userForm);
                oformData.append("id",4);

                $http({
                    headers: {'Content-Type': undefined},                  
                    method: 'POST',
                    url: 'http://localhost:8081/trolleyes/json?ob=producto&op=image', 
                    data: oformData,                         
                }).then(function (response) {
                    $scope.status = response.data.status;
                    $scope.urlImage = response.data.message;
                }).then(function () {
                    const datos = {
                        id: $routeParams.id,
                        codigo: $scope.codigo,
                        existencias: $scope.existencias,
                        precio: parseFloat($scope.precio),
                        imagen: $scope.urlImage,
                        descripcion: $scope.descripcion,
                        tipo_producto_id: $scope.tipo_producto_id
                    }
                    var jsonToSend = {
                        data: JSON.stringify(datos)
                    };
                    $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
                    $http.get('http://localhost:8081/trolleyes/json?ob=producto&op=insert', {
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
                })
            }
            $scope.volver = function () {
                window.history.back();
            };
            $scope.cerrar = function () {
                $location.path('/home');
            };

            $scope.uploadImage = function () {
               console.log("hola");
            };

           
          
        
        }
    ]

)