import setting from "~/settings";
import AxiosMockAdapter from 'axios-mock-adapter';
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ObjectI } from "~/interfaces/general/general.interface";
import { ProviderResponseI } from "~/interfaces/providers/provider.interface";

class Base {
    private readonly axios: AxiosInstance;
    public readonly mock?: AxiosMockAdapter;

    constructor(api: string, config?: AxiosRequestConfig){
        this.axios = axios.create({
            baseURL: api,
            ...(config || {})
        });

        if(setting.provider.isAxioMock){
            this.mock = new AxiosMockAdapter(this.axios, { delayResponse: 2000 });
        }
    }

    private params(params: ObjectI) {
        return Object.keys(params).map((key) => {
            let value = params[key];
            value = typeof value == typeof {} ? JSON.stringify(value) : value;
            return `${key}=${value}`;
        }).join("&");
    }

    protected get(url: string, params: object = {}, config: AxiosRequestConfig = {}): Promise<ProviderResponseI> {
        return new Promise((resolve) => {
            const _isParam = Object.keys(params).length > 0;
            this.axios.get(`${url}${_isParam ? `?${this.params(params)}` : ''}`, config)
                .then(response => resolve({ data: response?.data }))
                .catch(error => resolve({ error }));
        });
    }

    protected post(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<ProviderResponseI> {
        return new Promise((resolve) => {
            this.axios.post(url, data, config)
                .then(response => resolve({ data: response?.data }))
                .catch(error => resolve({ error }));
        });
    }

    protected update(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<ProviderResponseI> {
        return new Promise((resolve) => {
            this.axios.patch(url, data, config)
                .then(response => resolve({ data: response?.data }))
                .catch(error => resolve({ error }));
        });
    }

    protected delete(url: string, config: AxiosRequestConfig = {}): Promise<ProviderResponseI> {
        return new Promise((resolve) => {
            this.axios.delete(url, config)
                .then(response => resolve({ data: response?.data }))
                .catch(error => resolve({ error }));
        });
    }
}

export default Base;