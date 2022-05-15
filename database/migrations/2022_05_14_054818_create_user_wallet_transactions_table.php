<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserWalletTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_wallet_transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->mediumText('transaction_number');
            $table->integer('sender_id');	
            $table->integer('receiver_id');
            $table->char('action', 255)->default("");	// transfer, recharge etc 
            $table->char('sender_currency', 255)->default("");	
            $table->decimal('amount_in_usd', 20, 2)->default(0.00);	
            $table->decimal('amount_in_sender_currency', 20, 2)->default(0.00);	
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_wallet_transactions');
    }
}
