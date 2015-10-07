<?php

namespace HechoEnMx\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use HechoEnMx\Services\AuthService;

/**
 * Class AuthController
 * @package HechoEnMx\Http\Controllers\Api\V1
 */
class AuthController extends Controller
{
    /**
     * Auth Service.
     *
     * @var \HechoEnMx\Services\AuthService
     */
    protected $authService;

    /**
     * Constructor.
     *
     * @param \HechoEnMx\Services\AuthService $authService
     */
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    /**
     * Validates and authenticate the user with the given credentials.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $email = $request->get('email');
        $password = $request->get('password');

        $token = $this->authService->authenticate($email, $password);

        return response()->json(compact('token'));
    }
}
