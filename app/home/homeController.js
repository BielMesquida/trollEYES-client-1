var miControlador = miModulo.controller(
    "homeController",
    ['$scope', '$http', 'auth', '$location', '$routeParams', 'promesasService',
        function ($scope, $http, auth, $location, $routeParams, promesasService) {
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            $scope.controller = "homeController";
            $scope.cantidad = 1;


            if (!$routeParams.page) {
                $scope.paginaActual = 1;
            } else {
                $scope.paginaActual = parseInt($routeParams.page);
            }
            if (!$routeParams.rpp) {
                $scope.rppActual = 10;
            } else {
                $scope.rppActual = parseInt($routeParams.rpp);
            }
            $scope.controller = "productoHomeController";



            $http({
                method: 'GET',
                url: 'http://localhost:8081/trolleyes/json?ob=producto&op=getpage&rpp=' + $scope.rppActual + '&page=' + $scope.paginaActual
            }).then(function (response) {
                $scope.status = response.data.status;
                $scope.pagina = response.data.message;
            }, function () { })

            $http({
                method: 'GET',
                url: 'http://localhost:8081/trolleyes/json?ob=producto&op=getcount'
            }).then(function (response) {
                $scope.status = response.data.status;
                $scope.numRegistros = response.data.message;
                $scope.numPaginas = Math.ceil($scope.numRegistros / $scope.rppActual);
                $scope.calcPage = [];
                paginacion(2);
            }, function () { })

            function paginacion(vecindad) {
                vecindad++;
                $scope.botonera = [];
                for (i = 1; i <= $scope.numPaginas; i++) {
                    if (i == 1) {
                        $scope.botonera.push(i);
                    } else if (i > ($scope.paginaActual - vecindad) && i < ($scope.paginaActual + vecindad)) {
                        $scope.botonera.push(i);
                    } else if (i == $scope.numPaginas) {
                        $scope.botonera.push(i);
                    } else if (i == ($scope.paginaActual - vecindad) || i == ($scope.paginaActual + vecindad)) {
                        $scope.botonera.push('...');
                    }
                }
            }

            $scope.addCarrito = function (idProducto, cantidad) {
                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/trolleyes/json?ob=carrito&op=add&id=' + idProducto + '&cantidad=' + cantidad
                }).then(function (response) {
                    if (response.status == 200) {
                        listaoCarro()
                        alert("Producto añadido al carrito con exito")
                    } else {
                        alert("Fallo al añadir el producto")
                    }

                })
            }
            function listaoCarro() {
                promesasService.ajaxListaCarro().then(function (response) {
                    $scope.status = response.data.status;
                    $scope.carrito = response.data.message;
                })

            }listaoCarro()
            $scope.sumaCantidad = function(cantidadProd, idProd) {
              
                if($scope.carrito != null){
                for (i = 0; i < $scope.carrito.length; i++) {
                    if ($scope.carrito[i].id== idProd) {
                        return cantidadProd + $scope.carrito[i].cantidad 
                    }
                }
            }
            return cantidadProd
                
            }
            $scope.buscar = function(texto){
                
            }
        }
    ]
)