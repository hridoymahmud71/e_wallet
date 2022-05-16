<?php

namespace Tests\Unit;

use Tests\TestCase;
use Faker\Generator as Faker;
use App\Models\User;


class UserRegistrationTest extends TestCase
{

    public function testSignupWithInvalidData()
    {

        $data = [];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json'
        ];
        //$header = [];
        $this->json('POST', '/api/auth/user/registration', $data, $header)
            ->assertJsonFragment([
                'result'   => false,
            ]);
    }

    public function testSignupWithSmallPassword()
    {

        $data = [
            "name" => "Customer TwoHundred",
            "email" => "customer200@example.com",
            "password" => "123",
            "password_confirmation" => "123"
        ];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json'
        ];

        $this->json('POST', '/api/auth/user/registration', $data, $header)
            ->assertJsonFragment([
                'result'   => false,
            ]);
    }

    public function testSignupWithDuplicateEmail()
    {

        $data = [
            "name" => "Customer One",
            "email" => "customer1@example.com",
            "password" => "123456",
            "password_confirmation" => "123456"
        ];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json'
        ];

        $this->json('POST', '/api/auth/user/registration', $data, $header)
            ->assertJsonFragment([
                'result'   => false,
            ]);
    }

    public function testSignupWithPerfectData()
    {
        // $data = [
        //     "name" => "Customer Hundred",
        //     "email" => "customer100@example.com",
        //     "password" => "123456",
        //     "password_confirmation" => "123456"
        // ];

        $faker = \Faker\Factory::create();

        $fake_email = $faker->unique()->safeEmail;
        while (User::where('email', '=', $fake_email)->exists()) {
            $fake_email = $faker->unique()->safeEmail;
        }

        $data =   [
            'name' => $faker->name,
            'email' => $faker->unique()->email,
            "password" => "123456",
            "password_confirmation" => "123456"
        ];


        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json'
        ];

        $this->json('POST', '/api/auth/user/registration', $data, $header)
            ->assertJsonFragment([
                'result'   => true,
            ]);
    }
}
