import Base from "./base";
import config from "~/settings";

class CategoryProvider extends Base {
    constructor() {
        super(`${config.server.api}/categories`)
    }

    async getAll(limit: Number, skip: Number) {
        return await this.get(`/?limit=${limit}&skip=${skip}`);
    }
   
}

const categoryProvider = new CategoryProvider();

export default categoryProvider;