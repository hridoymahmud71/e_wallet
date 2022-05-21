import React, { useState, useEffect } from "react";
import TransferRepository from "./../../../repositories/user/TransferRepository";
import { useSnackbar } from "react-simple-snackbar";
import Bottombar from './../partials/Bottombar';
import { useSelector } from "react-redux";


function Transfer() {
  
    const user = useSelector((state) => state.UserReducer.user);
    const [openSnackbar, closeSnackbar] = useSnackbar();

    const [transferSuccessful, setTransferSuccessful] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setformData] = useState({
        wallet_number: "",
        amount: "0.00",
    });

    useEffect(() => {}, []);

    // handle form
    const handleOnChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const resetformData = () => {
        setformData({
            wallet_number: "",
            amount: "0.00",
        });
    };

    const handleFormtSubmit = (e) => {
        e.preventDefault();

        if (formSubmitted) {
            return;
        }

        setFormSubmitted(true);

        var post_body = {
            wallet_number: formData.wallet_number,
            amount: formData.amount,
        };

        TransferRepository.initiate_transfer(post_body)
            .then((response) => {
              console.log(response)
                if (response.data.result == false) {
                    openSnackbar(response.data.message, 2500);
                    setFormSubmitted(false);
                    return;
                }

                openSnackbar(response.data.message, 2500);
                setFormSubmitted(false);
                resetformData();
                MYAPP.navigate('/');
                
               
            })
            .catch((error) => {
                setFormSubmitted(false);
                resetformData();
                if (error && error.response.data.message) {
                    openSnackbar(error.response.data.message, 2500);
                }
            })
            .then(function () {
                resetformData();
                setFormSubmitted(false);
            });
    };

    return (
        <>
        <div className="flex flex-col min-h-screen">
        <div className="container flex items-center mx-auto p-8 h-screen">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-8 font-thin">
                        Transfer
                    </h1>

                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div className="p-8">
                            <form className="" onSubmit={handleFormtSubmit}>
                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-600">
                                        Wallet Number
                                    </label>

                                    <input
                                        type="text"
                                        name="wallet_number"
                                        value={formData.wallet_number}
                                        onChange={handleOnChange}
                                        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-600">
                                        Amount{" ("}{`${user != null ? user.wallet.default_currency.toUpperCase() : "" }`}{") "}
                                    </label>

                                    <input
                                        type="number"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleOnChange}
                                        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                                >
                                    Transfer
                                </button>
                            </form>
                        </div>
                    </div>

                    
                </div>
            </div>
            {/* to match bottombar height */}
            <div className="h-20"></div>
                <Bottombar />
        </div>
            
        </>
    );
}

export default Transfer;
