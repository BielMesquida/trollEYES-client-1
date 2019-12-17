var miControlador = miModulo.controller(
    "carritoController",
    ['$scope', '$http', 'auth', '$location', '$routeParams','$window', 'promesasService', '$timeout',
        function ($scope, $http, auth, $location, $routeParams, $window, promesasService, $timeout) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            $scope.controller = "carritoController";
            $scope.carrito = null;

            $scope.cantidad = 1;
            
            $http({
                method: 'GET',
                url: 'http://localhost:8081/trolleyes/json?ob=carrito&op=list'
            }).then(function (response) {
                $scope.status = response.data.status;
                $scope.carrito = response.data.message;
                $scope.carritoProducto = [];
                $scope.total = 0
            }).then(function (){
                for (i =0;i<$scope.carrito.length;i++){
                    $scope.total += $scope.carrito[i].cantidad * $scope.carrito[i].producto_obj.precio
                }
                $scope.total=$scope.total.toFixed(2);
            })

            function listaoCarro(){
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/trolleyes/json?ob=carrito&op=list'
                }).then(function (response) {
                    $scope.status = response.data.status;
                    $scope.carrito = response.data.message;
                    $scope.carritoProducto = [];
                    $scope.total = 0
                }).then(function () {
                    for (i = 0; i < $scope.carrito.length; i++) {
                        $scope.total += $scope.carrito[i].cantidad * $scope.carrito[i].producto_obj.precio
                    }
                    $scope.total=$scope.total.toFixed(2);
                })
            }

            $scope.addCarrito = function (idProducto, cantidad) {
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/trolleyes/json?ob=carrito&op=add&id=' + idProducto + '&cantidad=' + cantidad
                }).then(function (response) {
                    if (response.status == 200) {
                        listaoCarro()
                    }
                })
            }

            $scope.delCarrito = function (idProducto, cantidad) {
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/trolleyes/json?ob=carrito&op=remove&id=' + idProducto + '&cantidad=' + cantidad
                }).then(function (response) {
                    if (response.status == 200) {
                        listaoCarro()
                    } 
                })
            }

            $scope.vaciarCarrito = function () {
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/trolleyes/json?ob=carrito&op=empty'
                }).then(function (response) {
                    if (response.status == 200) {
                        listaoCarro()
                    } 
                })
            }

            $scope.comprar = function (){
                
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/trolleyes/json?ob=carrito&op=buy'
                }).then(function (response) {
                    $scope.status = response.data.status;
                    $scope.message = response.data.message;
                    if ($scope.status == 401) {
                        $location.path('/login');
                    }
                })
                        if ($scope.status == 200) {
                            $location.path('/compra/plist/10/1/' + $scope.message + '/factura');
                        }
            }
        }
    ]
)