import GenericService from "./GenericService";
import jwt_decode from "jwt-decode";
class UserService extends GenericService {
    constructor() {
        super();
    }

    login = (email, password) => {
        return new Promise((resolve, reject) => {
            this.post("users/login", { email, password })
                .then((token) => {
                    localStorage.setItem("jwt", token);
                    resolve(token);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    signup = (name, email, password, role) => {
        return new Promise((resolve, reject) => {
            this.post("users/signup", { name, email, password })
                .then((res) => {
                    // localStorage.setItem("jwt", token);
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    signout = () => {
        localStorage.removeItem("jwt");
    };
    isUserLoggedIn = () => {
        if (localStorage.getItem("jwt")) {
            return true;
        } else {
            return false;
        }
    };
    getUser = () => {
        let token = localStorage.getItem("jwt");
        if (token) return jwt_decode(token);
        return null;
    };
    isAdmin = () => {
        let user = this.getUser();
        console.log(user);
        if (user && user.role === "admin") return true;
        return false;
    };
}
const userService = new UserService();
export default userService;