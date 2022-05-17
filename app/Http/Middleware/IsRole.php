<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class IsRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $role)
    {

        if ($request->user()->role != $role) {
            return response()->json(
                [
                    'result' => false,                    
                    'message'   => "This action is permissible only for ".strtoupper($role)
                ],
                401
            );
        }
        return $next($request);

        return $next($request);
    }
}
