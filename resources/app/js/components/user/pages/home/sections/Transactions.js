import React, { useEffect, useState } from "react";
import TransactionRepository from "../../../../../repositories/user/TransactionRepository";
import InfiniteScroll from "react-infinite-scroll-component";

function Transactions() {
    const [list, setList] = useState([]);
    const [listLoaded, setListLoaded] = useState(false);
    const [hasMoreData, setHasMoreData] = useState(false);
    const [page, setPage] = useState(1);

    function reset() {
        setList([]);
        setListLoaded(false);
        setHasMoreData(false);
        setPage(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        //load list
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
            });
    }

    return (
        <>
            {!listLoaded && (
                <>
                    {[...Array(5).keys()].map((item, index) => (
                        <Shimmer>
                            <div className="h-24 bg-gray-400"></div>
                        </Shimmer>
                    ))}

                    {listLoaded && list.length == 0 && (
                        <div className="block text-sm font-medium text-gray-600 mx-auto">
                            No data available
                        </div>
                    )}

                    {listLoaded && list.length > 0 && (
                        <InfiniteScroll
                            dataLength={list.length}
                            next={fetchData}
                            hasMore={hasMoreData}
                            loader={
                                <div className="text-center fs-13 lg:fs-16  color-primary-dark-font font-normal mx-4 py-2">
                                    Loading more ...
                                </div>
                            }
                            endMessage={
                                <div className="text-center fs-13 lg:fs-16  color-primary-dark-font font-normal mx-4 py-2">
                                    No more data
                                </div>
                            }
                        >
                            <div className="px-4 lg:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
                                {list.map((item, index) => (
                                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                                        <div className="p-8 flex flex-col items-center">
                                            <div className="block mb-2 text-lg font-medium text-gray-800">
                                                {`${
                                                    balane.balance_in_default_currency
                                                } ${balane.default_currency.toUpperCase()}`}
                                            </div>
                                            <div className="block text-md font-medium text-gray-600">
                                                {`${balane.balance} USD`}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </InfiniteScroll>
                    )}
                </>
            )}
        </>
    );
}

export default Transactions;
