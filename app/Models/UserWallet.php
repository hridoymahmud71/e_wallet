<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserWallet extends Model
{
    use HasFactory;


    protected $fillable = [
        'wallet_number',
        'balance',
        'currency'


    ];
    public function user()
    {
        $this->belongsTo(User::class);
    }
}
