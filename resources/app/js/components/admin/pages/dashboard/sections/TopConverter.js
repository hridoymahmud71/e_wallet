import React, { useState, useEffect } from "react";
import TransactionRepository from "../../../../../repositories/admin/TransactionRepository";
import Shimmer from "react-shimmer-effect";

function TopConverter() {
    const [topConverter, setTopConverter] = useState(null);
    const [topConverterLoaded, setTopConverterLoaded] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    function clearData() {
        setTopConverter(null);
        setTopConverterLoaded(false);
    }

    function fetchData() {
        TransactionRepository.user_with_most_conversions()
            .then((response) => {
                if (response.data.result == false) {
                    setTopConverterLoaded(true);
                    return;
                }
                setTopConverter(response.data.user);
            })
            .catch((error) => {
                setTopConverterLoaded(true);
                if (error) {
                }
            })
            .then(function () {
                setTopConverterLoaded(true);
            });
    }

    return (
        <>
            {topConverter == null && !topConverterLoaded && (
                <Shimmer>
                    <div className="h-28 bg-gray-400"></div>
                </Shimmer>
            )}

            {topConverter == null && topConverterLoaded && (
                <div className="h-28 flex items-center justify-center">
                    <div className="block mb-2 text-sm font-medium text-gray-600 mx-auto">
                        No Top Converter Found
                    </div>
                </div>
            )}

            {topConverter != null && topConverterLoaded && (
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                    <div className="p-8 flex flex-col items-center">
                        <div className="block mb-2 text-lg font-medium text-gray-800">
                            {`Top converter : ${topConverter.name}`}
                        </div>
                        <div className="block text-md font-medium text-gray-600">
                            {`Conversion used : ${topConverter.transaction.count} times`}
                        </div>
                        <div className="block text-md font-medium text-gray-600">
                            {`Converted Upto : ${topConverter.transaction.total} USD`}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default TopConverter;
