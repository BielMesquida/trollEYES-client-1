miModulo.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/home/homeTemplate.html',
            controller: 'homeController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/producto/plist/:rpp/:page/:id?', {
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
            templateUrl: 'app/home/homeTemplate.html',
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

        //Usuario
        $routeProvider.when('/usuario/plist/:rpp/:page/:id?', {
            templateUrl: 'app/usuario/plist/plist.html',
            controller: 'usuarioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/usuario/remove/:id', {
            templateUrl: 'app/usuario/remove/remove.html',
            controller: 'usuarioRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/usuario/view/:id', {
            templateUrl: 'app/usuario/view/view.html',
            controller: 'usuarioViewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/usuario/edit/:id', {
            templateUrl: 'app/usuario/edit/edit.html',
            controller: 'usuarioEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/usuario/new', {
            templateUrl: 'app/usuario/new/new.html',
            controller: 'usuarioNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/usuario/fill', {
            templateUrl: 'app/usuario/fill/fill.html',
            controller: 'usuarioFillController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        });
        //Compra
        $routeProvider.when('/compra/plist/:rpp/:page/:id?/:filter?', {
            templateUrl: 'app/compra/plist/plist.html',
            controller: 'compraPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/compra/remove/:id', {
            templateUrl: 'app/compra/remove/remove.html',
            controller: 'compraRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/compra/view/:id', {
            templateUrl: 'app/compra/view/view.html',
            controller: 'compraViewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/compra/edit/:id', {
            templateUrl: 'app/compra/edit/edit.html',
            controller: 'compraEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/compra/new/:id?/:facProd?', {
            templateUrl: 'app/compra/new/new.html',
            controller: 'compraNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/compra/fill', {
            templateUrl: 'app/compra/fill/fill.html',
            controller: 'compraFillController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        });
        //Factura
        $routeProvider.when('/factura/plist/:rpp/:page/:id?', {
            templateUrl: 'app/factura/plist/plist.html',
            controller: 'facturaPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/factura/remove/:id', {
            templateUrl: 'app/factura/remove/remove.html',
            controller: 'facturaRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/factura/view/:id', {
            templateUrl: 'app/factura/view/view.html',
            controller: 'facturaViewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/factura/edit/:id', {
            templateUrl: 'app/factura/edit/edit.html',
            controller: 'facturaEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/factura/new/:id?/:usu?', {
            templateUrl: 'app/factura/new/new.html',
            controller: 'facturaNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/factura/fill', {
            templateUrl: 'app/factura/fill/fill.html',
            controller: 'facturaFillController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        });
        //Tipo producto
        $routeProvider.when('/tipo_producto/plist/:rpp/:page', {
            templateUrl: 'app/tipo_producto/plist/plist.html',
            controller: 'tipo_productoPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/tipo_producto/remove/:id', {
            templateUrl: 'app/tipo_producto/remove/remove.html',
            controller: 'tipo_productoRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/tipo_producto/view/:id', {
            templateUrl: 'app/tipo_producto/view/view.html',
            controller: 'tipo_productoViewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/tipo_producto/edit/:id', {
            templateUrl: 'app/tipo_producto/edit/edit.html',
            controller: 'tipo_productoEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/tipo_producto/new', {
            templateUrl: 'app/tipo_producto/new/new.html',
            controller: 'tipo_productoNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/tipo_producto/fill', {
            templateUrl: 'app/tipo_producto/fill/fill.html',
            controller: 'tipo_productoFillController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        });
        //Tipo usuario
        $routeProvider.when('/tipo_usuario/plist/:rpp/:page', {
            templateUrl: 'app/tipo_usuario/plist/plist.html',
            controller: 'tipo_usuarioPlistController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/tipo_usuario/remove/:id', {
            templateUrl: 'app/tipo_usuario/remove/remove.html',
            controller: 'tipo_usuarioRemoveController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/tipo_usuario/view/:id', {
            templateUrl: 'app/tipo_usuario/view/view.html',
            controller: 'tipo_usuarioViewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/tipo_usuario/edit/:id', {
            templateUrl: 'app/tipo_usuario/edit/edit.html',
            controller: 'tipo_usuarioEditController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/tipo_usuario/new', {
            templateUrl: 'app/tipo_usuario/new/new.html',
            controller: 'tipo_usuarioNewController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        })
        $routeProvider.when('/tipo_usuario/fill', {
            templateUrl: 'app/tipo_usuario/fill/fill.html',
            controller: 'tipo_usuarioFillController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        });
        //
        $routeProvider.when('/carrito', {
            templateUrl: 'app/carrito/view/carrito.html',
            controller: 'carritoController',
            resolve: {
                auth: function (promesasService) {
                    return promesasService.ajaxCheck();
                }
            }
        });
        $routeProvider.when('/comprar', {
            templateUrl: 'app/carrito/comprar/comprar.html',
            controller: 'comprarController',
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