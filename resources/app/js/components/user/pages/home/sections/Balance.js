import React, { useState, useEffect } from "react";
import WalletRepository from "./../../../../../repositories/user/WalletRepository";
import Shimmer from "react-shimmer-effect";
import { useSelector } from "react-redux";

function Balance() {

    const user_currency = useSelector((state) => state.UserReducer.user_currency);

    const [balane, setBalance] = useState(null);
    const [balaneLoading, setBalanceLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    function clearData() {
        setBalance(null);
        setBalanceLoading(true);
    }

    function fetchData() {
        WalletRepository.get_wallet_balance()
            .then((response) => {
                if (response.data.result == false) {
                    setBalanceLoading(false);
                    return;
                }
                setBalance(response.data.user_wallet);
            })
            .catch((error) => {
                setBalanceLoading(false);
                if (error) {
                }
            })
            .then(function () {
                setBalanceLoading(false);
            });
    }

    return (
        <>
            {balane == null && balaneLoading &&(
                <Shimmer>
                    <div className="h-28 bg-gray-400"></div>
                </Shimmer>
            )}

            {balane == null &&
                !balaneLoading && (
                    <div className="h-28 flex items-center justify-center">
                        <div className="block mb-2 text-sm font-medium text-gray-600 mx-auto">
                            Could not load balance
                        </div>
                    </div>
                )}

            {balane != null && !balaneLoading && (
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                    <div className="p-8 flex flex-col items-center">
                    <div className="block mb-2 text-lg font-medium text-gray-800">
                            {`${balane.balance_in_default_currency} ${user_currency.toUpperCase()}`}
                        </div>
                        <div className="block text-md font-medium text-gray-600">
                            {`${balane.balance} USD`}
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    );
}

export default Balance;
