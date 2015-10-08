<?php

namespace HechoEnMx\Http\Controllers\Api\V1\Auth;

use HechoEnMx\Services\AuthService;
use HechoEnMx\Http\Controllers\Api\V1\Controller;

/**
 * Class MeController
 * @package HechoEnMx\Http\Controllers\Api\V1\Auth
 */
class MeController extends Controller
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
        $this->middleware('jwt.auth');
        $this->authService = $authService;
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $user = $this->authService->user();
        return response()->json($user);
    }
}
