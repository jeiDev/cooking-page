import { ObjectI } from "~/interfaces/general/general.interface";

export const paramsToJSON = (url: string = location.search) => {
    try {
        let substring = 1;
        if(url.indexOf("/?") == 0) substring = 2;
        const data: ObjectI = JSON.parse('{"' + decodeURI(url.substring(substring)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');

        return Object.keys(data).reduce((store: ObjectI, key) => {
            store[key] = isNaN(data[key]) ? data[key] : +data[key];
            return store;
        }, {});
    } catch (error) {
        return {};
    }
}