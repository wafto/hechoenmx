<?php

$api = app(Dingo\Api\Routing\Router::class);

$api->version('v1', function ($api) {

    $api->resource('auth', HechoEnMx\Http\Controllers\Api\V1\AuthController::class, [
        'only' => ['store'],
    ]);

    /*$api->resource('me', HechoEnMx\Http\Controllers\Api\V1\MeController::class, [
        'as' => 'me',
        'only' => ['index'],
    ]);*/

});
