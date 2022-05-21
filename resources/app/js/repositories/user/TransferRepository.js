class TranferRepository {

    static initiate_transfer = (post_body) => {
        return api.post("user/initiate-transfer", post_body);
    };
}

export default TranferRepository;