import React, { useEffect, useState } from "react";
import TransactionRepository from "../../../../../repositories/user/TransactionRepository";
import Shimmer from "react-shimmer-effect";
import TransactionBox from "../../../elements/TransactionBox";

function Transactions() {
    const [list, setList] = useState([]);
    const [listLoaded, setListLoaded] = useState(false);
    const [hasMoreData, setHasMoreData] = useState(false);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    function reset() {
        setList([]);
        setListLoaded(false);
        setHasMoreData(false);
        setPage(false);
        setLoadingMore(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.table(list);
    }, [list]);

    function fetchData() {
        //load list
        if (page > 1) {
            setLoadingMore(true);
        }
        TransactionRepository.get_transactions(page)
            .then(function (response) {
                if (response.data != null) {
                    setHasMoreData(response.data.meta.total != list.length);

                    setList([...list, ...response.data.data]);
                    setPage(page + 1);
                }
            })
            .catch(function (error) {})
            .then(function () {
                setListLoaded(true);
                setLoadingMore(false);
            });
    }

    return (
        <>
            {" "}
            <h2 className="text-2xl mb-4 text-gray-600">My transactions</h2>
            {!listLoaded &&
                [...Array(5).keys()].map((item, index) => (
                    <Shimmer key={index}>
                        <div className="h-24 bg-gray-400 mb-2"></div>
                    </Shimmer>
                ))}
            {listLoaded && list.length == 0 && (
                <div className="block text-sm font-medium text-gray-600 mx-auto">
                    No data available
                </div>
            )}
            {listLoaded && list.length > 0 && (
                <div className="">
                    {list.map((transaction, index) => (
                        <TransactionBox transaction={transaction} key={index} />
                    ))}
                    {loadingMore && (
                        <div className="text-center text-gray-600 mt-4">
                            Loading more
                        </div>
                    )}
                    {!loadingMore && hasMoreData && (
                        <div
                            className="text-right font semi-bold cursor-pointer text-gray-600 mt-4"
                            onClick={() => fetchData()}
                        >
                            See more
                        </div>
                    )}

                    {!loadingMore && !hasMoreData && (
                        <div
                            className="text-center cr text-gray-600 mt-4"
                            onClick={() => fetchData()}
                        >
                            No more data
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default Transactions;
