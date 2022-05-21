<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\User\UserResource;
use App\Utility\UserUtility;
use Auth;
use Validator;
use Laravel\Sanctum\PersonalAccessToken;


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

        // Creating auth so that we do not have to do a separate sign in
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['result' => false, 'message' => 'Auth Failed', 'user' => null], 401);
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

    public function fetch_authenticated_user(Request $request)
    {

        $token = PersonalAccessToken::findToken($request->token);
        if (!$token) {
            return response()->json(
                [
                    'result' => false,
                    'token'  => "",
                    'user'   => null,
                    'message'   => 'No Token Found'
                ],
                401
            );
        }

        $user = $token->tokenable;

        if ($user != null) {
            return response()->json(
                [
                    'result' => true,
                    'token'  => $request->token,
                    'user'   => new UserResource($user),
                    'message'   => 'User Found'
                ],
                200
            );
        }

        return response()->json(
            [
                'result' => false,
                'token'  => "",
                'user'   => null,
                'message'   => 'No User Found'
            ],
            401
        );
    }

    public function logout()
    {

        try {

            if (request()->from_everywhere && request()->from_everywhere == 'yes') {
                auth()->user()->tokens()->delete();
            } else {
                auth()->user()->currentAccessToken()->delete();
            }


            return response()->json(
                [
                    'result' => true,
                    'message'   => 'Successfully logged out'
                ],
                200
            );
        } catch (\Exception $e) {

            return response()->json(
                [
                    'result' => false,
                    'message'   => 'Log out error'
                ],
                200
            );
        } catch (\Throwable $th) {

            return response()->json(
                [
                    'result' => false,
                    'message'   => 'Log out error'
                ],
                200
            );
        }
    }
}
