<?php

namespace Tests\Unit;

use Tests\TestCase;

class LoginTest extends TestCase
{
    public function testLoginWithInvalidData()
    {

        $data = [];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json'
        ];

        $this->json('POST', '/api/auth/login', $data, $header)
            ->assertJsonFragment([
                'result'   => false,                               
            ]);   
    }

    public function testLoiginWithUnRegisteredEmail()
    {

        $data = [
            "email" => "zcustomer1@example.com",
            "password" => "123456",
        ];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json'
        ];

        $this->json('POST','/api/auth/login', $data, $header)
        ->assertJsonFragment([
            'result'   => false,                               
        ]);        
    }

    public function testLoiginWithWrongPassword()
    {

        $data = [
            "email" => "customer1@example.com",
            "password" => "111111",
        ];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json'
        ];

        $this->json('POST','/api/auth/login', $data, $header)
        ->assertJsonFragment([
            'result'   => false,                               
        ]);        
    }

    public function testLoiginWithCorrectUserData()
    {

        $data = [
            "email" => "customer1@example.com",
            "password" => "123456",
        ];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json'
        ];

        $this->json('POST','/api/auth/login', $data, $header)
        ->assertJsonFragment([
            'result'   => true,                               
        ]);        
    }
}
