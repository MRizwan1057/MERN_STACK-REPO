import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api/";
class GenericService {
    constructor() {}

    get = (url) => {
        return new Promise((resolve, reject) => {
            axios
                .get(url)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    put = (url, data) => {
        return new Promise((resolve, reject) => {
            axios
                .put(url, data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    post = (url, data) => {
        return new Promise((resolve, reject) => {
            axios
                .post(url, data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    delete = (url) => {
        return new Promise((resolve, reject) => {
            axios
                .delete(url)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
}

export default GenericService;