miModulo.controller(
    "usuarioLoginController",
    ['$scope', '$http', '$location', 'promesasService', '$routeParams',
        function ($scope, $http, $location, promesasService, $routeParams) {
            $scope.controller = "usuarioLoginController";
            //--
            $scope.fallo = false;
            $scope.hecho = false;
            $scope.falloMensaje = "";
            //--
            $scope.login = function () {
                promesasService.ajaxLogin($scope.username, $scope.password, $routeParams.token)
                    .then(function (response) {
                        if (response.data.status != 200) {
                            $scope.fallo = true;
                            $scope.falloMensaje = response.data.message;
                        } else {
                            $scope.fallo = false;
                            $location.path('/home');
                        }
                        $scope.hecho = true;
                    }, function (error) {
                        $scope.hecho = true;
                        $scope.fallo = true;
                        $scope.falloMensaje = error.message + " " + error.stack;
                    });
            }
            $scope.volver = function () {
                $scope.fallo = false;
                $scope.hecho = false;
                $scope.falloMensaje = "";
            }

            $scope.recuContra = function (){
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/trolleyes/json?ob=usuario&op=getcount'
                }).then(function (response) {
                    $scope.status = response.data.status;
                    $scope.pagina = response.data.message;
                }, function () {})
            }
            
            $scope.logAdmin = function(){
                $scope.username = "trolleyes"
                $scope.password = "trolleyes"
                $scope.login();
            }

            $scope.logClient = function(){
                $scope.username = "paco"
                $scope.password = "trolleyes"
                $scope.login();
            }
        }
    ])