var miControlador = miModulo.controller(
    "tipo_usuarioPlistController",
    ['$scope', '$http', '$routeParams', '$location', 'auth',
        function ($scope, $http, $routeParams, $location, auth) {
            if (auth.data.status != 200) {
                $location.path('/login');
            }
            $scope.authStatus = auth.data.status;
            $scope.authUsername = auth.data.message;

            $scope.paginaActual = parseInt($routeParams.page);
            $scope.rppActual = parseInt($routeParams.rpp);
            $scope.rppS = [10, 50, 100];
            $scope.controller = "tipo_usuarioPlistController";
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
            $http({
                method: 'POST',
                url: 'http://localhost:8081/trolleyes/json?ob=tipo_usuario&op=getpage&rpp=' + $routeParams.rpp + '&page=' + $routeParams.page+'&buscar='+ $scope.buscar+'&order='+$scope.ordenar+','+$scope.ascordesc
            }).then(function (response) {
                $scope.status = response.data.status;
                $scope.pagina = response.data.message;
            }, function () {})

            $http({
                method: 'POST',
                url: 'http://localhost:8081/trolleyes/json?ob=tipo_usuario&op=getcount'+'&buscar='+ $scope.buscar+'&order='+$scope.ordenar+','+$scope.ascordesc
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
            }, function () {})

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
            $scope.buscarFunc = function(b){
                $location.path('/tipo_usuario/plist/10/1/'+b);
            }



        }
    ]
)