import GenericService from "./GenericService";

class ProductService extends GenericService {
    constructor() {
        super();
    }

    getAllProducts = () => {
        return this.get("products");
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