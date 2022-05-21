import React, { useState, useEffect } from "react";
import CurrencyRepository from "./../../../repositories/CurrencyRepository";
import { useSnackbar } from "react-simple-snackbar";
import Bottombar from "./../partials/Bottombar";
import Shimmer from "react-shimmer-effect";

import { useSelector } from "react-redux";

function Settings() {
    const user = useSelector((state) => state.UserReducer.user);
    const [openSnackbar, closeSnackbar] = useSnackbar();

    const [currencyTapped, setCurrencyTapped] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [currencyList, setCurrencyList] = useState([]);
    const [currencyListLoaded, setCurrencyListLoaded] = useState(false);

    useEffect(() => {
        if (user != null) {
            setSelectedCurrency(user.wallet.default_currency);
        }
    }, [user]);

    useEffect(() => {
        scrollTo(0, 0);
        fetchCurrencyList();
    }, []);

    function fetchCurrencyList() {
        setCurrencyTapped(true);
        CurrencyRepository.get_currencies()
            .then(function (response) {
                if (response.data != null) {
                    setCurrencyList([...currencyList, ...response.data.data]);
                }
            })
            .catch(function (error) {})
            .then(function () {
                setCurrencyTapped(false);
                setCurrencyListLoaded(true);
            });
    }

    function reset() {
        setCurrencyTapped(false);
        setSelectedCurrency("");
        setCurrencyList([]);
        setCurrencyListLoaded(false);
    }

    const handleCurrencyClick = (code) => (event) => {
        if (currencyTapped) {
            return;
        }
        setCurrencyTapped(true);
    };

    function setCurrency(code) {
        var post_body = {
            code: code,
        };

        CurrencyRepository.set_currency(post_body)
            .then((response) => {
                if (response.data.result == false) {
                    openSnackbar(response.data.message, 2500);
                    setCurrencyTapped(false);
                    return;
                }

                openSnackbar(response.data.message, 2500);
            })
            .catch((error) => {
                setFormSubmitted(false);
                if (error && error.response.data.message) {
                }
            })
            .then(function () {
                setCurrencyTapped(false);
            });
    }

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="container mx-auto p-8 h-screen">
                    <div className="max-w-md w-full mx-auto">
                        <h2 className="text-2xl text-center mb-8 font-thin">
                            Set Currency
                        </h2>
                        {!currencyListLoaded &&
                            [...Array(5).keys()].map((item, index) => (
                                <Shimmer key={index}>
                                    <div className="h-24 bg-gray-400 mb-2"></div>
                                </Shimmer>
                            ))}
                        {currencyListLoaded && currencyList.length == 0 && (
                            <div className="block text-sm font-medium text-gray-600 mx-auto">
                                No data available
                            </div>
                        )}
                        {currencyListLoaded && currencyList.length > 0 && (
                            <div className="">
                                {currencyList.map((currency, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white rounded-sm overflow-hidden cursor-pointer  mb-2 ${
                                            selectedCurrency == currency.code
                                                ? "border-blue-600 border-2"
                                                : "border"
                                        }`}
                                        onClick={handleCurrencyClick(
                                            currency.code
                                        )}
                                    >
                                        <div className="p-4 flex transactions-center justify-between">
                                            <div className="text-lg font-medium text-gray-600">
                                                {currency.name}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-400">
                                                {currency.code.toUpperCase()}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* to match bottombar height */}
                <div className="h-20"></div>
                <Bottombar />
            </div>
        </>
    );
}

export default Settings;
