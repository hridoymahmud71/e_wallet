import {api} from './../../Api';


class WalletRepository {

    static get_wallet_balance = () => {
        //return;
        return api.get("/user/get-wallet-balance");
    };
}

export default WalletRepository;