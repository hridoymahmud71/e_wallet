<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserWalletTransaction extends Model
{
    use HasFactory;


    public function scopeSenderOrReceiver($query, $user_id)
    {
        return $query->where('sender_id', '=', $user_id)->orWhere('receiver_id', '=', $user_id);
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }
}
