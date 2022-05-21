import { api } from "./../Api";

class CurrencyRepository {
    static get_currencies = () => {
        return api.get("/currencies");
    };

    static set_currency = (post_body) => {
        return api.post("/user/set-currency",post_body);
    };
}

export default CurrencyRepository;
