miModulo.component('productomodal', {
    //restrict: 'A',
    templateUrl: 'app/producto/selection/modal.html',
    bindings: {
        idproducto: '=',
        desproducto: '=',
    },
    controllerAs: 'c',
    controller: addModalVarController
});

function addModalVarController($http,$scope) {
    var self = this;
    arrayDeVariables = {
        producto_id: "",
        producto_descripcion: "",
    }

    $scope.paginaActual = 1;
    $scope.rppActual = 10;
    $scope.rppS = [10, 50, 100];

    $http({
        method: 'POST',
        url: 'http://localhost:8081/trolleyes/json?ob=producto&op=getpage&rpp=' + $scope.rppActual + '&page=' + $scope.paginaActual
    }).then(function (response) {
        $scope.status = response.data.status;
        $scope.pagina = response.data.message;
    }, function () {})

    $http({
        method: 'POST',
        url: 'http://localhost:8081/trolleyes/json?ob=producto&op=getcount'
    }).then(function (response) {
        $scope.status = response.data.status;
        $scope.numRegistros = response.data.message;
        $scope.numPaginas = Math.ceil($scope.numRegistros / $scope.rppActual);
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
     $scope.recargarPagina = function(p){
         $scope.paginaActual = p;
        $http({
            method: 'POST',
            url: 'http://localhost:8081/trolleyes/json?ob=producto&op=getpage&rpp=' + $scope.rppActual + '&page=' + $scope.paginaActual
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.pagina = response.data.message;
        }, function () {})
    

     }
     $scope.recargarRpp = function(r){
        $scope.rppActual = r;
       $http({
           method: 'POST',
           url: 'http://localhost:8081/trolleyes/json?ob=producto&op=getpage&rpp=' + $scope.rppActual + '&page=' + $scope.paginaActual
       }).then(function (response) {
           $scope.status = response.data.status;
           $scope.pagina = response.data.message;
       }, function () {})
       $http({
        method: 'POST',
        url: 'http://localhost:8081/trolleyes/json?ob=producto&op=getcount'
    }).then(function (response) {
        $scope.status = response.data.status;
        $scope.numRegistros = response.data.message;
        $scope.numPaginas = Math.ceil($scope.numRegistros / $scope.rppActual);
        $scope.calcPage = [];
        for (const p of $scope.rppS) {
            const res = $scope.paginaActual / $scope.numPaginas;
            const next = Math.ceil($scope.numRegistros / p);
            $scope.calcPage.push(Math.round(res * next));
        }
        paginacion(2);
    }, function () {})

   
     }
     
     $scope.seleccionar = function(producto_id, producto_descripcion){
        self.idproducto = producto_id;
        self.desproducto = producto_descripcion;
     

       
     }
}
