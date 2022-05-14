<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserResource;
use Auth;

class AuthController extends Controller
{
    public function customer_registration(Request $request)
    {

        $messages = [
            'email.required' => 'Email is required',
            'email.email' => 'Email must be a valid email address',
            'email.unique' => 'An user exists with this email',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Password confirmation does not match',
            'password.min' => 'Minimum 6 digits required for password',
        ];



        $attr =
            $request->validate([
                'name' => 'required|string|max:255',
                'phone' => 'nullable|string|unique:users,email',
                'email' => 'required|string|email|unique:users,email',
                'password' => 'required|string|min:6|confirmed'
            ], $messages);


        $user = User::create([
            'name'              => $attr['name'],
            'password'          => bcrypt($attr['password']),
            'email'             => $attr['email'],
            'email_verified_at' => date("Y-m-d H:i:s"),
            'user_type'         => 'customer',
        ]);



        return $this->loginSuccess(
            $user->createToken('API Token')->plainTextToken,
            $user
        );
    }

    //use this method to signin users
    public function login(Request $request)
    {
        $messages = [
            'email.required' => 'Email is required',
            'email.email' => 'Email must be a valid email address',
            'password.required' => 'Password is required',
            'phone.required' => 'Phone is required',
        ];



        $attr =
            $request->validate([
                'email' => 'required|email',
                'password' => 'required'
            ], $messages);

            if (!Auth::attempt($attr)) {
                return response()->json(['result' => false, 'message' => 'Unauthorized', 'user' => null]);
            }

            return $this->loginSuccess(
                auth()->user()->createToken('API Token')->plainTextToken,
                auth()->user()
            );
    }

    protected function login_success($token, $user)
    {

        return response()->json(
            [
                'result' => true,
                'token'  => $token,
                'user'   => new UserResource($user),
                'message'   => 'Successfully logged in'
            ],
            200
        );
    }
}
