import {api} from './../../Api'

class TransactionRepository {

    static user_with_most_conversions = () => {
        return api.get("/admin/transaction/user-with-most-conversions");
    };
}

export default TransactionRepository;