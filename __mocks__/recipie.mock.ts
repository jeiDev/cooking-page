import setting from "~/settings";
import recipeProvider from "~/providers/recipe.provider";
import { recipiesData } from "./data/recipe.data";
import { paramsToJSON } from "~/helpers/location.helper";

const api = setting.server.api;
const mock = recipeProvider.mock;

mock?.onGet(new RegExp(`${api}/recipes?.*`)).reply(function(config) {
    const {limit, skip} = paramsToJSON(config.url);
    return [200, recipiesData.slice(skip, (limit * (skip + 1)))];
});

