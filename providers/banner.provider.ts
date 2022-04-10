import Base from "./base";
import config from "~/settings";

class BannerProvider extends Base {
    constructor() {
        super(`${config.server.api}/banners`)
    }

    async getHome() {
        return await this.get(`/home`);
    }
   
}

const bannerProvider = new BannerProvider();

export default bannerProvider;