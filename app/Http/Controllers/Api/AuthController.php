<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\User\UserResource;
use App\Utility\UserUtility;
use Auth;
use Validator;

class AuthController extends Controller
{
    public function user_registration(Request $request)
    {

        $messages = [
            'name.required' => 'Name is required',
            'name.max' => 'Maximum 255 characters for name',
            'email.required' => 'Email is required',
            'email.email' => 'Email must be a valid email address',
            'email.unique' => 'An user exists with this email',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Password confirmation does not match',
            'password.min' => 'Minimum 6 digits required for password',
        ];

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed'
        ], $messages);


        if ($validator->fails()) {
            return response()->json(['result' => false, 'message' => 'Request is not valid', 'errors' => $validator->errors(), 'user' => null], 404);
        }

        $user =  UserUtility::create_user($request->all());

        if ($user == null) {
            return response()->json(['result' => false, 'message' => 'Could not creat user', 'user' => null], 404);
        }


        return $this->login_success(
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
        ];


        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ], $messages);

        if ($validator->fails()) {
            return response()->json(['result' => false, 'message' => 'Request is not valid', 'errors' => $validator->errors(), 'user' => null], 404);
        }

        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['result' => false, 'message' => 'Login Failed', 'user' => null], 401);
        }

        return $this->login_success(
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
