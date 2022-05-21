import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function TransactionBox({ transaction }) {
    return (
        <div
            className="bg-white rounded-sm overflow-hidden border mb-2"
        >
            <div className="p-4 flex transactions-center justify-between">
                <div className="flex flex-col">
                    <div
                        className={`fs-12  ${
                            transaction.is_sender ? "text-red-600" : "text-green-600"
                        }`}
                    >
                        {transaction.transaction_number}
                    </div>
                    <div className="fs-14 text-gray-600">
                        {`${
                            transaction.is_sender
                                ? transaction.receiver.name
                                : transaction.sender.name
                        }`}
                    </div>
                    <div className="fs-13 text-gray-600">{transaction.date}</div>
                </div>
                <div className="flex transactions-center justify-around">
                    <div className="p-2">
                        {transaction.is_sender && (
                            <div className="text-red-600">
                                <AiOutlineArrowUp />
                            </div>
                        )}
                        {transaction.is_receiver && (
                            <div className="text-green-600">
                                <AiOutlineArrowDown />
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <div className="fs-12 text-gray-600">
                            {transaction.amount_in_usd}
                            {" USD"}
                        </div>

                        <div className="fs-10 text-gray-600">
                            {transaction.amount_in_sender_currency}{" "}
                            {transaction.sender_currency.toUpperCase()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionBox;
