<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->get('/getBrandName', 'ExampleController@getBrandName');
$router->post('/addBrandName', 'ExampleController@addBrandName');

$router->get('/getAllServices', 'ExampleController@getAllServices');
$router->post('/addService', 'ExampleController@addService');
$router->post('/editService', 'ExampleController@editService');
$router->post('/deleteService', 'ExampleController@deleteService');

$router->get('/getAllProducts', 'ExampleController@getAllProducts');
$router->get('/recentProducts', 'ExampleController@recentProducts');
$router->post('/addProduct', 'ExampleController@addProduct');
$router->post('/editProduct', 'ExampleController@editProduct');
$router->post('/deleteProduct', 'ExampleController@deleteProduct');

$router->get('/getAllSocialMedia', 'ExampleController@getAllSocialMedia');
$router->post('/addSocialMedia', 'ExampleController@addOrUpdateSocailMedia');

$router->get('/getDashboardData', 'ExampleController@Dashboard');

$router->get('/getAllMails', 'ExampleController@getAllMails');
$router->post('/readMail', 'ExampleController@readMail');
