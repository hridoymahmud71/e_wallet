<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;


class TransferTest extends TestCase
{
    public function testTransferWithUnAuthenticatedUser()
    {

        $data = [];
        $header = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => "Bearer "
        ];

        $this->json('POST', '/api/user/initiate-transfer', $data, $header)
            ->assertStatus(401);
    }

    public function testTransferToInValidWallet()
    {

        $data = [
            "wallet_number" => "invalidwallet",
            "amount" => "150.00"
        ];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json',
        ];

        // make sure you have this user
        $user = User::where('email', '=', 'customer1@example.com')->first();
        $this->actingAs($user);


        $this->json('POST', '/api/user/initiate-transfer', $data, $header)
            ->assertJsonFragment([
                'result'   => false,
            ]);
    }

    public function testTransferWithInvalidAmount()
    {

        // make sure you have this user
        $user2 = User::where('email', '=', 'customer2@example.com')->first();

        $data = [
            "wallet_number" => $user2->user_wallet->wallet_number,
            "amount" => "-150.00"
        ];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json',
        ];

        // make sure you have this user
        $user = User::where('email', '=', 'customer1@example.com')->first();
        $this->actingAs($user);


        $this->json('POST', '/api/user/initiate-transfer', $data, $header)
            ->assertJsonFragment([
                'result'   => false,
            ]);
    }

    public function testTransferWithInsufficientBalance()
    {

        // make sure you have this user
        $user2 = User::where('email', '=', 'customer2@example.com')->first();

        $data = [
            "wallet_number" => $user2->user_wallet->wallet_number,
            "amount" => "100000000000000000000000000000"
        ];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json',
        ];

        // make sure you have this user
        $user = User::where('email', '=', 'customer1@example.com')->first();
        $this->actingAs($user);


        $this->json('POST', '/api/user/initiate-transfer', $data, $header)
            ->assertJsonFragment([
                'result'   => false,
            ]);
    }

    public function testTransferWithValidData()
    {

        // make sure you have this user
        $user2 = User::where('email', '=', 'customer2@example.com')->first();

        $data = [
            "wallet_number" => $user2->user_wallet->wallet_number,
            "amount" => "150.00"
        ];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json',
        ];

        // make sure you have this user
        $user = User::where('email', '=', 'customer1@example.com')->first();        
        $this->actingAs($user);


        $this->json('POST', '/api/user/initiate-transfer', $data, $header)
            ->assertJsonFragment([
                'result'   => true,
            ]);
    }
}
