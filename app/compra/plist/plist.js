var miControlador = miModulo.controller(
    "compraPlistController",
    ['$scope', '$http', '$routeParams', '$location', 'auth',
        function ($scope, $http, $routeParams, $location, auth) {
            if (auth.data.status != 200) {
                $location.path('/login');
            }
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;
            if ($scope.authUsername.tipo_usuario_obj.id == 2) {
                $scope.titulo = "Factura (" + $routeParams.facturaId + ")";
            }
            $scope.paginaActual = parseInt($routeParams.page);
            $scope.rppActual = parseInt($routeParams.rpp);
            $scope.rppS = [10, 50, 100];
            $scope.controller = "compraPlistController";
            $scope.filter = $routeParams.id;
            $scope.filter1 = $routeParams.filter;
            $scope.buscar = $routeParams.buscar;
            $scope.ordenar = $routeParams.order;
            $scope.ascordesc = $routeParams.ascdesc;
            if($routeParams.order==undefined){
                $scope.ordenar = "id";

            }
            if($routeParams.ascdesc==undefined){
                $scope.ascordesc = "asc";
            }
            if($routeParams.buscar ==undefined){
                $scope.buscar = "";
            }
            if($routeParams.id==undefined || $routeParams.filter==undefined){
                $scope.filter = "";
                $scope.filter1 = "";

            }

            if ($routeParams.id != null) {
                urlgetpage = 'http://localhost:8081/trolleyes/json?ob=compra&op=getpage&rpp=' + $routeParams.rpp + '&page=' + $routeParams.page + '&id=' + $routeParams.id + '&filter=' + $routeParams.filter+'&buscar='+ $scope.buscar+'&order='+$scope.ordenar+','+$scope.ascordesc
                urlgetcount = 'http://localhost:8081/trolleyes/json?ob=compra&op=getcount&filter=' + $routeParams.filter + '&id=' + $routeParams.id+'&buscar='+ $scope.buscar+'&order='+$scope.ordenar+','+$scope.ascordesc
            } else {
                urlgetpage = 'http://localhost:8081/trolleyes/json?ob=compra&op=getpage&rpp=' + $routeParams.rpp + '&page=' + $routeParams.page+'&buscar='+ $scope.buscar+'&order='+$scope.ordenar+','+$scope.ascordesc
                urlgetcount = 'http://localhost:8081/trolleyes/json?ob=compra&op=getcount'+'&buscar='+ $scope.buscar+'&order='+$scope.ordenar+','+$scope.ascordesc
            }
            $http({
                method: 'POST',
                url: urlgetpage
            }).then(function (response) {
                $scope.status = response.data.status;
                $scope.pagina = response.data.message;
            }, function () { })


            $http({
                method: 'POST',
                url: urlgetcount
            }).then(function (response) {
                $scope.status = response.data.status;
                $scope.numRegistros = response.data.message;
                $scope.numPaginas = Math.ceil($scope.numRegistros / $routeParams.rpp);
                $scope.calcPage = [];
                for (const p of $scope.rppS) {
                    const res = $scope.paginaActual / $scope.numPaginas;
                    const next = Math.ceil($scope.numRegistros / p);
                    $scope.calcPage.push(Math.round(res * next));
                }
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

            $scope.buscarFunc = function (b) {
                $location.path('/compra/plist/10/1/'+ $scope.filter +'/'+ $scope.filter1 +'/' + b);


            }



        }
    ]
)