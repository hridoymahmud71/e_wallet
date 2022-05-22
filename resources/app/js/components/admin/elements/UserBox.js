import React, { useState } from "react";
import { AiOutlineWallet } from "react-icons/ai";
import TransactionRepository from "./../../../repositories/admin/TransactionRepository";
import NthHighestTransaction from "./NthHighestTransaction";

function UserBox({ user }) {
    const [transaction, setTransaction] = useState(null);
    const [transactionLoaded, setTransactionLoaded] = useState(false);
    const [tappedNth, setTappedNth] = useState(false);

    const handleNthHighestClick = (n) => (event) => {
        setTappedNth(true);
        fetchNthHighest(n);
    };

    function fetchNthHighest(n) {
        TransactionRepository.nth_highest_transaction_of_an_user(user.id, n)
            .then((response) => {
                if (response.data.result == false) {
                    setTransactionLoaded(true);
                    return;
                }
                setTransaction(response.data.transaction);
            })
            .catch((error) => {
                setTransactionLoaded(true);
                if (error) {
                }
            })
            .then(function () {
                setTransactionLoaded(true);
            });
    }

    return (
        <div className="bg-white rounded-sm overflow-hidden border mb-2">
            <div className="p-4 flex transactions-center justify-between">
                <div className="flex flex-col">
                    <div className="fs-12 text-blue-600">
                        {user.wallet.wallet_number}
                    </div>
                    <div className="fs-14 text-gray-600">{user.name}</div>
                    <div className="fs-12 text-gray-600">
                        {`Number of conversions: ${user.transaction.count}`}
                    </div>
                    <div className="fs-12 text-gray-600">
                        {`Total conversion: ${user.transaction.total} USD`}
                    </div>
                </div>
                <div className="flex items-center justify-around">
                    <div className="p-4">
                        <div className="text-blue-600">
                            <AiOutlineWallet />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="fs-12 text-gray-600">
                            {user.wallet.balance}
                            {" USD"}
                        </div>

                        <div className="fs-10 text-gray-600">
                            {user.wallet.balance_in_default_currency}{" "}
                            {user.wallet.default_currency.toUpperCase()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end p-4 ">
                <div
                    className="fs-12 text-red-600 underline cursor-pointer text-center"
                    onClick={handleNthHighestClick(1)}
                >
                    show highest transaction
                </div>
                <div
                    className="fs-12 text-red-600 underline cursor-pointer text-center"
                    onClick={handleNthHighestClick(2)}
                >
                    show 2nd highest transaction
                </div>
                <div
                    className="fs-12 text-red-600 underline cursor-pointer text-center"
                    onClick={handleNthHighestClick(3)}
                >
                    show 3rd highest transaction
                </div>
            </div>
            {tappedNth && (
                <NthHighestTransaction
                    transaction={transaction}
                    transactionLoaded={transactionLoaded}
                />
            )}
        </div>
    );
}

export default UserBox;
