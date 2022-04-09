import GenericService from "./GenericService";

class UserService extends GenericService {
    constructor() {
        super();
    }

    registerUser = (data) => {
        return this.post("users/signup", data);
    };
    loginUser = (data) => {
        return this.post("users/signin", data);
    };
}

const userService = new UserService();
export default userService;