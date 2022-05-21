import { api } from "./../../Api";

class TransactionRepository {
    static get_transactions = (page) => {
        return api.get("/user/transactions", { page: page, limit: 5 });
    };
}

export default TransactionRepository;
