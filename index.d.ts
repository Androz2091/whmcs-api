declare module 'whmcs-api' {
    interface RequestOptions {
        identifier?: string;
        secret?: string;
        endpoint?: string;
    }
    export = class WhmcsAPI {

        public identifier: string;
        public secret: string;
        public baseURL: string;

        constructor (identifier?: string, secret?: string, baseURL?: string);

        request (action: string, method?: string, body?: any, options?: RequestOptions): Promise<unknown>;
    }
}
