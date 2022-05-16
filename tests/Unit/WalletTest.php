<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;

class WalletTest extends TestCase
{

    public function testUserGetBalanceUnAuthenticated()
    {

        $data = [];
        $header = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => "Bearer "
        ];

        $this->json('GET', '/api/user/get-wallet-balance', $data, $header)
            ->assertStatus(401);
    }

    public function testUserGetBalanceAuthenticated()
    {

        $data = [];
        $header = [
            'Accept' => '*/*',
            'Content-Type' => 'application/json',
        ];

        // make sure you have this user
        $user = User::where('email', '=', 'customer1@example.com')->first();
        $this->actingAs($user);


        $this->json('GET', '/api/user/get-wallet-balance', $data, $header)
            ->assertJsonFragment([
                'result'   => true,
            ])
            ->assertJsonStructure(
                [
                    'result',
                    'user_wallet' =>
                    [
                        'balance',
                        'default_currency',
                        'balance_in_default_currency'
                    ]
                ]
            );
    }
}
