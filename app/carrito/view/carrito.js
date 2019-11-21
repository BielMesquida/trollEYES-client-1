var miControlador = miModulo.controller(
    "carritoController",
    ['$scope', '$http', 'auth', '$location', '$routeParams','$window', 'promesasService',
        function ($scope, $http, auth, $location, $routeParams, $window, promesasService) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            $scope.controller = "carritoController";
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
                    getProducto($scope.carrito[i])
                }
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
                }).then(function (){
                    for (i =0;i<$scope.carrito.length;i++){
                        getProducto($scope.carrito[i])
                    }
                })
            }

            function getProducto(producto) {
                promesasService.ajaxGet('producto', producto.id)
                .then(function (response) {
                    $scope.status = response.data.status;
                    response.data.message["cantidad"] = producto.cantidad;
                    $scope.carritoProducto.push(response.data.message);
                    $scope.total += response.data.message.cantidad * response.data.message.precio
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
                $window.location.href = "/trollEYES-client-1/#!/comprar"
            }
        }
    ]
)