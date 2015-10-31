<?php

$api = app(Dingo\Api\Routing\Router::class);

$api->version('v1', function ($api) {

    $api->resource('auth', HechoEnMx\Http\Controllers\Api\V1\Auth\TokenController::class, [
        'only' => ['store'],
    ]);

    $api->resource('me', HechoEnMx\Http\Controllers\Api\V1\Auth\MeController::class, [
        'only' => ['index'],
    ]);

});


Route::get('/', function () {
    return view('index');
});