<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserWallet extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'wallet_number',
        'balance',
        'default_currency'


    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
