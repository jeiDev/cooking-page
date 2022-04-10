import setting from "~/settings";
import { homeBannerData } from "./data/banner.data";
import bannerProvider from "~/providers/banner.provider";

const api = setting.server.api;
const mock = bannerProvider.mock;

mock?.onGet(`${api}/banners/home`).reply(200, homeBannerData);
