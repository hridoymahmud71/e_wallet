import React,{useEffect} from "react";
import Shimmer from "react-shimmer-effect";

function NthHighestTransaction({ transaction, transactionLoaded }) {

    useEffect(() => {
        console.log(transaction,transactionLoaded)
    }, [transaction])
    
    
    return (
        <>
            {transaction == null && !transactionLoaded && (
                <Shimmer>
                    <div className="h-28 bg-gray-400"></div>
                </Shimmer>
            )}

            {transaction == null && transactionLoaded && (
                <div className="h-28 flex items-center justify-center">
                    <div className="block mb-2 text-sm font-medium text-gray-600 mx-auto">
                        No item Found
                    </div>
                </div>
            )}

            {transaction != null && transactionLoaded && (
                <div className="p-8 flex flex-col items-center border-t-2 border-dashed">
                    <div className="text-sm font-medium text-gray-400 flex items-center justify-between w-full">
                        <div>{transaction.transaction_number}</div>
                        <div>{transaction.date}</div>
                    </div>
                    <div className="mt-2 text-sm font-medium text-gray-600 flex items-center  w-full">
                        <div>{transaction.sender.name}</div>
                        <div className="px-4">{` to `}</div>
                        <div>{transaction.receiver.name}</div>
                    </div>
                    <div className="mt-1 text-sm font-medium text-blue-600 flex items-center  w-full">
                        <div>{`${transaction.amount_in_usd} USD`}</div>
                        <div className="px-1">{` / `}</div>
                        <div>{`${
                            transaction.amount_in_sender_currency
                        } ${transaction.sender_currency.toUpperCase()}`}</div>
                    </div>                                     
                </div>
            )}
        </>
    );
}

export default NthHighestTransaction;
