import { api } from "./../../Api";

class TransactionRepository {
    static user_with_most_conversions = () => {
        return api.get("/admin/transaction/user-with-most-conversions");
    };

    static users_with_conversions = (page) => {
        return api.get("/admin/transaction/user-with-conversions", {
            params: { page: page, limit: 5 },
        });
    };

    static nth_highest_transaction_of_an_user = (user_id, n) => {
        return api.get(
            `/admin/transaction/nth-highest-transaction-of-an-user/${user_id}`,
            {
                params: { n: n },
            }
        );
    };
}


export default TransactionRepository;
