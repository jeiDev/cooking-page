import Base from "./base";
import config from "~/settings";

class RecipeProvider extends Base {
    constructor() {
        super(`${config.server.api}/recipes`)
    }

    async getAll(limit: Number, skip: Number) {
        return await this.get(`/?limit=${limit}&skip=${skip}`);
    }
   
}

const repiceProvider = new RecipeProvider();

export default repiceProvider;