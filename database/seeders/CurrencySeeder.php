<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name' => 'US Doller', 'code' => "usd", 'active' => 1],
            ['name' => 'Euro', 'code' => "eur", 'active' => 1],
            ['name' => 'British pound', 'code' => "gbp", 'active' => 1],
            ['name' => 'Indian Rupee', 'code' => "inr", 'active' => 1],
            ['name' => 'Bangladeshi Taka', 'code' => "bdt", 'active' => 1],
            ['name' => 'Pakistani Rupee', 'code' => "pkr", 'active' => 1],
            
        ];
        Currency::insert($data);
    }
}
