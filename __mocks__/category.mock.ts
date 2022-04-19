import setting from "~/settings";
import { categoriesData } from "./data/category.data";
import categoryProvider from "~/providers/category.provider";
import { paramsToJSON } from "~/helpers/location.helper";

const api = setting.server.api;
const mock = categoryProvider.mock;

mock?.onGet(new RegExp(`${api}/categories?.*`)).reply(function(config) {
    const {limit, skip} = paramsToJSON(config.url);
    return [200, categoriesData.slice(skip, (limit * (skip + 1)))];
});
