miModulo.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/homeTemplate.html',
            controller: 'homeController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/producto/plist/:rpp/:page', {
            templateUrl: 'app/producto/plist/plist.html',
            controller: 'productoPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/producto/remove/:id', {
            templateUrl: 'app/producto/remove/remove.html',
            controller: 'productoRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/producto/view/:id', {
            templateUrl: 'app/producto/view/view.html',
            controller: 'productoViewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/producto/edit/:id', {
            templateUrl: 'app/producto/edit/edit.html',
            controller: 'productoEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/producto/new', {
            templateUrl: 'app/producto/new/new.html',
            controller: 'productoNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/home/:rpp/:page', {
            templateUrl: 'app/homeTemplate.html',
            controller: 'homeController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/login', {
            templateUrl: 'app/usuario/login/login.html',
            controller: 'usuarioLoginController',
            css: 'app/usuario/login/login.css',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        });
        $routeProvider.when('/logout', {
            templateUrl: 'app/usuario/logout/logout.html',
            controller: 'usuarioLogoutController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        });
        $routeProvider.when('/producto/fill', {
            templateUrl: 'app/producto/fill/fill.html',
            controller: 'productoFillController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        })

    }
])