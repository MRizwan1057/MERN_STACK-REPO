import GenericService from "./GenericService";

class ProductService extends GenericService {
    constructor() {
        super();
    }

    getAllProducts = (page = 1, perPage = 10) => {
        return this.get("products?page=" + page + "&perPage=" + perPage);
    };
    deleteProduct = (id) => {
        return this.delete("products/" + id);
    };
    createProduct = (data) => {
        return this.post("products", data);
    };
    updateProduct = (id, data) => {
        return this.put("products/" + id, data);
    };
    getSingleProduct = (id) => {
        return this.get("products/" + id);
    };
}
const productService = new ProductService();
export default productService;