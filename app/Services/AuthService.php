<?php

namespace HechoEnMx\Services;

use Tymon\JWTAuth\JWTAuth;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\Authenticatable;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

/**
 * Class AuthService
 * @package HechoEnMx\Services
 */
class AuthService
{
    /**
     * @var \Tymon\JWTAuth\JWTAuth
     */
    protected $jwt;

    /**
     * @var \Illuminate\Contracts\Auth\Guard
     */
    protected $guard;

    /**
     * Constructor.
     *
     * @param \Tymon\JWTAuth\JWTAuth $jwt
     * @param \Illuminate\Contracts\Auth\Guard $guard
     */
    public function __construct(JWTAuth $jwt, Guard $guard)
    {
        $this->jwt = $jwt;
        $this->guard = $guard;
    }

    /**
     * Create the auth token if is authenticated with the given credentials.
     *
     * @param string $email
     * @param string $password
     * @return string
     * @throws \Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException
     */
    public function authenticate($email, $password)
    {
        $credentials = [
            'email' => $email,
            'password' => $password,
        ];

        if (!$this->guard->once($credentials)) {
            throw new UnauthorizedHttpException('Bearer', 'Missing or invalid user with the given credentials');
        }

        $user = $this->guard->user();

        if (!$user->active) {
            throw new UnauthorizedHttpException('Bearer', 'User inactive with the given credentials');
        }

        return $this->jwt->fromUser($user, $this->customClaims($user));
    }
    /**
     * Get custom claims for the specified user.
     *
     * @param \Illuminate\Contracts\Auth\Authenticatable $user
     * @return array
     */
    protected function customClaims(Authenticatable $user)
    {
        return [
            'roles' => $user->roles->pluck('name'),
        ];
    }
}
