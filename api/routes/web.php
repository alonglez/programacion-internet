<?php

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

//USERS CRUD

//CREATE
$router->post('/users', ['uses' => 'UsersController@createUser']);

//READ
$router->get('/users', ['uses' => 'UsersController@index']);

//UPDATE
$router->put('/users', ['uses' => 'UsersController@updateUser']);

//DELETE
$router->delete('/users', ['uses' => 'UsersController@deleteUser']);

//CATEGORIES CRUD

//CREATE
$router->post('/categories', ['uses' => 'CategoriesController@createCategory']);

//READ
$router->get('/categories', ['uses' => 'CategoriesController@index']);

//UPDATE
$router->put('/categories', ['uses' => 'CategoriesController@updateCategory']);

//DELETE
$router->delete('/categories', ['uses' => 'CategoriesController@deleteCategory']);

